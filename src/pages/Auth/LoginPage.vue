<template>
  <div :class="$style.login">
    <h3>Login</h3>

    <BaseAlert
      v-if="!!serverError.message"
      :class="$style.baseAlert"
      variant="danger"
      :message="serverError.message"
    />

    <BaseAlert
      v-if="!!serverSuccess.message"
      :class="$style.baseAlert"
      variant="success"
      :message="serverSuccess.message"
    />

    <BaseInput
      label="Email"
      type="email"
      placeholder="name@example.com"
      :value="formData.email"
      :error="errors.email"
      :disabled="isLoading"
      @on-input="(value) => changeField('email', value)"
    />

    <BaseInput
      :class="$style.baseInput"
      label="Password"
      type="password"
      placeholder="min.8 characters"
      :value="formData.password"
      :showPassword="showPassword"
      :error="errors.password"
      :disabled="isLoading"
      @onPasswordToggle="showPasswordClick"
      @on-input="(value) => changeField('password', value)"
    />

    <BaseButton
      variant="primary"
      :class="$style.baseBtn"
      :loading="isLoading"
      @on-click="login"
    >
      Login
    </BaseButton>

    <RouterLink to="/auth/forgot-password" :class="$style.forgotLink"
      >Forgot password</RouterLink
    >

    <div :class="$style.text">
      Don`t have an account?<RouterLink to="/auth/sign-up" class="link">
        Sign up</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

export interface ILoginView {
  email: string;
  password: string;
}

const router = useRouter();
const authStore = useAuthStore();
const isLoading = ref<boolean>(false);
const showPassword = ref(false);
const serverError = reactive({
  message: "",
});
const serverSuccess = reactive({
  message: "",
});

const formData = ref({
  email: "",
  password: "",
});

const errors = reactive({
  email: "",
  password: "",
});

const showPasswordClick = () => {
  showPassword.value = !showPassword.value;
};

const changeField = (propertyName: "email" | "password", value: string) => {
  formData.value[propertyName] = value;

  if (errors[propertyName]) {
    errors[propertyName] = "";
  }
};

const login = () => {
  isLoading.value = true;

  authStore
    .login({
      email: formData.value.email,
      password: formData.value.password,
    })
    .then((response) => {
      serverError.message = "";
      serverSuccess.message = response.data.message;
      router.push("/profile");
    })
    .catch((error) => {
      const apiError = error.response.data;
      serverError.message = apiError.message;

      if (apiError.errors.email) {
        errors.email = apiError.errors.email;
      }

      if (apiError.errors.password) {
        errors.password = apiError.errors.password;
      }
    })
    .finally(() => {
      isLoading.value = false;
    });
};
</script>

<style module lang="scss">
.baseAlert {
  margin-bottom: 16px;
}

.baseInput {
  margin-bottom: 28px !important;
}

.baseBtn {
  width: 100%;
  margin-bottom: 35px;
}

.forgotLink {
  color: $color-primary;
  display: block;
  font-family: $base-font;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  margin-bottom: 110px;
  text-decoration: none;
  &:hover {
    color: $color-primary;
  }
}

.text {
  color: $color-dark;
  font-family: $base-font;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}
</style>
