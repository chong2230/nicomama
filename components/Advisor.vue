<template>
    <div class="zydjytd scroll-target-zydjytd">
        <div class="zydjytd-content">
            <h2>权威的学术顾问团</h2>
            <h3>国内外早教专家坐阵</h3>
            <ul class="img-wrap">
                <li>
                    <div
                        style="background-image: url(/_nuxt/img/1.bd594ce.jpg)"
                    >
                        <label>Susan Recchia</label>
                    </div>
                    <p>
                        美国哥伦比亚大学儿童早期教育教授、Rita
                        Gold早期教育中心负责人
                    </p>
                </li>
                <li>
                    <div
                        style="background-image: url(/_nuxt/img/2.466f57d.jpg)"
                    >
                        <label>马剑虹</label>
                    </div>
                    <p>
                        浙江大学心理与行为科学系教授、浙江大学&amp;年糕妈妈“早教科学联合研究小组”召集人
                    </p>
                </li>
                <li>
                    <div
                        style="background-image: url(/_nuxt/img/3.5607f66.jpg)"
                    >
                        <label>张琼</label>
                    </div>
                    <p>
                        浙江大学心理与行为科学系副教授、中科院心理所发展与教育心理学博士、浙江大学&amp;年糕妈妈“早教科学联合研究小组”成员
                    </p>
                </li>
                <li>
                    <div
                        style="background-image: url(/_nuxt/img/4.d6f222e.jpg)"
                    >
                        <label>卫薇</label>
                    </div>
                    <p>
                        浙江大学心理与行为科学系副教授、浙江大学&amp;年糕妈妈“早教科学联合研究小组”成员
                    </p>
                </li>
                <li>
                    <div
                        style="background-image: url(/_nuxt/img/5.3fc64bf.jpg)"
                    >
                        <label>朱芳宜</label>
                    </div>
                    <p>
                        国家卫健委“科学育儿”特邀专家、《婴幼儿发展引导员职业标准修订》特邀顾问、腾讯视频客座育儿专家、亲子沟通专家
                    </p>
                </li>
                <li>
                    <div
                        style="background-image: url(/_nuxt/img/6.941822f.jpg)"
                    >
                        <label>曹宇</label>
                    </div>
                    <p>
                        原上海市教育科学研究院学前教育部研究员、北京奕阳教育集团旗下幼儿园教学总园长
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
// .zydjytd {
//     background: #fff;
//     font-family: PingFangSC-Regular;
//     .zydjytd-content {
//         width: 1024px;
//         margin: 0 auto;
//         padding-top: 48px;
//         h2 {
//             margin-bottom: 7px;
//             font-size: 34px;
//             font-family: PingFangSC-Semibold;
//             font-weight: 600;
//             color: #222;
//             line-height: 48px;
//             letter-spacing: 1px;
//         }
//         h3 {
//             font-size: 18px;
//             font-family: PingFangSC-Light;
//             font-weight: 300;
//             color: #666;
//             line-height: 25px;
//             margin-bottom: 53px;
//         }        
//     }
// }
.img-wrap {
    font-size: 0;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 30px;
    justify-items: center;
    li {
        width: 190px;
    }
    div {
        position: relative;
        width: 190px;
        height: 190px;
        margin-bottom: 18px;
        border-radius: 50%;
        background-position: top;
        background-size: cover;
    }
    .label {
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 14px;
        font-family: PingFangSC-Light;
        font-weight: 300;
        color: #fff;
        background: #42cacc;
        border-radius: 0 10px 0 0;
        padding: 0 10px;
        line-height: 24px;
        min-width: 60px;
    }
    p {
        font-size: 13px;
        font-family: PingFangSC-Light;
        font-weight: 300;
        color: #222;
    }
}
</style>