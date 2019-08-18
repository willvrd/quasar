<template>
  <q-page class="index">

    <q-parallax :speed="0.5" class="window-height">
      <template v-slot:media>
        <img src="assets/parallax/street.jpg">
      </template>

      <h1 id="first-title" class="text-white text-center">Welcome to this Guayaba</h1>

      <div id="input-search" class="q-mt-lg row flex flex-center full-width">
        <q-input
        filled
        label="Search..."
        >
          <template v-slot:prepend>
              <q-icon name="search" />
          </template>
        </q-input>
      </div>

    </q-parallax>

  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
