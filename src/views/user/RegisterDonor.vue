<template>
    <div>
        <h1>
            登記捐款帳號
        </h1>
        <form @submit.prevent="registerDonor">
            <div>
                <label for="userId">ID: </label>
                <br>
                <input id="userId" type="text" v-model="userId" >
            </div>
            <div>
                <label for="userName">使用者名稱:</label>
                <br>
                <input id="userName" type="text" v-model="userName" >
            </div>
            <div>
                <label for="address">地址: </label>
                <br>
                <input id="address" type="text" v-model="address" >
            </div>
            <br>
            <input type="submit" value="提交">
        </form>
    </div>
</template>

<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {contract} from '@/contract/contract.js'

export default{
    setup(){
        const store = useStore()

        const userId = ref("")
        const userName = ref("")
        
        const registerDonor = () => {
            contract.methods.registerDonor(userId.value, userName.value).send({
                from: store.state.user.address,
                gas : 6721975,
                gasPrice : '30000000'  
            }).then(() => {
                store.commit("addUserId", userId.value)
                contract.methods.registerLoginAddress(userId.value, address.value).send({
                    from: address.value,
                    gas : 6721975,
                    gasPrice : '30000000'  
                })
            })
        }

        return {
            registerDonor,
            userName,
            userId,
            address: computed(() => store.state.user.address)
        }
    }
}
</script>

<style scoped>

</style>