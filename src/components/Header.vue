<template>
    <div id="navbar-cover-background">
        <div id="navbar" class="pos-absolute" > 
            <NavbarTitle/>
            <NavbarOption/>
        </div>     
        <img src="../assets/cover.jpg" >
    </div>
</template>

<script>
import NavbarOption from "./NavbarOption.vue"
import NavbarTitle from "./NavbarTitle.vue"

export default {
    name: "Header",

    components: {
        NavbarOption,
        NavbarTitle
    }
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

#navbar{
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
    position: fixed;
    top: 0;
    width: 100%;
}




</style>
