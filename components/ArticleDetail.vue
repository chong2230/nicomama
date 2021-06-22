<template>
    <div class="article-detail">
        <div class="title">
            <div class="title-content">
                <h1>{{info.title}}</h1>
            </div>
        </div>
        <div class="main clearfixed">
            <div class="_left">
                <div class="rich-text-detail-wrap">
                    <div class="rich-text-detail">
                        {{info.content}}
                    </div>
                </div>
            </div>
            <div class="_right">
                <related-article />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            info: {}
        }
    },
    async fetch() {
        const id = this.$route.params.id;
        let url = 'http://127.0.0.1:8001/article/' + id;        
        const res = await fetch(url).then(res =>
            res.json()
        );
        this.info = res.data;
        console.log('info: ', this.info);    
    }
}
</script>
<style lang="scss" scoped>
.title-content {
    width: 1024px;
    margin: 0 auto;
    padding-top: 44px;
    margin-bottom: 57px;
    h1 {
        font-size: 36px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: #222;
        line-height: 50px;
        letter-spacing: 1px;
        margin-bottom: 20px;
    }
}
.article-detail {
    .main {
        width: 1024px;
        margin: 0 auto;
        margin-bottom: 84px;
        ._left {
            float: left;
            width: 712px;
            min-height: 1px;
        }
        ._right {
            float: left;
            width: 269px;
            margin-left: 43px;
        }
    }
}
</style>