<template>
    <div class="all-user">
        <h1>所有使用者</h1>

        <button @click="getAll">getAll</button>
    </div>
</template>

<script>
import {ref, computed, reactive} from 'vue'
import {useStore} from 'vuex'
import {web3, contract} from '@/contract/contract.js'
import {useRouter} from 'vue-router'
import {getAuth} from 'firebase/auth'

import { readAllAccount } from '@/firestore/firestoreFunc.js'
export default {
    name: "AllUser",
    setup(){

        const store = useStore()
        const getAll = ()=>{
            readAllAccount()
        }

        return{
            getAll
        }
    }
}
</script>

<style scoped>

</style>