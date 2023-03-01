<template>
  <div :class="classnames($style.alert, $style[variant])">
    <span :class="$style.message">{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { withDefaults } from "vue";

export interface IBaseAlert {
  message: string;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
}

withDefaults(defineProps<IBaseAlert>(), {
  message: "",
  variant: "primary",
});
</script>

<style module lang="scss">
.alert {
  padding: 16px 20px;
  width: 100%;
  border-radius: 4px;
}

.message {
  font-size: 14px;
  font-family: $base-font;
  font-weight: 400;
}

.primary {
  color: $color-primary;
  background: $color-primary-light;
  border-left: 8px solid $color-primary;
}

.secondary {
  color: $color-secondary;
  background: $color-secondary-light;
  border-left: 8px solid $color-secondary;
}

.success {
  color: $color-green;
  background: $color-green-light;
  border-left: 8px solid $color-green;
}

.danger {
  color: $color-error;
  background: $color-error-light;
  border-left: 8px solid $color-error;
}

.warning {
  color: $color-yellow-dark;
  background: $color-yellow-light;
  border-left: 8px solid $color-yellow-dark;
}
</style>
