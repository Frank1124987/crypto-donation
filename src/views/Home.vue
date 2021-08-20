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
// @ is an alias to /src
import ContentContainer from "../components/content/ContentContainer.vue"

export default {
  name: 'Home',

  components: {
    ContentContainer,
  },

  inject: ['nft_db', 'projects_db']
}
</script>

<style scoped>

</style>