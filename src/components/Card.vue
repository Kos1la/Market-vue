<script setup>
defineProps({
  title: String,
  game: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function
})
</script>

<template>
  <div
    class="relative bg-neutral-400 border border-neutral-700 rounded-2xl p-6 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="like"
      class="absolute top-7 left-7 rounded-xl"
      width="25px"
      @click="onClickFavorite"
    />
    <img :src="imageUrl" alt="d4-build" />
    <p class="mt-2">{{ title }}</p>
    <div class="flex justify-between mt-4">
      <div class="flex flex-col">
        <span class="text-neutral-800">Price:</span>
        <b>{{ price }}$</b>
      </div>
      <img @click="onClickAdd" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="plus" />
    </div>
  </div>
</template>
