<template>
  <div>
    <router-link to="/createPost">CreatePost</router-link>
    <Post v-for="post in posts.data" :key="post.id" :post="post" class="item">
    </Post>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Post from './Post.vue';

export default {
  name: 'HelloWorld',
  components: {
    Post,
  },
  computed: {
    ...mapGetters(['posts']),
  },
  methods: {
    ...mapActions(['readPosts']),
  },
  created() {
    this.readPosts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item {
  margin: 15px;
}
</style>
