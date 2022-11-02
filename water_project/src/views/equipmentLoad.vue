<template>
  <div class="load-box">
    <van-loading size="44px" vertical color="#0094ff">加载中...</van-loading>
  </div>
</template>
<script>
import { Loading } from 'vant'
export default {
  name: 'equipmentLoad',
  components: {
    [Loading.name]: Loading,
  },
  data() {
    return {
      isIn: false
    }
  },
  created() {
    setTimeout(() => {
      if (window.curEnv === 'wx') { // 微信
        if (this.isIn) { // 是否在白名单里
          // 展示二维码
        } else { // 跳转设备详情页
          this.$router.push(`/equipmentDetail`)
         }
      } else if (window.curEnv === 'ali') { // 支付宝
        this.$router.push(`/equipmentDetail`)
      }
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.load-box {
  margin-top: 35%;
}
</style>
