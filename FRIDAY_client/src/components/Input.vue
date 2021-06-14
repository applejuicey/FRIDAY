<template>
  <div class="flex">
    <label v-if="showIconLeft === true" class="rounded-l-lg inline-flex items-center px-3
           border-t border-l border-b border-gray-300
           bg-white text-sm text-gray-500 shadow-sm cursor-pointer
           dark:bg-gray-500 dark:border-gray-400 dark:text-gray-200"
           :for="id">
      <slot name="icon"></slot>
    </label>
    <input :type="type" v-model="inputVal" :placeholder="placeholder" :id="id"
           class="flex-1 appearance-none border border-gray-300
             shadow-sm py-2 px-4 w-full
             bg-white text-gray-700 placeholder-gray-400 text-base
             hover:border-gray-500
             focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent
             dark:bg-gray-500 dark:border-gray-400 dark:text-gray-200 dark:placeholder-gray-200
             dark:hover:border-white dark:focus:ring-white "
           :class="{ 'rounded-r-lg': showIconLeft, 'rounded-lg': !showIconLeft }"/>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    modelValue: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
      validator: function(value) {
        return ['text', 'password'].indexOf(value) !== -1;
      },
    },
    id: {
      type: String,
      required: true,
    },
    showIconLeft: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
  setup (props, {emit}) {
    const inputVal = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit('update:modelValue', val);
      }
    });
    return {
      inputVal,
    };
  },
};
</script>