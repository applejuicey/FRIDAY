<template>

  <div class="relative">

    <!-- 底纹背景 -->
    <div class="absolute min-w-full min-h-screen bg-gray-50 bg-contain bg-fixed dark:bg-gray-500"
         :style="`background-image: url('https://demos.creative-tim.com/vue-notus/img/register_bg_2.4f2cb0ac.png');`">
    </div>

    <!-- 页面主内容区域 -->
    <div class="relative min-w-full min-h-screen grid grid-cols-1 grid-rows-1 justify-items-stretch items-center">
      <slot />
    </div>

  </div>

</template>

<script>
export default {

}
</script>