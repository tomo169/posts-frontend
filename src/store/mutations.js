export default {
  setPosts(state, payload) {
    console.log('mutacija', payload);
    state.posts = payload;
  },
};
