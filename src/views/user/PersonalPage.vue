<template>
    <div class="personal-page">
        <h1>個人資訊</h1>

        <button @click="getDonor">getDonor</button>
    </div>
</template>

<script>
import {ref, computed, reactive} from 'vue'
import {useStore} from 'vuex'
import {web3, contract} from '@/contract/contract.js'
import {useRouter} from 'vue-router'
import {getAuth} from 'firebase/auth'

export default {
    name: "PersonalPage",
    setup(){

        const store = useStore()
        const getDonor = async ()=>{
            if (store.state.user.ethereumId){
                contract.methods.getFunds(store.state.user.ethereumId).call().then((result) => {
                    console.log(result)
                }).catch(window.alert)
            }else{
                window.alert("wait a second")
            }
        }





        return{
            getDonor
        }
    }
}
</script>

<style scoped>

</style>