<template>
  <header class="flex justify-between border-b border-neutral-900 px-12 py-0">
    <div class="flex items-center gap-4">
      <img src="/header-logo.svg" alt="Logo" class="w-120" />
      <div class="whitespace-nowrap">
        <h2 class="text-xl font-bold">Gamers Market</h2>
        <p class="text-neutral-800">Make your game easier</p>
      </div>
    </div>

    <ul class="flex items-center gap-8">
      <li class="flex items-center cursor-pointer gap-1 text-neutral-800 hover:text-black">
        <img src="/basket.svg " alt="basket" />
        <b>12$ </b>
      </li>
      <li class="flex items-center cursor-pointer gap-1 text-neutral-800 hover:text-black">
        <img src="/Favorite.svg" alt="favorite" />
        <span>Favorite</span>
      </li>
      <li class="flex items-center cursor-pointer gap-1 text-neutral-800 hover:text-black">
        <img src="/profile.svg" alt="profile" />
        <span>Profile</span>
      </li>
    </ul>
  </header>
</template>
