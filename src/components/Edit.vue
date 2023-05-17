<script setup>
import { doc, setDoc, updateDoc, where } from '@firebase/firestore';
import {useRoute} from 'vue-router';
import db from '../firebase/init';
import {ref} from 'vue';
const route = useRoute()
const submitClass = ref('submit')
const id = route.params.id;
const input_content = ref('');
async function updateTodo(){
    const createdAt = id;
    const docRef = doc(db, 'tasks', where('createdAt', '==', createdAt));
    await updateDoc(docRef,{
        taskName: input_content.value
    }, {merge:true})
}
</script>


<template>
     <section class="create">
        <form @submit.prevent="updateTodo">
            <h2>Update task</h2>
            <input type="text" placeholder="Enter your task" v-model="input_content"> <br>
            <input :class="submitClass" type="submit" value="Update Todo">
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