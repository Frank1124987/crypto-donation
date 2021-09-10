<template>
    <span class="text">
        {{ content }}
    </span>
</template>

<script>
export default {
    name : "ContentItemSummary",
    props : {
        content: {
            type: String
        }
    }
}
</script>