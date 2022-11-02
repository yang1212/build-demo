<template>
  <div class="equipment-box">
    <NavBar
      title="设备详情"
      not-back
    ></NavBar>
    <img alt="" src="../static/img/banner.png" class="banner">
    <div class="content-box" v-if="isLogin">
      <p class="item-name">东校区-xx楼层</p>
      <div class="item-price">
        <p>2元</p>
        <p>账号余额</p>
      </div>
      <p class="item-btn">充值</p>
      <div class="btn-group">
        <p>启动</p>
        <p>结束</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getUrlParam } from '@/utils/index'
import NavBar from '@/components/NavBar/index.vue'
export default {
  name: 'equipmentStart',
  components: {
    NavBar
  },
  data() {
    return {
      isLogin: false,
    }
  },
  created() {
    if (getUrlParam('code')) { // 用户信息授权回调后获取token
      // TO DO: 接口2获取token
      this.$router.push(`/phoneBind`)
    } else {
      getUrlParam('state') ? '' : this.getDetailData()
    }
  },
  methods: {
    userAuthorization() {
      const appId = localStorage.getItem('userInfo').appId
      const redirectUrl = window.location.href
      window.targets.userAuthorization({
        appId: appId,
        redirectUrl: redirectUrl
      })
    },
    getDetailData() {
      // TO DO: 接口1登录处理(通过此判断token是否失效)
      this.isLogin = true
      this.isLogin ? '' : this.userAuthorization() 
    }
  }
}
</script>

<style lang="scss" scoped>
.equipment-box {
 .banner {
    width:100%;
  }
  .content-box {
    padding: 15px;
    position: relative;
    .item-price {
      text-align: center;
      margin: 50px 0;
      p:nth-child(1) {
        font-size: 32px;
        font-weight: bold;
        color: #0094ff;
      }
      p:nth-child(2) {
        
      }
    }
    .item-btn {
      position: absolute;
      right: 20px;
      top: 12px;
      display: inline-block;
      text-align: center;
      line-height: 25px;
      width: 50px;
      height: 25px;
      background: #ffdb7a;
      border-radius: 10px;
      font-size: 14px;
      color: #2a2a2a;
    }
    .btn-group {
      display: flex;
      p {
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 15px;
        background:#0094ff;
        color: #fff;
        font-weight: bold;
      }
      p:nth-child(1) {
        width: 50%;
      }
      p:nth-child(2) {
        flex: 1;
        margin-left: 10px;
      }
    }
  }
}
</style>
