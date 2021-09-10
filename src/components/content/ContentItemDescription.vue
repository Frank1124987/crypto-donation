<template>
    <span class="text">
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