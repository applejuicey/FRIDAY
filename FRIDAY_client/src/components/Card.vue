<template>
  <div :class="cardClass">
    <slot name="cardContent"></slot>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  props: {
    defaultClassOverwriter: {
      type: Object,
      required: false,
    },
  },
  setup (props) {

    // 更改样式默认值
    const cardClass = reactive([
      props.defaultClassOverwriter?.backgroundColor || 'bg-white',
      props.defaultClassOverwriter?.backgroundColorDark || 'dark:bg-gray-800',
      props.defaultClassOverwriter?.borderRadius || 'rounded-3xl',
      'shadow-lg', 'min-h-full', 'min-w-full', 'grid', 'grid-cols-1', 'grid-rows-1',
    ]);

    return {
      cardClass,
    };

  },
};
</script>