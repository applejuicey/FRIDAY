<template>

  <div class="absolute  bg-gray-400 bg-no-repeat bg-contain bg-fixed"
       :style="`background-image: url('https://demos.creative-tim.com/vue-notus/img/register_bg_2.4f2cb0ac.png');`">
3214234
  </div>

  <top-nav-bar class="sticky top-0 min-h-5vh"></top-nav-bar>

  <div class="min-h-90vh "
       >
    <router-view />
  </div>

  <bottom-footer class="min-h-5vh "></bottom-footer>

</template>

<script>
import TopNavBar from "../components/TopNavBar.vue";
import BottomFooter from "../components/BottomFooter.vue";
export default {
  components: {
    TopNavBar, BottomFooter
  },
}
</script>