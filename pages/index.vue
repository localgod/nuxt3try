<template>
    Hej med dig
    {{ matrikel1 }}
</template>
<script setup lang="ts">
const matrikel1 = (await useFetch(() => '/api/dataforsyningen/jordstykker?ejerlavkode=211255&matrikelnr=16d')).data.value
</script>