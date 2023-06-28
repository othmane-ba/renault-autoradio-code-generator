<template>
    <div class="w-full">
        <img src="/dots.png" alt="" class="absolute left-0 bottom-0">
        <p class="absolute text-sm text-center w-full bottom-3 text-white">Mede with ❤ by <a href="https://othmane.vercel.app/" target="_blank">Othmane</a></p>
        <div class="w-full h-80 bg-blue-800 relative"
            style="border-bottom-right-radius: 35%;border-bottom-left-radius: 35%">
            <img src="/logo-white.png" alt="logo-white"
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw]">
        </div>
        <div class="grid grid-cols-1 w-full justify-items-center gap-4 absolute left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div class="flex flex-col w-10/12">
                <label for="precode" class="font-medium mb-1">Précode</label>
                <input id="precode" v-model="precode" type="text" class="bg-gray-100 w-full p-2 rounded-md focus:outline-blue-600" placeholder="précode de l'autoradio" />
                <h1 class="text-center mt-20 text-4xl font-bold">{{code}}</h1>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';

function normalize(precode) {
  precode = precode.toUpperCase();
  if (!/^[A-Z]\d{3}$/.test(precode) || precode.startsWith('A0')) {
    return '';
  }
  return precode;
}

const precode = ref('');

const code = computed(() => {
  const normalizedPrecode = normalize(precode.value);
  if (!normalizedPrecode) {
    return 'CODE';
  }
  const x = normalizedPrecode.charCodeAt(1) + normalizedPrecode.charCodeAt(0) * 10 - 698;
  const y = normalizedPrecode.charCodeAt(3) + normalizedPrecode.charCodeAt(2) * 10 + x - 528;
  const z = (y * 7) % 100;
  const code = Math.floor(z / 10) + (z % 10) * 10 + ((259 % x) % 100) * 100;
  return code.toString().padStart(4, '0');
});
</script>