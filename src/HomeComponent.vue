<template>
  <h3 class="text-center">Welcome to Vue 3 {{ user }}</h3>
  <p>How are you doing?</p>

  <!-- loop rednering -->
  <div v-for="(item, index) of users" :key="item">
    <li>{{ index + 1 }} {{ item }}</li>
  </div>

  <!-- conditional statements -->
  <div v-if="weather == 'raining'" style="margin-top: 10px">
    Today is a raining day
  </div>
  <div v-else-if="weather == 'hot'">Sunnnyy</div>
  <div v-else>Rain no dey fall</div>

  <div v-show="weather == 'sunny'">Sun deyyyyyyyy</div>

  <p :class="checkColor ? 'text-danger' : 'text-success'">
    The magician's color
  </p>
  <button class="btn btn-primary" @click="checkColor.value = !checkColor.value">
    Change color
  </button>

  <router-link to="/register">Register</router-link>
</template>

<script setup>
import { ref } from "vue";
// import { RouterView } from "vue-router";
let user = "Iyawa";
const users = ["Tayo", "Bayo", "Ayo", "Sayo"];
let weather = "raining";

const checkColor = ref(false);
</script>

<style></style>
