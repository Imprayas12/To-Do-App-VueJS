<template>
    <RouterView></RouterView>
    <div v-if="!isLoggedIn">
        <template v-if="showLogin">
            <Login @loggedIn="isLoggedIn=true"/>
            <p>No account ? <span @click="showLogin = false">Register</span> Instead.</p>
        </template>
        <template v-else>
            <SignUp @loggedIn="isLoggedIn = true"/>
            <p>Already Registered ? <span @click="showLogin = true"> Login</span> Instead.</p>
        </template>
    </div>
    <div v-else>
        <RouterLink :to="'/main/' + displayName">Click to enter {{ displayName }}</RouterLink>
    </div>
    
</template>

<script>
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import auth from './firebase/init'
export default {
    components:{SignUp, Login},
    data() {
        return {
            isLoggedIn: false,
            showLogin: true,
            displayName:'prayas'
        }
    },
    beforeUpdate(){
        if(auth.currentUser) {
            this.displayName = auth.currentUser.displayName
        }
    }
}

</script>
