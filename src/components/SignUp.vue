<template>
    <form @submit.prevent="signUp">
        <input type="text" placeholder="username" required v-model="username">
        <input type="password" placeholder="password" required v-model="password">
        <input type = "email" placeholder="email" required v-model="email">
        <button>Submit</button>
    </form>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { auth } from '../firebase/init';
export default {
    emits: ['loggedIn'],
    data() {
        return {
            username:'',
            email:'',
            password:''
        }
    }, 
    methods: {
        signUp() {
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((credential)=> {
                updateProfile(auth.currentUser , {
                    displayName:this.username
                })
                .then(() => {
                    this.$emit('loggedIn')
                })
            })
            .catch((err) => {
                console.log(err);
            })
            // console.log('username :' + this.username);
            // console.log('email :' + this.email);
            // console.log('password :' + this.password);
        }
    }
}

</script>