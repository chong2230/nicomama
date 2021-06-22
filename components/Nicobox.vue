<template>
    <div class="nicobox scroll-target-nicobox">
        <div class="nicobox-content">
            <h2>年糕盒子</h2>
            <h3>打开亲子乐趣</h3>
            <ul class="clearfixed">
                <li>
                    <a
                        href="/college/detail?category=2&amp;id=1"
                        target="_blank"
                       
                        ><div class="li-content clearfixed">
                            <div class="_left">
                                <img
                                    src="/_nuxt/img/zjhz.1156aa0.png"
                                    class="main"
                                   
                                /><img
                                    src="/_nuxt/img/zjhz.4b49945.png"
                                    class="qrcode"
                                   
                                />
                            </div>
                            <div class="_right">
                                <p class="title">在家早教</p>
                                <p class="content">
                                    从婴幼儿发展规律特点出发，将科学的视频课程和专业的教具相结合，一站式解决家长在家早教的所有难题。精心策划五大课程，更科学的培养体系，全方面发展孩子的五大能力。
                                </p>
                                <p class="introduce">
                                    0~3.5岁
                                </p>
                                <button>
                                    详情<i class="icon iconfont icon-arrow-right"></i>
                                </button>
                            </div></div
                    ></a>
                </li>
                <li>
                    <a
                        href="/college/detail?category=2&amp;id=2"
                        target="_blank"
                       
                        ><div class="li-content clearfixed">
                            <div class="_left">
                                <img
                                    src="/_nuxt/img/sxhz.fcdf596.png"
                                    class="main"
                                   
                                /><img
                                    src="/_nuxt/img/sxhz.df87477.png"
                                    class="qrcode"
                                   
                                />
                            </div>
                            <div class="_right">
                                <p class="title">数学思维</p>
                                <p class="content">
                                    以数学星球探索为主题故事背景，涵盖九大数学模块。按能力分成四个阶段，抓住宝宝数学启蒙敏感期，玩中学，轻松拓展数学思维，培养数学兴趣。
                                </p>
                                <p class="introduce">
                                    1.5~4岁+
                                </p>
                                <button>
                                    详情<i class="icon iconfont icon-arrow-right"></i>
                                </button>
                            </div></div
                    ></a>
                </li>
                <li>
                    <a
                        href="/college/detail?category=2&amp;id=3"
                        target="_blank"
                       
                        ><div class="li-content clearfixed">
                            <div class="_left">
                                <img
                                    src="/_nuxt/img/cypd.42093dd.png"
                                    class="main"
                                   
                                /><img
                                    src="/_nuxt/img/cypd.77d94ce.png"
                                    class="qrcode"
                                   
                                />
                            </div>
                            <div class="_right">
                                <p class="title">创意拼搭</p>
                                <p class="content">
                                    秉承国际性的4C教育方法，结合多种创意玩法，让孩子在拼搭过程中潜移默化掌握STEAM知识。
                                </p>
                                <p class="introduce">
                                    2~6岁+
                                </p>
                                <button>
                                    详情<i class="icon iconfont icon-arrow-right"></i>
                                </button>
                            </div></div
                    ></a>
                </li>
                <li>
                    <div class="li-content clearfixed">
                        <div class="_left">
                            <img
                                src="/_nuxt/img/nicobox.d71e087.png"
                                class="main"
                               
                            />
                        </div>
                        <div class="_right">
                            <p class="title">魔法艺术</p>
                            <p class="content">
                                将艺术、自然、生活等多维度知识融入课程，帮助孩子释放艺术潜能，发挥无限创造力。
                            </p>
                            <p class="introduce">2.5~6岁+</p>
                            <button class="content_disabled">
                                即将上线，敬请期待
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Nicobox',
    data() {
        return {

        }
    }    
}
</script>
<style lang="scss" scoped>
.nicobox {
    background: #fafafa;
    font-family: PingFangSC-Regular;
    .nicobox-content {
        width: 1024px;
        margin: 0 auto;
        padding-top: 45px;
        padding-bottom: 53px;
        h2 {
            font-size: 34px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            color: #222;
            line-height: 48px;
            letter-spacing: 1px;
            margin-bottom: 7px;
        }
        h3 {
            font-size: 18px;
            font-family: PingFangSC-Light;
            font-weight: 300;
            color: #666;
            line-height: 25px;
            margin-bottom: 29px;
        }
        ul {
            li {
                width: 502px;
                height: 220px;
                margin-right: 20px;
                background: #fff;
                border-radius: 10px;
                overflow: hidden;
                float: left;
                margin-top: 20px;
                cursor: pointer;
                &:first-of-type, &:nth-of-type(2) {
                    margin-top: 0;
                }
                &:nth-of-type(2n) {
                    margin-right: 0;
                }
                a {
                    text-decoration: none;
                }
            }
            .li-content {
                padding: 20px;
                ._left {
                    float: left;
                    position: relative;
                    img.main {
                        display: block;
                        width: 180px;
                        height: 180px;
                        border-radius: 10px;
                        object-fit: cover;
                    }
                    img.qrcode {
                        display: block;
                        width: 180px;
                        height: 180px;
                        border-radius: 10px;
                        position: absolute;
                        left: 0;
                        top: 0;
                        opacity: 0;
                        transition: all .5s;
                    }
                }
                ._right {
                    float: left;
                    padding-top: 5px;
                    position: relative;
                    width: 243px;
                    margin-left: 20px;
                    height: 170px;
                    p.title {
                        font-size: 20px;
                        font-family: PingFangSC-Medium;
                        font-weight: 500;
                        color: #222;
                        line-height: 28px;
                        margin-bottom: 12px;
                    }
                    p.content {
                        font-size: 14px;
                        font-family: PingFangSC-Light;
                        font-weight: 400;
                        color: #666;
                        line-height: 20px;
                    }
                    p.introduce {
                        position: absolute;
                        top: 0;
                        right: 5px;
                        font-size: 14px;
                        font-weight: 400;
                        color: #ff9846;
                        line-height: 40px;
                        font-family: PingFangSC-Light;
                    }
                    button {
                        position: absolute;
                        right: 0;
                        bottom: -5px;
                        width: 70px;
                        height: 30px;
                        background: #fac659;
                        border-radius: 18px;
                        border: none;
                        font-size: 13px;
                        font-weight: 400;
                        line-height: 18px;
                        color: #fff;
                        outline: none;
                        padding: 0;
                        text-align: right;
                        cursor: pointer;
                        transition: all .4s;
                        i {
                            color: #fff;
                            font-size: 12px;
                            line-height: 12px;
                            margin-left: 2px;
                            margin-right: 12px;
                        }
                    }
                    button.content_disabled {
                        background: transparent;
                        color: #fac659;
                        width: auto;
                    }
                }
            }
        }
    }
}
</style>