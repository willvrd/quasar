<template>
  <q-page class="index">

    <q-parallax :speed="0.5" class="">
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

    <div id="results" class="row q-pa-md q-col-gutter-lg">

        <div class="col-xs-12 col-sm-4 col-md-3" v-for="(item, index) in videos" :key="index">
          <q-card class="my-card">
            <img src="https://cdn.quasar.dev/img/parallax2.jpg">

            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </div>

        <div class="clearfix"></div>
      </div>

  </q-page>
</template>

<style lang="stylus" scoped>

.my-card
  width 100%
  max-width 250px
  margin auto

</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      textSearch: '',
      videos: ['1', '2', '3', '3', '3', '3']
    }
  },
  computed: {
    isValid () {
      return this.textSearch.length <= 3
    }
  }
}
</script>
