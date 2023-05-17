<script setup>
import { ref, onMounted, watch} from 'vue'
const emit = defineEmits(['todo-added'])
const input_content = ref('')
const submitClass = ref('submit')
const todos = ref([])
const addTodo = (e) => {
    if (!input_content.value.trim()) return;
    todos.value.push({
        taskName: input_content.value,
        done: false,
        createdAt: new Date().getTime(),
        hours: new Date().getHours(),
        mins: new Date().getMinutes()
    })
    const obj = todos.value[todos.value.length - 1];
    emit('todo-added', obj);
}
</script>

<template>
    <section class="create">
        <form @submit.prevent="addTodo">
            <h2>Add your task here</h2>
            <input type="text" placeholder="Enter your task" v-model="input_content"> <br>
            <input :class="submitClass" type="submit" value="Add Todo">
        </form>

    </section>
</template>

<style>
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

.submit:hover {
    background-color: #9b939b;
    color: white;
}
</style>