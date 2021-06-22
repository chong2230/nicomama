<template>
    <div class="gywm scroll-target-gywm" data-v-2a183b29="">
        <div class="gywm-content clearfixed">
            <div class="_left">
                <div class="content">
                    <h2>关于我们</h2>
                    <h3>ABOUT US</h3>
                    <p>
                        “致力于持续改善社会育儿认知和养育环境”是我们的使命<br/>
                        用科学的育儿知识帮助宝宝更好的成长<br/>
                        让他们的启蒙之路充满快乐和精彩<br />
                        我们，会一直努力下去～
                    </p>
                    <span class="start-btn"><i class="icon iconfont icon-play"></i></span>
                </div>
            </div>
            <div class="_right"></div>
            <div class="video-wrap" style="display: none">
                <div
                    id="player-con"
                   
                    class="prism-player"
                    style="width: 100%; height: 100%"
                >
                    <video style="width: 100%; height: 100%"></video>
                    <div
                        class="prism-hide"
                        id="player-con_component_56660F8A-D390-470A-9E30-EF2CBC8BF3B3"
                        style="position: absolute; left: 50%; top: 50%; margin-top: 0px; margin-left: 0px; "
                    >
                        <div class="circle"></div>
                        <div class="circle1"></div>
                    </div>
                    <div
                        class="prism-ErrorMessage"
                        id="player-con_component_C057FF4A-A095-4978-8B06-72473DD04A8C"
                        style="position: absolute; left: 0px; top: 0px"
                    >
                        <div class="prism-error-content"><p></p></div>
                        <div class="prism-error-operation">
                            <a class="prism-button prism-button-refresh">刷新</a
                            ><a
                                class="prism-button prism-button-retry"
                                target="_blank"
                                >重试</a>
                            <a
                                class="prism-button prism-button-orange"
                                target="_blank">诊断</a>
                        </div>
                        <div class="prism-detect-info prism-center">
                            <p class="errorCode">
                                <span class="info-label">code：</span
                                ><span class="info-content"></span>
                            </p>
                            <p class="vid">
                                <span class="info-label">vid:</span
                                ><span class="info-content"></span>
                            </p>
                            <p class="uuid">
                                <span class="info-label">uuid:</span
                                ><span class="info-content"></span>
                            </p>
                            <p class="requestId">
                                <span class="info-label">requestId:</span
                                ><span class="info-content"></span>
                            </p>
                            <p class="dateTime">
                                <span class="info-label">播放时间：</span
                                ><span class="info-content"></span>
                            </p>
                        </div>
                    </div>
                    <p
                        class="prism-info-display"
                        id="player-con_component_A72F33E0-1BE9-429E-8A92-DB47668190EA"
                        style="float: left; margin-left: 0px; margin-top: 0px"
                    ></p>
                    <p
                        class="prism-tooltip"
                        id="player-con_component_B39FD4E4-48B8-4D43-9FBF-C38BFB4B1850"
                        style="position: absolute; left: 0px; bottom: 56px"
                    >
                        提示信息
                    </p>
                    <div
                        class="prism-thumbnail"
                        id="player-con_component_C6148774-2E64-4783-B425-31FB65441B7E"
                        style="float: left; margin-left: 0px; margin-top: 0px"
                    >
                        <img /><span></span>
                    </div>
                    <div
                        class="prism-volume-control"
                        id="player-con_component_8F951091-DF74-411B-8E7A-9B86CF619F62"
                        style="float: right; margin-right: 5px; margin-top: 10px;"
                    >
                        <div class="volume-range">
                            <div class="volume-value"></div>
                            <div class="volume-cursor"></div>
                        </div>
                    </div>
                    <div
                        class="prism-controlbar"
                        id="player-con_component_88A35AE5-8099-4356-827B-9A04D3FE6C5B"
                        style="display: none; position: absolute; left: 0px; bottom: 0px; "
                    >
                        <div class="prism-controlbar-bg"></div>
                        <div
                            class="prism-progress"
                            id="player-con_component_4DBEFA2A-69E6-4F18-816F-4A2C84830C9F"
                            style="position: absolute; left: 0px; bottom: 44px"
                        >
                            <div class="prism-progress-loaded"></div>
                            <div class="prism-progress-played"></div>
                            <div class="prism-progress-cursor">
                                <img
                                    src="https://g.alicdn.com/de/prismplayer/2.7.1/skins/default/img/dragcursor.png"
                                />
                            </div>
                            <p class="prism-progress-time"></p>
                        </div>
                        <div
                            class="prism-play-btn"
                            id="player-con_component_3905A04F-1DF6-4E5B-BFC1-28DB3CF1214C"
                            style="float: left; margin-left: 15px; margin-top: 12px;"
                        ></div>
                        <div
                            class="prism-time-display"
                            id="player-con_component_A51C955D-E4D6-4CE8-932D-40FB2A82BB2F"
                            style="float: left; margin-left: 10px; margin-top: 7px;"
                        >
                            <span class="current-time">00:00</span>
                            <span class="time-bound">/</span>
                            <span class="duration">00:00</span>
                        </div>
                        <div
                            class="prism-fullscreen-btn"
                            id="player-con_component_02100E49-1B44-4C8C-8F7C-1262AD54E07B"
                            style="float: right; margin-right: 10px; margin-top: 12px;"
                        ></div>
                        <div
                            class="prism-volume"
                            id="player-con_component_555581BE-32D2-4ADD-9D79-FE4EE84F88CB"
                            style="float: right; margin-right: 5px; margin-top: 10px;"
                        >
                            <div class="volume-icon">
                                <div class="short-horizontal"></div>
                                <div class="long-horizontal"></div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="prism-cover"
                        id="player-con_component_93C44081-C4F9-4234-A4FF-B5EACED88788"
                        style="background-image: url('https://staticimg.ngmm365.com/7375f7907983e1a14e8f9f07c979b1d0-w941_h529.jpeg'); float: left; margin-left: 0px; margin-top: 0px;"
                    ></div>
                    <div
                        class="prism-animation"
                        id="player-con_component_2210C69A-E67D-434F-8C47-48EF132B722C"
                        style="float: left; margin-left: 0px; margin-top: 0px"
                    ></div>
                    <div
                        class="prism-auto-stream-selector"
                        id="player-con_component_B37502DA-2944-40DC-932C-CF6CE7C57952"
                        style="float: left; margin-left: 0px; margin-top: 0px"
                    >
                        <div><p class="tip-text"></p></div>
                        <div class="operators">
                            <a
                                class="prism-button prism-button-ok"
                                type="button"
                                >确认</a
                            ><a
                                class="prism-button prism-button-cancel"
                                target="_blank"
                                >取消</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.gywm {
    background: #54d2d5;
    .gywm-content {
        width: 100%;
        min-width: 1024px;
        margin: 0 auto;
        position: relative;
        height: 704px;
        ._left {
            width: 45%;
            height: 100%;
            color: #fff;
            position: relative;
            .content {
                padding-top: 56px;
                max-width: 460px;
                position: absolute;
                right: 43px;
                h2 {
                    font-size: 34px;
                    font-family: PingFangSC-Medium;
                    font-weight: 500;
                    line-height: 48px;
                    margin-bottom: 4px;
                }
                h3 {
                    font-size: 18px;
                    font-family: PingFangSC-Light;
                    font-weight: 300;
                    line-height: 25px;
                    letter-spacing: 2px;
                    margin-bottom: 23px;
                }
                p {
                    font-weight: 400;
                    line-height: 30px;
                    letter-spacing: 2px;
                    margin-bottom: 108px;
                    font-family: PingFangSC-Light;
                }
                .start-btn {
                    display: block;
                    width: 70px;
                    height: 70px;
                    line-height: 70px;
                    border: 4px solid #fff;
                    border-radius: 100%;
                    box-sizing: border-box;
                    position: relative;
                    transition: all .1s;
                    cursor: pointer;
                    &:hover {
                        transform: scale(1.2);
                    }
                    i {
                        font-size: 44px;
                        line-height: 44px;
                        font-weight: 700;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translateX(-45%) translateY(-50%);
                        &:before {
                            display: inline-block;
                            vertical-align: top;
                        }
                    }
                }
            }
        }
        ._right {
            position: absolute;
            left: 45%;
            top: 0;
            background: url(/_nuxt/img/video.09498ec.jpeg) no-repeat 50%;
            background-size: cover;
            width: 55%;
            height: 100%;
        }
        .video-wrap {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
    }
}
</style>