<template>
  <div>
    <h1 class="font-semibold text-3xl text-zinc-800">Complete Your Account</h1>
    <p class="text-sm text-gray-400 mt-[0.25rem]">Your email is verified. Complete your account details to start using
      the Resources Hub.</p>

    <BaseInput
        label="Full Name"
        v-model="form.fullName"
        type="text"
        :errors="v$.form.fullName.$errors">
    </BaseInput>

    <PhoneBaseInput
        label="Phone Number"
        v-model:phone="form.phone"
        v-model:valid="isPhoneValid"
        :errors="v$.form.phone.$errors"
    />

    <PasswordOptions
        :errors="v$.form.password.$errors"
        :isSubmitted="isSubmitted"
    />

    <BaseInput
        label="Password"
        v-model="form.password"
        type="password"
        version="password"
        :errors="v$.form.password.$errors">
    </BaseInput>
    <BaseInput
        label="Confirm Password"
        v-model="form.confirmPassword"
        type="password"
        version="password"
        :errors="v$.form.confirmPassword.$errors">
    </BaseInput>

    <BaseButton
        addClass="w-full bg-zinc-800 text-white text-center py-[0.75rem] mt-[1.5rem]"
        title="Join Now"
        :loading="loading"
        @on-click="joinNow"
    />

    <p class="text-center w-full md:px-[0.5rem] mt-[1.5rem] text-gray-500">
      By creating an account, you agree to our <a href="#" class="underline">Terms of Service</a> and <a href="#"
                                                                                                         class="underline">Privacy
      Policy</a>.
    </p>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import PasswordOptions from "@/components/options/PasswordOptions.vue";
import PhoneBaseInput from "@/components/ui/PhoneBaseInput.vue";
import {useVuelidate} from '@vuelidate/core'
import {catchErrors} from "@/utils";
import {required, sameAs} from '@vuelidate/validators'
import axios from 'axios'

export default defineComponent({
  name: "StepThree",
  components: {BaseInput, BaseButton, PasswordOptions, PhoneBaseInput},

  data() {
    return {
      isSubmitted: false,
      loading: false,
      isPhoneValid: true,
      form: {
        fullName: '',
        password: '',
        confirmPassword: '',
        phone: ''
      },
    }
  },

  validations() {
    return {
      form: {
        fullName: {required},
        phone: {required},
        password: {
          required,
          containsUppercase: function (value) {
            return /[A-Z]/.test(value)
          },
          containsLowercase: function (value) {
            return /[a-z]/.test(value)
          },
          containsNumber: function (value) {
            return /[0-9]/.test(value)
          },
          containsSpecial: function (value) {
            return /[#?!@$%^&*-]/.test(value)
          },
          correctLength: function (value) {
            return value.length > 8
          }
        },
        confirmPassword: {
          required,
          sameAs: sameAs(this.form.password)
        }
      }
    }
  },

  setup: () => ({v$: useVuelidate()}),
  validationConfig: {
    $lazy: true,
    $autoDirty: false,
  },

  methods: {
    async joinNow() {
      try {
        this.isSubmitted = true
        const isValid = await this.v$.$validate()

        if (isValid && this.isPhoneValid) {
          this.loading = true
          const apiUrl = 'https://...'

          const data = {
            "full_name": this.form.fullName,
            "phone": this.form.phone,
            "password": this.form.password,
            "confirm_password": this.form.confirmPassword,
          }

          //I real project we need install Vuex/Pinia and replace this request there
          await axios.post(`${apiUrl}/form-submission`, data)
        }
      } catch (e) {
        catchErrors(e)
      } finally {
        //I add this timeout to see loader, in real api request it will not be
        setTimeout(()=>{
          this.loading = false
        },2000)
      }
    }
  },
})
</script>
