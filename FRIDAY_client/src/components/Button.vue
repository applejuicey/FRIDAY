<template>
  <button class="py-2 px-4
          bg-green-400 text-white w-full text-base font-semibold shadow-md rounded-lg
          hover:bg-yellow-200 hover:text-green-400
          focus:ring-yellow-200 focus:ring-offset-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2
          transition ease-in duration-200">
    <slot></slot>
  </button>
</template>

<script>
import { reactive  } from 'vue';
export default {
  setup () {

    return {

    };
  }
};
</script>