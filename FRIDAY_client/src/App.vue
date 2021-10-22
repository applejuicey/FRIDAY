<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
  <LayoutPicker>
    <router-view />
  </LayoutPicker>
</template>

<script>
import { inject, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import LayoutPicker from './layouts/LayoutPicker.vue';
export default {
  components: {
    LayoutPicker
  },
  setup () {

    // 使用inject获取api服务
    const api = inject('$api');
    console.log('asg', api)

    // 使用vuex
    const store = useStore();

    // 从vuex中获取主题信息并应用
    const initialiseTheme = () => {
      if (store.state.theme.name === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    };

    // 挂载前执行
    onBeforeMount(() => {
      initialiseTheme();
    });

    return {

    };

  },
};
</script>

<style>
#app {
  /*font-family: 'Flamenco', cursive;*/
  font-family: 'Mulish', sans-serif;
}
</style>
