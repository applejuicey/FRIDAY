<template>
  <f-card :defaultClassOverwriter="{ borderRadius: 'rounded-md' }"
          class="p-4">
    <template v-slot:cardContent>
      <div class="min-h-full">

        <div class="h-1/4 grid justify-items-center items-center">
          <span class="text-xl font-medium">APP Operation Process</span>
        </div>

        <div class="h-3/4 grid grid-cols-11 grid-rows-1 justify-items-center items-center">

          <div class="col-span-3 grid grid-rows-3 justify-items-center">
            <div class="row-span-2 self-end">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current text-green-400 h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
              </svg>
            </div >
            <div class="row-span-1 self-start">Set Parameters</div>
          </div>

          <div class="col-span-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>

          <div class="col-span-3 grid grid-rows-3 justify-items-center">
            <div class="row-span-2 self-end">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current text-green-400 h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div >
            <div class="row-span-1 self-start">Verify and Submit</div>
          </div>

          <div class="col-span-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>

          <div class="col-span-3 grid grid-rows-3 justify-items-center">
            <div class="row-span-2 self-end">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current text-green-400 h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
            </div >
            <div class="row-span-1 self-start">Wait for Report</div>
          </div>

        </div>

      </div>
    </template>
  </f-card>
</template>

<script>
import FCard from '../../components/Card.vue';
export default {
  components: {
    FCard,
  },
  setup () {

  },
};
</script>