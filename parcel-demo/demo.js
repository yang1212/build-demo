function dictory(s) {
  let stack = s.split('')
  let result = []
  let map = new Map()
  map.set('{', '}')
  map.set('[', ']')
  map.set('(', ')')
  if (stack.length % 2 !== 0 || stack.length === 0) { return false }
  for(let i = 0; i < stack.length; i++) {
    let temp = map.get(result[result.length - 1])
    if (map.has(stack[i])) {
      result.push(stack[i])
    } else if (temp === stack[i]) {
      result.pop()
    } else {
      return false
    }
  }
  return result.length === 0
}

let value = {
  1: [3, 2, 4],
  3: [2, 5],
  5: [6]
}
function picTraveBs(value) {
  let map = new Set()
  let stack = [1]
  map.add(1)
  while(stack.length) {
    let temp = stack.shift()
    value[temp] && value[temp].forEach((item) => {
      if(!map.has(item)) {
        stack.push(item)
        map.add(item)
      }
    })
  }
  console.log('map', map)
}

function sumIndex (arr, target) {
  if (arr.length < 2) return [];
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
      let key = target - arr[i];
      if (map.has(key)) {
          return [map.get(key), i];
      } else {
          map.set(arr[i], i)
      }
  }
  return [];
};

function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1)
}
function deepClone(value) {
  let type = getType(value)
  let result
  if (type === 'Object') {
    result = {}
  } else if (type === 'Array') {
    result = []
  } else {
    return value
  }
  for (let i in value) {
    if (getType(value[i]) === 'Object' || getType(value[i]) === 'Array') {
      result[i] = deepClone(value[i])
    } else {
      result[i] = value[i]
    }
  }
  return result
}
function debounce(fn, time) {
  // 以最后一次输入为时间节点
  let timer = null
  return function() {
    if (timer) { return }
    timer = setTimeout(() => {
      fn()
      timer = null
    }, time)
  }
}
function throttle(fn, time) {
  let timer = null
  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        fn()


        
        timer = null
      }, time);
    }
  }
}