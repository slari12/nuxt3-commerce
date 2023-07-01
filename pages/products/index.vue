<template>
  <div class="card flex">
    <!-- side navigation -->
    <div class="side-nav">
      <LayoutsHeader />
    </div>

    <!-- main section  -->
    <div class="section">
      <div class="flex">
        <div class="relative w-full py-5">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            v-model="search"
            placeholder="Search"
            class="searchin bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        <LayoutsNavigation />
      </div>
      <div
        class="grid grid-cols-4 md:grid-cols-3 gap-4 border-b border-gray-200"
      >
        <div
          v-for="product in filteredList()"
          :key="product.id"
          class="card-btn bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            class="rounded-t-lg img flex justify-center w-full mb-1 lg:mb-5"
            :src="product.thumbnail"
          />

          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ product.title }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ product.description }}
            </p>
            <div class="bot-div">
              <div class="flex justify-between w-full">
                <p
                  class="mr-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  ${{ product.price }}
                </p>

                <NuxtLink :to="`/products/${product.id}`">
                  <div
                    class="cart inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    <IconsCart />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const { data: products } = await useProduct();
const search = ref("");

function filteredList() {
  return this.products.filter((product) =>
    product.title.toLowerCase().includes(this.search.toLowerCase())
  );
}
</script>

<style>
.searchin {
  width: 400px;
  height: 30px;
}
.img {
  height: 150px;
}
.card-btn {
  position: relative;
  margin: auto;
  width: 250px;
  height: 300px;
}
.bottom-btn {
  background-color: #443c68;
}
.bot-div {
  position: absolute;
  bottom: 10px;
}
.cart {
  background-color: #0e9f6e;
}

.section {
  background-color: #f1f6f9;
  margin-left: 32%;
}
.side-nav {
  background-color: #fff;
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
}
.card {
  background-color: #f1f6f9;
}
</style>
