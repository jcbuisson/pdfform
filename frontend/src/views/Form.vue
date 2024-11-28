<template>
   <div class="max-w-md mx-auto">
      <form class="space-y-4" @submit.prevent="onSubmit">
         <div class="flex flex-col">
            <label for="client" class="text-sm font-semibold text-gray-600">Client</label>
            <input type="text" id="client" name="client" v-model="data.client" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
         </div>

         <div class="flex flex-col">
            <label for="fileref" class="text-sm font-semibold text-gray-600">Référence dossier</label>
            <input type="text" id="fileref" name="fileref" v-model="data.fileref" class="mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-400" />
         </div>

         <div class="flex justify-end">
            <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
               Générer
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