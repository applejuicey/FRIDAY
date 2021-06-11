<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
<!--  <HelloWorld msg="Hello Vue 3 + Vite" />-->
  <router-view />
</template>

<script>
import { onBeforeMount } from 'vue';
export default {
  setup () {
    onBeforeMount(() => {
      let themeName = '';
      try {
        themeName = JSON.parse(localStorage.theme).name;
      } catch (e) {
        console.log('No preferred themes saved.');
      }
      if (themeName === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

// // Whenever the user explicitly chooses light mode
//
//
// // Whenever the user explicitly chooses dark mode
//       localStorage.theme = 'dark'
//
// // Whenever the user explicitly chooses to respect the OS preference
//       localStorage.removeItem('theme')
    });
    return {

    };
  }
};
</script>

<style>
#app {
  font-family: 'Flamenco', cursive;
}
</style>
