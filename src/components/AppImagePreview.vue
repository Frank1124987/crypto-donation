<template>
    <div>
        <label for="formFile" class="form-label">Upload Image：</label>
        <input class="form-control" type="file" @input="pickFile" accept="image/*">
        <div>
            <img class="preview-img" :src="image" alt="">
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
    props: {
    },
    setup(props, target) {
        const image = ref("")
        const pickFile = (event) => {
            const reader = new FileReader()
            reader.onload = (e) => {
                image.value = e.target.result;
            }

            let image_temp = event.target.files[0]
            target.emit("get-image", image_temp)

            reader.readAsDataURL(event.target.files[0])
        }

        return{
            pickFile,
            image
        }
    }
}
</script>

<style scoped>
.preview-img{
    width: 20%;
}
</style>>