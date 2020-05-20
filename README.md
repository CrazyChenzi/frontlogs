# 捕獲前端異常

一个简易版本的前端日志记录

## try catch捕獲

## window.error 

`window.error`監聽頁面運行時錯誤

```js
/**
 * @param {String}  msg    错误信息
 * @param {String}  url    出错文件
 * @param {Number}  row    行号
 * @param {Number}  col    列号
 * @param {Object}  error  错误详细信息
 */
window.onerror = function (msg, url, row, col, error) {
  console.log('我知道错误了');
  console.log({
    msg,  url,  row, col, error
  })
  return true;
};
```

## unhandledrejection

`unhandledrejection`監聽`Promise`錯誤

```js
window.addEventListener("unhandledrejection", (e) => {
  e.preventDefault()
  console.log(e)
  return true
})
```

## Vue.config.errorHandler

`Vue.config.errorHandler`監聽`Vue`運行時錯誤

```js
Vue.config.errorHandler = (err, vm, info) => {
  console.log(`err: ${err}`, `vm:`, vm, `info: ${info}`)
}
```

## 全局接口代理
