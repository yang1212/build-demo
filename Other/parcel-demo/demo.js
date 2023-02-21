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

