<script setup lang="ts">
import { type PropType } from "vue";

import type { IUser } from "../types/types";

defineProps({
  user: {
    type: Object as PropType<IUser>,
    required: true,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div>
        <img :src="user.avatar" class="avatar" />
      </div>
    </div>
    <div class="card-title" v-html="user.title"></div>
    <div class="card-text" v-html="user.subtitle"></div>
  </div>
</template>

<style scoped>
.avatar {
  width: 50px;
  border-radius: 25px;
  box-shadow: 0 0 0 1px lightgrey;
}
.card {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px;
  border: solid 1px gray;
  background: transparent;
  max-width: 400px;
  box-shadow: 2px 2px 5px grey;
}
</style>
