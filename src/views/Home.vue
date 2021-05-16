<template>
    <div class="blog">
        <nav class="navbar navbar-expand-lg navbar-light justify-content-end">
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{name: 'AddNewPost'}" class="nav-link pl-3 pr-5 nav-link-custom">
                            <img class="plus-img pr-2" src="../assets/open-iconic/plus.svg"/>
                            <span>Add new post</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'Profile'}" class="nav-link pl-3 pr-5 nav-link-custom">Profile</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'About'}" class="nav-link pl-3 pr-5 nav-link-custom">About</router-link>
                    </li>
                </ul>
            </div><!--/.nav-collapse -->
            <router-link :to="{name: 'Login'}" class="sign-in navbar-brand p-1 d-flex flex-row align-items-center ml-3">
                <img src="../assets/pics/doorhandle.png" width="55" height="55" class="d-inline-block" alt="">
            </router-link>
        </nav>
        <CornerLogo/>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-lg-offset-3 text-center">
                    <h2><span class="ion-minus"></span>Blog Posts<span class="ion-minus"></span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus </p><br>
                </div>
            </div>
            <div class="row justify-content-start">
                <PostColumn class="pb-5"
                            v-for="post in this.$store.state.blog.posts"
                            v-bind:key="post.id"
                            v-bind:id="post.id"
                            v-bind:post-title="post.title"
                            v-bind:creator="post.creator"
                            v-bind:image-url="post.imageUrl"
                            v-bind:text="post.textPreview"
                            v-bind:date="post.date"
                            v-bind:comments="post.comments"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import CornerLogo from "@/components/CornerLogo";
    import PostColumn from "@/components/PostColumn";
    export default {
        name: 'Home',
        components: {PostColumn, CornerLogo},
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    h2 {
        color: #4C4C4C;
        word-spacing: 5px;
        font-size: 30px;
        font-weight: 700;
        margin-bottom:30px;
        font-family: 'Raleway', sans-serif;
    }
    .ion-minus{
        padding:0 10px;
    }
    .blog {
        padding:0 0 60px 0;
    }
    .blog .blog-column a{
        color: #5db4c0;
        text-decoration: none;
    }
    .blog  .blog-detail {
        margin-top: 10px;
    }
    .fa.fa-user, .fa.fa-clock-o {
        padding-right: 10px;
        color: #909090;
        font-size: 11px;
    }
    .sign-in:hover img {
        -webkit-filter: invert(100%);
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
        font-size: 16px;
    }
    .plus-img {
        height: 15px;
        color: #f6f6f6;
    }
</style>