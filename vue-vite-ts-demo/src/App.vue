<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    {{user}}1{{count}}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const count = ref({
      name: 'yf',
      age: 88
    })
    setTimeout(() => {
      user.age = 19
    }, 2000)
    const user = reactive({
      name: 'yf',
      age: 88
    })
    return {
      user,
      count
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
