<template>
   <div class="max-w-md mx-auto p-4">

      <h1 class="p-8 text-4xl font-semibold text-indigo-500">JCB Location</h1>

      <form class="space-y-4" action="/api" method="POST">
         <div class="flex flex-col">
            <label for="client" class="text-sm font-semibold text-gray-600">Client</label>
            <input type="text" id="client" name="client" :value="data.client" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
         </div>

         <div class="flex flex-col">
            <label for="reference" class="text-sm font-semibold text-gray-600">Référence dossier</label>
            <input type="text" id="reference" name="reference" :value="data.reference" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
         </div>

         <div class="flex flex-col">
            <label for="address" class="text-sm font-semibold text-gray-600">Adresse</label>
            <input type="text" id="address" name="address" :value="data.address" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
         </div>

         <div class="flex justify-between space-x-2">
            <div class="flex flex-col max-w-32 flex-none">
               <label for="zipcode" class="text-sm font-semibold text-gray-600">Code Postal</label>
               <input type="text" id="zipcode" name="zipcode" :value="data.zipcode" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
            </div>

            <div class="flex flex-col flex-1">
               <label for="city" class="text-sm font-semibold text-gray-600">Ville</label>
               <input type="text" id="city" name="city" :value="data.city" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
            </div>
         </div>

         <div class="flex justify-between space-x-2">
            <div class="flex flex-col max-w-40 flex-none">
               <label for="phone" class="text-sm font-semibold text-gray-600">Téléphone</label>
               <input type="text" id="phone" name="phone" :value="data.phone" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
            </div>

            <div class="flex flex-col flex-1">
               <label for="email" class="text-sm font-semibold text-gray-600">email</label>
               <input type="email" id="email" name="email" :value="data.email" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
            </div>
         </div>

         <div class="flex">
            <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
               Générer contrat
            </button>
         </div>
      </form>
   </div>
</template>

<script setup>
import { ref } from 'vue'

const data = ref({
   client: "MOON FRONTIERS",
   reference: "JCB08723492",
   address: "26, rue du Bac",
   zipcode: "46340",
   city: "Monstruc",
   phone: "+33562345676",
   email: "moonfrontiers@mail.fr",
})
</script>