<script setup>
  const { data, pending, error, refresh } = await useFetch('/api/user/get',{
      lazy: true,
  })

  console.log("DADOS DO BACK:",data.value)
</script>


<template>
  <div class="w-screen h-screen bg-red-500 flex items-center justify-center">
   <p class="text-white text-8xl font-bold">Marcel</p>
  </div>
</template>
