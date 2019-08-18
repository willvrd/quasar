<template>
  <q-page class="index">

    <div class="row flex flex-center">
      <img alt="Green logo" src="~assets/golden-tipo1.jpg">
    </div>

    <div class="q-mt-lg row flex flex-center">
      <q-input
      filled
      v-model="text"
      label="Search..."
      >
        <template v-slot:prepend>
            <q-icon name="search" />
        </template>
      </q-input>
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
