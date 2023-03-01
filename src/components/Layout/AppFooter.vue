<template>
  <footer :class="$style.footer">
    <div class="container">
      <div :class="$style.wrapper">
        <div>
          <RouterLink to="/">
            <font-awesome-icon
              :class="$style.icon"
              icon="fa-brands fa-facebook-f"
            />
          </RouterLink>
          <RouterLink to="/">
            <font-awesome-icon
              :class="$style.icon"
              icon="fa-brands fa-twitter"
            />
          </RouterLink>
          <RouterLink to="/">
            <font-awesome-icon
              :class="$style.icon"
              icon="fa-brands fa-instagram"
            />
          </RouterLink>
          <RouterLink to="/">
            <font-awesome-icon
              :class="$style.icon"
              icon="fa-brands fa-youtube"
            />
          </RouterLink>
          <RouterLink to="/">
            <font-awesome-icon
              :class="$style.icon"
              icon="fa-brands fa-linkedin-in"
            />
          </RouterLink>
        </div>
        <div>
          <span :class="$style.header">Response</span>
          <RouterLink to="/" :class="$style.link">How it works</RouterLink>
          <RouterLink to="/" :class="$style.link">Guarantee</RouterLink>
          <RouterLink to="/" :class="$style.link">Security</RouterLink>
          <RouterLink to="/" :class="$style.link">Pricing</RouterLink>
        </div>

        <div>
          <span :class="$style.header">Company</span>
          <RouterLink to="/" :class="$style.link">About us</RouterLink>
          <RouterLink to="/" :class="$style.link">Prices</RouterLink>
          <RouterLink to="/" :class="$style.link">Blog</RouterLink>
          <RouterLink to="/" :class="$style.link">License</RouterLink>
        </div>

        <div>
          <span :class="$style.header">Support</span>
          <RouterLink to="/" :class="$style.link">Getting started</RouterLink>
          <RouterLink to="/" :class="$style.link">Help center</RouterLink>
          <RouterLink to="/" :class="$style.link">Report a bug</RouterLink>
          <RouterLink to="/" :class="$style.link">Contact us</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.footer {
  color: $color-neutral-black;
  background-color: $color-neutral-black;
  padding: 48px 0;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  @include breakpoint("md") {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
  div:nth-child(n + 2) {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    @include breakpoint("md") {
      margin-bottom: 0;
    }
  }
}

.logo {
  margin-bottom: 16px;
}
.icon {
  background-color: $color-grey;
  width: 20px;
  height: 20px;
  border-radius: 24px;
  padding: 6px;
  margin-bottom: 40px;
  margin-right: 16px;
  cursor: pointer;
  &:hover {
    background-color: $color-white;
  }
}

.header {
  color: $color-white;
  font-family: $base-font;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.1px;
  margin-bottom: 16px;
}

.link {
  color: $color-grey-light;
  font-family: $base-font;
  text-decoration: none;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.2px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    color: $color-grey;
  }
}
</style>
