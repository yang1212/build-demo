<template>
    <div class="recharge-box">
      <NavBar
        title="充值"
        not-back
      ></NavBar>
      <div class="recharge-content">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="list-item"
          @click="chooseItem(item.prd)"
        >
          <p class="price">{{ item.prd.curPrice }}元</p>
          <p class="title">{{ item.prd.name }}</p>
          <img
            v-show="item.prd.id === curItem"
            :src="icoChoose"
            alt=""
          />
        </div>
      </div>
      <div class="recharge-footer">
        <p class="">应付：2元</p>
        <p class="pay-btn">去支付</p>
      </div>
    </div>
  </template>
  <script>
  import { Loading } from 'vant'
  import NavBar from '@/components/NavBar/index.vue'
  import icoChoose from '@/static/img/ico_choose.png'
  import { Toast } from 'vant'
  import { getUrlParam } from '@/utils/index'

  export default {
    name: 'equipmentLoad',
    components: {
      [Loading.name]: Loading,
      NavBar
    },
    data() {
      return {
        list: [],
        curItem: '',
        icoChoose
      }
    },
    created() {
      this.getWaterVoteList()
    },
    methods: {
      getWaterVoteList() {
        this.$api.waterVote(getUrlParam('eid')).then((res) => {
          const { code, data } = res
          if (code === 0) {
            this.list = data
            console.log(1, data)
            return
          }
          Toast(res.msg)
        })
      },
      chooseItem(item) {
        this.curItem = item.id
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .recharge-box {
    .recharge-content {
      margin: 15px;
      .list-item {
        display: flex;
        height: 80px;
        background: #fff;
        line-height: 80px;
        border-radius: 15px;
        margin-bottom: 15px;
        .price {
          font-size: 25px;
          width: 100px;
          text-align: center;
          background:#0094ff;
          color: #fff;
          border-radius: 15px 0 0 15px;
        }
        .title {
          flex: 1;
          margin-left: 10px;
          line-height: 20px;
        } 
        img {
          width: 30px;
          height: 30px;
          margin: 26px 15px;
        }
      }
    }
    .recharge-footer {
      background: #fff;
      height: 80px;
      line-height: 80px;
      bottom: 0;
      position: fixed;
      width: 100%;
      padding: 0 15px;
      box-sizing: border-box;
      .pay-btn {
        position: absolute;
        width: 90px;
        height: 30px;
        background: #0094ff;
        color: #fff;
        text-align: center;
        border-radius: 15px;
        right: 20px;
        top: 25px;
        line-height: 30px;
      }
    }
  }
  </style>
  