function testFn() {
  console.log('触发')
}
// function commonFn(value) {
//   let time = null
//   return function() {
//     if (!time) {
//       time = setTimeout(() => {
//         testFn()
//         time = null;
//       }, value);
//     }
//   }
// }

// let a = commonFn(4000)
// setTimeout(() => {
//   a()
// }, 500)
// setTimeout(() => {
//   a()
// }, 1000)
// setTimeout(() => {
//   a()
//   a()
//   a()
// }, 5000)

function throtte(func, time){
  let activeTime = 0;
  return () => {
    const current = Date.now();
    if(current - activeTime > time) {
      func()
      activeTime = Date.now();
    }
  }
}
let init = throtte(testFn, 5000)
init()
setTimeout(() =>{
  init()
}, 1000)