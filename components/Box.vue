<template>
    <div class="nicobox scroll-target-nicobox">
        <div class="nicobox-content">
            <h2>{{info.title}}</h2>
            <h3 v-if="info.subTitle">{{info.subTitle}}</h3>
            <ul class="clearfixed">
                <li v-for="(item, index) in info.list" :key="index">
                    <div class="li-content clearfixed" :class="index == current ? 'active' : ''" @click="goDetail(item)" 
                            @mouseover="onHover(index)" @mouseout="onOut(index)">
                        <div class="_left">
                            <img
                                :src="item.mainImg"
                                class="main"
                                
                            /><img
                                :src="item.qrcodeImg"
                                class="qrcode" v-if="item.qrcodeImg"                                  
                            />
                        </div>
                        <div class="_right">
                            <p class="title">{{item.title}}</p>
                            <p class="content">
                                {{item.content}}
                            </p>
                            <p class="introduce">
                                {{item.introduce}}
                            </p>
                            <button v-if="item.status == 1">
                                详情<i class="icon iconfont icon-arrow-right"></i>
                            </button>
                            <button class="content_disabled" v-else>
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
            current: -1
        }
    },
    props: {
        info: {
            type: Object,
            default: function() {
                return {}
            }
        }
    },
    methods: {
        goDetail(item) {
            if (!item.url) return;
            window.open(item.url, '_blank');
        },
        onHover(index) {
            this.current = index;
        },
        onOut(index) {
            this.current = -1;
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
                &.active {
                    img.qrcode {
                        opacity: 1;
                    }
                }
            }
        }
    }
}
</style>