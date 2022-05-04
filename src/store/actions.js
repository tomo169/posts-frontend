import axios from 'axios';

export default {
  async readPosts({ commit }) {
    try {
      const res = await axios.get(
        'http://localhost/TMposts-backend/api/post/read.php'
      );
      console.log('akcija', res.data);
      commit('setPosts', res.data);
    } catch (err) {
      console.error(err);
    }
  },
};
