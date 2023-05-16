<script setup>
import { ref, onMounted, watch } from 'vue'
const name = ref('')
watch(name, (newValue) => {
    localStorage.setItem('name', newValue)
})
onMounted(() => {
    name.value = localStorage.getItem('name') || ''
})
</script>

<template>
    <section class="greetings">
        <h1 :class="titleClass"> What's up
            <input type="text" v-model="name" />
        </h1>
    </section>
</template>
<style>
input {
    background: none;
    color: white;
    font-size: x-large;
    border: none;
}
</style>