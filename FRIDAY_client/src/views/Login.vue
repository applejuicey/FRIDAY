<template>

  <div class="flex flex-col justify-center min-h-screen bg-gray-100 py-6
       dark:bg-gray-200">

    <div class="relative sm:max-w-xl sm:mx-auto">

      <div class="absolute inset-0
           bg-gradient-to-r from-green-400 to-yellow-200 shadow-lg
           transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

      <div class="relative grid bg-white shadow-lg px-4 py-14
           sm:max-w-md sm:mx-auto sm:rounded-3xl sm:p-20
           dark:bg-gray-800">
        <div class="justify-self-end -mt-8
             sm:-mt-16 sm:-mr-16">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline text-gray-400 cursor-pointer"
                 viewBox="0 0 20 20" fill="currentColor" @click="toggleTheme('dark')">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <span>&nbsp;</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline text-yellow-400 cursor-pointer"
                 viewBox="0 0 20 20" fill="currentColor" @click="toggleTheme('light')">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018
                  0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010
                  1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100
                  2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1
                  1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414
                  1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
            <span>&nbsp;</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline text-green-400 cursor-pointer"
                 viewBox="0 0 20 20" fill="currentColor" @click="toggleLanguage">
              <path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724
                  4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098
                  0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494
                  1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1
                  0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383
                  16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382
                  6h2.764L13 11.236 11.618 14z" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="justify-self-center mb-6 text-xl text-gray-600 sm:text-2xl dark:text-white">
          Login
        </div>
        <div class="self-center my-3">
          <f-input v-model="userInfo.email" :id="'email'" :placeholder="'Email'" :show-icon-left="true">
            <template v-slot:icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                   viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </template>
          </f-input>
        </div>
        <div class="justify-self-center w-full mt-3">
          <f-input v-model="userInfo.password" :id="'password'" :placeholder="'Password'"
                   :type="'password'" :show-icon-left="true">
            <template v-slot:icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                   viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2
                      2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" />
              </svg>
            </template>
          </f-input>
        </div>
        <div class="justify-self-end mb-3">
          <a href="#" class="text-xs font-thin text-gray-500 hover:text-gray-700
             sm:text-sm dark:text-gray-100 dark:hover:text-white">
            Forgot your password?
          </a>
        </div>
        <div class="justify-self-center w-full my-3">
          <f-button @click="login">
            <div class="">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline"
                   viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0
                    010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0
                    010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>&nbsp;Login</span>
            </div>
          </f-button>
        </div>
        <div class="justify-self-center w-full">
          <a href="#" target="_blank" class="text-xs font-thin text-gray-500 hover:text-gray-700
             dark:text-gray-100 dark:hover:text-white">
            You don&#x27;t have an account?
          </a>
        </div>

      </div>

    </div>

  </div>

</template>

<script>
import { reactive  } from 'vue';
import FButton from '../components/Button.vue';
import FInput from '../components/Input.vue';
export default {
  components: {
    FButton, FInput
  },
  setup () {
    const userInfo = reactive ({
      email: '',
      password: ''
    });
    const login = () => {
      console.log('login');
      console.log(userInfo);
    };
    const toggleLanguage = () => {
      console.log('toggleLanguage');
    };
    const toggleTheme = (themeName) => {
      console.log('toggleTheme', themeName);
      if (themeName === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.theme = JSON.stringify({
          name: 'dark',
        });
      }
      if (themeName === 'light') {
        document.documentElement.classList.remove('dark')
        localStorage.theme = JSON.stringify({
          name: 'light',
        });
      }

    };
    return {
      userInfo,
      login,
      toggleLanguage,
      toggleTheme,
    };
  }
};
</script>

