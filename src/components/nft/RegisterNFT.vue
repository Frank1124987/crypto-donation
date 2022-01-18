<template>
    <div>
        <form @submit.prevent="registerNFT">
            <div>
                <label for="name">NFT名稱：</label>
                <br>
                <input id="name" type="text" v-model="name" >
            </div>
            <div>
                <label for="description">描述：</label>
                <br>
                <input id="description" type="text" v-model="description">
            </div>
            <br>
            <div>
                <span>選擇掛鉤的專案：</span>
                <select v-model="selectedPlan">
                    <option v-for="(plan, id) in plans" :key=id>
                        {{plan.name}}
                    </option>
                </select>
            </div>
            <br>
            <div>
                <label for="formFile" class="form-label">Upload Image：</label>
                <input class="form-control" type="file" @input="pickFile" accept="image/*">
                <img class="preview-img" :src="image" alt="">
            </div>
            <br>
            <input type="submit" value="提交">
        </form>
    </div>
</template>

<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute, useRouter} from 'vue-router'
import {web3, contract} from '@/contract/contract.js'
import {NFTStorage, File} from 'nft.storage'
// import {pack} from 'ipfs-car/pack'
import * as fs from 'fs'

export default {
    props: {
        plans: {
            type: Object
        }
    },
    setup(props){
        const route = useRoute()

        const name = ref("");
        const description = ref("");
        const image = ref("");
        const selectedPlan = ref("")

        const plans = ref(props.plans)

        let image_temp = null
        const pickFile = (event) => {
            const reader = new FileReader()
            reader.onload = (e) => {
                image.value = e.target.result;
            }

            image_temp = event.target.files[0]
            reader.readAsDataURL(event.target.files[0])
        }

        const registerNFT = async () => {
            const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY0Q2NGNEVlMEM4N2I2QjZlNEFDRTRFQWRiNzg0MGQ0RjUyMjMxMTciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzOTU0NDQyNTgwNCwibmFtZSI6ImNyeXB0X2RvbmF0aW9uIn0.iGh9m27-DncOEfMl0vBEy8fPWIKY32eeQLkmatfawbI'
            const client = new NFTStorage({token : apiKey})
            const metadata = await client.store({
                name: name.value,
                description: description.value,
                image: image_temp
            })
            const address = await web3.eth.getAccounts()

            contract.methods.register_nft(route.params.departmentId, name.value, metadata.url).send({
                from: address[0],
                gas : 9187500,
            }).then(() => {
                contract.methods.addNFTToPlan(route.params.departmentId, selectedPlan.value, name.value).send({
                    from: address[0],
                    gas : 9187500,      
                }).then(console.log)
                .catch(console.log)
            }).catch(err => {
                console.log("error: ", err)
            })
        }


        return {
            name,
            description,
            image,
            plans,
            selectedPlan,
            pickFile,
            registerNFT
        }
    }
}
</script>

<style scoped>
.imagePreviewWrapper {
  background-repeat: no-repeat;
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: contain;
    background-position: center center;
}

.preview-img {
    width: 50%;
}
</style>