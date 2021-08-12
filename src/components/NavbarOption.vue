<template>
    <div class="navbar-option-container">
        <div class="navbar-option" >
            我要捐款
        </div>
        <div class="navbar-option-seperation"></div>
        <div class="navbar-option" >
            各項專案
        </div>
        <div class="navbar-option-seperation"></div>
        <div class="navbar-option" >
            捐款使用方向
        </div>
        <div class="navbar-option-seperation"></div>
        <div class="navbar-option" >
            年度報告
        </div>      
    </div>
</template>

<script>
export default {
    name: "NavbarOption"
}
</script>

<style scoped>
.navbar-option-container{
    background-color: white;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 40%;
    height: 38px;
}

.navbar-option{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc((100% - 15px)/4);
    border-radius: 32px;
    cursor: pointer;
    font-family: sans-serif;
}

.navbar-option:hover{
    background-color: rgb(240, 240, 240);

}

.navbar-option-seperation{
    border-left: 1px solid gray;
    margin: 2px;
    height: 15px;
}
</style>