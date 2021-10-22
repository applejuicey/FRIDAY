<template>
  <div class="grid grid-rows-6 grid-flow-row bg-green-400 min-h-full rounded-tl-3xl rounded-bl-3xl p-8 shadow-lg">
    <div class="row-span-1 justify-self-center self-start text-3xl m-4 break-all px-3">
      MULTIPLE ROW APP NAME
    </div>
    <div class="row-span-4 grid grid-rows-none content-start">

      <div class="mb-2 grid grid-cols-4 cursor-pointer hover:bg-green-300 rounded-md transition duration-300 transform hover:scale-110 py-3"
           @click="pushRoute('home')">
        <div class="col-span-1 justify-self-center align-text-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </div>
        <div class="col-span-3 justify-self-start">
          Home
        </div>
      </div>

      <div class="mb-2 grid grid-cols-4 cursor-pointer hover:bg-green-300 rounded-md transition duration-300 transform hover:scale-110 py-3"
           @click="pushRoute('projects')">
        <div class="col-span-1 justify-self-center align-text-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
        </div>
        <div class="col-span-3 justify-self-start">
          Projects
        </div>
      </div>

      <div class="grid grid-cols-4 cursor-pointer hover:bg-green-300 rounded-md transition duration-300 transform hover:scale-110 py-3"
           @click="pushRoute('project_add')">
        <div class="col-span-1 justify-self-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="col-span-3 justify-self-start">
          NEW!
        </div>
      </div>


    </div>
    <div class="row-span-1 justify-self-center self-end">
      footer
    </div>
  </div>
</template>

<script>
import {router} from "../routes";
import {onBeforeMount} from "vue";
export default {
  setup () {

    // 切换路由
    const pushRoute = (routeName) => {
      router.push({
        name: routeName,
      });
    };

    // 判断获取当前路由name


    // 挂载前执行
    onBeforeMount(() => {

    });

    return {
      pushRoute,
    };

  },
}
</script>