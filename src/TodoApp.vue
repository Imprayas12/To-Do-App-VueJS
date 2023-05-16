<script setup>
import Greetings from './components/Greetings.vue'
import NewTodo from './components/NewTodo.vue';
import List from './components/List.vue';
const handleToDoAdded = (taskName) => {
    window.alert(taskName + ' Added')
}
const handleDelete = (taskName) => {
    window.alert(taskName + ' Deleted')
}
</script>

<template>
    <main class="app">
        <Greetings title="Welcome to Opus" />
        <br>
        <NewTodo @todo-added = "handleToDoAdded"/>
        <br>
        <br>
        <List @deleted-task="handleDelete"/>
    </main>
</template>

