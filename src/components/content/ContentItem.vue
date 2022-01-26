<template>
    <router-link :to="{ name: urlName , params:{departmentId: departmentId, name : item.name}}" class="item" :class="[className]">
        <img :src= "imageUrl" :alt="item.name" ref="altimage" :style="{'line-height': lineHeight }" >
        <div class="text-area">
            <div>
                <span class="subtitle">{{ item.name }}</span>
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
import {onBeforeMount, ref, computed, toRefs, reactive, onMounted} from 'vue'
import {useStore} from 'vuex'
import {useRoute, useRouter} from 'vue-router'

import {readPlanImage} from '@/firestore/firestoreFunc.js'

export default {
    name: "ContentItem",
    components :{
        ContentItemSummary,
        ContentItemDescription,
    },
    props: {
        item: {
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
        const {item , className, urlName, departmentId} = toRefs(props)

        const text = computed(() => {
            if (route.path === '/'){
                return 'ContentItemSummary'
            }else if (route.path === '/donation-projects'){
                return 'ContentItemDescription'
            }
        })
        
        const content = computed( () => {
            if (route.path === '/'){
                return item.value.description
            }else if (route.path === '/donation-projects'){
                return "full description"
            }
        })

        const imageUrl = ref("")
        readPlanImage(departmentId.value, item.value.name).then((result) => {
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
            item,
            className,
            urlName,
            departmentId,
            imageUrl,
            altimage,
            lineHeight
        }
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