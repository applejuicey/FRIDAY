<template>

  <div class="flex">

    <!-- label -->
    <label v-if="showIconLeft === true" class="rounded-l-lg inline-flex items-center px-3 border-t border-l border-b text-sm shadow-sm cursor-pointer"
           :class="labelClass" :for="id">
      <slot name="icon"></slot>
    </label>

    <!-- input -->
    <input :type="type" v-model="inputVal" :placeholder="placeholder" :id="id"
           class="flex-1 appearance-none border shadow-sm py-2 px-4 w-full text-base rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
           :class="inputClass"/>
  </div>

</template>

<script>
import { computed, reactive } from 'vue';
export default {
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
  props: {
    defaultClassOverwriter: {
      type: Object,
      required: false,
    },
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

    // input value响应式绑定
    const inputVal = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit('update:modelValue', val);
      }
    });

    // 更改label样式默认值
    const labelClass = reactive([
      props.defaultClassOverwriter?.backgroundColor || 'bg-white',
      props.defaultClassOverwriter?.backgroundColorDark || 'dark:bg-gray-500',
      props.defaultClassOverwriter?.textColor || 'text-gray-500',
      props.defaultClassOverwriter?.textColorDark || 'dark:text-gray-200',
      props.defaultClassOverwriter?.borderColor || 'border-gray-300',
      props.defaultClassOverwriter?.borderColorDark || 'dark:border-gray-400',
    ]);

    // 更改input样式默认值
    const inputClass = reactive([
      props.defaultClassOverwriter?.backgroundColor || 'bg-white',
      props.defaultClassOverwriter?.backgroundColorDark || 'dark:bg-gray-500',
      props.defaultClassOverwriter?.textColor || 'text-gray-500',
      props.defaultClassOverwriter?.textColorDark || 'dark:text-gray-200',
      props.defaultClassOverwriter?.borderColor || 'border-gray-300',
      props.defaultClassOverwriter?.borderColorDark || 'dark:border-gray-400',
      props.defaultClassOverwriter?.borderColorHover || 'hover:border-gray-500',
      props.defaultClassOverwriter?.borderColorDarkHover || 'dark:hover:border-white',
      props.defaultClassOverwriter?.placeholderColor || 'placeholder-gray-400',
      props.defaultClassOverwriter?.placeholderColorDark || 'dark:border-gray-200',
      props.defaultClassOverwriter?.ringColorFocus || 'focus:ring-gray-500',
      props.defaultClassOverwriter?.ringColorDarkFocus || 'dark:focus:ring-white',
    ]);

    if (props.showIconLeft) {
      inputClass.push('rounded-l-none');
    }

    return {
      inputVal,
      labelClass,
      inputClass,
    };

  },
};
</script>