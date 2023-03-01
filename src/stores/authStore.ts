import { ref } from "vue";
import { defineStore } from "pinia";
import API from "@/api/API";
import type { ILoginPayload, IRegisterPayload, IResetPayload } from "@/types";

export const useAuthStore = defineStore("authStore", () => {
  const isLoggedIn = ref(false);

  const checkAuth = () => {
    return API.getAuth().then((response: any) => {
      isLoggedIn.value = true;

      const token = response?.data?.token;
      token && localStorage.setItem("foodDeliveryAppToken", token);

      return response;
    });
  };

  const login = (payload: ILoginPayload) => {
    return API.login(payload).then((response: any) => {
      isLoggedIn.value = true;

      const token = response?.data?.token;
      token && localStorage.setItem("foodDeliveryAppToken", token);

      return response;
    });
  };

  const register = (payload: IRegisterPayload) => {
    return API.register(payload).then((response: any) => {
      isLoggedIn.value = true;

      const token = response?.data?.token;
      token && localStorage.setItem("foodDeliveryAppToken", token);

      return response;
    });
  };

  const reset = (payload: IResetPayload) => {
    return API.register(payload).then((response: any) => {
      isLoggedIn.value = true;

      const token = response?.data?.token;
      token && localStorage.setItem("foodDeliveryAppToken", token);

      return response;
    });
  };

  const logout = () => {
    localStorage.removeItem("foodDeliveryAppToken");
    isLoggedIn.value = false;
  };

  return { isLoggedIn, checkAuth, logout, login, register, reset };
});
