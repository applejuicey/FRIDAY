<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
<!--  <HelloWorld msg="Hello Vue 3 + Vite" />-->
  <router-view />
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
export default {
  setup () {
    const store = useStore();
    // 从vuex中获取主题信息并应用
    const initialiseTheme = () => {
      if (store.state.theme.name === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    };
    onBeforeMount(() => {
      initialiseTheme();
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
