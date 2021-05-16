// import Post from './Post.js';

export default class Blog {
    constructor(defaultPosts, lastId) {
        this.posts = defaultPosts;
        this.lastId = lastId;
    }

    fetchPostById(id) {
        return this.posts.find(post => post.id === id);
    }

    addNewPost(post) {
        this.posts.push(post);
    }

    deletePostById(postId) {
        for(let i = 0; i < this.posts.length; i++) {
            if(this.posts[i].id === postId){
                this.posts.splice(i,1);
            }
        }
    }
}