<template>
    <div>
        <div>
            <h1>
                {{ $route.params.departmentId }} 
                <br>
                Current user : {{ userId}}
            </h1>
            <form @submit.prevent="registerPlan">
                <div>
                    <label for="address">地址: </label>
                    <br>
                    <input id="address" type="text" v-model="address" >
                </div>
                <div>
                    <label for="planId">ID: </label>
                    <br>
                    <input id="planId" type="text" v-model="planId" >
                </div>
                <div>
                    <label for="planName">專案名稱:</label>
                    <br>
                    <input id="planName" type="text" v-model="planName" >
                </div>
                <div>
                    <label for="goal">目標:</label>
                    <br>
                    <input id="goal" type="number" v-model="goal">
                </div>
                <div>
                    <label for="descritpion">描述:</label>
                    <br>
                    <input id="descritpion" type="text" v-model="descritpion">
                </div>
                <br>
                <input type="submit" value="提交">
            </form>
        </div>
        <br>
        <div v-for="(plan, id) in plans" :key="id">
            <Plan :plan="plan">
            </Plan>
        </div>
    </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router'
import {onBeforeMount, ref, computed} from 'vue'
import {web3, contract} from '@/contract/contract.js'
import {useStore} from 'vuex'
import Plan from '@/components/plan/PlanTemp.vue'

export default {
    components: {
        Plan
    },
    setup(props) {
        const route = useRoute()
        const router = useRouter()
        const store = useStore()

        const planId = ref("")
        const planName = ref("")
        const goal = ref(0)
        const descritpion = ref("")

        const registerPlan = async () => {
            const address = await web3.eth.getAccounts()
            contract.methods.createPlan(route.params.departmentId, planName.value, descritpion.value, goal.value)
                .send({
                    from : address[0],
                    gas : 9187500,
            }).catch(window.alert)
        }
        
        // onBeforeMount(() => {
        //     if (store.state.user.ethereumId == null){
        //         // window.alert("Has not register!")
        //         router.replace('/register-donor')
        //     }
        // })
        store.dispatch("fetchPlan", route.params.departmentId)
        return{
            planId,
            planName,
            goal,
            descritpion,
            address: computed(() => store.state.user.address),
            plans: computed(() => store.state.plan),
            userId: computed(() => store.state.user.ethereumId),
            registerPlan
        }
    }
}
</script>

<style scoped>

</style>