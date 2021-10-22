<template>
  <div class="home">

      <!-- project -->
      <content-container :info="projects_db" />
      <!-- nft -->
      <content-container :info="nft_db" />

      <!-- donation usage -->

      <div>
        <h1>
          部門（暫時）
        </h1>
        <div v-for="(temp, id) in department" :key="id" >
          <router-link :to="{ name: 'DepartmentMain' , params: { departmentId: temp.id}}">
            <h2>
              {{ temp.name }}
            </h2>
          <!-- <p v-for="(id_t, ddd) in temp" :key=id_t>
            {{ ddd }}
          </p> -->
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import ContentContainer from "../components/content/ContentContainer.vue"
import { ref, onBeforeMount, inject, computed } from 'vue'
import {useStore} from 'vuex'

export default {
  name: 'Home',

  components: {
    ContentContainer,
  },

  setup(){
    const nft_db = inject('nft_db')
    const projects_db = inject('projects_db')

    const store = useStore()

    return {
      projects_db,
      nft_db,
      department: computed(() => store.state.department)
    }
  }
}
</script>

<style scoped>

</style>