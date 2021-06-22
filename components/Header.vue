<template>
    <div class="header scroll-target-header">
        <h1>年糕妈妈</h1>
        <div class="header-fixed">
            <div class="header-content">
                <div class="logo" style="display:;">
                    <a href="/" target="_blank"></a>
                </div>
                <div class="logo-yiyu" style="display:none;">杭州一语网络科技有限公司</div>
                <ul class="clearfixed">
                    <li :class="current == index ? 'active' : ''" @click="go(index)" v-for="(item, index) in navs" :key="index">{{item}}</li>                    
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
            // current: 0,
            navs: ['首页', '年糕盒子', '亲子学院', '关于我们', '品牌活动', '联系我们']
        }
    },
    mounted() {
        console.log('mounted:', this.$store.state.navIndex)
    },
    computed: {
        current() {
            return this.$store.state.navIndex
        }
    },
    methods: {
        go(index) {
            this.$store.commit('setNavIndex', index);
            this.$emit('goDetail', parseInt(index) + 1);
        }
    }    
}
</script>
<style lang="scss" scoped>
.header {
    font-family: PingFangSC-Regular;
    font-weight: 400;
    height: 72px;
    h1 {
        position: absolute;
        left: -9999px;
        top: -9999px;
    }
    .header-fixed {
        width: 100%;
        position: fixed;
        height: 72px;
        background: #fff;
        z-index: 99;
        box-shadow: 0 2px 8px hsl(0deg 0% 96% / 96%);
        transform: translateZ(1px);
    }
    .header-content {
        width: 1024px;
        height: 72px;
        margin: 0 auto;
        position: relative;
        .logo {
            width: 131px;
            height: 38px;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background: url(/_nuxt/img/logo.7f6354c.png) no-repeat 0 0;
            background-size: 100%;
            a {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
        }
        .logo-yiyu {
            line-height: 72px;
            color: #222;
            font-size: 24px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
        }
        ul {
            position: absolute;
            top: 0;
            right: 7px;
            li {
                height: 72px;
                line-height: 72px;
                float: left;
                padding: 0 20px;
                color: #222;
                cursor: pointer;
            }
            li.active,
            li:hover {
                color: #54d2d5;
            }
        }
    }
}
</style>