<template>
  <div :class="classnames($style.dealCard, $style[variant])">
    <div :class="$style.image">
      <img src="@/assets/deal/burger.png" alt="burger" />
    </div>

    <div :class="$style.content">
      <div>
        <div :class="$style.title">{{ title }}</div>
        <div :class="$style.offer">{{ offer }}</div>
      </div>
      <div>
        <div :class="$style.tag">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { withDefaults } from "vue";

export interface IDealCard {
  title: string;
  offer: string;
  tag: string;
  variant?: "primary" | "secondary" | "offer";
}

withDefaults(defineProps<IDealCard>(), {
  title: "",
  offer: "",
  tag: "",
  variant: "primary",
});
</script>

<style module lang="scss">
.dealCard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $color-primary-light;
  border-radius: 16px;

  @include breakpoint("xs") {
    flex-direction: column-reverse;
  }

  @include breakpoint("md") {
    flex-direction: row;
  }
}

.primary {
  background-color: $color-primary-light;
}

.secondary {
  background-color: $color-secondary-light;
}

.offer {
  color: $color-primary;
}

.primary {
  color: $color-primary;
}

.secondary {
  color: $color-secondary;
}

.offer {
  color: $color-secondary;
}

.image {
  img {
    width: 100%;
  }
}

.content {
  padding: 16px 34px 16px 0;

  @include breakpoint("xs") {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px;
  }

  @include breakpoint("md") {
    flex-direction: column;
  }
}

.title {
  font-family: $base-font;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.1px;
  color: #2b2b43;
}

.offer {
  font-family: $base-font;
  font-weight: 800;
  font-size: 40px;
  line-height: 56px;
  letter-spacing: 0.1px;
  margin-bottom: 16px;
}

.tag {
  font-family: $base-font;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: $color-grey;
}
</style>
