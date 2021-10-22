<template>
    <div>
        <div>
            <h1>
                {{ $route.params.departmentName }} 
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
import {contract} from '@/contract/contract.js'
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

        const registerPlan = () => {
            contract.methods.createPlan(route.params.departmentId, planName.value, descritpion.value, goal.value)
                .send({
                    from : store.state.user.address,
                    gas : 6721975,
                    gasPrice : '30000000'
            })
        }
        
        return{
            planId,
            planName,
            goal,
            descritpion,
            address: computed(() => store.state.user.address),
            plans: computed(() => store.state.plan),
            userId: computed(() => store.state.user.id),
            registerPlan
        }
    }
}
</script>

<style scoped>

</style>