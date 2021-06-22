<template>
    <div class="container">
        <Header @goDetail="goDetail" />
        <!-- <Banner className="college-banner" url='/_nuxt/img/college-banner.c57b417.png' /> -->
        <div class="college-banner"></div>
        <div class="college-wrap">
            <div class="college-main clearfixed">
                <div class="_left">
                    <college-menu />
                </div>
                <div class="_right">
                    <college-detail />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Config from '@/assets/js/config.js'
import { getQueryString } from '@/assets/js/util.js'
export default {
    data() {
        return {

        }
    },
    mounted() {
        let category = getQueryString('category');
        this.$store.commit('setNavIndex', parseInt(category) - 1);
    },
    methods: {
        goDetail(index) {
            console.log('goDetail: ', index);
            // window.location.href = '/?defaultIndex=' + index;
            // this.$route.replace('/?defaultIndex=' + index);
            location.href = Config.apiHost + '/?defaultIndex=' + index;
        }
    }
}
</script>
<style lang="scss" scoped>
.college-wrap {
    font-family: PingFangSC-Regular;
    margin-bottom: 76px;
    .college-main {
        width: 1024px;
        margin: 0 auto;
        ._left {
            float: left;
            width: 280px;
        }
        ._right {
            float: left;
            width: 744px;
        }
    }
}
.college-banner {
    height: 300px;
    background: url(/_nuxt/img/college-banner.c57b417.png) no-repeat 50%;
    background-size: auto 100%;
    margin-bottom: 40px;
}
</style>