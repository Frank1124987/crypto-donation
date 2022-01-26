<template>
    <div class="block">
        <h1>{{ title }}</h1>
        <div :class="[classContainer]">
            <ContentItem 
                v-for="(item, id) in items" 
                :key="id" 
                :item="item.plan"
                :className="className" 
                :urlName="urlName"
                :departmentId = "item.department"
                />
        </div>
    </div>
</template>

<script>
import { stringifyQuery } from 'vue-router'
import ContentItem from "../content/ContentItem.vue"
export default {
    name: "ContentContainer",

    props: {
        items: {
            type: Object,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        className: {
            type: String,
            required: true
        },
        urlName: {
            type: String,
            required: true
        }
    },

    data () {
        return {
            classContainer : 'container-' + this.className 
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