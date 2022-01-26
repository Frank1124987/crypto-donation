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
import {useRouter} from 'vue-router'
import {getAuth} from 'firebase/auth'

import { createAccount } from '@/firestore/firestoreFunc.js'
export default{
    setup(){
        const store = useStore()
        const router = useRouter()

        const userId = ref("")
        const userName = ref("")
        const address = ref("")
        
        const registerDonor = async () => {
            console.log(address.value)
            contract.methods.registerDonor(userId.value, userName.value).send({
                from: address.value,
                gas : 9187500
            }).then(() => {
                store.commit("setUserEthereumId", userId.value)
                contract.methods.registerLoginAddress(userId.value, address.value).send({
                    from: address.value,
                    gas : 6721975,
                    gasPrice : '30000000'  
                })
                
                console.log("hfsdiafafsasadsdasdfda")
                const userData = {
                    ethereumId: userId.value,
                    ethereumAddress: address.value
                }
                createAccount(store.state.user.uId, userData)
                router.push('/')
            }).catch(error => {
                window.alert(error)
                router.go()
            })
        }



        return {
            registerDonor,
            userName,
            userId,
            address
        }
    }
}
</script>

<style scoped>

</style>