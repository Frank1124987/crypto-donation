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
import {useRoute, useRouter} from 'vue-router'
import {web3, contract} from '@/contract/contract.js'
export default{
    props: {
        plan: {
            type: Object
        }
    },
    setup(props) {
        const store = useStore()
        const route = useRoute()
        const router = useRouter()

        const plan = ref(props.plan)
        const amount = ref(0)
        
        const donate = async () => {
            const address = await web3.eth.getAccounts()
            console.log("plan initial:", plan.value)
            console.log(address[0])
            //  TODO : verify the ethereum address
            contract.methods.registerLoginAddress(store.state.user.ethereumId, address[0]).send({
                from : address[0],
                gas :9187500
            })
            .catch(console.log)
            .finally( () => {
                console.log("donating")
                contract.methods.donate(store.state.user.ethereumId, route.params.departmentId, plan.value.name).send({
                    from: address[0],
                    gas : 9187500,
                    value: amount.value
                }).then((result) => {
                    // console.log("result",result)
                    // contract.methods.getPlan(route.params.departmentId, plan.value.name).call().then(console.log)
                    console.log("plan after:", plan.value)

                    // router.go()
                }).catch(window.alert)
                
            })
            
        }

        return {
            plan,
            userId: computed(() => store.state.user.ethereumId),
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