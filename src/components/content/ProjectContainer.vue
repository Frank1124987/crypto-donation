<template>
    <div class="block">
        <h1 class="my-4">{{ title }}</h1>
        <div class="row  row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5  overflow-scroll flex-nowrap">
            <ProjectItem 
                v-for="(item, id) in items" 
                :key="id" 
                :project="item.plan"
                :className="className" 
                :urlName="urlName"
                :departmentId = "item.department"
                />
        </div>
    </div>
</template>

<script>
import { stringifyQuery } from 'vue-router'
import ProjectItem from "./ProjectItem.vue"
export default {
    name: "ProjectContainer",

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
        ProjectItem
    }

}
</script>

<style lang="scss" scoped>
.row {
    
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