<template>
  <div class="relative min-h-screen">

    <!-- 底纹背景 -->
    <div class="absolute min-w-full min-h-full bg-gradient-to-r from-yellow-100 to-green-200 bg-contain bg-fixed dark:bg-gray-500">
    </div>

    <!-- 页面主内容区域 -->
    <div class="relative min-w-full min-h-screen grid grid-cols-1 grid-rows-1 justify-items-stretch items-center p-8">
      <f-card class="min-h-full grid grid-cols-12 grid-rows-1 auto-cols-fr">
        <template v-slot:cardContent>

          <!-- 侧边导航栏 -->
          <div class="col-span-3 min-h-full">
            <side-nav-bar></side-nav-bar>
          </div>

          <!-- 内容区 -->
          <div class="col-span-9 grid grid-rows-6 min-h-full">

            <!-- 上方导航栏 -->
            <div class="row-span-1">
              <top-nav-bar></top-nav-bar>
            </div>

            <!-- 主要内容区 -->
            <div class="row-span-5">
              <slot />
            </div>

          </div>

        </template>
      </f-card>
    </div>

  </div>
</template>

<script>
import FCard from '../components/Card.vue';
import SideNavBar from '../components/SideNavBar.vue';
import TopNavBar from '../components/TopNavBar.vue';
export default {
  components: {
    FCard,
    SideNavBar,
    TopNavBar,
  },
  setup () {

  },
};
</script>
