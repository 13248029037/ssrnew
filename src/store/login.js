
import { observable, computed, action } from "mobx";
class LoginStore {
  constructor(initialState) {
    this.price = initialState.price || 0
    this.amount = initialState.amount || 1
    this.arr = initialState.arr || []
    this.isLogin = initialState.isLogin || false
  }
  @observable isLogin = false
  @action.bound toggleLogin = (isLogin) => {
    this.isLogin = isLogin
  }
  // 被观察者属性
  @observable price = 0;
  @observable amount = 1;
  @observable arr = []
  @observable isLogin = false
  // 计算属性  
  @computed
  get total() {
    return this.price * this.amount;
  }
  @observable length = 2;
  @computed
  get squared() {
    return this.length * this.length;
  }
  set squared(value) {
    // 这是一个自己的动作，不需要注解
    this.length = Math.pow(2, value);
  }
  //触发的动作
  @action.bound
  resize() {
    this.price++;
  }
  @action.bound getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.arr = [1, 2, 3, 33, 4, 5, 6, 7]
        resolve()
      }, 300)
    })
  }
}
export default LoginStore