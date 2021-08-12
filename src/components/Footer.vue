<template>
    <footer>
        <p> Copyright &copy; 2021</p>
        <router-link to="/about">About</router-link>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
footer {
    text-align: center;
    margin: 2% 5% 2% 5%;

    border-top: 1px solid grey;
}
</style>