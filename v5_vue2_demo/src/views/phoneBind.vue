<template>
    <div class="bind-box">
      <NavBar
        title="登录"
        not-back
      ></NavBar>
      <div class="form-box">
        <van-form>
          <van-field
            v-model="phone"
            name="手机号"
            label="手机号"
          />
          <van-field
            v-model="sms"
            center
            clearable
            label="验证码"
          >
            <template #button>
              <van-button size="small" type="info" @click="getCode" :disabled="btnDisabled">
                {{btntxt}}
              </van-button>
            </template>
          </van-field>
          <div style="margin: 60px 45px;">
            <van-button round block type="info" native-type="submit" @click="submitForm">登录</van-button>
          </div>
        </van-form>
      </div>
    </div>
  </template>
  <script>
  import { Loading, Form, Field, Button } from 'vant'
  import NavBar from '@/components/NavBar/index.vue'
  export default {
    name: 'phoneBind',
    components: {
      [Form.name]: Form,
      [Field.name]: Field,
      [Loading.name]: Loading,
      [Button.name]: Button,
      NavBar
    },
    data() {
      return {
        phone: '',
        sms: '',
        btnDisabled: false,
        btntxt: '获取验证码',
        time: 60
      }
    },
    created() {
    },
    methods: {
      submitForm() {
        // To Do: 手机号码提交接口3，跳转
        this.$router.push(`/equipmentDetail`)
      },
      getCode() {
        this.time = 60
        this.timer()
      },
      timer() {
        if (this.time > 0) {
          this.btnDisabled = true
          this.time--
          this.btntxt = "倒计时" + this.time + "秒"
          setTimeout(this.timer, 1000)
        } else {
          this.btnDisabled = false
          this.time = 0
          this.btntxt = "获取验证码"
        }
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  .bind-box {
    .form-box {
      margin: 10% 0;
      width: 100%;
      /deep/ .van-cell {
        padding: 15px 16px;
      }
    }
  }
  </style>
  