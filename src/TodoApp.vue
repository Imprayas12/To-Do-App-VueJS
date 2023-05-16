<script setup>
import { ref, onMounted, computed, watch } from 'vue';

const titleClass = ref("title")
const submitClass = ref("submit")
const buttonClass = ref("button")
const taskClass = ref("task")
const todos = ref(JSON.parse(localStorage.getItem('todos')) || [])
const name = ref('')
const input_content = ref('')
const todos_asc = computed(() => todos.value.sort((a, b) => b.createdAt - a.createdAt));
const addTodo = (e) => {
    if(!input_content.value.trim()) return
    console.log(input_content.value)
    todos.value.push({
        taskName: input_content.value,
        done: false,
        createdAt: new Date().getTime(),
        hours: new Date().getHours(),
        mins: new Date().getMinutes()
    })
}
const deleteTask = todo => {
    todos.value = todos.value.filter(t => t != todo)
}
watch(name, (newVal) => {
    localStorage.setItem('name', newVal)
})
watch(todos, newTodo => {
    localStorage.setItem('todos',JSON.stringify(newTodo))
}, {deep: true})
onMounted(() => {
    name.value = localStorage.getItem('name') || ''
})

</script>

<template>
    <main class="app">
        <section class="greetings">
            <h1 :class="titleClass"> What's up
                <input type="text" v-model="name" />
            </h1>
        </section>
        <br>
        <section class="create">
            <form @submit.prevent="addTodo">
                <h2>Add your task here</h2>
                <input type="text" placeholder="Enter your task" v-model="input_content">
                <br>
                <input :class = "submitClass" type="submit" value = "Add Todo">
            </form>
            
        </section>
        <br>
        <br>
        <section class="todo-list">
            <h3>These are your pending tasks.</h3>
            <div class="list">
                <div v-for="todo in todos_asc" :class="taskClass">
                    <h2>{{todo.taskName}}</h2>
                    <h3>Added At: {{ todo.hours }}:{{ todo.mins }}</h3>
                    <label for="isDone">Done ? </label>
                    <button :class="buttonClass" @click = "deleteTask(todo)">Remove Task</button>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
* {
    transition: linear;
    transition-duration: 0.2s;
}
.title {
    font-size:x-large;
}
input {
    background: none;
    color: white;
    font-size: x-large;
    border: none;
}


.submit {
    border: 1px solid white;
    width: 100%;
    margin-top: 5%;
    height: 6vh;
    color: black;
    background: white;
    border-radius: 5px;
    font-weight: 1000;
    cursor: pointer;
}

.submit:hover{
    background-color: #9b939b;
    color: white;
}

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
