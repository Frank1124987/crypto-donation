<template>
    <div class="registerDepartment">
        <h1>
            登記部門
        </h1>
        <div>
            <form @submit.prevent="register">
                <!-- <div>
                    <label for="address">地址: </label>
                    <br>
                    <input id="address" type="text" v-model="address" >
                </div> -->
                <div>
                    <label for="departmentId">ID: </label>
                    <br>
                    <input id="departmentId" type="text" v-model="departmentId" required>
                </div>
                <div>
                    <label for="departmentName">部門名稱:</label>
                    <br>
                    <input id="departmentName" type="text" v-model="departmentName" required>
                </div>
                <br>
                <AppImagePreview @get-image="updateImage"/>
                
                <!-- <div>
                    <label for="email">Email:</label>
                    <br>
                    <input id="email" type="text" v-model="email">
                </div>
                <div>
                    <label for="phone">聯絡電話:</label>
                    <br>
                    <input id="phone" type="text" v-model="phone">
                </div>
                <p>
                    <input id="category-official" type="radio" v-model="category" value="官方">
                    <label for="category-official">官方</label>
                    <input id="category-student" type="radio" v-model="category" value="學生">
                    <label for="category-student">學生</label>
                </p> -->
                <input type="submit" value="提交">
            </form>
        </div>
    </div>  
</template>

<script>
import {onBeforeMount, ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import AppImagePreview from "@/components/AppImagePreview.vue"

import {web3, contract} from "@/contract/contract.js"
import { createPlan } from "@/firestore/firestoreFunc.js"
export default {
    components: {
        AppImagePreview
    },
    setup() {
        const router = useRouter()
        const store = useStore()

        const auth = getAuth()
        onBeforeMount(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
            router.replace('/login')
            }else {
            //   console.log(auth.currentUser.providerData)
            }
        })
        })


        const departmentId = ref("")
        const departmentName = ref("")
        const email = ref("")
        const phone = ref("")
        const category = ref("")
        const image = ref("")

        const updateImage = (imageTemp) => {
            image.value = imageTemp
        }

        const register = async () => {

            const address = await web3.eth.getAccounts()
            contract.methods.registerDepartment(departmentId.value, departmentName.value)
                .send({
                    from : address[0],
                    gas : 9187500,
            }).then(() => {
                // Every department has a default plan, therefore when registering a department a plan is also required to be created in firestore
                console.log("wtf")
                createPlan(departmentId.value, departmentName.value, image.value)
                router.replace('/')
            }).catch(window.alert)
        }




        return {
            departmentName,
            departmentId,
            email,
            phone,
            category,
            address: computed(() => store.state.user.address),
            register,
            updateImage
        }
    },
}
</script>

<style scoped>
#preview-img {
    width: 50%;
}
</style>