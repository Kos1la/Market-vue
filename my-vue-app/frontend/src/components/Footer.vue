<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <footer class="mt-16">
    <div class="container mx-auto px-4">
      <router-link to="/" class="font-black text-tertiary-dark">
        LowLifeWeb
      </router-link>

      <h4 class="font-semibold text-[40px] py-6">Social</h4>
      <div class="flex flex-wrap gap-16 items-center justify-between">
        <div class="flex-1">
          <div class="flex items-center py-4">
            <Icon icon="material-symbols:smart-display-outline" />
            <a
              target="_blank"
              class="ml-2"
              href="https://www.twitch.tv/mekos1la"
              >Twitch</a
            >
          </div>
          <div class="flex items-center">
            <Icon icon="fa-regular:paper-plane" />
            <a target="_blank" class="ml-2" href="https://web.telegram.org/k/"
              >Telegram</a
            >
          </div>
          <div class="flex items-center pt-4">
            <Icon icon="material-symbols:mail" />
            <a target="_blank" class="ml-2" href="https://mail.google.com/"
              >Email</a
            >
          </div>
        </div>
        <div class="flex-1 md:text-right">
          <p class="pb-4">Wow Sod</p>
          <p class="pb-4">Wow DragonFlight</p>
          <p class="pb-4">Wow classic</p>
          <p class="pb-4">Diablo 4</p>
          <p>Other games</p>
        </div>
        <div class="flex-1 md:text-right">
          <p class="pb-4">We are</p>
          <p class="pb-4">Get in Touch</p>
          <p class="pb-4">Our Privacy Commitment</p>
          <p class="pb-4">Terms of Service</p>
          <p>Customer Assistance</p>
        </div>
      </div>
    </div>

    <div
      class="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full left-0 bottom-0"
    />
  </footer>
</template>
