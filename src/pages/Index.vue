<template>
  <q-page class="flex flex-center">

    <div class="row">
      <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    </div>

    <div class="row">
      <q-input v-model="text" float-label="Search" :value="queryText"/>
    </div>

  </q-page>

</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
