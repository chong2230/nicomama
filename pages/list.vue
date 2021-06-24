<template>
  <div style="width:100%;height: 600px;position: relative;">
    <!-- swiper1 -->
    <div v-swiper:swiperTop="swiperOptionTop" class="gallery-top">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://raw.githubusercontent.com/surmon-china/surmon-china.github.io/source/static/images/example/1.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://raw.githubusercontent.com/surmon-china/surmon-china.github.io/source/static/images/example/2.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://raw.githubusercontent.com/surmon-china/surmon-china.github.io/source/static/images/example/3.jpg" />
        </div>
      </div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </div>
    <!-- swiper2 Thumbs -->
    <div v-swiper:swiperThumbs="swiperOptionThumbs" class="gallery-thumbs">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://raw.githubusercontent.com/surmon-china/surmon-china.github.io/source/static/images/example/1.jpg" />
          <p>阳台</p>
        </div>
        <div class="swiper-slide">
          <img src="https://raw.githubusercontent.com/surmon-china/surmon-china.github.io/source/static/images/example/2.jpg" />
          <p>客厅</p>
        </div>
        <div class="swiper-slide">
          <img src="https://hyzrm.oss-cn-qingdao.aliyuncs.com/file/normal/D1EF0617F2964CADAA4C798CE5833FFD.png" />
          <p>卧室</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptionTop: {
          grabCursor: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        },
        swiperOptionThumbs: {
          grabCursor: true,//鼠标覆盖Swiper时指针会变成手掌形状
          centeredSlides: true,
          slidesPerView: 'auto',//同时显示的数量
          touchRatio: 0.2,
          slideToClickedSlide: true,
        },

      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.swiperTop;
        const swiperThumbs = this.swiperThumbs;
        swiperTop.controller.control = swiperThumbs;//控制缩略图和轮播图联动
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
$color-main: #62cfc9;
//   @import "../assets/styles/color";
  .swiper-container {
    height: 600px;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .gallery-top {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .gallery-thumbs {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 20% !important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 80px;
    height: 80px;
    margin: 0 20px 60px;
    color: #fff;
    border: 4px solid rgba(0,0,0,0);
    p {
      line-height: 30px;
      text-align: center;
    }
  }
  .gallery-thumbs .swiper-slide-active {
    border: 4px solid $color-main;
    color: $color-main;
    p {
      line-height: 30px;
      text-align: center;
    }
  }


</style>