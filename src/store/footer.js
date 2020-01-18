import { observable, computed, action } from "mobx";

class FooterStore {
  constructor(initialState) {
    this.footer = initialState.footer || 0
  }
  // 被观察者属性
  @observable footer = 0;

  @action getData = () => {
    this.footer = '3242423432432432'

    return Promise.resolve(1)
  }
}
export default FooterStore