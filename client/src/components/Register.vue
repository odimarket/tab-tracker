<template>
    <div>
        <form method="post">
            <p>Email:</p>
            <input type="text"
                v-model="email"
            />
            <p>Password</p>
            <input type="password" v-model="password" id="" />
            
            <br>
            <br>

            <button type="button" @click="register">Submit</button>
        </form>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
    name: "Register",
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async register(){

            const response = await AuthenticationService.register({
                email: this.email, 
                password: this.password
            });

            console.log(response.data);
        }
    }
}
</script>