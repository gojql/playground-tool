<template>
<div>
    <QueryProcessor />
</div>
</template>

<script>
import QueryProcessor from '@/components/QueryProcessor.vue'

export default {
    name: 'Dashboard',
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
