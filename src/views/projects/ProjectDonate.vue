<template>
    <div class="donate">
        donate page {{ $route.params.id }}
    </div>  
</template>

<script>
import {onBeforeMount} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()

    const auth = getAuth()
    onBeforeMount(() => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.replace('/login')
        }else {
          console.log(auth.currentUser.providerData)
        }
      })
    })

    return {
    }
  },
}
</script>