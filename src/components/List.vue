<script setup>
import {ref, computed, watch, onBeforeMount} from 'vue';
import { query, doc, getDocs, collection, where } from 'firebase/firestore';
import db from '../firebase/init';
const emit = defineEmits(['deletedTask'])
const buttonClass = ref("button")
const taskClass = ref("task")
const todos = ref([])
const todos_asc = computed(() => todos.value.sort((a, b) => b.createdAt - a.createdAt));
const deleteTask = todo => {
    todos.value = todos.value.filter(t => t != todo)
    emit('deletedTask', todo.taskName)
}
watch(todos, newTodo => {
    localStorage.setItem('todos', JSON.stringify(newTodo))
}, { deep: true })

async function getTodos() {
    const todo = await getDocs(collection(db, 'tasks'))
    todo.forEach((dat) => {
        todos.value.push(dat.data());
    })
}
onBeforeMount(() => {
    getTodos();
})
</script>

<template>
    <section class="todo-list">
            <h3>These are your pending tasks.</h3>
            <div class="list">
                <div v-for="todo in todos_asc" :class="taskClass">
                    <h2>{{todo.taskName}}</h2>
                    <h3>Added At: {{ todo.hours }}:{{ todo.mins }}</h3>
                    <label for="isDone">Done ? </label>
                    <button :class="buttonClass" ><RouterLink :to="'/delete/' + todo.createdAt">Delete Task</RouterLink></button>
                <button :class="buttonClass" > <RouterLink :to="'/edit/' + todo.createdAt">Update Task</RouterLink> </button>
                    
            </div>
            </div>
        </section>
</template>

<style>
    .button {
    border: none;
    height: calc(0.05 * 100vh);
    width: max-content;
    padding: auto;
    border-radius: 3px;
    background-color: #9b939b;
    cursor: pointer;
    margin: 10px
}

.task {
    text-align: center;
    color: black;
    background-color: white;
    border: 1px solid white;
    border-radius: 5px;
    margin: 10px;
}
.task h2 {
    font-weight: 700;
}
</style>