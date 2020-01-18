import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'mobx-react';
import { Helmet } from "react-helmet";
import { toJS } from 'mobx';
import fs from 'fs'
import path from 'path'
const isProd = process.env.NODE_ENV === 'production'


/* 
 * 在 server 端读取 client 端的编译结果
 */


// 读取打包文件
export const getBuildFile = (filename = 'manifest.json', isdeal = true, parser = JSON.parse) => {
	const filePath = path.join(process.cwd(), `/public/${filename}`)
	console.info(process.cwd(), 'process.cwd()process.cwd()process.cwd()')
	console.info(filePath, 'filepathfilepath')
	const reader = () => isdeal ? parser(fs.readFileSync(filePath, 'utf8')) : fs.readFileSync(filePath, 'utf8')
	return reader()
	// return isProd ? memoize(reader) : reader
}

// 获取静态资源地址
export const getAssetPath = () => {
	const { project: { devServer: { port } } } = packageJson
	// 部署之后的线上地址待补充
	return isProd ? `//${internalIp.v4.sync()}:${port}/` : `//${internalIp.v4.sync()}:${port}/`
}

function getCssFile() {
	const filePath = getBuildFile();
	const keyOf = Object.keys(filePath)
	//获取css文件
	const cssFile = keyOf.filter(key => {
		return path.extname(filePath[key]) === '.css'
	}).map(v => `<link rel="stylesheet" type="text/css"  href='${filePath[v]}'></link>` + '\n')
		.reduce((a, b) => a + b, '\n')
	return cssFile
}
function getJsFile() {
	const filePath = getBuildFile();
	const keyOf = Object.keys(filePath)
	//获取静态文件js
	const jsFile = keyOf.filter(key => {
		return path.extname(filePath[key]) === '.js' && (filePath[key].indexOf('vendor') > 0 || filePath[key].indexOf('main') > 0)
	}).map(item => `<script type="text/javascript" src='${filePath[item]}'></script>` + '\n')
		.reduce((a, b) => a + b, '\n')
	console.info(jsFile, 'Jsfilwejsfilwewe')
	return jsFile
}
export const render = (store, routes, req, context) => {
	console.info(store, 'storeddd')
	const content = renderToString((
		<Provider {...store}>
			<StaticRouter location={req.path} context={context}>
				<div>
					{renderRoutes(routes)}
				</div>
			</StaticRouter>
		</Provider>
	));
	const helmet = Helmet.renderStatic();

	const cssStr = context.css.length ? context.css.join('\n') : '';
	let html = getBuildFile('template.html', false)
	console.info(typeof html, 'htnmlhtnml')
	html = html.replace(/<!-- meta -->/g, `${helmet.meta.toString()}`)
	html = html.replace(/<!-- title -->/g, `${helmet.title.toString()}`)
	html = html.replace(/<!-- csslink -->/g, `${getCssFile()}`)
	html = html.replace(/<!-- inlinecss -->/g, `<style>${cssStr}</style>`)
	html = html.replace(/<!-- window.store -->/g, `<script>window.store = ${JSON.stringify(store)}</script>`)
	html = html.replace(/<!-- content -->/g, `${content}`)
	console.info(html, 'htnlsdsfhlshfslhfl;sdsfdsfdsfdh;fhd')
	return html;
	// return `
	// 		<html>
	// 			<head>
	// 				${helmet.title.toString()}
	// 				${helmet.meta.toString()}
	// 				${getCssFile()}
	// 			 <link rel="stylesheet" type="text/css"  href="/main.css"></link>
	// 				<style>
	// 				${cssStr}
	// 				</style>
	// 			</head>
	// 			<body>
	// 				<div id="root">${content}</div>
	// 				<script>
	// 					window.store = ${JSON.stringify(store)}
	// 				</script>
	// 				<script src='/index.js'></script>
	// 				${getJsFile()}
	// 			</body>
	// 		</html>
	//   `;
}


