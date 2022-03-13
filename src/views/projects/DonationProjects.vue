<template>

    <div id="donation-projects" class="container-donation-projects">
        <div id="donation-projects-main-header">
            <div>
                <h1>
                    所有專案
                </h1>
            </div>
            <div id="donation-projects-main-header-filter">
                <Filter/>
            </div>
        </div>
        <div v-for="item in projects_db.item" :key="item.id" class="donation-projects-main-content " >
            <!-- <ContentItem                
                :item="item"
                :className="main" 
                :urlName="projects_db.urlName"
                /> -->
            
            <ProjectDonateChart :date="item.date" :donation="item.donation" :id="item.id"/>
        </div>
    </div>
</template>

<script>
import { inject, ref } from 'vue'
import ProjectItem from '/src/components/content/ProjectItem.vue'
import ProjectDonateChart from '/src/components/content/ProjectDonateChart.vue'
import Filter from '/src/components/Filter.vue'

export default ({
    components : {
        ProjectItem,
        ProjectDonateChart,
        Filter
    },
    setup() {
        const projects_db = inject('projects_db')
        
        const main = 'donation-projects-main'

        return {
            projects_db,
            main,
        }

    },
})
</script>



<style scoped>
#donation-projects-main-header {
    align-items: center;
}
#donation-projects-main-header > div{
    display: inline-block;
}
.donation-projects-main-content {
    display: flex;
    align-items: center;
}

#donation-projects-main-header-filter{
    margin: 0 3% 0 3%;
    width: auto;
}

</style>
