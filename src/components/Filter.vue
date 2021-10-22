<template>
    <div class="form">
        <form >
            <div>
                <input type="text" name="" id="" placeholder="專案關鍵字" v-model="keyword">
            </div>
            <div class="checkbox-filter-container">
                <div class="checkbox-filter">
                    <input type="checkbox">
                    <label for="temp" class="checkbox-item">temp</label>
                </div>
                <div class="checkbox-filter">
                    <input type="checkbox">
                    <label for="temp" class="checkbox-item">temp</label>
                </div>
                <div class="checkbox-filter">
                    <input type="checkbox">
                    <label for="temp" class="checkbox-item">temp</label>
                </div>
                <div class="checkbox-filter">
                    <input type="checkbox">
                    <label for="temp" class="checkbox-item">temp</label>
                </div>
            </div>
        </form>
    </div>
</template>

<script >
export default {
    name: 'Filter',
    data() {
        return {
            keyword: ""
        }
    },

    watch: {
        keyword(){
            console.log(this.keyword)
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
}
.form{
    text-align: center;
}
.checkbox-filter{
    margin: 0 3% 0 3%;
}
.checkbox-filter-container {
    display: flex;
    margin: 0 1.5% 0 1.5%;
}
.checkbox-filter input[type=checkbox]{
    display: none;
}

.checkbox-item{
    border: 1px solid rgb(69, 186, 174)  ; 
    border-radius: 100px;
    padding: 7px;
    text-align: center;
}

.checkbox-item:hover{
    background-color: cadetblue;
}
</style>