<template>
    <span style="font-size: 17px">
        {{ content }}
    </span>
</template>

<script>
export default {
    name : "ContentItemDescription",
    props : {
        content: {
            type: String
        }
    }
}
</script>