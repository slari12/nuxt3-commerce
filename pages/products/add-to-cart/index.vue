<template>
  <div class="cart py-20">
    <NuxtLink to="/" class="absolute right-5 top-1"
      ><div class="bg-green-500 p-3 rounded-full mt-3">
        <IconsHome /></div
    ></NuxtLink>
    <div class="cart-section mx-auto py-10 px-8 rounded-lg">
      <div class="flex justify-between">
        <div class="flex align-middle">
          <NuxtLink to="/"
            ><div class="bg-green-500 p-2 rounded-full mr-3 mt-1">
              <IconsBack /></div
          ></NuxtLink>
          <h2 class="text-3xl mb-10 font-bold text-green-400">My Cart</h2>
        </div>
        <a
          href="#"
          @click="onRemoveButtonClick"
          class="text-green-400 font-bold hover:underline"
          >clear all items</a
        >
      </div>
      <ul v-for="product in productList">
        <li class="mb-5 flex justify-between items-center">
          <div class="flex items-center">
            <img :src="product?.thumbnail" class="img-id" alt="" />
            <div>
              <span class="font-bold">{{ product.name }}</span>
              <br />
              <span>quantity: {{ product.count }}</span>
            </div>
          </div>
          <LayoutsClearButton />
        </li>
      </ul>
      {{ JSON.stringify(productList) }}
    </div>
  </div>
</template>
<script setup>
import { useCart } from "~/composables/useCart";
import { ref } from "vue";
const { id: productId } = useRoute().params;
const { data: product } = await useProduct();
const { productCountMap } = useCart();

const { data: productList } = useAsyncData(async () => {
  const promiseList = Object.keys(productCountMap)
    .filter((productId) => productCountMap[productId] > 0)
    .map(async (productId) => {
      console.log("productId", productId);
      const { data } = await useProduct(Number(productId));
      const name = data.value.title;
      console.log(name);
      return {
        productId,
        name,
        count: productCountMap[productId],
      };
    });
  const results = await Promise.allSettled(promiseList);
  return results.filter((r) => r.status === "fulfilled").map((r) => r.value);
});
</script>
<style>
div {
  color: black;
}
.cart {
  background-color: #f1f6f9;
}
.cart-section {
  background-color: #fff;
  width: 500px;
}
.img-id {
  width: 100px;
  height: 70px;
  margin-right: 20px;
  border-radius: 10px;
}
</style>
