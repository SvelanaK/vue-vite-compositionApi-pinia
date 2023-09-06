<script setup lang="ts">
import UserItem from "./UserItem.vue";

import { useUsersStore } from "../store/usersStore";

const usersStore = useUsersStore();
</script>

<template>
  <section class="list-container">
    <div class="list" v-if="usersStore.state.users.length">
      <h3>User List</h3>
      <div class="wrapper">
        <transition-group name="users-list">
          <user-item
            v-for="user in usersStore.filterScoreAndCountryUser"
            :key="user.id"
            :user="user"
          />
        </transition-group>
      </div>
    </div>
    <h3 v-else>Empty</h3>
  </section>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 16px;
}

.list-container {
  max-width: 40%;
}
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  column-gap: 20px;
  row-gap: 25px;
}
.users-list-item {
  display: inline-block;
  margin-right: 10px;
}
.users-list-enter-active,
.users-list-leave-active {
  transition: all 0.3s ease;
}
.users-list-enter,
.users-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.users-list-move {
  transition: transform 0.3s;
}
</style>
