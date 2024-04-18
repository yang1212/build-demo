<template>
  <div id="app">
    <H2>主应用</H2>
    <div @click="goPage">按钮</div>
    <!-- 子应用容器 -->
    <div id="subapp-container"></div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  methods: {
    goPage() {
      this.$router.push('/about')
    }
  }
}
</script>
