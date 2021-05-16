<template>
    <div>
        <nav class="nav-custom navbar navbar-expand-lg navbar-light justify-content-end  pt-2 pb-2">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{name: 'Profile'}" class="nav-link pl-3 pr-3 nav-link-custom">Profile</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'Home'}" class="nav-link pl-3 pr-5 nav-link-custom">Home</router-link>
                </li>
            </ul>
        </nav>
        <div class="container">
            <div class="row justify-content-center">
                <img src="../assets/pics/bloglogo5.png" width="120" height="120" class="logo d-inline-block">
            </div>
            <div class="text-logo row justify-content-center mb-3">
                <span class="brand-logo-text">The Bluejay's Blog</span>
            </div>
            <div class="row col-6 offset-3 justify-content-center mt-5">
                <label>Email address</label>
                <input v-model="email" type="email" class="form-control form-control-lg" />
            </div>
            <div class="row col-6 offset-3 justify-content-center mt-3">
                <label>Password</label>
                <input v-model="password" type="password" class="form-control form-control-lg" />
            </div>
            <div class="row col-6 offset-3 justify-content-center mt-4">
                <button type="submit" class="btn btn-dark btn-lg btn-block"
                    @click="login">Sign In</button>
            </div>
            <div class="row col-6 offset-3 justify-content-end mt-3">
                <p class="forgot-password text-right">
                    New here?
                    <router-link :to="{name: 'Signup'}">Sign Up</router-link>
                </p>
            </div>
            <div class="social-icons pt-5 pb-5">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods:{
            login() {
                // let fetchedUser = this.$store.dispatch('FETCH_USER_BY_EMAIL', this.email);

            }
        }
    }
</script>

<style scoped>
    .text-logo {
        color: #3F3F3F !important;
        font-family: 'Blangkon', sans-serif;
        font-size: 2.6rem;
    }
    .nav-custom {
        font-size: 16px;
        height: 79px;
    }
    .social-icons {
        text-align: center;
        font-family: "Open Sans";
        font-weight: 300;
        font-size: 1.5em;
        color: #222222;
    }

    .social-icons ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .social-icons ul li {
        display: inline-block;
        zoom: 1;
        width: 65px;
        vertical-align: middle;
        border: 1px solid #e3e8f9;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        margin-right: 5px;
        background: #f4f6ff;
    }

    .social-icons ul li a {
        display: block;
        font-size: 1.4em;
        margin: 0 5px;
        text-decoration: none;
    }
    .social-icons ul li a i {
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        -ms-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
    }

    .social-icons ul li a:focus i,
    .social-icons ul li a:active i {
        transition: none;
        color: #222222;
    }
</style>