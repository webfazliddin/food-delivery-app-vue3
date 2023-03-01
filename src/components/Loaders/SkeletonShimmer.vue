<template>
  <div :class="$style.loader"></div>
</template>

<style module lang="scss">
.loader {
  @include shimmerAnimation();

  width: 100%;
  height: 80px;
  border-radius: 16px;
}
</style>
