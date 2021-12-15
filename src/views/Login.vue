<template>
    <div class="login">
        <h1>
            Login
        </h1>
        <form @submit.prevent="login">
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
        <router-link to="Register">Register</router-link>
    </div>
</template>


<script>
import {ref} from 'vue'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useRouter} from 'vue-router'

export default{
    name: 'Login',
    setup(){
        const email = ref("")
        const password = ref("")
        
        const router = useRouter()

        const login = () => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    
                    router.push('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }


        return {
            email,
            password,
            login
        }
    }
}
</script>

<style scoped>
form > input {
    margin: 1%;
}

.login {
    text-align: center;
}
</style>