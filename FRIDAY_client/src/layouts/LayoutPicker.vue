<template>
  <component :is="currentLayout">
    <slot />
  </component>
</template>

<script>
import LayoutDefault from './LayoutDefault.vue';
import { shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';
export default {
  setup () {

    // 使用shallowRef包装component
    const currentLayout = shallowRef(LayoutDefault);
    const route = useRoute();

    // 监控路由的meta.layout属性，变更后渲染不同的layout组件
    watch(() => route.meta.layout, async (layoutName) => {
        try {
          // 按需导入对应组件
          const component = await import(`./${layoutName}.vue`);
          currentLayout.value = component.default;
        } catch (error) {
          console.error(error);
          currentLayout.value = LayoutDefault;
        }
      },
    );

    return { currentLayout };

  },
}
</script>