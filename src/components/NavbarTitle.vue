<template>
    <div id="navbar-title" :class=" headerTop ? 'navbar-title-full':'navbar-title-top'"> 
        <h1>
            陽明交通大學
            <br v-show="headerTop">
            區塊鏈募資平台
        </h1>
    </div>
</template>

<script>
export default {
    name: "NavbarTitle",

    props: {
        headerTop: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
#navbar-title{
    font-family: sans-serif;
}

.navbar-title-full{
    color: white;
    font-size: 2em;
    text-align: left;
}

.navbar-title-top{
    color: black;
    font-size: 1em;
    text-align: left;
}
</style>