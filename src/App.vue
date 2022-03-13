<template>
    <Header :contentTopPos="contentTopPos"/>
    <div id="content" ref="toppos">
        <router-view/>
    </div>
    <Footer/>
</template>
 
<script>
import {provide, ref, reactive, onUnmounted, watch, onBeforeMount, onMounted} from 'vue'
import {useStore} from 'vuex'

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

import {contract} from "./contract/contract.js"

import {readAccount} from "@/firestore/firestoreFunc.js"

import {getAuth, onAuthStateChanged} from "firebase/auth"
export default {
    components: {
        Header,
        Footer
    },

    setup() {
        const contentTopPos = ref(0)
        const toppos = ref(0)
        
        const nft_all_info = reactive({
                title : "最近的NFT",
                className : "nft-item",
                urlName: "NFT-list",
                item : [
                        {id: 1, image: "/NFT_items/image_1.png", title: "A",  summary: "This is good", content: "Complete description for project"},
                        {id: 2, image: "/NFT_items/image_2.png", title: "B",  summary: "This is bad",  content: "Complete description for project"},
                        {id: 3, image: "/NFT_items/image_3.png", title: "C",  summary: "This soso",  content: "Complete description for project"},
                        {id: 4, image: "/NFT_items/image_4.png", title: "D",  summary: "This is fine", content: "Complete description for project"},
                        {id: 5, image: "/NFT_items/image_5.jpg", title: "E",  summary: "This is fine", content: "Complete description for project"},
                        {id: 6, image: "/NFT_items/image_6.png", title: "F",  summary: "This is fine", content: "Complete description for project"},
                        {id: 7, image: "/NFT_items/image_7.png", title: "G",  summary: "This is fine",  content: "Complete description for project"},
                    ]
            })

        const project_all_info = reactive ({
                title : "募款中專案",
                className : "donation-project",
                urlName: "Project",
                item : [
                        {id: 1, image: '/donation_project/image_1.jpg', title: "SDD", date: {from: '8/24', to: '9/25'}, donation: {current: 100, target: 1000}, summary: "抖內給帥哥", content: "Complete description for project"},
                        {id: 2, image: '/donation_project/image_2.jpg', title: "B", date: {from: '8/24', to: '9/25'}, donation: {current: 500, target: 1000}, summary: "This is bad", content: "Complete description for project"},
                        {id: 3, image: '/donation_project/image_3.jpg', title: "C", date: {from: '8/24', to: '9/25'}, donation: {current: 300, target: 1000}, summary: "This soso", content: "Complete description for project"},
                        {id: 4, image: '/donation_project/image_4.png', title: "D", date: {from: '8/24', to: '9/25'}, donation: {current: 800, target: 1000}, summary: "This is fine", content: "Complete description for project"}
                        ]
            })

        provide('projects_db', project_all_info)
        provide('nft_db', nft_all_info)
        
        // scroll event listener //
        function handleScroll() {
            contentTopPos.value = toppos.value.getBoundingClientRect().top
        }
        window.addEventListener("scroll", handleScroll)
        onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll)
        })

        // contract.methods.registerDepartment('6', 'shut the fuck up').estimateGas({from: '0xD3323487981C22C3F09E32ADF4CB4Ad6FDE1fD84'})
        //     .then((result) => {
        
        //         contract.methods.registerDepartment('6', 'shut the fuck up')
        //             .send({
        //                 from : '0xD3323487981C22C3F09E32ADF4CB4Ad6FDE1fD84',
        //                 gas : result,
        //                 gasPrice : '30000000' 
        //         }).then(console.log)
        //         }
        //     )


        const store = useStore()
        store.dispatch("fetchDepartment")

        contract.events.NewDepartment({
            fromBlock: "latest"
        }, (error, event) => {        
            store.dispatch("fetchDepartment")
        })

        contract.events.NewPlan({
            fromBlock: "latest"
        }, (error, event) => {
            console.log(event.returnValues)
            store.commit("updatePlan", event.returnValues.plan)
        })


        // TODO : Better way ?
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user){
                console.log(user.uid)
                readAccount(user.uid)
            }else{
                store.commit("clearAllUserId")
            }
        })

        onMounted(() => {
            onAuthStateChanged(auth, (user) => {
                if (user){
                    console.log("wtf")
                    readAccount(user.uid)
                }else{
                    store.commit("clearAllUserId")
                }
            })
        })
        


        // let temp = {
        //     ethereumId: "60",
        //     ethereumAddress: "sddsffddsf"
        // }
        // console.log(
        // createEthereumId("3nlUiGqYvtXYVNP8U5OCSvbNkIJ2", {temp: "wetwe"})

        return {
            contentTopPos,
            toppos
        }
    },
}
</script>


<style lang="scss">
@import '@/style/bootstrapCustom.scss';

#app {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

*{
    box-sizing: border-box;
}

body {
    margin: 0 ;
}

#content{
    padding: 2% 5% 2% 5%;
}

a, a:hover, a:focus, a:active {
    text-decoration: none !important;
    color: inherit !important;
}

.headtitle {
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}

.subtitle {
    display: block;
    font-size: 1.5em;
}

.text {
    font-size: 1em;
}

img{
    background-color: bisque;
    font-size: 2em;
    text-align: center;
    vertical-align: middle;
}
</style>
