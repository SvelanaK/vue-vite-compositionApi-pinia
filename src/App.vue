<script setup lang="ts">
import { onMounted } from "vue";

import UserList from "./components/UserList.vue";
import Filters from "./components/Filters.vue";
import MyFooter from "./components/MyFooter.vue";
import { useUsersStore } from "./store/usersStore";

const usersStore = useUsersStore();
onMounted(() => {
  usersStore.getAllUsers();
});
</script>

<template>
  <div class="content-wrapper">
    <div class="logo">
      <img src="./assets/vue.svg" />
    </div>
    <div v-if="usersStore.state.loading" class="loader">
      Пожалуйста подождите...
    </div>
    <div class="container">
      <filters />
      <user-list />
    </div>
    <my-footer />
  </div>
</template>

<style lang="scss">
.content-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

body {
  margin: 0;
}

.loader {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}

.container {
  display: flex;
  justify-content: space-evenly;
}

.logo {
  display: flex;
  justify-content: center;
  padding: 50px;
  img {
    width: 200px;
  }
}
</style>
