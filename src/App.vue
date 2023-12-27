<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import axios from 'axios'

import Header from './components/Header.vue'
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'

const items = ref([]) // {value: []}

const filters = reactive({
  sortBy: '',
  searchQuery: ''
})

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

onMounted(async () => {
  try {
    const { data } = await axios.get('https://8c12e461c03fc7d7.mokky.dev/items')
    items.value = data
  } catch (err) {
    console.log(err)
  }
})

watch(filters, async () => {
  try {
    const { data } = await axios.get(
      'https://8c12e461c03fc7d7.mokky.dev/items?sortBy=' + filters.sortBy
    )
    items.value = data
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <!-- <Drawer /> -->
  <div class="bg-neutral-600 w-4/5 m-auto rounded-xl shadow-xl mt-5">
    <Header />

    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold mb-7">All orders</h2>

        <div class="flex gap-4 mb-6">
          <select
            class="py-2 px-3 border bg-neutral-400 border-neutral-600 rounded-md outline-none"
          >
            <option>Diablo 4</option>
            <option>World Of Warcraft</option>
            <option>WOW Classic Era / SoD / Hardcore</option>
          </select>
          <select
            class="py-2 px-3 border bg-neutral-400 border-neutral-600 rounded-md outline-none"
          >
            <option value="">Items</option>
            <option value="">Accounts</option>
            <option value="">GamePal</option>
          </select>
          <div class="relative">
            <img class="absolute left-3 top-3" src="/search.svg" alt="Search" />
            <input
              class="rounded-md py-2 pl-10 pr-4 outline-none focus:border-red-800 border bg-neutral-300 border-neutral-600"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-3 mb-12">
        <select
          @change="onChangeSelect"
          class="py-2 px-3 border bg-neutral-400 border-neutral-600 rounded-md outline-none"
        >
          <option value="title">Name</option>
          <option value="price">Lowest Price</option>
          <option value="-price">Highest Price</option>
        </select>
      </div>

      <CardList :items="items" />
    </div>
  </div>
</template>
