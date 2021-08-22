<template>
    <div class="project-page">   
        <h1>
            {{ project.title }}
        </h1>
        <div>
            <div class="left-column">
                <img :src="require('@/assets' + project.image )">
                <ProjectDonateChart :date="project.date" :donation="project.donation" :id="project.id" blockWidth="100%"/>
            </div>
            <div class="right-column">   
                <ContentItemDescription :content="project.content" />
            </div>
        </div>
    </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {inject, reactive} from 'vue'
import ProjectDonateChart from '@/components/content/ProjectDonateChart.vue'
import ContentItemDescription from '@/components/content/ContentItemDescription.vue'

export default {
    components: {
        ProjectDonateChart,
        ContentItemDescription
    },
    setup(){
        const projects_db = inject('projects_db')
        const route = useRoute()
        const project = reactive(projects_db.item.find( element => element.id == route.params.id ))
        

        return {
            project
        }
    }
}
</script>

<style scoped>
.project-page > div{
    display: flex;
}

.left-column{
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.left-column img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 15px;
}

.left-column > * {
    margin-bottom: 4%;
}

.right-column {
    width: 75%;
    margin: 0 4% 0 4%;
}

</style>