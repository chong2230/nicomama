1. nuxt引用static或者assets目录下资源注意事项

Nuxt 服务器启动后，会将static文件目录映射到根路径/下。

所以想引用static目录下图片，直接写法如下

<img src="/log.png"/>

引用assets目录下文件，写法如下

<img src="~/assets/logo.png"/>

2. Vscode 格式化vue Template代码段

1.安装 vetur

2.在User Setting中增加设置:

`
"vetur.format.options.useTabs": true,
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_attributes": "auto"
        },
        "prettier": {
            "singleQuote": true,
            "semi": true,
            "tabWidth": 4
        },
        "prettyhtml": {
            "singleQuote": false,
            "wrapAttributes": false,
            "sortAttributes": false
        }
    }
`
 
3.搞定
 
格式化快捷键：Alt+Shift+F

3. 滚动条滚动到指定位置(锚点)的不同实现方式

[https://www.cnblogs.com/catherLee/p/13426069.html](https://www.cnblogs.com/catherLee/p/13426069.html)

4. Nuxt引入vue-lazyload图片懒加载

[https://blog.csdn.net/AK852369/article/details/115611739](https://blog.csdn.net/AK852369/article/details/115611739)

5. Nuxt使用vue-awesome-swiper的填坑过程

[https://www.yuque.com/shuimen-jl49h/ebptzz/xazwgv](https://www.yuque.com/shuimen-jl49h/ebptzz/xazwgv)

[https://blog.csdn.net/u012570307/article/details/107203851/](https://blog.csdn.net/u012570307/article/details/107203851/)