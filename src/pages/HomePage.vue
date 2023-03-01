<template>
  <main class="page-content">
    <div class="container" v-if="isLoading">
      <div :class="$style.dealsList">
        <SkeletonShimmer :class="$style.dealsLoader" />
        <SkeletonShimmer :class="$style.dealsLoader" />
      </div>

      <div :class="$style.categoryList">
        <SkeletonShimmer :class="$style.categoryLoader" />
        <SkeletonShimmer :class="$style.categoryLoader" />
        <SkeletonShimmer :class="$style.categoryLoader" />
        <SkeletonShimmer :class="$style.categoryLoader" />
        <SkeletonShimmer :class="$style.categoryLoader" />
        <SkeletonShimmer :class="$style.categoryLoader" />
      </div>

      <div :class="$style.productsList">
        <SkeletonShimmer :class="$style.productLoader" />
        <SkeletonShimmer :class="$style.productLoader" />
        <SkeletonShimmer :class="$style.productLoader" />
        <SkeletonShimmer :class="$style.productLoader" />
        <SkeletonShimmer :class="$style.productLoader" />
        <SkeletonShimmer :class="$style.productLoader" />
      </div>
    </div>

    <div class="container" v-else>
      <div :class="$style.dealsList">
        <DealCard
          v-for="(dealCard, index) in dealsList"
          :key="`dealCard__${index}`"
          :variant="dealCard.variant"
          :title="dealCard.title"
          :offer="dealCard.offer"
          :tag="dealCard.tag"
        />
      </div>

      <div :class="$style.categoryList">
        <CategoryCard
          v-for="(categoryCard, index) in categoryList"
          :key="`categoryCard__${index}`"
          :title="categoryCard.name"
          :image="categoryCard.image"
          :selected="selectedCategories.includes(categoryCard.id)"
          @on-click="() => selectCategory(categoryCard)"
        />
      </div>

      <div :class="$style.productsList">
        <ProductCard
          v-for="product in filteredProductsList"
          :key="`productCard__${product.id}`"
          :image="product.image"
          :featured="product.featured"
          :title="product.name"
          :deliveryTime="product.deliveryTime"
          :minimalOrder="product.minimalOrder"
          :categories="product.categories"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import dealsList from "@/data/dealList";
import API from "@/api/API";
import type { IProduct, IProductCategory } from "@/types";

const isLoading = ref<boolean>(false);
const selectedCategories = ref<string[]>([]);
const categoryList = ref<IProductCategory[]>([]);
const productsList = ref<IProduct[]>([]);

const filteredProductsList = computed(() => {
  if (selectedCategories.value.length === 0) {
    return productsList.value;
  }

  return productsList.value.filter((p) => {
    return p.categories.filter((c) => selectedCategories.value.includes(c.id))
      .length;
  });
});

const selectCategory = ({ id }: IProductCategory) => {
  if (selectedCategories.value.includes(id)) {
    selectedCategories.value = selectedCategories.value.filter((i) => i !== id);
    return;
  }

  selectedCategories.value = [...selectedCategories.value, id];
};

onMounted(async () => {
  isLoading.value = true;

  const categoriesPromise = API.getCategories();
  const productsPromise = API.getProducts();

  await Promise.all([categoriesPromise, productsPromise]).then(
    ([categories, products]) => {
      categoryList.value = categories;
      productsList.value = products;
    }
  );

  isLoading.value = false;
});
</script>

<style module lang="scss">
.dealsList {
  grid-template-columns: 1fr;
  display: grid;
  gap: 30px;
  margin-bottom: 30px;

  @include breakpoint("md") {
    grid-template-columns: repeat(2, 1fr);
  }
}

.categoryList {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 30px;

  @include breakpoint("md") {
    grid-template-columns: repeat(6, 1fr);
  }
}

.productsList {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  margin-bottom: 30px;

  @include breakpoint("sm") {
    grid-template-columns: repeat(2, 1fr);
  }
  @include breakpoint("md") {
    grid-template-columns: repeat(3, 1fr);
  }
}

// Loaders
.dealsLoader {
  height: 216px;
}

.categoryLoader {
  height: 80px;
}

.productLoader {
  height: 276px;
}
</style>
