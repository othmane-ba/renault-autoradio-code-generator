<template>
  <div>
    <NuxtPage class="min-h-screen"  v-if="start" />
    <TransitionRoot appear :show="!start" as="template">
      <TransitionChild
        as="template"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div>
          <svg
            class="absolute bottom-0"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1080 1051.82"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="105.54"
                y1="1140.38"
                x2="1006.52"
                y2="66.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#2e3192" />
                <stop offset="1" stop-color="#0072bc" />
              </linearGradient>
            </defs>
            <path
              class="cls-1"
              d="M0,193.4C102.99,128.91,469.43-83.04,870.98,35.26c79.74,23.49,149.3,56.6,209.02,93.02v923.53H0V193.4Z"
            />
          </svg>
          <div class="w-full flex justify-center">
            <img
              src="/logo.png"
              alt="logo"
              class="absolute w-9/12 mt-24"
            />
          </div>
          <img src="/shape1.png" alt="shape1" class="absolute bottom-24 -left-3 w-80" />
          <img
            src="/shape3.png"
            alt="shape3"
            class="shape3 ml-52 mt-32 absolute w-1/5"
          />
          <img
            src="/shape4.png"
            alt="shape1"
            class="shape4 ml-64 mt-44 absolute w-1/5"
          />
          <h3 class="absolute bottom-8 left-8 text-white">Chargement...</h3>
        </div></TransitionChild
      ></TransitionRoot
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TransitionRoot, TransitionChild } from "@headlessui/vue";
let start = ref(false);
setTimeout(() => (start.value = true), 3000);
</script>

<style>
* { -webkit-tap-highlight-color: rgba(0,0,0,0); }
.cls-1 {
  fill: url(#linear-gradient);
}
.shape3 {
  animation: MoveUpDown 7s ease-in-out infinite;
  animation-direction: alternate;
}
.shape4 {
  animation: MoveUpDown 6s ease-in-out infinite;
  animation-direction: alternate;
}
@keyframes MoveUpDowns5 {
  0%,
  100% {
    transform: translateY(380px);
  }
  50% {
    transform: translateY(390px);
  }
}

@keyframes MoveUpDown {
  0%,
  100% {
    transform: translateY(375px);
  }
  50% {
    transform: translateY(400px);
  }
}
</style>
