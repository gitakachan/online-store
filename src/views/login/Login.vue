<template>
  <div class="container">
    <div class="row">
      <div class="col col-md-8 mx-auto">
        <h1>登入：</h1>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="user.username"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="user.password"
            />
          </div>
          <!-- <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div> -->
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      console.log(api);
      this.axios.post(api, this.user).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
