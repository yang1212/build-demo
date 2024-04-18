<template>
  <div id="app">
    <header>
      <h1>主应用</h1>
      <nav>
        <router-link to="/subApp1">subApp1</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'subApp1',
};
</script>

<style scoped>
/* 样式 */
</style>