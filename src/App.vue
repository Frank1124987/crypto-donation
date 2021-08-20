<template>
    <Header :contentTopPos="contentTopPos"/>
    <div id="content" ref="top-pos">
        <router-view/>
    </div>
    <Footer/>
</template>
 
<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"


export default {
    data() {
        return {
            contentTopPos: 0,
            nft_all_info: {
                title : "最近的NFT",
                className : "nft-item",
                item : [
                        {id: 1, image: "/NFT_items/image_1.png", title: "A",  summary: "This is good", content: "Complete description for project"},
                        {id: 2, image: "/NFT_items/image_2.png", title: "B",  summary: "This is bad",  content: "Complete description for project"},
                        {id: 3, image: "/NFT_items/image_3.png", title: "C",  summary: "This soso",  content: "Complete description for project"},
                        {id: 4, image: "/NFT_items/image_4.png", title: "D",  summary: "This is fine", content: "Complete description for project"},
                        {id: 5, image: "/NFT_items/image_5.png", title: "E",  summary: "This is fine", content: "Complete description for project"},
                        {id: 6, image: "/NFT_items/image_6.png", title: "F",  summary: "This is fine", content: "Complete description for project"},
                        {id: 7, image: "/NFT_items/image_7.png", title: "G",  summary: "This is fine",  content: "Complete description for project"},
                    ]
            },
            project_all_info: {
                title : "募款中專案",
                className : "donation-project",
                item : [
                        {id: 1, image: '/donation_project/image_1.jpg', title: "SDD", date: {from: '8/24', to: '9/25'}, donation: {current: 100, target: 1000}, summary: "抖內給帥哥", content: "Complete description for project"},
                        {id: 2, image: '/donation_project/image_2.jpg', title: "B", date: {from: '8/24', to: '9/25'}, donation: {current: 500, target: 1000}, summary: "This is bad", content: "Complete description for project"},
                        {id: 3, image: '/donation_project/image_3.png', title: "C", date: {from: '8/24', to: '9/25'}, donation: {current: 300, target: 1000}, summary: "This soso", content: "Complete description for project"},
                        {id: 4, image: '/donation_project/image_4.png', title: "D", date: {from: '8/24', to: '9/25'}, donation: {current: 800, target: 1000}, summary: "This is fine", content: "Complete description for project"}
                        ]
            }
        }
    },
    provide(){
        return {
            nft_db : this.nft_all_info,
            projects_db : this.project_all_info
        }
    },

    components: {
        Header,
        Footer
    },

    methods: {
        handleScroll(){
            this.contentTopPos = this.$refs['top-pos'].getBoundingClientRect().top
        }
    },

    created() {
        window.addEventListener("scroll", this.handleScroll)
    },

    destroyed() {
        window.removeEventListener("scroll", this.handleScroll)
    },
}
</script>


<style>
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
</style>
