<template>
  <div :class="$style.card">
    <SkeletonShimmer v-if="isLoadingImage" :class="$style.imageLoader" />

    <div
      v-else-if="!isLoadingImage"
      :class="$style.image"
      :style="{
        'background-image': 'url(' + image + ')',
      }"
    >
      <span :class="$style.featured"> featured </span>
    </div>

    <div :class="$style.body">
      <div :class="$style.heading">
        <div :class="$style.title">{{ title }}</div>

        <button :class="$style.addCartBtn">
          <img src="@/assets/product/shopping.svg" />
          <span :class="$style.counter">4</span>
        </button>
      </div>

      <div :class="$style.text">
        <img src="@/assets/product/clock.svg" />
        <span>{{ deliveryTime }}</span>
        <span :class="$style.dot"></span>
        <span>{{ minimalOrder }}</span>
      </div>

      <div :class="$style.categories">
        <div
          :class="$style.category"
          v-for="category in categories"
          :key="`productCategory__${category.id}`"
        >
          <img v-if="true" :src="category.image" />
          <span>{{ category.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useImage } from "@vueuse/core";
import { withDefaults } from "vue";
import type { IProductCategory } from "@/types";

export interface IProductCard {
  image: string;
  title: string;
  deliveryTime: string;
  minimalOrder: string;
  categories: IProductCategory[];
}

const props = withDefaults(defineProps<IProductCard>(), {
  image:
    "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png",
});

const { isLoading: isLoadingImage } = useImage({ src: props.image });
</script>

<style module lang="scss">
.card {
  border: 1px solid $color-grey-lightest;
  border-radius: 16px;
}
.imageLoader {
  height: 160px !important;
}

.image {
  position: relative;
  height: 160px;
  border-radius: 16px 16px 0 0;
  background-size: cover;
}

.featured {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  padding: 8px 16px;
  font-family: $base-font;
  font-weight: bold;
  font-size: 11px;
  color: $color-white;
  text-transform: uppercase;
  border-radius: 0 16px;
  background-color: $color-primary;
}

.body {
  padding: 16px;
}

.heading {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4px;
  margin-bottom: 6px;
}

.title {
  color: $color-dark;
  font-family: $base-font;
  font-size: 18px;
  line-height: 24px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.text {
  display: flex;
  align-items: center;
  margin-bottom: 14px;

  span {
    color: $color-grey;
    font-family: $base-font;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    margin-left: 7px;
  }
}

.categories {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
}

.category {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  width: max-content;
  color: $color-grey-dark;
  font-family: $base-font;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  padding: 4px 10px;
  background: $color-grey-lightest;
  border-radius: 100px;

  img {
    width: 12px;
    height: 12px;
    object-fit: cover;
  }
}

.addCartBtn {
  all: unset;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  &:focus-visible {
    outline: 1px solid $color-primary;
  }
}

.counter {
  color: $color-white;
  position: absolute;
  top: -12px;
  right: 0;
  font-family: $base-font;
  font-size: 10px;
  line-height: 1;
  font-weight: bold;
  background-color: $color-primary;
  padding: 3px;
  min-width: 14px;
  text-align: center;
  border-radius: 6px;
}

.dot {
  width: 3px;
  height: 3px;
  background-color: $color-primary;
  border-radius: 50%;
  margin-left: 8px;
}
</style>
