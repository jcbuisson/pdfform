<template>
   <div class="max-w-md mx-auto">

      <h1 class="p-8 text-4xl font-semibold text-indigo-500">JCB Location SAS</h1>

      <form class="space-y-4" @submit.prevent="onSubmit">
         <div class="flex flex-col">
            <label for="client" class="text-sm font-semibold text-gray-600">Client</label>
            <input type="text" id="client" name="client" v-model="data.clientText" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
         </div>

         <div class="flex flex-col">
            <label for="reference" class="text-sm font-semibold text-gray-600">Référence dossier</label>
            <input type="text" id="reference" name="reference" v-model="data.refText" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
         </div>

         <div class="flex flex-col">
            <label for="address" class="text-sm font-semibold text-gray-600">Adresse</label>
            <input type="text" id="address" name="address" v-model="data.addressText" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
         </div>

         <div class="flex flex-col">
            <label for="zipcode" class="text-sm font-semibold text-gray-600">Code Postal</label>
            <input type="text" id="zipcode" name="zipcode" v-model="data.postalCodeText" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
         </div>

         <div class="flex flex-col">
            <label for="city" class="text-sm font-semibold text-gray-600">Ville</label>
            <input type="text" id="city" name="city" v-model="data.cityText" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
         </div>

         <div class="flex flex-col">
            <label for="phone" class="text-sm font-semibold text-gray-600">Téléphone</label>
            <input type="text" id="phone" name="phone" v-model="data.phoneText" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
         </div>

         <div class="flex flex-col">
            <label for="email" class="text-sm font-semibold text-gray-600">email</label>
            <input type="email" id="email" name="email" v-model="data.emailText" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
         </div>

         <div class="flex justify-end">
            <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
               Générer contrat
            </button>
         </div>
      </form>
   </div>
</template>

<script setup>
import { ref } from 'vue'

const data = ref({})

async function onSubmit(ev) {
   console.log("onSubmit")
   const response = await fetch('/api', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.value),
   })

   if (response.ok) {
      const blob = await response.blob();
      const pdfUrl = URL.createObjectURL(blob);
      window.open(pdfUrl, '_blank');
   } else {
      alert('Error submitting form!')
   }}
</script>