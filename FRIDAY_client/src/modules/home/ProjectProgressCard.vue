<template>
  <f-card :defaultClassOverwriter="{ borderRadius: 'rounded-md' }"
          class="p-4">
    <template v-slot:cardContent>
      <div class="min-h-full">

        <div class="h-1/5 grid justify-items-center items-center">
          <span class="text-xl font-medium">Last Project Progress</span>
        </div>

        <div class="h-4/5 grid grid-cols-2 grid-rows-1 justify-items-center items-center">

          <div class="justify-self-start">
            <ul>
              <li>1</li>
              <li>1</li>
              <li>111111</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
信息表单
          </div>

          <div>
进度饼图
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