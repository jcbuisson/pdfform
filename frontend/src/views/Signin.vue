<template>
   <div class="flex flex-row h-screen items-center">
      <div class="flex w-screen justify-center">
         <form>
            <div class="flex flex-col">
               <label for="password" class="text-sm font-semibold text-gray-600">Mot de passe</label>
               <input type="password" id="password" name="password" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
            </div>
            <div>
               <router-link to="/form">
                  <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                     Entrer
                  </button>
               </router-link>
            </div>
         </form>
      </div>
   </div>
</template>
 
 <script setup>
 import router from '/src/router'
 </script>
 