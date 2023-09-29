<template>
  <div class="mt-[1.5rem] relative">
    <label v-if="label" class="mb-[0.15rem] block text-zinc-800">{{ label }}</label>

    <vue-tel-input :value="phone" mode="international" :class="errors.length || !valid ? 'has-error' : ''" @input="onInput"></vue-tel-input>

    <div v-if="errors.length || !valid" class="absolute top-[2.40rem] right-[0.75rem]">
      <img width="24" height="24" src="https://img.icons8.com/?size=256&id=12226&format=png" alt="error">
    </div>

    <div v-if="errors.length">
      <div class="input-errors" v-for="error of errors" :key="error.$uid">
        <div class="error-msg text-[#dc3545] text-sm font-medium mt-[0.25rem]">{{ error.$message }}</div>
      </div>
    </div>

    <div v-if="!valid">
      <div class="error-msg text-[#dc3545] text-sm font-medium mt-[0.25rem]">Phone number not valid</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhoneBaseInput",

  props:{
    label:{
      type: String,
      default: ''
    },
    phone: {
      type: [String, Number],
      default: ''
    },
    valid: {
      type: Boolean,
      default: false
    },
    errors: {
      type: Array,
      default: ()=>[]
    },
  },

  methods:{
    onInput(phone, phoneObject) {
      if (phoneObject?.formatted) {
        this.$emit('update:valid', phoneObject.valid)
        this.$emit('update:phone', phoneObject.formatted)
      }
    }
  }
}
</script>

<style >
.vue-tel-input{
  height: 48px;
  border-color: rgb(209 213 219) !important;
  border-radius: 0.5rem !important;
  filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
}
.vti__dropdown{
  border-radius: 0.5rem !important;
}
.has-error{
  border-color: #dc3545 !important;
}
.vti__input{
  border-radius: 0.5rem !important;
}
.vue-tel-input:focus-within{
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1) !important;
  border-color: rgb(96 165 250) !important;
}
</style>
