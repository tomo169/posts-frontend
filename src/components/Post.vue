<template>
  <div>
    <div>{{ post.author_name }}</div>
    <div>{{ post.author_email }}</div>
    <div>{{ post.post_heading }}</div>
    <div>{{ post.post_content }}</div>
    <div>{{ post.post_category }}</div>
    <div>{{ post.create_date }}</div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object,
  },
};
</script>

<style></style>
