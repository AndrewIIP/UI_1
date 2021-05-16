<template>
    <div class="blog-post col-lg-6 col-md-6 col-sm-6 col-xs-12 row" data-aos="fade-right">
        <div class="col-lg-6 col-xs-12">
            <img :src="imageUrl" alt="" width="100%">
        </div>
        <div class="col-lg-6 col-xs-12">
            <div class="blog-column">
                <span>{{postTitle}}</span>
                <ul class="blog-detail list-inline">
                    <li class="list-inline-item"><i class="fa fa-user"></i>{{creator}}</li>
                    <li class="list-inline-item"><i class="fa fa-clock-o"></i>{{formatDate(date)}}</li>
                </ul>
                <p>{{text}}</p>
                <router-link :to="{name: 'Post', params: {id: id}}">Read More</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import post from '../views/Post'
    export default {
        name: "PostColumn",
        props: {
            id: Number,
            postTitle: String,
            creator: String,
            date: Date,
            imageUrl: String,
            text: String
        },
        methods: {
            formatDate (date) {
                return post.methods.formatDate(date);
            }
        }
    }
</script>

<style scoped>
    .fa.fa-user, .fa.fa-clock-o {
        padding-right: 10px;
        color: #909090;
        font-size: 11px;
    }
    .blog  span {
        font-size: 17px;
        font-weight: 700;
    }
    .blog-detail {
        margin-top: 10px;
    }
</style>