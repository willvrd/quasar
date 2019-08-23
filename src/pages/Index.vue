<template>
  <q-page class="page-index">

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
        @keydown.enter="runSearch"
        />
      </div>

    </q-parallax>

    <div id="results" class="row q-pa-md q-col-gutter-lg">

        <div class="col-xs-12 col-sm-4 col-md-3" v-for="(item, index) in videos" :key="index">
          <q-card class="my-card">
            <img :src="item.thumbnails.medium.url" :alt="item.title">

            <q-card-section>
              <div class="text-h6 text-uppercase">{{item.title}}</div>
              <div class="text-caption">Channel: {{item.channelTitle}}</div>
            </q-card-section>
          </q-card>
        </div>

        <div class="clearfix"></div>
    </div>

    <div class="q-pa-md">
      <q-ajax-bar
        ref="bar"
        position="bottom"
        color="primary"
        size="10px"
        skip-hijack
      />
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
import youtube from '../providers/youtube'

export default {
  name: 'PageIndex',
  data () {
    return {
      textSearch: 'I like golden retrivers',
      videos: []
    }
  },
  computed: {
    isValid () {
      return this.textSearch.length <= 3
    }
  },
  methods: {
    runSearch () {
      const bar = this.$refs.bar
      bar.start()

      youtube(this.textSearch).then(results => {
        console.log(results)
        this.videos = results
        this.$refs.bar.stop()
      })
        .catch(error => {
          console.error(error)
        })
    }
  },
  mounted () {
    this.runSearch()
  }

}
</script>
