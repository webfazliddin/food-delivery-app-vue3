<template>
  <header
    :class="
      classnames($style.header, {
        [$style.isElevated]: elevated,
      })
    "
  >
    <div class="container">
      <div :class="$style.wrapper">
        <div :class="$style.logo">
          <RouterLink to="/">
            <img src="@/assets/header/main_logo.svg" />
          </RouterLink>
        </div>

        <div :class="$style.menu">
          <RouterLink
            v-if="isLoggedIn"
            :class="$style.link"
            to="/my-orders"
            active-class="active"
          >
            My orders
          </RouterLink>

          <RouterLink v-if="isLoggedIn" :class="$style.card" to="/cart">
            <img src="@/assets/header/cart.svg" />
            <span :class="$style.counter">4</span>
          </RouterLink>

          <RouterLink
            v-if="isLoggedIn"
            :class="$style.profileLink"
            to="/profile"
            active-class="active"
          >
            <img
              :class="$style.profileImage"
              src="@/assets/profile/blank-profile-picture.jpg"
            />
          </RouterLink>

          <BaseButton
            v-if="!isLoggedIn"
            variant="primary"
            @on-click="navigateLogin"
          >
            Login
          </BaseButton>

          <img :class="$style.icon" src="@/assets/header/menu.svg" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import classnames from "classnames";
import { useAuthStore } from "@/stores/authStore";
import { RouterLink, useRouter } from "vue-router";

export interface IAppHeader {
  elevated?: boolean;
}

withDefaults(defineProps<IAppHeader>(), {
  elevated: false,
});

const router = useRouter();
const { isLoggedIn } = useAuthStore();

const navigateLogin = () => {
  router.push("/auth/login");
};
</script>

<style module lang="scss">
.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  min-height: 80px;
  background-color: $color-white;
  border-bottom: 1px solid $color-primary-light;
  transition: box-shadow 0.25s ease-in-out;

  &.isElevated {
    box-shadow: 0 0 10px rgba(168, 168, 168, 0.4);
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;

  img {
    cursor: pointer;
  }
}

.menu {
  display: flex;
  align-items: center;
}

.link {
  font-family: $base-font;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  margin: 0 28px;
  color: $color-dark;

  &:hover {
    transition: 0.5s;
    color: $color-primary;
  }

  &.active {
    color: $color-primary;
  }
}

.card {
  background-color: $color-primary-light;
  padding: 12px;
  border-radius: 16px;
  position: relative;
  margin-right: 11px;
}

.counter {
  position: absolute;
  border-radius: 8px;
  padding: 2px 6px;
  right: -6px;
  top: -6px;
  background-color: $color-primary;
  color: $color-white;
}

.profileImage {
  width: 46px;
  height: 46px;
  object-fit: cover;
}

.profileLink {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $color-grey-light;
  outline: 2px solid $color-white;
  border-radius: 16px;
  overflow: hidden;
  box-sizing: border-box;

  &:hover,
  &:focus {
    outline: 2px solid $color-primary;
  }

  &.active {
    outline: 2px solid $color-primary;
  }
}

.icon {
  display: none;
}

// =========Mobile breakpoint==========
@include breakpoint("md") {
  .menu {
    position: relative;
    justify-content: end;
  }

  .link {
    display: none;
  }

  .card {
    border: 2px solid $color-primary-light;

    &:hover {
      border: 2px solid $color-primary;
    }
  }
}
</style>
