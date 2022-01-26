<template>
  <div class="home">

      <!-- project -->
      <content-container :items="plans" title="募款中專案" className="donation-project" urlName= "Project"  />
      <!-- nft -->
      <!-- <content-container :items="nft_db" title="最近的NFT" className="nft-item" urlName ="NFT-list"/> -->

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
import { ref, onBeforeMount, inject, computed, watch } from 'vue'
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

  
    const department = computed(() => {
        return store.getters.getDepartment
    })

    const plans = computed(() => {
      // if (flag){
      //     flag = !flag
      //     const id =  Math.floor(Math.random() * store.state.department.length)
      //     console.log(department.value)
      //     store.dispatch("fetchPlan", department.value[id].id)
      //     return store.state.plan
      //   }
      if (store.state.department.length !== 0 ){
        const id =  Math.floor(Math.random() * store.state.department.length)
        store.dispatch("fetchPlan", store.state.department[id].id)
        return store.state.plan
      }
    })

    // TODO : 1. Why the fuck store.getters.getDepartment will not trigger watch  
    //        2. Why the fuck store.getters.getDepartment in computed will only trigger once while store.getters.getDepartmentCount will trigger multiple time
    //        3. Why the fuck store.state.department inside watch is a proxy with target array but can not fucking get the length or iterate
    
    // watch(() => store.getters.getDepartment, (newFlag) => {
    //   console.log("wtf", newFlag, store.getters.getDepartmentCount)
    //   if (newFlag){
    //     console.log(store.state.department.length)
    //     }
    // })

    return {
      projects_db,
      nft_db,
      department,
      plans
    }
  }
}
</script>

<style scoped>

</style>