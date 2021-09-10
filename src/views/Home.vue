<template>
  <div class="home">

      <!-- project -->
      <content-container :info="projects_db" />
      <!-- nft -->
      <content-container :info="nft_db" />

      <!-- donation usage -->

  </div>
</template>

<script>
import ContentContainer from "../components/content/ContentContainer.vue"
import { ref, onBeforeMount, inject } from 'vue'

export default {
  name: 'Home',

  components: {
    ContentContainer,
  },

  setup(){
    const nft_db = inject('nft_db')
    const projects_db = inject('projects_db')

    return {
      projects_db,
      nft_db
    }
  }
}
</script>

<style scoped>

</style>