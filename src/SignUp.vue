<template>
  <div class="col-6 border rounded rounded-5 mx-auto mt-4 p-3">
    <h4 class="text-center">Everything events</h4>
    <div class="form-group mb-2">
      <label for="">Name</label>
      <input type="text" class="form-control" v-model="name">
    </div>
    <div class="form-group mb-2">
      <label for="">Email</label>
      <input type="email" class="form-control" v-model="email">
    </div>
    <div class="form-group mb-2">
      <label for="">Password</label>
      <input type="password" class="form-control" v-model="password">
    </div>
    <div class="form-group">
      <button class="btn btn-outline-primary w-100" @click="register">Register</button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // const user = ref({});

  const name = ref('');
  const email = ref('');
  const password = ref('');

  const register = () =>{
    console.log(name.value, email.value, password.value);
    const name = ref('name.value')
    const email = ref('email.value
    const password = password.value


    const user = {name, email, password}
    console.log(user);

  }


</script>

<style scoped>

</style>

