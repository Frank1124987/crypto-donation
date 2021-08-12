<template>
    <div class="item">
        <img :src= "require('../assets' + item.image)" >
        <div>
            <div>
                <span style="font-size: 25px">{{ item.title }}</span>
            </div>
            <div>
                <span style="font-size: 17px">{{ item.content }}</span>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "ContentItem",

    props: {
        item: {
            type: Object,
            required: true
        }
    },

    data(){
        return {
            
        }
    },

    methods: {
    }
}
</script>

<style scoped>
.item {
    padding: 1% 2% 1% 0;
    display: flex;
    cursor: pointer;
    flex: 0 0 auto;

    
}
</style>