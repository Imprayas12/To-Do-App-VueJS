<template>
    <form @submit.prevent="login">
        <input type = "email" placeholder="email" required v-model="email">
        <input type="password" placeholder="password" required v-model="password">
        <button>Log In</button>
    </form>
</template>

<script>
import { signInWithEmailAndPassword } from '@firebase/auth';
import {auth} from '../firebase/init'
export default {
    emits:['loggedIn'],
    data() {
        return {
            email:'',
            password:''
        }
    }, 
    methods: {
        login() {
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then(() => {
                this.$emit('loggedIn')
            })
        }
    }
}

</script>