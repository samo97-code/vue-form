<template>
  <div class="mt-[1.5rem]">
    <p class="text-gray-400 mb-[0.875rem] text-sm">Your password should include the following for enhanced security:</p>
    <ul class="list-disc pl-[1.75rem]">
      <li v-for="(option,i) in passwordOptions" :key="i" class="text-sm" :class="isSubmitted && !isPass(option) ? 'text-[#28a745]' : 'text-gray-400'">"{{option.label}}"</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PasswordOptions",
  props:{
    errors: {
      type: Array,
      default:()=>[]
    },
    isSubmitted:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      passwordOptions: [
          {label: 'At least 8 characters', key: 'correctLength'},
          {label: 'One upper-case letter', key: 'containsUppercase'},
          {label: 'One lower-case letter', key: 'containsLowercase'},
          {label: 'One number', key: 'containsNumber'},
          {label: 'One special character (e.g., !, @, #, $)', key: 'containsSpecial'},
      ]
    }
  },

  computed:{
    isPass(){
      return (option)=>{
        const temp = this.errors.find((error)=>error.$validator === option.key)
        return !!temp;

      }
    }
  }
}
</script>