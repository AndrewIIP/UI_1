<template>
    <div class="about">
        <nav class="navbar navbar-expand-lg navbar-light justify-content-end">
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{name: 'Profile'}" class="nav-link pl-3 pr-5 nav-link-custom">Profile</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'Home'}" class="nav-link pl-3 pr-5 nav-link-custom">Home</router-link>
                    </li>
                </ul>
            </div><!--/.nav-collapse -->
            <router-link :to="{name: 'Login'}" class="sign-in navbar-brand p-1 d-flex flex-row align-items-center ml-3">
                <img src="../assets/pics/doorhandle.png" width="55" height="55" class="d-inline-block" alt="">
            </router-link>
        </nav>
        <div class="container">
            <div class="row justify-content-center">
                <router-link :to="{name: 'Home'}" class="link-to-home" href="/">
                    <img class="" width="200" height="200" src="../assets/pics/bloglogo5.png">
                </router-link>
            </div>
            <div class="row justify-content-center mt-3">
                <h2 class="font-weight-bold"><span class="ion-minus"></span> Welcome to <span class="ion-minus"></span></h2>
            </div>
            <div class="row justify-content-center mb-3">
                <span class="brand-logo-text">The Bluejay's Blog</span>
            </div>
            <div class="row justify-content-center mt-5 text-about">
                <p class="col-lg-6 col-lg-offset-3 text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus </p><br>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About",
        components: {}
    }
</script>

<style scoped>
    .about {
        background-color: #f6f6f6;
        height: 100%;
    }
    .brand-logo-text {
        color: #3F3F3F !important;
        font-family: 'Blangkon', sans-serif;
        font-size: 2.6rem;
    }
    .text-about {
        color: #4C4C4C;
    }
    .container {
        font-family: 'Raleway', sans-serif;
        color: #4C4C4C;
    }
    .link-to-home {
        text-decoration: none;
    }
    .link-to-home:hover {
        color: #111111;
    }
    h2 span {
        font-size: 17px;
        font-weight: 700;
    }
    .sign-in {
        border: 0 solid #bebebe;
        border-radius: 12px;
        transition: background .15s ease-in-out,
        color .15s ease-in-out,
        line-height .07s ease-in-out,
        height .07s ease-in-out,
        padding .07s ease-in-out;
    }
    .sign-in:hover {
        background: #3d3d3d;
        border-color: #b3b3b3;
    }
    .sign-in:hover img {
        -webkit-filter: invert(100%);
    }
    .nav-link-custom {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
    }
</style>