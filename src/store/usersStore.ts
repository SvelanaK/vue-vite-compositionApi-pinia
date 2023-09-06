import { computed, reactive } from "vue";
import { defineStore } from "pinia";

import { IUser, IUsersStoreState } from "../types/types";
import { usersArr } from "../constansts/usersArr";

export const useUsersStore = defineStore("usersStore", () => {
  const state = reactive<IUsersStoreState>({
    country: null,
    score: null,
    users: [],
    loading: false,
    error: [],
  });

  const getAllUsers = async () => {
    try {
      state.loading = true;
      state.users = usersArr;
    } catch (err: unknown) {
      state.error.push(err);
      setTimeout(() => {
        state.error = [];
      }, 5000);
    } finally {
      state.loading = false;
    }
  };

  const filterCountryUser = computed(() => {
    return state.country
      ? state.users.filter((item: IUser) => item.country === state.country)
      : state.users;
  });
  const filterScoreAndCountryUser = computed(() => {
    const { score } = state;
    return score
      ? filterCountryUser.value.filter((item: IUser) =>
          score === "< 10" ? item.score <= 10 : item.score >= 20
        )
      : filterCountryUser.value;
  });
  return {
    state,
    getAllUsers,
    filterScoreAndCountryUser,
  };
});
