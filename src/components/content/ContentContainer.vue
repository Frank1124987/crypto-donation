<template>
    <div class="block">
        <h1>{{ info.title }}</h1>
        <div :class="[classContainer]">
            <ContentItem 
                v-for="item in info.item" 
                :key="item.id" 
                :item="item"
                :className="info.className" 
                />
        </div>
    </div>
</template>

<script>
import ContentItem from "../content/ContentItem.vue"

export default {
    name: "ContentContainer",

    props: {
        info: {
            type: Object,
            required: true
        }
    },

    data () {
        return {
            classContainer : 'container-' + this.info.className 
        }
    },

    components: {
        ContentItem
    }

}
</script>

<style scoped>
.container-donation-project {
    display: flex;

    overflow-x: auto;
    flex-wrap: nowrap;
    
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scrollbar-width: none;
}
.container-donation-project::-webkit-scrollbar {
    display: none;
}

.container-nft-item {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
}

.block{
    margin-bottom: 4%;
}
</style>