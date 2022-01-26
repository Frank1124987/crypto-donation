<template>
    <div>
        <div>
            <h1>
                {{ $route.params.departmentId }} 
                <br>
                Current user : {{ userId}}
            </h1>
            <div class="plan-registeration">
                <div>
                    <h2>登記專案</h2>
                    <form @submit.prevent="registerPlan">
                        <div>
                            <p id="address" type="text"> current address: {{ address }} </p>
                        </div>
                        <div>
                            <label for="planName">專案名稱:</label>
                            <br>
                            <input id="planName" type="text" v-model="planName" required >
                        </div>
                        <div>
                            <label for="goal">目標(wei):</label>
                            <br>
                            <input id="goal" type="number" v-model="goal">
                        </div>
                        <div>
                            <label for="descritpion">描述:</label>
                            <br>
                            <input id="descritpion" type="text" v-model="descritpion" required>
                        </div>
                        <br>
                        <AppImagePreview @get-image="updateImage"/>
                        <input type="submit" value="提交">
                    </form>
                </div>
                <div>
                    <h2>登記NFT</h2>
                    <RegisterNFT
                        :plans="plans"
                    />
                </div>
            </div>
        </div>
        <br>
        <!-- <div v-for="(plan, id) in plans" :key="id">
            <Plan :plan="plan">
            </Plan>
        </div> -->
    </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router'
import {onBeforeMount, ref, computed, watchEffect} from 'vue'
import {web3, contract} from '@/contract/contract.js'
import {useStore} from 'vuex'

import RegisterNFT from "@/components/nft/RegisterNFT.vue"
import Plan from '@/components/plan/PlanTemp.vue'
import AppImagePreview from "@/components/AppImagePreview.vue"

import { createPlan } from "@/firestore/firestoreFunc.js"

export default {
    components: {
        Plan,
        RegisterNFT,
        AppImagePreview
    },
    setup(props) {
        const route = useRoute()
        const router = useRouter()
        const store = useStore()

        const planName = ref("")
        const goal = ref(0)
        const descritpion = ref("")
        const address = ref("")
        const image = ref("");
        
        // Get plan in the beginning
        store.dispatch("fetchPlan", route.params.departmentId)

        const registerPlan = async () => {
            createPlan(route.params.departmentId, planName.value, image.value)

            contract.methods.createPlan(route.params.departmentId, planName.value, descritpion.value, goal.value)
                .send({
                    from : address.value,
                    gas : 9187500,
            }).then(() => {
                
            }).catch(window.alert)
        }

        onBeforeMount( async () => {
            const temp = await web3.eth.getAccounts()
            if (temp === undefined){
                address.value = "not connected"
            }else{
                address.value = temp[0]
            }
        })

        const updateImage = (imageTemp) => {
            image.value = imageTemp
        }

        return{
            planName,
            goal,
            descritpion,
            address,
            plans: computed(() => store.state.plan),
            userId: computed(() => store.state.user.ethereumId),
            image,
            registerPlan,
            updateImage
        }
    }
}
</script>

<style scoped>
.plan-registeration{
    display: flex;
}
.plan-registeration > div{
    width: 50%;
}
.preview-img {
    width: 50%;
}
</style>
