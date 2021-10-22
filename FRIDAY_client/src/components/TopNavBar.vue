<template>
  <div class="grid grid-cols-6 p-8 min-h-full bg-yellow-50 rounded-tr-3xl">

    <!-- 标题区 -->
    <div class="col-span-4 mt-4">
      <div class="text-2xl font-bold">
        title
      </div>
      <div class="text-gray-500">
        subtitle
      </div>
    </div>

    <!-- 图标区 -->
    <div class="col-span-2 mt-4 text-right">

      <div class="inline-block mr-4 group bg-yellow-50 shadow-md hover:bg-yellow-100 rounded-md transition duration-300 transform hover:scale-110 p-2 cursor-pointer">
        <span class="inline-block align-text-bottom ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
          </svg>
        </span>
        <span class="hidden group-hover:inline-block ml-2">
          Username
        </span>
      </div>

      <div class="inline-block group bg-yellow-50 shadow-md hover:bg-yellow-100 rounded-md transition duration-300 transform hover:scale-110 p-2 cursor-pointer">
        <span class="inline-block align-text-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
          </svg>
        </span>
        <span class="hidden group-hover:inline-block ml-2 align-top">
          Logout
        </span>
      </div>

    </div>

  </div>
</template>