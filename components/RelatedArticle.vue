<template>
    <div class="related-article">
        <dl>
            <dt>与你相关的文章</dt>
            <dd v-for="item in list" :key="item.id">
                <a :href="'/content/detail/'+item.id">
                    <div class="dd_main clearfixed">
                        <div class="dd_left">
                            <div class="img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
                        </div>
                        <div class="dd_right">
                            <p class="p1">{{item.name}}</p>
                            <p class="p2">{{item.desc}}</p>
                        </div>
                    </div>
                </a>
            </dd>
        </dl>
    </div>    
</template>
<script>
export default {
    name: 'RelatedArticle',
    data() {
        return {
            list: [],
            // list: [
            //     {
            //         id: 1390742,
            //         img: 'https://staticimg.ngmm365.com/23a7a90ad7e62d514369ab3281ffb722-w1278_h544.jpg?-w1278_h544&x-oss-process=image/format,jpg/interlace,1,image/resize,w_100/quality,Q_60/sharpen,90',
            //         name: '警惕！孩子流鼻血不一定是干燥！这几个症状要注意',
            //         desc: '一觉醒来床单枕头有血迹，最近好多娃都有这个情况'

            //     },
            //     {
            //         id: 1328430,
            //         img: 'https://staticimg.ngmm365.com/262c585fc736c57b96938ba88de856d6-w1300_h580.jpg?-w1300_h580&x-oss-process=image/format,jpg/interlace,1,image/resize,w_100/quality,Q_60/sharpen,90',
            //         name: '鱼身上最不该给娃吃的部位，是这里',
            //         desc: '鱼身上的这些部位不要给娃乱吃！'

            //     },
            //     {
            //         id: 1284953,
            //         img: 'https://staticimg.ngmm365.com/8601a78d89dd27fd047c9d85d2639429-w1280_h536.jpg?-w1280_h536&x-oss-process=image/format,jpg/interlace,1,image/resize,w_100/quality,Q_60/sharpen,90',
            //         name: '老人带娃，该不该给钱？给多少？',
            //         desc: '不能把钱当做衡量的唯一标准，但它一定是最直观、最有效的表达方式。'

            //     },
            //     {
            //         id: 1282346,
            //         img: 'https://staticimg.ngmm365.com/b55ab94db6100fe521f7cf6e9d8a4dec-w1280_h540.jpg?-w1280_h540&x-oss-process=image/format,jpg/interlace,1,image/resize,w_100/quality,Q_60/sharpen,90',
            //         name: '经历试管婴儿的女人，最难熬的是什么？',
            //         desc: '每个生命来到世界上都不容易'

            //     },
            //     {
            //         id: 1259847,
            //         img: 'https://staticimg.ngmm365.com/ebc9286a64e6689e65f577e39868dab4-w1278_h538.jpg?-w1278_h538&x-oss-process=image/format,jpg/interlace,1,image/resize,w_100/quality,Q_60/sharpen,90',
            //         name: '贫血影响大脑发育，4个月就可以这样补起来',
            //         desc: '别再吃红枣菠菜补铁了！'

            //     },
            //     {
            //         id: 803492,
            //         img: 'https://staticimg.ngmm365.com/4d9b8892cb2e1087c9749d62e423551a-w1200_h800.jpg?-w1200_h800&x-oss-process=image/format,jpg/interlace,1,image/resize,w_100/quality,Q_60/sharpen,90',
            //         name: '宝宝爬的姿势不对，会影响以后走路吗？',
            //         desc: '宝宝爬的姿势不对，会影响以后走路吗？'

            //     },
            // ]
        }
    },
    async fetch() {
        console.log('fetch')
        // const id = this.$route.params.id;
        // console.log(id);
        let params = {
            pagenum: 1,
            pagesize: 6
        };
        let url = 'http://127.0.0.1:8001/article?';
        for (let key in params) {
            url += key + '=' + params[key] + '&';
        }
        url = url.substr(0, url.length - 1);
        const res = await fetch(url).then(res =>
            res.json()
        );
        this.list = res.data.list;
        console.log('list: ', this.list);    
    }
}
</script>
<style lang="scss" scoped>
dl {
    dt {
        font-size: 14px;
        font-weight: 400;
        color: #222;
        line-height: 20px;
        text-indent: 8px;
        position: relative;
        margin-bottom: 12px;
        &:before {
            content: "";
            display: block;
            width: 2px;
            height: 12px;
            background: #222;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    dd {
        border-bottom: 1px solid #f7f7f7;
    }
}
.dd_main {
    padding: 12px 0;
    .dd_left {
        float: left;
        .img {
            display: block;
            width: 100px;
            height: 56px;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
        }
    }
    .dd_right {
        float: left;
        width: 159px;
        margin-left: 10px;
        .p1 {
            height: 40px;
            font-size: 14px;
            font-weight: 400;
            color: #3d464b;
            line-height: 20px;
            margin-bottom: 2px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            word-break: break-all;
        }
        .p2 {
            height: 20px;
            font-size: 12px;
            font-weight: 400;
            color: #999;
            line-height: 20px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
}
</style>