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
            <br>
            <input type="submit" value="Submit">
        </form>
        <router-link to="Login">Login</router-link>
    </div>
</template>


<script>
import {ref, watch} from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default{
    name: 'Register',
    setup(){
        const email = ref("")
        const password = ref("")

        const register = () => {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    router.push('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }

        return {
            email,
            password,
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