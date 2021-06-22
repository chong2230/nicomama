<template>
    <div class="container">
        <Header />
        <ArticleDetail />
        <RightBtnGroup />
        <Footer ref="footer" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            posts: []
        }
    },
    // mounted() {
    //     this.fetch();
    // },
    // methods: {
    //     async fetch() {
    //         const id = this.$route.params.id;
    //         console.log(id);
    //         this.posts = await fetch('https://api.nuxtjs.dev/posts').then(res =>
    //             res.json()
    //         );
    //         console.log('posts: ', this.posts);
    //     },
    // }
}
</script>
<style lang="scss" scoped>
.container {
    font-family: PingFangSC-Regular;
}
</style>