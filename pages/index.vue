<template>
  <div class="container">
    <Header ref="header" @goDetail="goDetail" />
    <Banner ref="banner" />
    <must-read />
    <!-- <nicobox /> -->
    <Box ref="nico" :info="nico" />    
    <Box ref="steamkc" :info="steamkc" /> 
    <Advisor />
    <Teacher />
    <brand-partner ref="brandPartner" />
    <About ref="about" />
    <Introduce ref="introduce" />
    <RightBtnGroup />
    <Footer ref="footer" />
  </div>
</template>

<script>
import MustRead from '../components/MustRead.vue'
import Nicobox from '../components/Nicobox.vue'
import { getQueryString } from '../assets/js/util.js'
import BrandPartner from '../components/BrandPartner.vue'
export default {
    components: { MustRead, Nicobox, BrandPartner },
    data() {
      return {
        curIndex: 0,
        nico: {
          title: '年糕盒子',
          subTitle: '打开亲子乐趣',
          list: [
            {
              title: '在家早教',
              content: '从婴幼儿发展规律特点出发，将科学的视频课程和专业的教具相结合，一站式解决家长在家早教的所有难题。精心策划五大课程，更科学的培养体系，全方面发展孩子的五大能力。',
              introduce: '0~3.5岁',
              url: '/college/detail?category=2&id=1',
              mainImg: '/_nuxt/img/zjhz.1156aa0.png',
              qrcodeImg: '/_nuxt/img/zjhz.4b49945.png',
              status: 1
            },
            {
              title: '数学思维',
              content: '以数学星球探索为主题故事背景，涵盖九大数学模块。按能力分成四个阶段，抓住宝宝数学启蒙敏感期，玩中学，轻松拓展数学思维，培养数学兴趣。',
              introduce: '1.5~4岁+',
              url: '/college/detail?category=2&id=2',
              mainImg: '/_nuxt/img/sxhz.fcdf596.png',
              qrcodeImg: '/_nuxt/img/sxhz.df87477.png',
              status: 1
            },
            {
              title: '创意拼搭',
              content: '秉承国际性的4C教育方法，结合多种创意玩法，让孩子在拼搭过程中潜移默化掌握STEAM知识。',
              introduce: '2~6岁+',
              url: '/college/detail?category=2&id=3',
              mainImg: '/_nuxt/img/cypd.42093dd.png',
              qrcodeImg: '/_nuxt/img/cypd.77d94ce.png',
              status: 1
            },
            {
              title: '魔法艺术',
              content: '将艺术、自然、生活等多维度知识融入课程，帮助孩子释放艺术潜能，发挥无限创造力。',
              introduce: '2.5~6岁+',
              url: '',
              mainImg: '/_nuxt/img/nicobox.d71e087.png',
              qrcodeImg: '',
              status: 0
            }

          ]
        },
        steamkc: {
          title: '亲子学院',
          subTitle: '',
          list: [
            {
              title: '磁力拼搭',
              content: '20节创意课程，融合艺术与空间、科学与创想，带宝宝拼搭的同时，还能让孩子进行多元学科启蒙。',
              introduce: '1.5岁+',
              url: '/college/detail?category=3&id=5',
              mainImg: '/_nuxt/img/clpd.349ed29.png',
              qrcodeImg: '/_nuxt/img/clpd.5289874.png',
              status: 1
            },
            {
              title: '思维开发',
              content: '37节动画课程+37个互动游戏+37套趣味练习，打造“学——玩——练”学习闭环，让思维训练更高效。',
              introduce: '4岁+',
              url: '/college/detail?category=3&id=6',
              mainImg: '/_nuxt/img/swkf.4b92d88.png',
              qrcodeImg: '/_nuxt/img/swkf.9747262.png',
              status: 1
            },
            {
              title: '逻辑游戏',
              content: '全球火了上百年的逻辑游戏，0基础的宝宝也能玩。20节主题课程配合互动手游，在游戏中提升宝宝逻辑思维。',
              introduce: '2岁+',
              url: '/college/detail?category=3&id=7',
              mainImg: '/_nuxt/img/ljyx.9231aa7.png',
              qrcodeImg: '/_nuxt/img/ljyx.56d6195.png',
              status: 1
            },
            {
              title: '科学启蒙',
              content: '40个创造性实验，让孩子像小科学家一样思考，探究事物潜在逻辑，为未来学习奠定基础。',
              introduce: '2~6岁+',
              url: '/college/detail?category=3&id=8',
              mainImg: '/_nuxt/img/kxqm.4f88add.png',
              qrcodeImg: '/_nuxt/img/kxqm.4129d77.png',
              status: 1
            },
            {
              title: '美国外教',
              content: '资深美国外教，顶尖教研团队，纯正美国外教宝宝在家就能上！情景式教学方式，带宝宝自信开口说英语。',
              introduce: '3岁+',
              url: '/college/detail?category=3&id=5',
              mainImg: '/_nuxt/img/mgwj.18b860d.png',
              qrcodeImg: '/_nuxt/img/mgwj.5cde432.png',
              status: 1
            },
            {
              title: '英语启蒙',
              content: '每天10分钟，特色情景英语课，打造浸入式语言环境，培养英语感知，宝宝英语启蒙快人一步。',
              introduce: '2~6岁',
              url: '/college/detail?category=3&id=6',
              mainImg: '/_nuxt/img/yyqm.ada492a.png',
              qrcodeImg: '/_nuxt/img/yyqm.e6c45d7.png',
              status: 1
            },
            {
              title: '尤克里里',
              content: '适合孩子学的第一件乐器，20节课视频教学课程，从理论知识再到实操练习，都生动有趣，让宝宝爱上音乐！',
              introduce: '3岁+',
              url: '/college/detail?category=3&id=7',
              mainImg: '/_nuxt/img/ykll.6a6f42d.png',
              qrcodeImg: '/_nuxt/img/ykll.d7e54e4.png',
              status: 1
            },
            {
              title: '亲子粘土',
              content: '六大主题教学，搭配特色模具，直观感受从平面到立体的形状变化，动手又动脑，有趣又好玩。',
              introduce: '2~6岁+',
              url: '/college/detail?category=3&id=8',
              mainImg: '/_nuxt/img/qznt.46c81de.png',
              qrcodeImg: '/_nuxt/img/qznt.c1ed7b4.png',
              status: 1
            },
          ]
        }
      }
    },
    mounted() {
      let index = 0;
      let defaultIndex = getQueryString('defaultIndex');
      if (defaultIndex) {
        index = parseInt(defaultIndex);
        this.$store.commit('setNavIndex', index-1);
        setTimeout(()=>{
          this.goDetail(index);
        }, 50)
      }            
    },
    methods: {
      //点击导航铆钉到指定位置
      goDetail(index) {
          let single = ['', 'header', 'nico', 'steamkc', 'about', 'brandPartner', 'footer']
          this.current = index;
          let height = Number(this.$refs['header'].$el.offsetHeight)// 导航的高度
          let toTop = this.$refs[single[index]].$el.offsetTop  // index对应内容的高度
          // let total = index === 0 ? toTop - height - 10 : toTop - height + index - 15　　　　　　　　　　//减去导航的高度和margin-tbottom的高度为滚动高度
          let total = toTop - height;
          let distance = document.documentElement.scrollTop || document.body.scrollTop
          let step = total / 20 
          if (total > distance) { 
              let newTotal = total - distance
              step = newTotal / 20
              smoothDown()
          } else {
              let newTotal = distance - total     
              step = newTotal / 20
              smoothUp()
          }
          function smoothDown() {
              if (distance < total) {
                distance += step
                document.body.scrollTop = document.documentElement.scrollTop = distance
                setTimeout(smoothDown, 10)
              } else {
                document.body.scrollTop = document.documentElement.scrollTop = total
              }
          }
          function smoothUp() {
              if (distance > total) {
                distance -= step
                document.body.scrollTop = document.documentElement.scrollTop = distance
                setTimeout(smoothUp, 10)
              } else {
                document.body.scrollTop = document.documentElement.scrollTop = total
              }
          }
      },
    }
  }
</script>

<style lang="scss">
.zydjytd {
    background: #fff;
    font-family: PingFangSC-Regular;
    .zydjytd-content {
        width: 1024px;
        margin: 0 auto;
        padding-top: 48px;
        h2 {
            margin-bottom: 7px;
            font-size: 34px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            color: #222;
            line-height: 48px;
            letter-spacing: 1px;
        }
        h3 {
            font-size: 18px;
            font-family: PingFangSC-Light;
            font-weight: 300;
            color: #666;
            line-height: 25px;
            margin-bottom: 53px;
        }        
    }
}
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
