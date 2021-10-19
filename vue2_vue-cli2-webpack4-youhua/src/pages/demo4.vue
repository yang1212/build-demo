<template>
  <div id="app" class="box">
    <canvas id="tutorial" width="1200" height="800"></canvas>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ctx: '',
      canvas: '',
      list: [
        {
          name: 1,
          src: './aasets/logo.png'
        },
        {
          name: 2,
          src: './aasets/logo.png'
        },
        {
          name: 3,
          src: './aasets/logo.png'
        },
        {
          name: 4,
          src: './aasets/logo.png'
        },
        {
          name: 5,
          src: './aasets/logo.png'
        },
        {
          name: 6,
          src: './aasets/logo.png'
        },
        {
          name: 7,
          src: './aasets/logo.png'
        },
        {
          name: 8,
          src: './aasets/logo.png'
        },
        {
          name: 9,
          src: './aasets/logo.png'
        }
      ]
    }
  },
  created () {
  },
  mounted () {
    this.draw()
  },
  methods: {
    draw () {
      this.canvas = document.getElementById('tutorial')
      this.ctx = this.canvas.getContext('2d')
      this.initSun()
      this.initWaterTrack()
      this.initGoldTrack()
      this.initEarthTrack()
      this.animationDot()
    },
    // 椭圆构造方法
    ellipse (context, x, y, a, b) {
      context.save()
      var r = (a > b) ? a : b
      var ratioX = a / r
      var ratioY = b / r
      context.scale(ratioX, ratioY)
      context.beginPath()
      context.arc(x / ratioX, y / ratioY, r, 0, 2 * Math.PI, false)
      context.closePath()
      context.restore()
      context.strokeStyle = '#ccc'
      context.stroke()
    },
    // 定义中心圆
    initSun () {
      this.ctx.beginPath()
      this.ctx.arc(600, 400, 30, 0, Math.PI * 2, false) // 横坐标、纵坐标、半径、起始角、结束角、是否逆时针
      this.ctx.closePath()
      this.ctx.fillStyle = 'hotPink'
      this.ctx.fill()
    },
    initWater (addindex, obj) {
      // 相对中心圆：原与原的间距设置为70
      this.ctx.beginPath()
      // Math.sin的参数是弧度，而不是角度
      let x = 600 + Math.cos((addindex * Math.PI) / 720) * 120
      let y = 400 + Math.sin((addindex * Math.PI) / 720) * 70
      this.ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
      this.ctx.arc(x, y, 20, 0, Math.PI * 2, false)
      this.ctx.closePath()
      this.ctx.fill()
    },
    initGold (addindex) {
      this.ctx.beginPath()
      let x = 600 + Math.cos((addindex * Math.PI) / 720) * 230
      let y = 400 + Math.sin((addindex * Math.PI) / 720) * 160
      this.ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
      this.ctx.arc(x, y, 20, 0, Math.PI * 2, false)
      this.ctx.closePath()
      this.ctx.fill()
    },
    initEarth (addindex, text) {
      this.ctx.beginPath()
      let x = 600 + Math.cos((addindex * Math.PI) / 720) * 340
      let y = 400 + Math.sin((addindex * Math.PI) / 720) * 250
      // 字体需在设置颜色后再画，否则会出现颜色错乱问题
      if (y > 400) {
        this.ctx.fillStyle = 'gray'
        this.ctx.font = 'bold 18px serif'
        this.ctx.fillText(`地球${text}`, x - 15, y + 40)
      }
      this.ctx.arc(x, y, 20, 0, Math.PI * 2, false)
      this.ctx.closePath()
      this.ctx.fill()
    },
    initWaterTrack () {
      this.ellipse(this.ctx, 600, 400, 120, 70)
    },
    initGoldTrack () {
      this.ellipse(this.ctx, 600, 400, 230, 160)
    },
    initEarthTrack () {
      this.ellipse(this.ctx, 600, 400, 340, 250)
    },
    animationDot () {
      let self = this
      let addindex = 0
      function goTraverse () {
        self.ctx.clearRect(0, 0, 1200, 800)
        self.initSun()
        // list 为Mock数据源
        for (let i = 0; i < self.list.length; i++) {
          if (i < 2) {
            self.initWater(360 * i + addindex, self.list[i])
          } else if (i < 4) {
            self.initGold(180 * i + addindex)
          } else {
            self.initEarth(360 * i + addindex, self.list[i].name)
          }
        }
        self.initWaterTrack()
        self.initGoldTrack()
        self.initEarthTrack()
        if (addindex <= 1440) {
          addindex++
        } else {
          addindex = 0
        }
        window.requestAnimationFrame(goTraverse)
      }
      window.requestAnimationFrame(goTraverse)
    }
  }
}
</script>

<style lang="scss">
#tutorial {
  transform: rotate3d(1, 0, 0, 50deg)
}
</style>
