<template>
  <div id="app">
    <div @click="open">点击</div>
    <yfDialog ref="dialogRef"/>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import yfDialog from '@/yf-dialog'
export default {
  name: 'app',
  components: {
    yfDialog
  },
  methods: {
    open() {
      this.$refs.dialogRef.show()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
