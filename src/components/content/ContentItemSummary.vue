<template>
    <span style="font-size: 17px">
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