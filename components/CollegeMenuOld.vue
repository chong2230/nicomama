<template>
    <div class="college-menu">
        <ul class="menu-wrap">
            <li>
                <strong
                    ><a href="/college" class="nuxt-link-active"
                        >年糕妈妈亲子学院</a
                    ></strong
                >
            </li>
            <li>
                <strong class="">
                    养娃必读
                    <i class="reduce icon iconfont icon-jianshaoshuliang"></i
                    ><i
                        class="add icon iconfont icon-tianjiatupian"
                        style="display: none"
                    ></i
                ></strong>
                <dl style="display: ">
                    <dd>
                        <a
                            href="/college/detail?category=1"
                            class="nuxt-link-active"
                            >推荐</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=1&id=8268"
                            class="nuxt-link-active"
                            >喂养指南</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=1&id=8161"
                            class="nuxt-link-active"
                            >孕产健康</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=1&id=8162"
                            class="nuxt-link-active"
                            >婴儿护理</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=1&id=8163"
                            class="nuxt-link-active"
                            >睡眠引导</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=1&id=8165"
                            class="nuxt-link-active"
                            >小儿健康</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=1&id=8166"
                            class="nuxt-link-active"
                            >亲子陪伴</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=1&id=8167"
                            class="nuxt-link-active"
                            >早期发展</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=1&id=8168"
                            class="nuxt-link-active"
                            >正面管教</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=1&id=8169"
                            class="nuxt-link-active"
                            >漫画吐槽</a
                        >
                    </dd>
                </dl>
            </li>
            <li>
                <strong class="active">
                    年糕盒子
                    <i class="reduce icon iconfont icon-jianshaoshuliang"></i
                    ><i
                        class="add icon iconfont icon-tianjiatupian"
                        style="display: none"
                    ></i
                ></strong>
                <dl style="display: ">
                    <dd>
                        <a
                            href="/college/detail?category=2&id=1"
                            class="nuxt-link-active"
                            >在家早教</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=2&id=2"
                            aria-current="page"
                            class="nuxt-link-exact-active nuxt-link-active"
                            >数学思维</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=2&id=3"
                            class="nuxt-link-active"
                            >创意拼搭</a
                        >
                    </dd>
                </dl>
            </li>
            <li>
                <strong class="">
                    亲子学院
                    <i class="reduce icon iconfont icon-jianshaoshuliang"></i
                    ><i
                        class="add icon iconfont icon-tianjiatupian"
                        style="display: none"
                    ></i
                ></strong>
                <dl style="display: ">
                    <dd>
                        <a
                            href="/college/detail?category=3&id=5"
                            class="nuxt-link-active"
                            >磁力拼搭</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=3&id=6"
                            class="nuxt-link-active"
                            >思维开发</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=3&id=7"
                            class="nuxt-link-active"
                            >逻辑游戏</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=3&id=8"
                            class="nuxt-link-active"
                            >科学启蒙</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=3&id=9"
                            class="nuxt-link-active"
                            >美国外教</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=3&id=10"
                            class="nuxt-link-active"
                            >英语启蒙</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=3&id=11"
                            class="nuxt-link-active"
                            >尤克里里</a
                        >
                    </dd>
                    <dd>
                        <a
                            href="/college/detail?category=3&id=12"
                            class="nuxt-link-active"
                            >亲子粘土</a
                        >
                    </dd>
                </dl>
            </li>
        </ul>
    </div>
</template>
<script>
import { getQueryString } from '@/assets/js/util.js'
export default {
    data() {
        return {
            curCategory: 1,
            curId: 1,
            menus: [
                { category: 0,
                    name: '年糕妈妈亲子学院',
                    url: '/college',
                },
                {
                    category: 1,
                    name: '养娃必读',
                    url: '',
                },
                {
                    category: 2,
                    name: '年糕盒子',
                    url: '',
                },
                {
                    category: 3,
                    name: '亲子学院',
                    url: '',
                },
            ],
        }
    },
    mounted() {
        let category = getQueryString('category');
        let id = getQueryString('id');
        this.curCategory = parseInt(category);
        this.id = parseInt(id);
    }
}
</script>
<style lang="scss" scoped>
ul.menu-wrap {
    li {
        margin-bottom: 20px;
        strong {
            display: block;
            color: #222;
            font-size: 20px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            line-height: 28px;
            width: 240px;
            position: relative;
            cursor: pointer;
            &.active {
                color: #54d2d5;
            }
        }
        a {
            text-decoration: none;
            color: #222;
            display: block;
            &.active, &.nuxt-link-exact-active {
                color: #54d2d5;
            }
        }
        dl {
            padding: 3px 0;
            overflow: hidden;
            dd {
                margin-top: 20px;
                text-indent: 15px;
                position: relative;
                &:before {
                    content: "";
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    background: #ccc;
                    border-radius: 100%;
                }
                a {
                    font-size: 16px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: #666;
                    line-height: 22px;
                }
            }
        }
    }
}
</style>