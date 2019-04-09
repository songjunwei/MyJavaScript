/* 防抖、节流、call、bind、apply、deepClone...
 * @Author: jw.song 
 * @Date: 2019-04-09 09:04:31 
 */

// 防抖 以最后一个为准 用定时器
function debounce( fn, interval ) {
  let timer = 0
  return function() {
    if(timer) {
      clearTimeout(timer)
    }
    const context = this
    const args = arguments
    timer = setTimeout( function(){
      timer = null
      fn.apply(context, args)
    }, interval)
  }
 
}

// 节流 以第一个为准
function throttle( fn, interval ) {
  let last = 0

  return function() {
    let context = this
    let args = arguments
    let now = new Date()
    if( now - last > interval) {
      last = now
      fn.apply(context, args)
    }
  }

}

// 遍历一个dom 用递归
function traverse( node ) {
  if(node && node.nodeType === 1) {
    console.log(node) // 对node操作
  }
  for(let i = 0; i < node.childNodes.length; i++ ) {
    if(node.childNodes[i].nodeType === 1) {
      traverse(node.childNodes[i])
    }
  }
}


//写一个深拷贝函数
function deepClone(sourceObj, cloneObj) {
  cloneObj = cloneObj || Array.isArray(sourceObj) ? []:{}
  for(let i in sourceObj) {
    if(typeof sourceObj[i] === "object") {
      deepClone(sourceObj[i], cloneObj[i])
    } else {
      cloneObj[i] = sourceObj[i]
    }
  }
  return cloneObj
}

// 手写一个bind函数
Function.prototype.bind = Function.prototype.bind || function() {
  const _this = this
  const context = Array.prototype.shift( arguments)
  if( typeof _this === 'function') {
    throw new TypeError('type error')
  }
  const args = Array.prototype.slice( arguments)
  return function() {
    return _this.apply(context, args.concat([].slice.call(arguments)))
  }  
}

// 手写一个call函数
function myCall(context) {
  if( typeof context === 'undefined' || context === null){
    context = window
  }
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}

// 手写一个apply方法
function myApply(context) {
  if(typeof context === 'undefined' || context === null){
    context = window
  }
  context.fn = this
  const args = arguments[1]
  let result = null
  if(args) {
   result = context.fn(...args)
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}

/** wait 秒后 每隔 times 执行 func
 * @param {执行函数} func
 * @param {时间间隔} times
 * @param {等待时间} wait
 */
function doRepeat(func, times, wait) {
  // 参数验证
  if(!func || !times || !wait) {
    return function(){}
  }

  if(check(func, ['function']) || check(times, ['string', 'number']) || check(wait, ['string', 'number'])) {
    return function(){}
  }

  function check(value, format) {
    for(let i = 0; i < format.length; i++) {
      if(typeof value === format[i]){
        return false
      }
    }
    return true
  }

  times = Number(times)
  wait = Number(wait)

  return function() {
    const args = arguments
    let i = 0, timer
    timer = setInterval(() => {
      if(i === times) {
        clearInterval(timer)
        return
      }
      func(args[0])
      i++
    }, wait)
  }

}