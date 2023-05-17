<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const user = route.params.id;
</script>

<template>
    <h1>This is a todo-list for {{ user }}</h1>
</template>