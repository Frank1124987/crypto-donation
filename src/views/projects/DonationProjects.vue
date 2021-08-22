<template>

    <div id="donation-projects" class="container-donation-projects">
        <div class="donation-projects-main-header">
            <div>
                <h1>
                    所有專案
                </h1>
            </div>
            <div>
                filter
            </div>
        </div>
        <div v-for="item in projects_db.item" :key="item.id" class="donation-projects-main-content " >
            <ContentItem                
                :item="item"
                :className="main" 
                :urlName="projects_db.urlName"
                />
            
            <ProjectDonateChart :date="item.date" :donation="item.donation" :id="item.id"/>
        </div>
    </div>
</template>

<script>
import { inject, ref } from 'vue'
import ContentItem from '/src/components/content/ContentItem.vue'
import ProjectDonateChart from '/src/components/content/ProjectDonateChart.vue'

export default ({
    components : {
        ContentItem,
        ProjectDonateChart
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
.donation-projects-main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.donation-projects-main-content {
    display: flex;
    align-items: center;
}
</style>
