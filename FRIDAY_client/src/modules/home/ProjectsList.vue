<template>
  <f-card :defaultClassOverwriter="{ borderRadius: 'rounded-md' }"
          class="p-4">
    <template v-slot:cardContent>
      <div class="min-h-full">

        <div class="h-1/6 grid justify-items-center items-center">
          <span class="text-xl font-medium">List of Projects</span>
        </div>

        <div class="h-5/6 grid grid-rows-1 justify-items-center items-center">

          <div class="justify-self-start">
            <ul>
              <li>1</li>
              <li>1</li>
              <li>111111</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
            以卡片的形式展示所有项目
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