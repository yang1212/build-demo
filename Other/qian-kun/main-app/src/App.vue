<template>
   <div id="app">
    <h1>Main App</h1>
    <router-link to="/subApp1">subApp1</router-link>
    <router-view></router-view>
    <div id="subapp-container"></div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  methods: {
  }
}
</script>
