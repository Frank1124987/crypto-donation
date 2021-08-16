<template>
    <Header/>

    <div id="content">
        <router-view/>
    </div>

    <Footer/>
</template>
 
<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"


export default {
  components: {
    Header,
    Footer
  }
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
