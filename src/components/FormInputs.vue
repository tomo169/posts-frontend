<template>
  <div class="form-wrapper">
    <div class="step-one-container" v-if="step == 1">
      step 1
      <input type="text" name="name" v-model="form.author_name" />
      <input type="email" name="email" v-model="form.author_email" />
      <button @click="goToNextStep(2)">Next</button>
    </div>
    <div class="step-two-container" v-if="step == 2">
      step 2
      <input type="text" name="post-heading" v-model="form.post_header" />
      <input type="text" name="post-content" v-model="form.post_content" />
      <input type="text" name="post-category" v-model="form.post_category" />
      <button @click="goToNextStep(3)">Next</button>
      <button @click="goOneStepBack()">Back</button>
    </div>
    <div class="step-three-container" v-if="step == 3">
      step 3
      <div>{{ form.author_name }}</div>
      <div>{{ form.author_email }}</div>
      <div>{{ form.post_header }}</div>
      <div>{{ form.post_content }}</div>
      <div>{{ form.post_category }}</div>
      <button @click="createData()">Create Post!</button>
      <button @click="goOneStepBack()">Back</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FormInputs',
  data() {
    return {
      form: {
        author_name: '',
        author_email: '',
        post_heading: '',
        post_content: '',
        post_category: '',
        create_date: '',
      },
      step: 1,
    };
  },
  methods: {
    async createData() {
      try {
        this.create_date = new Date();
        const res = await axios.post(
          'http://localhost/TMposts-backend/api/post/create.php',
          this.form
        );
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    },
    goToNextStep(step) {
      this.step = step;
    },
    goOneStepBack() {
      this.step--;
    },
  },
};
</script>

<style>
.step-one-container,
.step-two-container {
  display: flex;
  flex-direction: column;
}
</style>
