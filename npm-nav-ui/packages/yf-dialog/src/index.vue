<template>
  <div class="za-dialog" v-if="showDialog">
    测试数据
  </div>
</template> 
<script>
export default {
  name: 'yfDialog',
  components: {},
  props: {
  },
  data() {
    return {
      showDialog: false
    }
  },
  created() {},
  methods: {
    show() {
      this.showDialog = true
      this.$nextTick(() => {
        this.$emit('show')
      })
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
