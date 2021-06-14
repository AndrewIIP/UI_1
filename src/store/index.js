import Vue from 'vue'
import Vuex from 'vuex'
import Blog from '@/cls/model/Blog.js'
import User from '@/cls/model/User.js'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        blog: new Blog([
            {
                id: 1,
                title: "Fly",
                creator: "Joe Doe",
                imageUrl: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?h=350&auto=compress&cs=tinysrgb",
                date: new Date('03/25/2021'),
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                textPreview: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                comments: [{
                    id:1,
                    text: "Such a great post!",
                    time: new Date('2021-01-17T03:23:00')
                }, {
                    id:2,
                    text: "Useless!",
                    time: new Date('2021-02-17T03:15:31')
                }]
            },
            {
                id: 2,
                title: "Fry",
                creator: "Andy Warhol",
                imageUrl: "https://images.pexels.com/photos/129105/pexels-photo-129105.jpeg?h=350&auto=compress&cs=tinysrgb",
                date: new Date('2021-02-17T03:24:00'),
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                textPreview: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                comments: [],
            },
            {
                id: 3,
                title: "Fix",
                creator: "Lauren Dietrich",
                imageUrl: "https://images.pexels.com/photos/129441/pexels-photo-129441.jpeg?h=350&auto=compress&cs=tinysrgb",
                date: new Date('2021-02-17T03:24:00'),
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                textPreview: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                comments: [],
            },
            {
                id: 4,
                title: "Fox",
                creator: "Ronald Dump",
                imageUrl: "https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?h=350&auto=compress&cs=tinysrgb",
                date: new Date('2021-02-17T03:24:00'),
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                textPreview: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                comments: [],
            }
        ], 4),
        users: [new User(1,"Andrew Polishchuk", new Date('03/25/1999'), "Male", "andrewpolishchuk@gmail.com", "1234")],
    },
    mutations: {
        FETCH_POST_BY_ID: (state, id) => {
            return state.blog.fetchPostById(id);
        },
        PUBLISH_POST: (state, postObj) => {
            let id = ++state.blog.lastId;

            console.log(postObj.text);
            console.log(typeof text);

            let textPreview = postObj.text.substring(0,100) + "...";
            console.log(state.blog.posts.length);
            state.blog.addNewPost({
                id: id,
                title: postObj.title,
                creator: state.users[0].username,
                imageUrl: postObj.imageUrl,
                date: new Date(),
                text: postObj.text,
                textPreview: textPreview
            });
            console.log(state.blog.posts.length);

        },
        DELETE_POST: (state, postId) => {
            state.blog.deletePostById(postId)
        },
        ADD_COMMENT: (state, idAndText) => {
            state.blog.fetchPostById(idAndText.id).comments.push(
                {
                    id: Math.round(Math.random() * 100000),
                    text: idAndText.text,
                    time: new Date()
                }
            );
        }
    },
    actions: {
        PUBLISH_POST: (context, postObj) => {
            context.commit('PUBLISH_POST', postObj);
        },
        DELETE_POST: (context, postId) => {
            context.commit('DELETE_POST', postId);
        },
        ADD_COMMENT: (context, idAndText)  => {
            context.commit('ADD_COMMENT', idAndText);
        },
    }
})


