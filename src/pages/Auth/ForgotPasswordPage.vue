<template>
  <form @submit.prevent>
    <h1>Reset password</h1>

    <BaseInput
      :class="$style.baseInput"
      label="Email"
      placeholder="name@example.com"
      :value="formData.email"
      :error="errors.email"
      @on-input="(value) => changeField('email', value)"
    />

    <div>
      <BaseButton
        variant="primary"
        :class="$style.baseBtn"
        @onClick="reset"
        :loading="isLoading"
      >
        Reset
      </BaseButton>
    </div>
    <p :class="$style.text">
      You already have account? Please
      <RouterLink to="/auth/login" class="link">Login</RouterLink>
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const isLoading = ref(false);

const formData = ref({
  email: "",
});

const errors = reactive({
  email: "",
  password: "",
});

const changeField = (propertyName: "email", value: string) => {
  formData.value[propertyName] = value;

  if (errors[propertyName]) {
    errors[propertyName] = "";
  }
};

const reset = () => {
  isLoading.value = true;

  setTimeout(() => {
    errors.email = "* This email is not valid!";

    isLoading.value = false;
  }, 2500);
};
</script>

<style module lang="scss">
.name {
  color: $color-dark;
  font-size: 32px;
  line-height: 82px;
  font-family: $base-font;
  font-weight: 700;
  letter-spacing: 0.1px;
}
.baseInput {
  margin-bottom: 28px !important;
}
.baseBtn {
  width: 100%;
  margin-bottom: 35px;
}
.text {
  color: $color-dark;
  font-family: $base-font;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .forgotPassword {
    width: 95%;
  }
}
</style>
