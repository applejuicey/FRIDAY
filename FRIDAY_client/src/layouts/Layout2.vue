<template>

  <div class="absolute bg-gray-400 bg-no-repeat bg-cover min-h-screen min-w-full"
       :style="`background-image: url('https://demos.creative-tim.com/vue-notus/img/register_bg_2.4f2cb0ac.png');`">

  </div>

  <div class="relative top-0 left-0
         min-h-screen
         grid grid-cols-1 justify-items-center items-center">
    <router-view />
  </div>

</template>

<script>
export default {

}
</script>