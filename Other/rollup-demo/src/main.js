import { add } from 'yangfumoduletest1'

function testFn(a) {
  return add(2, a)
}

function getData() {
  setTimeout(() => {
    console.log('test dataFn')
  })
}

export { testFn, getData }