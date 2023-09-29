<template>

  <div class="field-wrap mt-[1.5rem]">
    <p v-if="description">{{ description }}</p>
    <div class="field">
      <label v-if="label" class="mb-[0.15rem] block text-zinc-800">{{ label }}</label>
      <div class="control relative">
        <input
            v-bind="$attrs"
            :value="modelValue"
            :placeholder="placeholder"
            :type="showPassword && version === 'password' ? 'text' : type"
            @input="$emit('update:modelValue', $event.target.value)"
            class="field w-full border rounded-lg h-[3rem] px-[0.75rem] outline-none drop-shadow-sm"
            :class="[version === 'password' ? 'pr-[2.75rem]' : '', errors.length ? 'border-[#dc3545]' : 'border-gray-300 focus:bg-white focus:ring-1 focus:ring-blue-400'].join(' ')"
        >

        <div v-if="errors.length && version !== 'password'" class="absolute top-[0.75rem] right-[0.75rem]">
          <img width="24" height="24" src="https://img.icons8.com/?size=256&id=12226&format=png" alt="error">
        </div>

        <div v-if="version === 'password'" class="absolute top-[0.75rem] right-[0.75rem]">
         <span v-if="showPassword" @click="showPassword = false" class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
            </svg>
         </span>

          <span v-else @click="showPassword = true" class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"/>
          </svg>
          </span>
        </div>

      </div>

      <div v-if="errors.length">
        <div class="input-errors" v-for="error of errors" :key="error.$uid">
          <div class="error-msg text-[#dc3545] text-sm font-medium mt-[0.25rem]">{{ error.$message }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    errors: {
      type: Array,
      default: ()=>[]
    },
    version:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showPassword: false
    }
  },
}
</script>
