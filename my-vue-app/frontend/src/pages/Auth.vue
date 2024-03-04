<!-- 'use client' -->

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const defaultFormData = {
  email: "",
  name: "",
  password: "",
};

const formData = ref(defaultFormData);

const handleInputChange = (event) => {
  const { name, value } = event.target;
  formData.value = { ...formData.value, [name]: value };
};

const handleSubmit = async () => {
  try {
    alert(`Welcome ${formData.value.name}`);
  } catch (error) {
    console.log(error);
  } finally {
    formData.value = defaultFormData;
  }
};
</script>
<template>
  <section class="container mx-auto">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
      <div class="flex mb-8 flex-col md:flex-row items-center justify-between">
        <h1 class="text-xl font-bold tracking-tight md:text-2xl">
          Create an account
        </h1>
        <p>OR</p>
        <span class="inline-flex items-center">
          <Icon class="mr-3 text-4xl cursor-pointer" icon="pajamas:github" />
          <Icon class="ml-3 text-4xl cursor-pointer" icon="pajamas:google" />
        </span>
      </div>
      <form
        class="text-black space-y-4 md:space-y-6"
        @submit.prevent="handleSubmit"
      >
        <input
          type="email"
          name="email"
          placeholder="name@company.com"
          required
          class="border border-gray-300 sm:text-sm rounded:lg block w-full p-2.5 focus:outline-none"
          :value="formData.email"
          @input="handleInputChange"
        />

        <input
          type="text"
          name="name"
          placeholder="Kanye West"
          required
          class="border border-gray-300 sm:text-sm rounded:lg block w-full p-2.5 focus:outline-none"
          :value="formData.name"
          @input="handleInputChange"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          minlength="6"
          class="border border-gray-300 sm:text-sm rounded:lg block w-full p-2.5 focus:outline-none"
          :value="formData.password"
          @input="handleInputChange"
        />
        <button
          type="submit"
          class="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign Up
        </button>
      </form>
      <button class="text-green-500 underline">login</button>
    </div>
  </section>
</template>
