<template>
    <div class="register">
        <h1>
            Register
        </h1>
        <form @submit.prevent="register">
            <div>
                <label for="email">Email:</label>
                <br>
                <input type="text" id="email" v-model="email" name="email">
            </div>
            <br>
            <div>
                <label for="password">Password:</label>
                <br>
                <input type="password" id="password" v-model="password" name="password">
            </div>
            <div>
                <label for="username">Username:</label>
                <br>
                <input type="text" id="username" v-model="username" name="username">
            </div>
            <br>
            <input type="submit" value="Submit">
        </form>
        <router-link to="Login">Login</router-link>
    </div>
</template>


<script>
import {ref, watch} from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useRouter} from "vue-router"
import {useStore} from "vuex"

import accountService from "@/firestore/firestoreFunc.js"
import {web3, contract} from "@/contract/contract.js"
export default{
    name: 'Register',
    setup(){
        const email = ref("")
        const password = ref("")
        const username = ref("")

        const route = useRouter()
        const store = useStore()


        const register = async () => {
            const auth = getAuth();
            const accounts = await web3.eth.getAccounts()
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    // Signed in 
                    accountService.createEthereumId(store.state.user.uId, {ethereumId : email.value})
                    contract.methods.registerDonor(email.value, username.value).send({
                        from: accounts[0],
                        gas : 9187500
                    }).then(console.log)
                    route.push('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage)
                });
        }

        return {
            email,
            password,
            username,
            register
        }
    }
}
</script>

<style scoped>
form > input {
    margin: 1%;
}

.register {
    text-align: center;
}
</style>