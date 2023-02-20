<template>
  <div class="hello-box">
    <div class="jsx-box">
      <p>测试项目中使用jsx</p>
      <el-table border>
        <el-table-column label="测试列" :render-header="handleRenderHeader" width="200"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    handleRenderHeader (h, { column, $index }) {
      return (
        <el-tooltip content='tooltip测试'>
          <p style='margin: 0'>{column.label}&nbsp;<span class='el-icon-question'></span></p>
        </el-tooltip>
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello-box {
  .jsx-box {
    width: 500px;
  }
  p {
    font-size: 10px;
    margin: 0;
  }
}
</style>
