<template>
  <div :class="$style.layout">
    <main :class="$style.main">
      <header :class="$style.header">
        <div class="container">
          <RouterLink to="/" :class="$style.logo">
            <img src="@/assets/header/main_logo.svg" />
          </RouterLink>
        </div>
      </header>

      <div :class="$style.content">
        <div :class="$style.contentForm">
          <RouterView />
        </div>
      </div>
    </main>

    <aside :class="$style.aside">
      <div :class="$style.asideContainer">
        <h3 :class="$style.carouselTitle">Strengthen the Guci`an bond</h3>

        <p :class="classnames('body1', $style.carouselText)">
          Connecting Alumni and students of Government engineering college
          Idukki to a next level
        </p>

        <div :class="$style.bullet">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import classnames from "classnames";
</script>

<style module lang="scss">
.layout {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;

  @include breakpoint("md") {
    grid-template-columns: 1fr 55vw;
  }
}

.header {
  width: 100%;
  padding-top: 18px;
  padding-bottom: 18px;
  max-height: 80px;
  background-color: white;
}

.logo {
  img {
    width: 80px;
    height: 40px;
  }
}

.main {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: scroll;
}

.content {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contentForm {
  width: 100%;
  padding: 0 15px;
  max-width: 380px;
}

.title {
  font-family: $base-font;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 16px;
  line-height: 42px;
  color: $color-white;
}

// Aside section
.aside {
  display: none;
  background-color: $color-primary;

  @include breakpoint("md") {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
}

.asideContainer {
  text-align: center;
  max-width: 480px;
}

.carouselTitle {
  color: $color-white;
}

.carouselText {
  color: $color-white;
  margin-bottom: 40px !important;
  line-height: 20px;
}

.bullet {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;

  span {
    cursor: pointer;
    width: 8px;
    height: 8px;
    margin: 0 5px;
    opacity: 0.3;
    border-radius: 50%;
    background-color: $color-white;

    &:nth-child(1) {
      opacity: 1;
    }
  }
}
</style>
