<template>
    <div v-if="headerOption" id="navbar-cover-background" >
        <div :class="classObject" > 
            <NavbarTitle :headerTop="headerTop"/>
            <NavbarOption :headerTop="headerTop"/>
        </div>     
        <img src="../assets/cover.jpg" >
    </div>

    <div v-else class="navbar-top pos-sticky" > 
            <NavbarTitle :headerTop="headerTop"/>
            <NavbarOption :headerTop="headerTop"/>
    </div>   

    
    
</template>

<script>
import NavbarOption from "./NavbarOption.vue"
import NavbarTitle from "./NavbarTitle.vue"

export default {
    name: "Header",
    props: {
        contentTopPos : {
            type: Number,
            required: true,
        }
    },

    data() {
        return {
            heightSticky : 0,
            headerTop : true
        }
    },

    components: {
        NavbarOption,
        NavbarTitle
    },

    computed: {
        currentRoute(){
            return this.$route.path
        },

        classObject(){
            return {
                navbar : this.headerTop,
                'pos-absolute' : this.headerTop,

                'navbar-top' : !this.headerTop,
                'pos-fixed' : !this.headerTop
            }
        },

        nHeaderTop(){
            return !this.headerTop
        },

        headerOption(){
            if (this.$route.path === '/'){
                return true
            }else{
                return false
            }
        }
    },

    watch: {
        currentRoute: function (val){
            this.headerTop = (val !== '/') ? false : true
        },

        contentTopPos: function (){
            if (this.currentRoute === '/'){
                if ( this.contentTopPos <= 75 ){
                    this.headerTop = false
                }else if ( this.contentTopPos > 75){
                    this.headerTop = true
                }
            }
        }
    },
    methods : {
        
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

.pos-fixed{
    position: fixed;
    top: 0;
    width: 100%;
}

.pos-sticky{
    position: sticky;
    top: 0;
}

.navbar-top {
    padding-left: 5%;
    padding-right: 5%;
    height: 75px;
    


    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: white;
    z-index: 1;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}


</style>
