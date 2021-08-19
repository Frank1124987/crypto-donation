<template>
    <Header :contentTopPos="contentTopPos"/>
    <div id="content" ref="content">
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
        }
    },

    components: {
        Header,
        Footer
    },

    methods: {
        handleScroll(){
            this.contentTopPos = this.$refs.content.getBoundingClientRect().top
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
