<script setup>
import Greetings from './Greetings.vue'
import NewTodo from './NewTodo.vue';
import List from './List.vue';
const handleToDoAdded = (taskName) => {
    window.alert(taskName + ' Added')
}
const handleDelete = (taskName) => {
    window.alert(taskName + ' Deleted')
}
</script>

<template>
    <main>
        
        <Greetings title="Welcome to Opus" />
        <br>
        <NewTodo @todo-added = "handleToDoAdded"/>
        <br>
        <br>
        <List @deleted-task="handleDelete"/>
    </main>
</template>
