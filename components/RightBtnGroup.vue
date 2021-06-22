<template>
    <div class="right-btn-group">
        <div class="download-btn" @mouseover="switchDownloadApp(true)" @mouseout="switchDownloadApp(false)">
            下载<br />APP
        </div>
        <div class="return-top-btn" @click="returnTop">
            <i
                class="icon iconfont icon-huidingbu"
            ></i>
        </div>
        <div class="download-app" v-show="showDownloadApp">
            <img
                src="/_nuxt/img/download-qrcode-2.20a2683.png"
               
            /><span class="close" @click="switchDownloadApp(false)"></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RightBtnGroup',
    data() {
        return {
            showDownloadApp: true
        }
    },
    methods: {
        switchDownloadApp(bool) {
            this.showDownloadApp = bool;
        },
        returnTop() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }
}
</script>
<style lang="scss" scoped>
.right-btn-group {
    font-family: PingFangSC-Regular;
    width: 70px;
    height: 150px;
    position: fixed;
    bottom: 100px;
    right: 20px;
    z-index: 99;
    cursor: pointer;
    transform: translateZ(1px);
    .download-btn {
        width: 66px;
        height: 53px;
        border-radius: 66px;
        color: #fff;
        background: #54d2d5;
        margin-bottom: 10px;
        text-align: center;
        font-size: 16px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        line-height: 20px;
        padding-top: 13px;
        box-shadow: 0 2px 15px rgb(93 93 93 / 10%);
        &:hover {
            background: #fac659;
        }
    }
    .download-app {
        width: 320px;
        height: 206px;
        position: absolute;
        right: 50px;
        top: 7px;
        span.close {
            position: absolute;
            right: 18px;
            top: 8px;
            width: 32px;
            height: 32px;
            background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAASpJREFUOBGt1DEOgjAUBmBg9QSObo4G2I2Tq25ujq56CqOLHkEnvYWbE5CweQ0HJwj4/wINKC1FbSJNX8tny3up4XleNwiCmfFDC8Ow5/v+lISFNkyS5ITA7hsTG+pHUXRN03T9Am3bPpumuUdg2RYlBuSSb2TC3swHBjGixB3HWRVxWf+GjVzXvXGtADnQRWXYB6iDqrBaUIU2YVKwDtXBlGAZRWkdUVpjxtBEArJh9VlJSnUqG6HoD8DmyP4DVYBkZtmsW8uYJZtgnMfkznKsg36hWs85KVj+ZtwZ61On+GuPXMbwp+Kb6dTpByjDiqM2oRWwCdNBBaiLNaEvsC2mQi1ejlhQXEEiAcVLqp63Uin7G6614jgeoL/j1wrjy2w5ukVJDbPIn59PRWXwXoMVlOIAAAAASUVORK5CYII=) no-repeat 50%;
            background-size: 10px 10px;
            border-radius: 32px;
        }
    }
    .return-top-btn {
        width: 66px;
        height: 66px;
        border-radius: 66px;
        color: #54d2d5;
        background: #fff;
        border: 2px solid #54d2d5;
        text-align: center;
        line-height: 66px;
        box-shadow: 0 2px 15px rgb(93 93 93 / 10%);
        i {
            font-size: 28px;
            font-family: PingFangSC-Medium;
            font-weight: 700;
            line-height: 28px;
            position: relative;
            top: 5px;
            &:before {
                display: inline-block;
                vertical-align: top;
            }
        }
    }
}
</style>