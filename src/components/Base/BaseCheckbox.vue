<template>
  <div :class="$style.wrapper">
    <div tabIndex="0"
      :class="
        classnames($style.checkbox, {
          [$style.isChecked]: checked,
        })
      "
      @click="toggleCheckbox"
    >
      <font-awesome-icon :class="$style.icon" icon="fa-solid fa-check" />
    </div>

    <div v-if="label" :class="$style.label" @click="toggleCheckbox">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { withDefaults } from "vue";

export interface IBaseCheckbox {
  label?: string;
  checked?: boolean;
}

withDefaults(defineProps<IBaseCheckbox>(), {
  label: "",
  checked: false,
});

const emit = defineEmits<{
  (e: "on-change"): void;
}>();

const toggleCheckbox = () => {
  emit("on-change");
};
</script>

<style module lang="scss">
.wrapper {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 0 12px;
}

.label {
  color: $color-dark;
  font-family: $base-font;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  user-select: none;
}

.icon {
  color: $color-white;
  // display: none;
}

.checkbox {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid $color-grey-light;
  border-radius: 4px;
  &:focus-visible{
    border: 2px solid $color-primary;
  }
}
.isChecked {
  background-color: $color-primary;
  border: 2px solid $color-primary;
  // &.icon {
  //   display: block;
  // }
}

.label,
.checkbox {
  &:hover {
    cursor: pointer;
  }
}
</style>
