<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { ref, onMounted } from "vue";
import { RouterView } from "vue-router";

const { checkAuth } = useAuthStore();
const isAppLoading = ref(true);

const setupApplication = () => {
  if (localStorage.getItem("foodDeliveryAppToken")) {
    checkAuth();
    // .then(response => {
    //   const { data: { user: { id, firstName, lastName, email, phoneNumber } = {} } = {} } = response;
    //   this.setUserData({
    //     id,
    //     firstName,
    //     lastName,
    //     email,
    //     phoneNumber
    //   })
    // })
    // .finally(() => {
    //    isAppLoading.value = false;
    // })
  } else {
    isAppLoading.value = false;
  }
};

onMounted(() => {
  setupApplication();
});
</script>
