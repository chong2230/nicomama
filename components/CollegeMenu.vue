<template>
    <div class="college-menu">
        <ul class="menu-wrap">
            <li v-for="(item, index) in menus" :key="index">
                <strong v-if="item.url">
                    <NuxtLink :to="item.url">{{item.name}}</NuxtLink>
                </strong>
                <strong v-else>
                    <strong class="" :class="{active:item.category == curCategory}">
                        {{item.name}}
                        <i class="reduce icon iconfont icon-jianshaoshuliang"></i
                        ><i
                            class="add icon iconfont icon-tianjiatupian"
                            style="display: none"
                        ></i
                    ></strong>
                    <dl>
                        <dd v-for="(subItem, subIndex) in categorys.filter((obj)=>{return obj.menu_id == item.category})" :key="subItem.id">
                            <a
                                :href="getCategoryLink(subItem, subIndex)"
                                class="nuxt-link-active"
                                :class="item.category == curCategory && subItem.category_id == curId ? 'nuxt-link-exact-active' : ''"
                                >{{subItem.name}}</a
                            >
                        </dd>
                    </dl>
                </strong>
            </li>            
        </ul>
    </div>
</template>
<script>
import Config from '@/assets/js/config.js'
import { getQueryString } from '@/assets/js/util.js'
export default {
    data() {
        return {
            curCategory: 1,
            curId: 1,
            menus: [
                {
                    category: 0,
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
            categorys: []
        }
    },
    async fetch() {
        let url = Config.httpServer + '/category?pagenum=1&pagesize=50';        
        const res = await fetch(url).then(res =>
            res.json()
        );
        this.categorys = res.data.list || [];   
    },
    mounted() {
        let category = getQueryString('category');
        let id = getQueryString('id');
        this.curCategory = parseInt(category);
        this.curId = parseInt(id);
    },
    methods: {
        getCategoryLink(item, index) {
            // 养娃必读的推荐分类不添加id
            return '/college/detail?category='+item.menu_id 
                + (item.menu_id == 2 && index == 0 ? '' : '&id=' + item.category_id);
        }
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