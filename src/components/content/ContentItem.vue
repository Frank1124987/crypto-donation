<template>
    <router-link :to="{ name: urlName , params:{id : item.id}}" class="item" :class="[className]">
        <img :src= "require('../../assets' + item.image)" >
        <div class="text-area">
            <div>
                <span class="subtitle">{{ item.title }}</span>
            </div>
            <div>
                <component :is="text" :content="content"/>
            </div>
        </div>
    </router-link>
</template>

<script>
import ContentItemSummary from './ContentItemSummary.vue'
import ContentItemDescription from './ContentItemDescription.vue'

export default {
    name: "ContentItem",
    components :{
        ContentItemSummary,
        ContentItemDescription,
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        
        className : {
            type: String,
            required: true
        },
        urlName :{
            type : String,
            required: true
        }
    },
    data() {
        return {
            active: true
        }
    },
    computed: {
        text(){
            if (this.$route.path === '/'){
                return 'ContentItemSummary'
            }else if (this.$route.path === '/donation-projects'){
                return 'ContentItemDescription'
            }
        },
        content(){
            if (this.$route.path === '/'){
                return this.item.summary
            }else if (this.$route.path === '/donation-projects'){
                return this.item.content
            }
        },

    }
}
</script>

<style scoped>
.item {
    margin: 1% 2% 1% 0;
    display: flex;
    cursor: pointer;
    flex: 0 0 auto;
}

img {
    border-radius: 15px;
}

/* Donation Project Style */
.donation-project {
    flex-direction: column;
    width: 31%;
}

.donation-project img {
    width: 100%;
    aspect-ratio: 1/1;   
}
.donation-project > div.text-area{
    margin-top: 2%;
}


/* NFT List Style */
.nft-item{
    justify-content: start;
    align-items: center;
    width: 18%;
}
.nft-item img{
    width: 25%;
    aspect-ratio: 1/1;
}
.nft-item > div.text-area{
    margin-left: 2%;
}

/* donation projects all */
.donation-projects-main {
    width: 75%;
    margin: 2% 0 2% 0;
    align-items: center;
}

.donation-projects-main img{
    width: 33%;
    
    aspect-ratio: 1 / 1;
}

.donation-projects-main > div.text-area {
    width: 67%;
    padding : 1%;
}


</style>