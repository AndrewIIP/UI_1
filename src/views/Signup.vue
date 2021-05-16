<template>
    <div>
        <nav class="nav-custom navbar navbar-expand-lg navbar-light justify-content-end pt-2 pb-2">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{name: 'Profile'}" class="nav-link pl-3 pr-3 nav-link-custom">Profile</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'Home'}" class="nav-link pl-3 pr-5 nav-link-custom">Home</router-link>
                </li>
            </ul>
        </nav>
        <CornerLogo/>
        <div class="container">
            <div class="row justify-content-center">
                <h5>Creating new account</h5>
            </div>
            <form>
                <div class="row col-6 offset-3 justify-content-center mt-4">
                    <label>Username</label>
                    <input type="text" class="form-control form-control-lg" />
                </div>
                <div class="row offset-3 col-6 justify-content-between ">
                    <div class="row col-6 mt-3 justify-content-center">
                        <label>Birthday</label>
                        <input type="date" class="form-control form-control-lg" />
                    </div>
                    <div class="row col-6 justify-content-center mt-3">
                        <div class="row col-12 justify-content-center"><label>Gender</label></div>
                        <div class="row col-12 justify-content-around align-items-center">
                            <div class="form-check pr-2">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                                <label class="form-check-label" for="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check pl-4">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                                <label class="form-check-label" for="gridRadios2">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row col-6 offset-3 justify-content-center mt-3">
                    <label>Email address</label>
                    <input type="email" class="form-control form-control-lg" />
                </div>
                <div class="row col-6 offset-3 justify-content-center mt-3">
                    <label>Password</label>
                    <input type="password" class="form-control form-control-lg" />
                </div>
                <div class="row col-6 offset-3 justify-content-center mt-3">
                    <label>Confirm password</label>
                    <input type="password" class="form-control form-control-lg" />
                </div>
                <div class="row col-6 offset-3 justify-content-center mt-4">
                    <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>
                </div>
            </form>
            <div class="row col-6 offset-3 justify-content-end mt-3">
                <p class="forgot-password text-right">
                    Already registered?
                    <router-link :to="{name: 'Login'}">Sign in</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import CornerLogo from "@/components/CornerLogo";

    export default {
        name: "Signup",
        components: {CornerLogo}
    }
</script>

<style scoped>
    .nav-custom {
        font-size: 16px;
        height: 79px;
    }
</style>