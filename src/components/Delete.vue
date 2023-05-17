<script setup>

import {collection, deleteDoc} from 'firebase/firestore';
import {useRoute} from 'vue-router';
const createdAt = useRoute().params.id;
async function deleteTask() {
    const colRef = collection(db, 'tasks',createdAt);
    await deleteDoc(colRef);
    console.log('deleted')
}

</script>

<template>

</template>