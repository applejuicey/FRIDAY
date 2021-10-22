<template>

  <button class="py-2 px-4 text-base font-semibold shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in duration-200"
          :class="buttonClass">
    <slot></slot>
  </button>

</template>

<script>
import { reactive } from 'vue';
export default {
  props: {
    defaultClassOverwriter: {
      type: Object,
      required: false,
    },
  },
  setup (props) {

    // 更改button样式默认值
    const buttonClass = reactive([
      props.defaultClassOverwriter?.backgroundColor || 'bg-green-400',
      props.defaultClassOverwriter?.backgroundColorHover || 'hover:bg-yellow-200',
      props.defaultClassOverwriter?.textColor || 'text-white',
      props.defaultClassOverwriter?.textColorHover || 'hover:text-green-400',
      props.defaultClassOverwriter?.ringColorFocus || 'focus:ring-yellow-400',
      props.defaultClassOverwriter?.ringColorOffsetFocus || 'focus:ring-offset-yellow-300',
      props.defaultClassOverwriter?.width || 'w-full',
    ]);

    return {
      buttonClass,
    };

  }
};
</script>