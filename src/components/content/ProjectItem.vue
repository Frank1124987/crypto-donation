<template>
    <div class="col pb-4 ">
        <router-link :to="{ name: urlName , params:{departmentId: departmentId, name : project.name}}" class="item" :class="[className]">
            <div class="card border-0 shadow  bg-body "  >
                <img :src= "imageUrl" :alt="project.name" ref="altimage">
                <div class="card-body"> 
                    <h5 class="card-title overflow-hidden fw-bold">
                        {{ project.description }}
                    </h5>
                    <p class="card-text overflow-hidden">
                        {{ project.name }}
                    </p>
                </div>
                <div class="card-footer bg-white border-0">
                    <div class="row pb-2">
                        <div class="col-12 col-sm-4" >
                            ${{project.accumulate}}
                        </div>
                        <div class="col col-sm-4 d-none d-sm-block text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                        </div>
                        <div class="col-12 col-sm-4 text-sm-end text-start">
                            ${{project.goal}}
                        </div>
                    </div>
                    <div class="progress progress-bar-h" >
                        <div class="progress-bar bg-danger" role="progressbar" :style="{width: donate + '%'}" >
                        </div>
                    </div>
                </div>
            </div>
            <!-- <img :src= "imageUrl" :alt="project.name" ref="altimage" :style="{'line-height': lineHeight }" >
            <div class="text-area">
                <div>
                    <span class="subtitle">{{ project.name }}</span>
                </div>
                <div>
                    <component :is="text" :content="content"/>
                </div>
            </div> -->
        </router-link>
    </div>
</template>

<script>
import ContentItemSummary from './ContentItemSummary.vue'
import ContentItemDescription from './ContentItemDescription.vue'
import {onBeforeMount, ref, computed, toRefs, reactive, onMounted} from 'vue'
import {useStore} from 'vuex'
import {useRoute, useRouter} from 'vue-router'

import {readPlanImage} from '@/firestore/firestoreFunc.js'

export default {
    name: "ProjectItem",
    components :{
        ContentItemSummary,
        ContentItemDescription,
    },
    props: {
        project: {
            type: Object,
        },
        
        className : {
            type: String,
            required: true
        },
        urlName :{
            type : String,
            required: true
        },
        departmentId :{
            type : String,
            required: true
        }
    },
    setup(props){
        const route = useRoute()
        const router = useRouter()
        const {project , className, urlName, departmentId} = toRefs(props)
        const donate = ref(0)

        donate.value = (parseInt(project.value.accumulate) / parseInt(project.value.goal)) * 100
        console.log(donate.value)
        const text = computed(() => {
            if (route.path === '/'){
                return 'ContentItemSummary'
            }else if (route.path === '/donation-projects'){
                return 'ContentItemDescription'
            }
        })
        
        const content = computed( () => {
            if (route.path === '/'){
                return project.value.description
            }else if (route.path === '/donation-projects'){
                return "full description"
            }
        })

        const imageUrl = ref("")
        readPlanImage(departmentId.value, project.value.name).then((result) => {
            imageUrl.value = result
        }).catch(console.log)

        const altimage = ref(null)
        const lineHeight = ref(0)
        onMounted(() => {
            lineHeight.value = altimage.value.getBoundingClientRect().height + "px"
        })

        
        return{
            text,
            content,
            project,
            className,
            urlName,
            departmentId,
            imageUrl,
            altimage,
            lineHeight,
            donate
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    // border-top-left-radius: 0.5em;
    // border-top-right-radius: 0.5em;

    border-radius: 0.5em;

    img {
        border-top-left-radius: 0.25em;
        border-top-right-radius: 0.25em;
        
        aspect-ratio: 1/0.75;
    }


    .card-body{
        aspect-ratio: 1/0.4 !important;


        .card-title{
            height: 56px;
            line-height: 28px;
        }

        .card-text{
            height: 28px;
        }
    }

    .card-footer{
        border-bottom-left-radius: 0.5em;
        border-bottom-right-radius: 0.5em;
    }
}

.item {
    // margin: 1% 2% 1% 0;
    cursor: pointer;
}


.progress-bar-h{
    height: 8px;
}

/* Donation Project Style */
// .donation-project {
//     flex-direction: column;
//     width: 31%;
// }

// .donation-project img {
//     width: 100%;
//     // aspect-ratio: 1/1;   
// }
// .donation-project > div.text-area{
//     margin-top: 2%;
// }

/* donation projects all */
// .donation-projects-main {
//     width: 75%;
//     margin: 2% 0 2% 0;
//     align-items: center;
// }

// .donation-projects-main img{
//     width: 33%;
    
//     aspect-ratio: 1 / 1;
// }

// .donation-projects-main > div.text-area {
//     width: 67%;
//     padding : 1%;
// }


</style>