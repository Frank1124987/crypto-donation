<template>
    <div v-if="headerTop" id="navbar-cover-background">
        <div class="navbar pos-absolute" > 
            <NavbarTitle :headerTop="headerTop"/>
            <NavbarOption :headerTop="headerTop"/>
        </div>     
        <img src="../assets/cover.jpg" >
    </div>

    <div v-else id="navbar-top" class="navbar-top pos-sticky">
        <NavbarTitle :headerTop="headerTop"/>
        <NavbarOption :headerTop="headerTop"/>
    </div>
    
</template>

<script>
import NavbarOption from "./NavbarOption.vue"
import NavbarTitle from "./NavbarTitle.vue"

export default {
    name: "Header",
    
    data() {
        return {
            toStickyHeight : null
        }
    },

    components: {
        NavbarOption,
        NavbarTitle
    },

    computed: {
        headerTop(){
            if (this.$route.path != '/'){
                return false
            }else{
                return true
            }
        },
    },

}
</script>

<style scoped>
#navbar-cover-background{
    background-image: url("../assets/cover.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

}

#navbar-cover-background img{
    width: 100%;
    visibility: hidden;
}

.navbar{
    height: auto;
    width: 90%;
    display: flex;
    align-items: last baseline;
    justify-content: space-between;

    margin-left: 5%;
    margin-right: 5%;
}

.pos-absolute{
    position: absolute;
    top: 100%;
    transform: translate(0, -100%);
}

.pos-sticky{
    position: sticky;
    top: 0;

}

.navbar-top {
    padding-left: 5%;
    padding-right: 5%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: white;
    z-index: 1;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}


</style>
