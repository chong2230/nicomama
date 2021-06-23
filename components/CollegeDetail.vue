<template>
    <div class="college-detail-wrap">
        <div class="detail2">
            <img                
                v-lazy="item"
                v-for="(item, index) in list"
                :key="index"
            />
        </div>
    </div>
</template>
<script>
import Config from '@/assets/js/config.js';
import { getQueryString } from '@/assets/js/util.js';
export default {
    data() {
        return {            
            list: []
        }
    },
    async fetch() {
        let category = getQueryString('category');
        let id = getQueryString('id');
        let url = Config.httpServer + '/college/detail?category='+category+'&id='+id;  
        const res = await fetch(url).then(res =>
            res.json()
        );
        this.info = res.data || {};  
        if (this.info.content) {
            this.list = this.info.content.split(',');
        } 
        
    },
    fetchOnServer: false,
    mounted() {
        console.log('mounted college detail')
    }
}
</script>