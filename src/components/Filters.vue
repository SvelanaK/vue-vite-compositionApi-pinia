<script setup lang="ts">
import { ref } from 'vue';

import { itemsCountryArr, itemsScoreArr } from "../constansts/optionsArr"
import { useUsersStore } from "../store/usersStore";

const usersStore = useUsersStore();
const openCountry = ref(false);
const openScore = ref(false);

const selectCountry = (event: Event) => { 
  const el = event.target as HTMLFormElement;
  usersStore.state.country = el.textContent;
  openCountry.value = !openCountry.value;
};
const selectScore = (event: Event) => {
  const el = event.target as HTMLFormElement;
  usersStore.state.score = el.textContent;
  openScore.value = !openScore.value;
};

const toggleCountry = () => {
  openCountry.value = !openCountry.value;
};

const toggleScore = () => {
  openScore.value = !openScore.value;
};
</script>

<template>
  <section>
    <div class="parent">
      <h3>Filter by country</h3>
      <div
        class="select"
        @click="toggleCountry"
      >
        {{ usersStore.state.country ? usersStore.state.country : "Filter by country" }}
      </div>
      <ul
        v-show="openCountry"
        class="select-items"
      >
        <li
          v-for="item in itemsCountryArr"
          :key="item"
          @click="selectCountry"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="parent">
      <h3>Filter by score</h3>
      <div
        class="select"
        @click="toggleScore"
      >
        {{ usersStore.state.score ? usersStore.state.score : 'Filter by score' }}
      </div>
      <ul
        v-show="openScore"
        class="select-items"
      >
        <li
          v-for="item in itemsScoreArr"
          :key="item"
          @click="selectScore"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@mixin item-main {
  border: 1px solid gray;
  width: 200px;
  background-color: white;
}
@mixin hover-item {
  background-color: #8695ff;
  color: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.parent {
  position: relative;
  margin-bottom: 40px;
}

h3 {
  margin: 21px 0;
}
.select {
  @include item-main;
  height: 40px;
  padding: 10px;
  cursor: pointer;
  background:  95% / 10% no-repeat url("/arrow.png");
}
.select-items {
  position: relative;
  @include item-main;
  top: 0;
  left: 0;
  list-style: none;
  li {
    padding: 10px;
    cursor: pointer;
  }
  li:hover {
    @include hover-item;
  }
  li:not(.select-items > li:last-child) {
    border-bottom: 1px solid gray;
  }
}

.select:hover {
  @include hover-item;
  border: 1px solid #8695ff;
}
</style>