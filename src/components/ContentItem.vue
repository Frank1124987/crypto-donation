<template>
    <div class="item" :class="[classObject]">
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
        },
        
        className : {
            type: String,
            required: true
        }
    },

    data(){
        return {
            classObject : this.className
        }
    },
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
    margin: 0 10px 10px 0;
}

/* Donation Project Style */
.donation-project {
    flex-direction: column;
    width: 31%;
}

.donation-project img {
    width: 100%;
    height: auto;   
}

/* NFT List Style */
.nft-item{
    justify-content: start;
    align-items: center;
    width: 18%;
}
.nft-item img{
    width: 60px;
    height: 60px;
}

</style>