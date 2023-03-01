<template>
  <div :class="$style.baseInput">
    <label :class="$style.label" for="email">{{ label }}</label>

    <div :class="classnames($style.wrapper, { [$style.hasError]: !!error })">
      <input
        :class="$style.input"
        :value="value"
        :type="
          type === 'password' ? (showPassword ? 'text' : 'password') : type
        "
        :placeholder="placeholder"
        @input="handleInputChange"
        required
        :disabled="disabled"
      />

      <div v-if="type === 'password'" :class="$style.append">
        <button
          v-if="showPassword"
          :class="$style.passwordToggle"
          @click="togglePasswordShow"
        >
          <font-awesome-icon icon="fa-facebook-f" />
        </button>

        <button
          v-else
          :class="$style.passwordToggle"
          @click="togglePasswordShow"
        >
          <font-awesome-icon icon="fa-eye-slash" />
        </button>
      </div>
    </div>
    <div v-if="!!error" :class="$style.error">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { withDefaults } from "vue";

export interface IBaseInput {
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  showPassword?: boolean;
  disabled?: boolean;
  error?: string;
}

withDefaults(defineProps<IBaseInput>(), {
  placeholder: "",
  type: "text",
  showPassword: false,
  disabled: false,
  error: "",
});

const emit = defineEmits<{
  (e: "on-password-toggle"): void;
  (e: "on-input", newValue: string): void;
}>();

const togglePasswordShow = () => {
  emit("on-password-toggle");
};

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("on-input", target.value);
};
</script>

<style module lang="scss">
.baseInput {
  width: 100%;
  padding: 1 16px 32px 0;
  margin-bottom: 12px;
}
.label {
  display: block;
  font-family: $base-font;
  font-weight: 700;
  font-size: 12px;
  line-break: 16px;
  color: $color-grey-dark;
  margin-bottom: 8px;
}
.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  border: 1px solid $color-grey-light;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  &:hover {
    border: 1px solid $color-grey;
    border-radius: 8px;
  }
  &:has(input:focus) {
    border: 1px solid $color-primary;
    border-radius: 8px;
  }
}

.hasError {
  border: 1px solid $color-error;
}
.input {
  color: $color-dark;
  width: 100%;
  height: 44px;
  border: none;
  outline: none;
  padding: 12px 4px 12px 12px;
  letter-spacing: 0.1px;
  font-family: $base-font;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  &:disabled {
    color: $color-grey !important;
  }
}
.append {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
}
.passwordToggle {
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
  background: unset;
  transition: color 0.25s ease-in-out;
  color: $color-grey;

  &:hover {
    color: $color-grey-dark;
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
  }
}
.error {
  font-family: $base-font;
  font-size: 12px;
  font-weight: 700;
  padding: 0 8px;
  margin-top: 4px;
  color: $color-error;
}
</style>
