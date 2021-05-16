<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light justify-content-end">
            <div>
                <ul class="navbar-nav">
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
                <img class="" width="200" height="200" src="../assets/pics/unnamed.png">
            </div>
            <div class="row justify-content-center mt-3 mb-5">
                <h2 class="font-weight-bold"><span class="ion-minus"></span> {{this.user.username}} <span class="ion-minus"></span></h2>
            </div>
            <div class="row justify-content-center">
                <p>Birthday: {{formatDate(this.user.birthday)}}</p>
            </div>
            <div class="row justify-content-center">
                <p>Email: {{this.user.email}}</p>
            </div>
            <div class="row justify-content-center">
                <p>Gender: {{this.user.gender}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import post from '../views/Post'
    export default {
        name: "Profile",
        data() {
            return {
                user: ''
            }
        },
        mounted() {
            this.user = this.$store.state.users.find(user => user.userId === 1);
        },
        methods: {
            formatDate (date) {
                return post.methods.formatDate(date);
            }
        }
    }
</script>

<style scoped>

</style>