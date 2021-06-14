<template>
    <div class="">
        <router-link :to="{name: 'Home'}">
            <img src="../assets/pics/bloglogo5.png" width="120" height="120" class="logo d-inline-block position-absolute">
            <div class="logo-text">The Bluejay's Blog</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "CornerLogo"
    }
</script>

<style scoped>
    .logo-text {
        color: #3F3F3F !important;
        font-family: 'Blangkon', sans-serif;
        font-size: 2.6rem;
        transform: rotate(330deg);
        position: absolute;
        top: 130px;
        left: 10px;
        font-weight: 600;
    }
    .logo {
        top: 20px;
        left: 30px;
    }
    @media (max-width: 1000px) {
        .logo-text {
            display: none;
        }
        .logo {
            width: 100px;
            height: 100px;
            left: 20px;
        }
    }

    @media (max-width: 500px) {
        .logo-text {
            display: none;
        }
        .logo {
            display: none;
        }
    }
</style>