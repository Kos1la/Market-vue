<script setup>
import { Icon } from "@iconify/vue";
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark({
  selector: "body", //element to add attribute to
  attribute: "theme", // attribute name
  valueDark: "custom-dark", // attribute value for dark mode
  valueLight: "custom-light", // attribute value for light mode
});

const toggleDark = useToggle(isDark);

const switchTheme = () => {
  toggleDark();
  if (isDark.value) {
    document.body.classList.remove("custom-light");
    document.body.classList.add("custom-dark");
  } else {
    document.body.classList.remove("custom-dark");
    document.body.classList.add("custom-light");
  }
};
</script>

<template>
  <header
    class="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between"
  >
    <div class="flex items-center w-full md:2/3">
      <router-link
        to="/"
        class="text-2xl font-black text-tertiary-dark cursor-pointer"
      >
        LowLifeWeb
      </router-link>
      <ul class="flex items-center ml-5">
        <li class="flex items-center">
          <router-link to="/auth">
            <Icon icon="icon-park-solid:people" />
          </router-link>
        </li>
        <li class="ml-2 cursor-pointer">
          <Icon
            @click="switchTheme()"
            icon="wi:moon-alt-first-quarter"
            width="26"
          >
          </Icon>
        </li>
      </ul>
    </div>
    <ul class="flex items-center justify-between w-full md:w-1/3 mt-4">
      <li class="hover:-translate-y-1 duration-500 transition-all">
        <router-link to="/">Home</router-link>
      </li>
      <li class="hover:-translate-y-1 duration-500 transition-all">
        <router-link to="/orders">Catalog</router-link>
      </li>
      <li class="hover:-translate-y-1 duration-500 transition-all">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li class="hover:-translate-y-1 duration-500 transition-all">
        <router-link to="/about">About us</router-link>
      </li>
    </ul>
  </header>
</template>

<style>
[theme="custom-dark"] {
  background: #060208;
  color: #f3e3ed;
  transition: background-color 0.5s, color 0.5s;
}

[theme="custom-light"] {
  background: #f3e3ed;
  color: #060208;
  transition: background-color 0.5s, color 0.5s;
}
</style>
