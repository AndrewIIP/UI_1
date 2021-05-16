<template>
    <div class="post">
        <div class="container-fluid ">
            <nav class="navbar-expand  navbar-light p-2">
                <ul class="navbar-nav align-items-center row">
                    <li class="nav-item col">
                        <router-link :to="{name: 'Home'}" class="nounderline">
                            <div class="logo-text">The Bluejay's Blog</div>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'Profile'}" class="nav-link pl-3 pr-3 nav-link-custom">Profile</router-link>
                    </li>
                    <li class="nav-item col-1">
                        <router-link :to="{name: 'About'}" class="nav-link pl-3 pr-3 nav-link-custom">About</router-link>
                    </li>
                    <li class="nav-item col-1">
                        <router-link :to="{name: 'Login'}" class="sign-in navbar-brand m-0 pl-3 pr-1  align-items-center">
                            <img src="../assets/pics/doorhandle.png" width="55" height="55" class="d-inline-block" alt="">
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <section class="banner-section" v-bind:style="{ backgroundImage: 'url(' + this.post.imageUrl + ')' }">
        </section>
        <div class="container pb-5">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 post-title-block">
                    <h1 class="text-center">{{this.post.title}}</h1>
                    <ul class="list-inline text-center">
                        <li class="list-inline-item">{{this.post.creator}} |</li>
                        <li class="list-inline-item">{{formatDate(this.post.date)}}</li>
                    </ul>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-12">
                    <p>{{this.post.text}}</p>
                </div>
                <div class="col-lg-3  col-md-3 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="card-title">About Author</h2>
                            <img src="" class="img-rounded" />
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            <a href="#" class="btn btn-default">Read more</a>
                        </div>
                    </div>
                    <div class="row justify-content-center p-2">
                        <div class="btn-group">
                            <button type="button" class="btn btn-danger">Actions</button>
                            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">
                                <button class="dropdown-item" data-toggle="modal" data-target="#exampleModal" >Delete post</button>
                            </div>
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Deleting post</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            Are you sure you want to remove this post?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-danger" data-dismiss="modal" @click="deletePost">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-12">
                    <textarea v-model="newComment" type="text" class="col-12 form-control mb-2" id="postText" rows="2" placeholder="Leave a comment"></textarea>
                    <div class="row justify-content-end">
                        <button @click="addComment" class="btn btn-primary mr-3">Leave a comment</button>
                    </div>
                    <div class="mt-3">
                        <Comment
                                v-for="comment in reversedItems"
                                v-bind:key="comment.id"
                                v-bind:text="comment.text"
                                v-bind:time="comment.time"
                        />
                    </div>
                </div>
            </div>
        </div>
        <footer class="text-muted">
            <div class="container p-3 p-md-5">
                    <p class="float-right"><a href="#">Back to top</a></p>
                    <p>© 2017-2018 Company, Inc. ·</p>
            </div>
        </footer>
    </div>
</template>

<script>
    import Comment from "@/components/Comment";
    export default {
        name: "Post",
        components: {Comment},
        data () {
            return {
                post:'',
                newComment: '',
            }
        },
        mounted() {
            this.post = this.$store.state.blog.fetchPostById(Number.parseInt(this.$route.params.id));
        },
        computed: {
            reversedItems: function () {
                return this.post.comments.slice().sort((a,b) => b.date - a.date).reverse()
            }
        },
        methods: {
            formatDate(date) {
                const months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ];
                const days = [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat'
                ];
                const year = date.getFullYear();
                const dayNum = date.getDate();
                const dayName = days[date.getDay()];
                const monthName = months[date.getMonth()];
                return `${dayName}, ${dayNum} ${monthName} ${year}`;
            },
            addComment() {
                this.$store.dispatch('ADD_COMMENT', {id: this.post.id, text: this.newComment});
            },
            deletePost() {
                this.$store.dispatch('DELETE_POST', this.post.id);
                this.$router.push({name: 'Home'});
            }
        }
    }

</script>

<style scoped>
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
    .logo-text {
        color: #3F3F3F !important;
        font-family: 'Blangkon', sans-serif;
        font-size: 2rem;
        font-weight: 600;
    }
    .nounderline {
        text-decoration: none !important
    }
    .banner-section {
        /*background-image:url("https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?h=350&auto=compress&cs=tinysrgb");*/
        background-size:cover;
        height: 380px;
        width: 100%;
        position: absolute;

        background-position:0;
    }
    .post-title-block{
        padding:150px 0;
    }
    .post-title-block h1 {
        color: #fff; font-size: 85px; font-weight: bold; text-transform: capitalize;
    }
    .post-title-block li{
        font-size:20px; color: #fff;
    }
    .post p {
        font-size: 16px;

    }
</style>