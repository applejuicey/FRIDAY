<template>
  <div class="min-h-full bg-yellow-50 rounded-br-3xl grid grid-rows-6 grid-cols-12 grid-flow-col gap-4 p-6">

      <div class="col-span-7 row-span-2 min-h-full">
        <new-project-card></new-project-card>
      </div>

      <div class="col-span-7 row-span-4">
        <project-progress-card></project-progress-card>
      </div>

      <div class="col-span-5 row-span-6">
        <projects-list></projects-list>
      </div>

  </div>
</template>

<script>
import NewProjectCard from '../modules/home/NewProjectCard.vue';
import ProjectProgressCard from '../modules/home/ProjectProgressCard.vue';
import ProjectsList from '../modules/home/ProjectsList.vue';
import FCard from '../components/Card.vue';
export default {
  components: {
    FCard,
    NewProjectCard,
    ProjectProgressCard,
    ProjectsList,
  },
  setup () {

  },
};
</script>