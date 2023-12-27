<script setup>
import CartItemList from './CartItemList.vue'
import DrawerHead from './DrawerHead.vue'
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-60"></div>
  <div class="bg-neutral-500 w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHead />

    <CartItemList />

    <div class="flex flex-col mb-6 my-7">
      <div class="flex gap-2">
        <span>Total:</span>
        <div class="flex-1 border-b border-dotted border-neutral-600"></div>
        <b>164$</b>
      </div>

      <div class="flex gap-2 mt-2">
        <span>Commission 3%:</span>
        <div class="flex-1 border-b border-dotted border-neutral-600"></div>
        <b>5.3$</b>
      </div>
      <button
        disabled=""
        class="mt-7 transition bg-green-500 w-full rounded-xl py-2 cursor-pointer disabled:bg-neutral-600 text-neutral-200 hover:bg-green-600 active:bg-green-700"
      >
        Сheckout
      </button>
    </div>
  </div>
</template>
