<template>
  <div class="nav-bar-wrapper">
    <van-nav-bar
      :title="title"
      :left-arrow="leftArrow"
      @click-left="clickLeft"
    ></van-nav-bar>
  </div>
</template>

<script>
import { NavBar } from 'vant'
import 'vant/lib/nav-bar/style'

export default {
  name: 'NavBarComponent',
  components: {
    [NavBar.name]: NavBar,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    leftArrow: {
      type: Boolean,
      default: false,
    },
    // 禁用“左箭头”的自动返回功能
    notBack: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickLeft() {
      this.$emit('click-left')

      if (!this.notBack) {
        this.$router.go(-1)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// .nav-bar-wrapper {
//   width: 100vw;
//   /deep/ .van-nav-bar {
//     background: #fff;
//   }
//   /deep/ .van-nav-bar__title {
//     color: #000;
//   }
// }

// /deep/ .van-nav-bar .van-icon {
//   color: #000000;
// }

// /deep/ .van-hairline--bottom::after {
//   border-bottom-width: 0;
// }
</style>
