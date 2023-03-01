<template>
  <div :class="classNames($style.spinner, $style[variant])"></div>
</template>

<script setup lang="ts">
import classNames from "classnames";
import { withDefaults } from "vue";

export interface IBaseSpinner {
  variant?: "white" | "primary" | "secondary";
}

withDefaults(defineProps<IBaseSpinner>(), {
  variant: "primary",
});
</script>
<style module lang="scss">
.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;

  &:after {
    content: " ";
    display: block;
    width: 16px;
    height: 16px;
    margin: 2px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
}

.white {
  &:after {
    border: 2px solid $color-white !important;
    border-color: $color-white transparent $color-white transparent !important;
  }
}

.primary {
  &:after {
    border: 2px solid $color-primary !important;
    border-color: $color-primary transparent $color-primary transparent !important;
  }
}

.secondary {
  &:after {
    border: 2px solid $color-secondary !important;
    border-color: $color-secondary transparent $color-secondary transparent !important;
  }
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
