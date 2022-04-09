<template>
<div>
    <QueryProcessor />
</div>
</template>

<script lang="ts">
import QueryProcessor from '@/components/QueryProcessor.vue'

export default {
    name: 'Home',
    components:{
        QueryProcessor
    }
}
</script>

<style scoped>
textarea {
    resize: none;
    width: 100%;
}
</style>
