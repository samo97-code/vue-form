<template>
  <div class="mb-[1.5rem] w-[15rem] mx-auto relative">
    <ul class="flex items-center justify-between relative z-[1]">
      <li v-for="step in steps" :key="step"
          @click="$emit('update',step)"
          class="w-[1.875rem] h-[1.875rem] flex items-center justify-center border-2 rounded-full cursor-pointer"
          :class="step === active ? 'bg-zinc-800 border-zinc-800' : 'bg-white border-gray-300'">
        <span class=" font-medium relative" :class="step === active ? 'text-white' : 'text-gray-300'">{{step}}</span>
      </li>
    </ul>

    <span class="line w-full h-[0.125rem] bg-gray-300 block absolute top-[0.875rem]"></span>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: "StepsLiner",
  props:{
    active:{
      type: Number,
      default: 3
    }
  },
  data(){
    return{
      steps: [1,2,3]
    }
  }
})
</script>
