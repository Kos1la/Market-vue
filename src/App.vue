<script setup>
import Header from './components/Header.vue'
import CardList from './components/CardList.vue'
</script>

<template>
  <div class="bg-neutral-600 w-4/5 m-auto rounded-xl shadow-xl mt-10">
    <Header />

    <div class="p-10">
      <h2 class="text-2xl font-bold mb-8">Trending</h2>

      <CardList />
    </div>
  </div>
</template>
