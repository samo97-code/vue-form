<template>
  <button
      :type="type"
      :class="['button ', loading ? 'is-loading ' : '', addClass]"
      :disabled="(loading || disabled)"
      v-bind="$attrs"
      @click="$emit('on-click')"
  >
    <LoadingSpinner v-if="loading"/>
    <span v-else> {{ title }}</span>
  </button>

</template>

<script>
import {defineComponent} from "vue";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";

export default defineComponent({
  components:{LoadingSpinner},

  props: {
    type: {
      type: String,
      default: 'button'
    },
    title: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    addClass: {
      type: String,
      default: ''
    }
  }
})
</script>
