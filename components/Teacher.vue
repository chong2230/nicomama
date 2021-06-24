<template>
    <div class="zydjytd scroll-target-zydjytd" data-v-2a183b29="">
        <div class="zydjytd-content">
            <h2>专业的教研团队</h2>
            <h3>大咖教师队伍倾力打造</h3>
            <ul class="school-list clearfixed">
                <li>
                    <img src="/_nuxt/img/dkdx.977be67.png" />
                    <p>杜克大学</p>
                </li>
                <li>
                    <img src="/_nuxt/img/bjdx.3942fc3.png" />
                    <p>北京大学</p>
                </li>
                <li>
                    <img src="/_nuxt/img/xgzwdx.b891b48.png" />
                    <p>香港中文大学</p>
                </li>
            </ul>
            <div class="teacher clearfixed">
                <div class="_left">
                    <button>
                        <i class="icon iconfont icon-arrow-left"></i>
                    </button>
                </div>
                <div class="_center">
                    <client-only>
                        <swiper
                            ref="carousel"
                            class="teacher-list swiper"
                            :options="swiperOptions"
                            @ready="onSwiperRedied"
                            @clickSlide="onSwiperClickSlide"
                            @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
                        >
                            <swiper-slide class="teacher-item" v-for="item in list" :key="item.id">
                                <!-- <div class="teacher-item"> -->
                                    <img :src="item.img" />
                                    <p>
                                        {{item.intro}}
                                    </p>
                                <!-- </div> -->
                            </swiper-slide>
                            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                        </swiper>
                        </client-only>
                </div>
                <div class="_right">
                    <button>
                        <i class="icon iconfont icon-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Teacher',
    data() {
        return {
            list: [
                { id: 1, img: '/_nuxt/img/t1.be5b479.png', intro: '浙江大学临床医学专业硕士，超过2000万粉丝的母婴自媒体矩阵“年糕妈妈”创始人' },
                { id: 2, img: '/_nuxt/img/t2.fb68698.png', intro: '游戏育儿全球创始人、美国杜克大学心理学博士，被誉为亲子沟通中“最懂孩子的人”' },
                { id: 3, img: '/_nuxt/img/t3.f5ad9bd.png', intro: '台湾大学临床医学博士、台湾一级医院马偕儿童医院主治医生' },
                { id: 4, img: '/_nuxt/img/t4.2e3d414.png', intro: '国际学校、双语学校12年教学经验、拥有TEFL国际英语教师资格证' },
                { id: 5, img: '/_nuxt/img/t5.011ef34.png', intro: 'Breakthrough parenting的认证导师，致力于breaking parenting的全国推广' },
                { id: 6, img: '/_nuxt/img/t6.88a82b2.png', intro: '国家卫计委科学育儿项目专家组成员、国家开放大学“启步计划”项目特聘专家' },
                { id: 7, img: '/_nuxt/img/t7.4fac3ea.png', intro: '北京奕阳教育集团11所幼儿园教育教学主管、曾任上海教育科学研究院学前教育部研究员' },
                { id: 8, img: '/_nuxt/img/t8.a10f5cd.png', intro: '前Apple（中国）公司创意培训师、人气插画师、手工创意师' },
            ],
            swiperOptions: {
                loop: true,
                slidesPerView: 'auto',
                // centeredSlides: true,
                spaceBetween: 30,
                autoplay:true,
                // pagination: {
                //     el: '.swiper-pagination',
                //     dynamicBullets: true
                // },
                navigation: {
                    nextEl: "._right",
                    prevEl: "._left"
                }
            }
        }
    },
    methods: {
      onSwiperRedied(swiper) {
        console.log('Swiper redied!', swiper)
      },
      onSwiperSlideChangeTransitionStart() {
        console.log('SwiperSlideChangeTransitionStart!')
      },
      onSwiperClickSlide(index, reallyIndex) {
        console.log('Swiper click slide!', reallyIndex)
      }
    }
}
</script>
<style lang="scss" scoped>
ul.school-list {
    padding-left: 107px;
    margin-bottom: 59px;
    li {
        margin-right: 234px;
        float: left;
        img {
            width: 120px;
            height: 120px;
            display: block;
            margin-bottom: 20px;
        }
        p {
            font-size: 18px;
            font-weight: 400;
            color: #222;
            line-height: 25px;
            letter-spacing: 1px;
            text-align: center;
        }
        &:last-of-type {
            margin-right: 0;
        }
    }
}
.teacher {
    margin-bottom: 82px;
    ._left, ._right {
        float: left;
        width: 44px;
        padding-top: 66px;
        button {
            border: none;
            outline: none;
            width: 44px;
            height: 44px;
            background: #f7f7f7;
            border-radius: 100%;
            padding: 0;
            cursor: pointer;
            i {
                font-size: 18px;
                font-weight: 700;
                line-height: 18px;
                color: #666;
                &:before {
                    display: inline-block;
                    vertical-align: top;
                }
            }
        }
    }
    ._right {
        button {
            i {
                margin-left: 3px;
            }
        }
    }
    ._center {
        float: left;
        margin: 0 43px;
        width: 850px;        
    }
}
.teacher-list {
    .swiper-slide {
        // margin-left: 30px;
        width: 190px;
        // &:first-of-type {
        //     margin-left: 0;
        // }
        img {
            display: block;
            width: 190px;
            height: 177px;
            margin-bottom: 18px;
            border-radius: 10px 10px 0 0;
        }
        p {
            font-size: 13px;
            font-family: PingFangSC-Light;
            font-weight: 300;
            color: #222;
            line-height: 22px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            word-break: break-all;
        }
    }
    // .teacher-item {
    //     margin-left: 30px;
    //     width: 190px;
    //     &:first-of-type {
    //         margin-left: 0;
    //     }
    //     img {
    //         display: block;
    //         width: 190px;
    //         height: 177px;
    //         margin-bottom: 18px;
    //         border-radius: 10px 10px 0 0;
    //     }
    //     p {
    //         font-size: 13px;
    //         font-family: PingFangSC-Light;
    //         font-weight: 300;
    //         color: #222;
    //         line-height: 22px;
    //         display: -webkit-box;
    //         -webkit-box-orient: vertical;
    //         -webkit-line-clamp: 3;
    //         overflow: hidden;
    //         word-break: break-all;
    //     }
    // }
}
</style>