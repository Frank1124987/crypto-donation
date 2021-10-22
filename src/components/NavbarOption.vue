<template>
    <div class="navbar-option-container">
        <div class="navbar-option" >
            我要捐款
        </div>
        <div class="navbar-option-seperation"></div>
        <router-link to="/donation-projects" class="navbar-option">
            各項專案 
        </router-link>
        <div class="navbar-option-seperation"></div>
        <router-link to="/registerDepartment" class="navbar-option">
            登記部門
        </router-link>
        <div class="navbar-option-seperation"></div>
        <router-link v-if="login" to="/login" class="navbar-option" >
            登入
        </router-link>      
        <div v-else @click="logout" class="navbar-option" >
            登出
        </div>  
    </div>
</template>

<script>
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import {onBeforeMount, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'

export default {
    name: "NavbarOption",
    setup(){
        const router = useRouter()
        const route = useRoute()

        const logout = () => {
            const auth = getAuth();
            signOut(auth).then(() => {
                    // Sign-out successful.
                    router.push('/')
                }).catch((error) => {
                // An error happened.
            });
        }

        const login = ref(true)

        const auth = getAuth()
        onBeforeMount(() => {
            onAuthStateChanged(auth, (user) => {
                if ( !user ){
                    login.value = true
                }else{
                    login.value = false
                }
            })
        })

        return {
            logout,
            login
        }
    }
}
</script>

<style scoped>
.navbar-option-container{
    background-color: white;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 40%;
    height: 38px;
}

.navbar-option{
    height: 100%;
    text-align: center;
    line-height: 38px;

    width: calc((100% - 15px)/4);
    border-radius: 32px;
    cursor: pointer;
}

.navbar-option:hover{
    background-color: rgb(240, 240, 240);

}

.navbar-option-seperation{
    border-left: 1px solid gray;
    margin: 2px;
    height: 15px;
}
</style>