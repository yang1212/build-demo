<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    user: {{ user }} {{ user.name }}
    <br />
    count: {{ count }}
    <div @click="testFn">233</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    let count = ref([1, 2, 3])
    const user = reactive({
      name: 'yf',
      age: 88
    })
    setTimeout(() => {
      count.value.push(5)
    }, 2000)
    return {
      user,
      count
    }
  },
  methods: {
    testFn() {
      console.log(1)
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
