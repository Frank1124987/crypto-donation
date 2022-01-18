<template>

  <div class="AboutUs">
   <h1>關於我們</h1>  

    <!-- <div v-for="content in contents" :key="content.id" >
      <about-us-content
      :title ="content.title"
      :text="content.text"
      />
      </div>       -->

      <router-link to="/"></router-link>
  </div>
</template>

<script>

// import AboutUsContent from "../../components/AboutUsContent.vue"


export default {
  name: "AboutUs",

  components: {
    // AboutUsContent
  },

  data(){
    return{
      contents:[
      { id:1,
        title:'平台介紹',
        text:'平台介紹ㄛㄛㄛ',
      },

      { id:2,
        title:'開發理念與願景',
        text:'開發理念與願景ㄛㄛㄛ',
      },

      { id:3,
        title:'聯絡我們',
        text:'聯絡我們ㄛㄛㄛ',
      },
    ]
      }
  },

  }

</script>

<style scoped>

</style>