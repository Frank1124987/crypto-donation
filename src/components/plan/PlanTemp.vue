<template>
    <div class="plan">
        <div>
            <h2>
                {{ plan.plan.name}}
            </h2>
            <h3>
                {{ plan.plan.description}}
            </h3>
            <h3>
                已募金額：{{ plan.plan.accumulate }}
            </h3>
            <form @submit.prevent="donate">
                <p>使用者ID：{{ userId }} | 部門ID：{{ $route.params.departmentId }}</p>
                <input type="number" v-model="donateAmount">
                &nbsp
                <input type="submit" value="捐款">
            </form>
            <form @submit.prevent="withdraw">
                <p>只有擁有者才能提款</p>
                <input type="number" v-model="withdrawAmount">
                &nbsp
                <input type="submit" value="提款">
            </form>
        </div>
        <!-- <div class="close-button">
            <a href="#" class="close" @click="withdrawPlan"></a>
        </div> -->
    </div>
</template>

<script>
import {ref, computed, toRefs} from 'vue'
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

        const {plan} = toRefs(props)
        console.log(plan.value.plan.name)

        const donateAmount = ref(0)
        const withdrawAmount = ref(0)

        const donate = async () => {
            const address = await web3.eth.getAccounts()
            // console.log("plan initial:", plan.value)
            console.log(address[0])
            console.log(store.state.user.addressInitial)
    
            // TODO : verify the ethereum address
            
            // TODO : Because metamask require the callee address to be same as the one in use, therefore need to separate register login address and donate
            contract.methods.registerLoginAddress(store.state.user.ethereumId, address[0]).send({
                from : store.state.user.addressInitial,
                gas :9187500
            })
            .catch(console.log)
            .finally( () => {
                console.log("donating")
                console.log(store.state.user.ethereumId, route.params.departmentId, plan.value.plan.name)
                contract.methods.donate(store.state.user.ethereumId, route.params.departmentId, plan.value.plan.name).send({
                    from: address[0],
                    gas : 9187500,
                    value: donateAmount.value
                }).then((result) => {
                    // console.log("result",result)
                    // contract.methods.getPlan(route.params.departmentId, plan.value.name).call().then(console.log)
                    console.log("plan after:", plan.value)

                    // router.go()
                }).catch(console.log)
            })
        }
        
        const withdraw = async () => {
            const address = await web3.eth.getAccounts()
            contract.methods.withdraw(route.params.departmentId, plan.value.name, withdrawAmount.value).send({
                from: address[0],
                gas :9187500
            }).catch(window.alert)
        }

        // const withdrawPlan = () => {
        //     const address = await web3.eth.getAccounts()
        //     contract.methods.withdraw(address[0])
        // }
        return {
            plan,
            userId: computed(() => store.state.user.ethereumId),
            withdrawAmount,
            donateAmount,
            donate,
            withdraw
        }
    }
}
</script>

<style scoped>
.plan{
    padding : 2%;
    border-style: solid;
    margin: 1% 0 1% 0;
    display: flex;
}
.plan >div{
    width: 50%;
}
.close-button{
    position: relative;
}
.close {
    position: absolute;
    top: 0;
    right: 1em;
    opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
    position: absolute;
    top: 0;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

</style>