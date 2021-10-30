let person = {
  name: 'fy'
}
let proxy = new Proxy(person, {
  get: function(target, propKey) {
    if (propKey in target) {
      return 5;
    } else {
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
    }
  }
})
let proxy1 = new Proxy(person, {
  get(target, propKey) {
    console.log('GET ' + propKey, target[propKey]);
    return target[propKey];
  },
  set(target, propKey, value) {
    target[propKey] = value;
    return true;
  }
})

let obj = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    },
  },
  right: {
    val: 5,
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

function floorTravse(root) {
  // 队列 --> 广度  --> 层序  --> S型
  // let stack = [root]
  // let result = []
  // while (stack.length) {
  //   let temp = stack.shift()
  //   result.push(temp.val)
  //   temp.left && stack.push(temp.left)
  //   temp.right && stack.push(temp.right)
  // }
  // return result
  let stack = [[root, 0]]
  let result = []
  let res = []
  while(stack.length) {
    let [n, index] = stack.shift()
    if (!result[index]) {
      result.push([n.val])
    } else {
      result[index].push(n.val)
    }
    n.left && stack.push([n.left, index + 1])
    n.right && stack.push([n.right, index + 1])
  }
  res = result.reduce((a, b, curIndex) => {
    if (curIndex % 2 === 0) { b.reverse() }
    return a.concat(b)
  })
}

let arr = [
  ['1', '2', '3', '4'],
  ['5', '6', '7', '8'],
  ['9', 'a', 'b', 'c'],
  ['d', 'e', 'f', 'g']
];
// 遍历a[x][y]， 每条斜线：k = x - y
// k = 0: [0,0][1,1][2,2][3,3]
// k = 1; [1,0][2,1][3,2]
// k = 2; [2,0][3,1]
// k = 3; [3,0]
function travseX(arr) {
  let result = []
  let len = arr.length;
  for(let k = 0; k < len; k++){
    for(let y = 0; y + k < len; y++){
      if (!result[k]) {
        result.push([arr[y+k][y]])
      } else {
        result[k].push(arr[y+k][y])
      }
    } 
  }
  return result
}

// [0,0]
// [1,0][0,1]
// [2,0][1,1][0,2]

// [3,0][2,1][1,2][0,3]
// [3,1][2,2][1,3]
// [3,2][2,3]
// [3,3]
function travseY(mat) {
  let result = []
  let len = mat.length
  for(let x = 0; x < len - 1; x++) {
    for(let k = 0; x - k >= 0; k++) {
      result.push(mat[x-k][k])
    }
  }
  for(let x = 0; x < len; x++) {
    for(let k = 0; k + x < len; k++) {
      result.push(mat[len-k-1][k+x])
    }
  }
  return result
}
console.log(1, travseY(arr))
// 算法、Ts、Vue3、微前端、原理等拓展
// Target: weekly