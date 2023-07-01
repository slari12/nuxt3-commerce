<template>
  <div class="header">
    <div class="head-left">
      <p class="title mt-10 mb-5 font-bold text-5xl text-green-500">BSection</p>
    </div>
    <div class="head-right">
      <!-- sorting feature-->
      <div class="mt-5">
        <p class="text-gray-900">Sort by:</p>
        <div class="dropdown">
          <select
            id="categories"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
          >
            <option selected>Default</option>
            <option>Alphabetical</option>
            <option>Rating</option>
            <option>Price</option>
            <option>Popularity</option>
          </select>
        </div>
      </div>
      <!-- category filtering -->
      <div>
        <p class="text-gray-900 mt-5 mb-1">Filter by Category</p>
        <div class="" v-for="cate in filteredCategories">
          <input
            id="default-checkbox"
            type="checkbox"
            :value="cate"
            class="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >{{ cate }}</label
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { data: products } = await useProduct();

//to remove the duplicated values in categories
const filteredCategories = computed(() => {
  const nonDuplicatedValues = new Set();
  products.value.forEach((element) => {
    nonDuplicatedValues.add(element.category);
  });
  return Array.from(nonDuplicatedValues);
});
</script>
<style>
.header {
  padding: 0 20px;
}
.dropdown {
  width: 200px;
}
</style>
