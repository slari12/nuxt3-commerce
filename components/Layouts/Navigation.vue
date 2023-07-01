<template>
  <div class="text-center">
    <nav class="flex justify-between align-center py-7">
      <NuxtLink to="/"><p class="text-black">Home</p></NuxtLink>
      <NuxtLink to="#"><p class="text-black">About</p></NuxtLink>
      <NuxtLink to="/products"><p class="text-black">Products</p></NuxtLink>
    </nav>
  </div>
</template>
<script setup></script>
<style>
nav {
  width: 200px;
  margin: 0 auto;
  font-size: 13px;
  cursor: pointer;
}
</style>
