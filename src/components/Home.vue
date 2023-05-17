<script setup>
import {ref, onMounted} from 'vue'
import Greetings from './Greetings.vue'
import NewTodo from './NewTodo.vue';
import List from './List.vue';
import db from '../firebase/init';
import {collection, addDoc} from 'firebase/firestore';

const obj = ref([]);

async function createUser(object) {
    const colRef = collection(db, 'tasks');
    const docRef = await addDoc(colRef, object);
    console.log('Documented created at', docRef.id);
}

const handleToDoAdded = (object) => {
    createUser({taskName: object.taskName, isDone: object.done, createdAt: object.createdAt, hours: object.hours, mins: new Date().getMinutes()});
    obj.value.concat(Object.keys(object));
}
const handleDelete = (taskName) => {
    window.alert(taskName + ' Deleted')
}
const addName = (name) => {
    obj.value.push(name);
}

onMounted(() => {
    createUser();
})
</script>

<template>
    <main>
        
        <Greetings title="Welcome to Opus" @name = "addName"/>
        <br>
        <NewTodo @todo-added = "handleToDoAdded"/>
        <br>
        <br>
        <List @deleted-task="handleDelete"/>
    </main>
</template>
