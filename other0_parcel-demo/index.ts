"use strict"

function sortK<T>(arr: T[]):T[] {
  if (arr.length <= 1) { return arr }
  let tag = arr[Math.floor(arr.length / 2)]
  let leftArr = []
  let rightArr = []
  arr.splice(Math.floor(arr.length / 2), 1)
  for (let i = 0; i < arr.length - 1; i++) {
    if (tag > arr[i]) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return sortK(leftArr).concat(tag, sortK(rightArr))
}
