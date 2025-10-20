<script setup>
const { data, pending, error, refresh } = await useFetch('/api/user/get', {
  lazy: true,
})

console.log("DADOS DO BACK:", data.value)
</script>


<template>
  <main class="overflow-x-hidden">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
