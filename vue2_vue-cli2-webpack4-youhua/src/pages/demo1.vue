<template>
  <!-- 单个物体、单个圆-->
  <div id="app">
    <div class="circle">
      <div class="avator">
        <span class="text">1</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.circle{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid gray;
  .avator {
    display: inline-block;
    transform-origin: 50% 50px;
    animation: keyDot 4s linear infinite;
    .text {
      display: inline-block;
      animation: reverseDot 4s linear infinite;
      position: relative;
      top: -20px;
    }
  }
}
@keyframes keyDot {
  to  { transform: rotate(1turn); }
}
@keyframes keyDot2 {
  to  { transform: rotate(1turn); }
}
</style>
