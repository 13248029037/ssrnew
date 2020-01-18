import Home from './home'
import Login from './login'
import Footer from './footer'
export default ({ login = {}, home = {}, footer = {} }) => {
  return {
    login: new Login(login),
    home: new Home(home),
    footer: new Footer(footer),
  }
}