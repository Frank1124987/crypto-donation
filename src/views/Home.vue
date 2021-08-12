<template>
  <div class="home">

      <!-- project -->
      <content-container :info="project_all_info"/>
      <!-- nft -->

      <!-- donation usage -->

  </div>


</template>

<script>
// @ is an alias to /src
import ContentContainer from "../components/ContentContainer.vue"

export default {
  name: 'Home',

  components: {
    ContentContainer,
  },

  data() {
    return {
      nft_all_info: [
                {id: 1, image: "../assets/image/NFT_items/image_1.png", title: "A", content: "This is good", path: "project_1.html"},
                {id: 2, image: "../assets/image/NFT_items/image_2.png", title: "B", content: "This is bad", path: "project_2.html"},
                {id: 3, image: "../assets/image/NFT_items/image_3.png", title: "C", content: "This soso", path: "project_3.html"},
                {id: 4, image: "../assets/image/NFT_items/image_4.png", title: "D", content: "This is fine", path: "project_4.html"},
                {id: 5, image: "../assets/image/NFT_items/image_5.png", title: "E", content: "This is fine", path: "project_5.html"},
                {id: 6, image: "../assets/image/NFT_items/image_6.png", title: "F", content: "This is fine", path: "project_6.html"},
                {id: 7, image: "../assets/image/NFT_items/image_7.png", title: "G", content: "This is fine", path: "project_7.html"},
            ],
      
      project_all_info: {
        title : "募款中專案",
        cssFormat : {},
        item : [
                {id: 1, image: '/donation_project/image_1.jpg', title: "SDD", content: "抖內給帥哥", path: "project_1.html"},
                {id: 2, image: '/donation_project/image_2.jpg', title: "B", content: "This is bad", path: "project_2.html"},
                {id: 3, image: '/donation_project/image_3.png', title: "C", content: "This soso", path: "project_3.html"},
                {id: 4, image: '/donation_project/image_4.png', title: "D", content: "This is fine", path: "project_4.html"}
                ]
          }
    }
  }
}
</script>

