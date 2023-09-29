<template>
  <div class="container mx-auto">
    <div class="w-full md:w-[33rem] bg-white shadow-md mx-auto mt-[3rem] mb-[2rem] px-[1rem] sm:px-[5.5rem] py-[1rem] sm:py-[4rem] rounded-[0.25rem]">
      <StepsLiner :active="activeStep" @update="updateStep"/>

      <StepOne v-if="activeStep === 1"/>

      <StepTwo v-if="activeStep === 2"/>

      <StepThree v-if="activeStep === 3"/>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import StepsLiner from "@/components/steps/StepsLiner.vue";
import StepOne from "./components/steps/StepOne.vue";
import StepTwo from "./components/steps/StepTwo.vue";
import StepThree from "./components/steps/StepThree.vue";

export default defineComponent({
  components: {StepsLiner, StepOne, StepTwo, StepThree},
  data() {
    return {
      activeStep: 3,
    }
  },
  methods:{
    updateStep(val){
      this.activeStep = val
    }
  }
})
</script>

