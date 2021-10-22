<template>
    <div class="plan">
        <h2>
            {{ plan.name}}
        </h2>
        <h3>
            {{ plan.description}}
        </h3>
        <h3>
            已募金額：{{ plan.accumulate }}
        </h3>
        <form @submit.prevent="donate">
            <p>使用者ID：{{ userId }} | 部門ID：{{ $route.params.departmentId }}</p>
            <input type="number" v-model="amount">
            <input type="submit" value="捐款">
        </form>

    </div>
</template>

<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {contract} from '@/contract/contract.js'
export default{
    props: {
        plan: {
            type: Object
        }
    },
    setup(props) {
        const store = useStore()
        const route = useRoute()

        const plan = ref(props.plan)
        const amount = ref(0)
        const donate = () => {

            contract.methods.donate(store.state.user.id, route.params.departmentId, plan.value.name).send({
                from: store.state.user.address,
                gas : 6721975,
                gasPrice : '30000000',
                value: amount.value
            }).then((result) => {
                console.log("result",result)
                contract.methods.getPlan(route.params.departmentId, plan.value.name).call().then(console.log)
            }).catch(console.log)
        }
        return {
            plan,
            userId: computed(() => store.state.user.id),
            amount,
            donate
        }
    }
}
</script>

<style scoped>
.plan{
    padding : 2%;
    border-style: solid;
    margin: 1% 0 1% 0;
}
</style>