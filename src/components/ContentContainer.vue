<template>
    <h1>{{ info.title }}</h1>
    <ContentItem 
        v-for="item in info.item" 
        :key="item.id" 
        :item="item"/>

</template>

<script>
import ContentItem from "./ContentItem.vue"

export default {
    name: "ContentContainer",

    props: {
        info: {
            type: Object,
            required: true
        }
    },

    components: {
        ContentItem
    }

}
</script>

<style scoped>

</style>