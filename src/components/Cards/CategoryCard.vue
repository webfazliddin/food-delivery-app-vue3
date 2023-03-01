<template>
  <a
    href="#"
    :class="classnames($style.category, { [$style.isSelected]: selected })"
    @click.prevent="handleClick"
  >
    <img :class="$style.image" :src="image" />
    <div :class="$style.title">{{ title }}</div>
  </a>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { withDefaults } from "vue";

export interface ICategoryCard {
  image?: string;
  title: string;
  selected: boolean;
}

withDefaults(defineProps<ICategoryCard>(), {
  selected: false,
});

const emit = defineEmits<{
  (e: "on-click"): void;
}>();

const handleClick = () => {
  emit("on-click");
};
</script>

<style module lang="scss">
.category {
  text-align: center;
  text-decoration: none;
  background: $color-white;
  border: 2px solid $color-grey-lightest;
  border-radius: 16px;
  padding: 12px;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  outline: none;

  &:hover {
    cursor: pointer;
    border: 2px solid $color-grey-light;
    background-color: $color-grey-lightest;
  }

  &:focus-visible {
    border: 2px solid $color-primary;
  }
}

.image {
  width: 24px;
  height: 24px;
  object-fit: cover;
}

.title {
  color: $color-grey-dark;
  font-family: $base-font;
  font-size: 13px;
  font-weight: 700;
}

.isSelected {
  background: mix($color-primary, $color-white, 10%);
  border: 2px solid $color-primary;

  &:hover {
    border: 2px solid $color-primary;
    background: mix($color-primary, $color-white, 10%);
  }

  &:focus-visible {
    border: 2px solid $color-primary;
  }
}
</style>
