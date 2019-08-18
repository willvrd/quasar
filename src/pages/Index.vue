<template>
  <q-page class="index">

    <q-parallax :speed="0.5" class="window-height">
      <template v-slot:media>
        <img src="assets/parallax/street.jpg">
      </template>

      <h1 id="first-title" class="text-white text-center">Welcome to this Guayaba</h1>

      <div id="input-search" class="q-mt-lg row flex flex-center full-width">
        <q-input
        bg-color="primary"
        filled
        label="Search..."
        color="white"
        v-model="textSearch"
        error-message="Please use minimum 3 characters"
        :error="isValid"
        >
          <template v-slot:prepend>
              <q-icon name="search" style="color:white" />
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
  name: 'PageIndex',
  data () {
    return {
      textSearch: ''
    }
  },
  computed: {
    isValid () {
      return this.textSearch.length <= 3
    }
  }
}
</script>
