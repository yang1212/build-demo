let obj1 = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 4,
          children: null
        },
        {
          val: 5,
          children: null
        }
      ]
    },
    {
      val: 3,
      children: null
    }
  ]  
}

let obj2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

function dfsFn(root) {
  let tag = false
  const traver = ((root, val) => {
    if (!root) { return }
    if (root. left === null && root.right === null) {
      console.log('aaa', val)
      return true
    }
    root.left && traver(root.left, val + root.left.val)
    root.right && traver(root.right, val + root.right.val)
  })
  traver(root, root.val)
  return tag
}
dfsFn(obj2)
// 深度优先：---数据格式obj1（基于递归）
function dfsTraverse1(root) {
  let arr = []
  const traverse = ((root) => {
    if (!root) { return }
    arr.push(root.val)
    root.children && root.children.forEach((item) => traverse(item))
  })
  traverse(root)
  return arr
}

// 深度优先：---数据格式obj2（基于递归）
function dfsTraverse2(root) {
  let arr = []
  const traverse = ((root) => {
    if (!root) { return }
    arr.push(root.val)
    root.left && traverse(root.left)
    root.right && traverse(root.right)
  })
  traverse(root)
  return arr
}

// 广度优先：---数据格式obj1（基于队列）
function bfsTraverse1(root) {
  let arr = []
  let stack = [root]
  while(stack.length) {
    let temp = stack.shift()
    arr.push(temp.val)
    temp.children && temp.children.forEach((item) => stack.push(item) )
  }
  return arr
}

// 广度优先：---数据格式obj2（基于队列）
function bfsTraverse2(root) {
  let stack = [root]
  let arr = []
  while(stack.length) {
    let temp = stack.shift()
    arr.push(temp.val)
    temp.left && stack.push(temp.left)
    temp.right && stack.push(temp.right)
  }
  return arr
}

// 中序： ---数据格式obj2(基于栈 & 链表)
function middleTravese(root) {
  let p = root
  let arr = []
  let stack = []
  while(stack.length || p) {
    while(p) {
      stack.push(p)
      p = p.left
    }
    let n = stack.pop()
    arr.push(n.val)
    p = n.right
  }
  return arr
}

// 层序遍历返回对应层的数组值： ---数据格式obj2(基于队列)
function bfsTraverse(root) {
  if (!root) { return []}
  let stack = [[root, 0]]
  let arr = [[]]
  while(stack.length) {
    let [temp, i] = stack.shift()
    arr[i] ? arr[i].push(temp.val) : (arr[i] = [temp.val])
    temp.left && stack.push([temp.left, i + 1])
    temp.right && stack.push([temp.right, i + 1])
  }
  return arr
}

// Mock DOM树结构
let domTree = {
  others: '其他属性',
  nodeName: 'DIV',
  className: 'root',
  children: [
    { 
      others: '其他属性',
      nodeName: 'DIV',
      className: 'box',
      children: []
    },
    { 
      others: '其他属性',
      nodeName: 'SPAN',
      className: 'box',
      children: []
    },
    { 
      others: '其他属性',
      nodeName: 'P',
      className: 'box',
      children: []
    }
  ]
}
let tree1 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
function revertTree(root) {
  if (root.length === 0) { return '' }
  const travseR = function(root) {
    let temp = root.left
    root.left = root.right
    root.right = temp
    root.left && travseR(root.left)
    root.right && travseR(root.right)
  }
  travseR(root)
  return root
}
revertTree([])

// 对称 || 相等  --> 拓展：两个数组是否一致
function allTree(root) {
  let stack = [root]
  let arr = []
  while(stack.length) {
    let temp = stack.pop()
    arr.push(temp ? temp.val : null)
    temp && temp.right && stack.push(temp.right)
    temp && (temp.right || temp.left) && stack.push(temp.left)
  }
  return arr
}
function isSameTree(p, q) {
  if (!p && !q) { return true }
  if ((p && !q) || (!p && q) || (p.val !== q.val)) { return false }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
function symmetryTree(root) {
  if (!root) { return true }
  let p = root.left
  let q = root.right
  const travseT = function(p, q) {
    if (!p && !q) { return true }
    if ((p && !q) || (!p && q) || (p.val !== q.val)) { return false }
    return travseT(p.left, q.right) && travseT(p.right, q.left)
  }
  return travseT(p, q)
}
// 递归
function recursionDom(root) {
  const travse = (root) => {
    console.log(root.nodeName)
    if (root.children.length) {
      for (let i = 0; i < root.children.length; i++) {
        travse(root.children[i])
      }
    }
  }
  travse(root)
}

// 栈
function stackDom(root) {
  let stack = [root]
  while(stack.length) {
    let temp = stack.pop()
    console.log(temp.nodeName)
    if (temp.children.length) {
      for (let i = temp.children.length - 1; i > -1; i--) {
        stack.push(temp.children[i])
      }
    }
  }
}

function watchArray() {
  const arrType = Array.prototype
  const obj = Object.create(arrType)
  let arrayFn = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ]
  console.log(obj)
  arrayFn.forEach((method) => {
    const original = arrType[method]
    console.log(original)
    Object.defineProperty(obj, method, {
      value: function mutator (...args) {
        console.log(method) // 打印数组方法
        return original.apply(this, args)
      },
      enumerable: false,
      writable: true,
      configurable: true
    })
  })
}