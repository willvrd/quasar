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

      <q-btn
      :loading="loading4"
      size="lg"
      class="q-mt-lg q-px-xl"
      color="primary"
      @click="runSearch"
      >
        Guayabear
        <template v-slot:loading>
          <q-spinner-hourglass class="on-left" />
        </template>
      </q-btn>

    </q-parallax>

    <div id="results" v-if="videos.length>0" class="row q-pa-md q-col-gutter-lg">

        <div class="col-xs-12 col-sm-4 col-md-3" v-for="(item, index) in videos" :key="index">
          <q-card class="my-card">
            <img :src="item.thumbnails.medium.url" :alt="item.title">

            <q-card-section>
              <div class="text-h6 text-uppercase">{{item.title}}</div>
              <div class="text-caption">Channel: {{item.channelTitle}}</div>
            </q-card-section>
          </q-card>
        </div>

    </div>

    <div v-else>
      <q-banner inline-actions class="text-white bg-red">
        No se encontró una guayaba. Intente buscar otra guayaba
         <template v-slot:avatar>
          <q-icon name="pets" color="white" />
        </template>
      </q-banner>
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
      textSearch: 'I like golden retrievers',
      videos: [],
      loading4: false,
    }
  },
  computed: {
    isValid () {
      return this.textSearch.length <= 3
    }
  },
  methods: {
    runSearch () {

      if(this.textSearch==""){

        this.$q.notify({
              color:    'yellow-8',
              textColor: 'black',
              icon:     'face',
              message:  'Ingrese el texto a guayabear',
              actions: [{ icon: 'close', color: 'black' }]
        })

      }else{

        const bar = this.$refs.bar
        bar.start()
        this.loading4 = true

        youtube(this.textSearch).then(results => {
          this.videos = results
          this.$refs.bar.stop()
          this.loading4 = false
        })
          .catch(error => {
            console.error(error)
            this.$refs.bar.stop()
            this.loading4 = false
            this.$q.notify({
              color:    'negative',
              icon:     'report_problem',
              message:  'Error en la guayaba',
              actions: [{ icon: 'close', color: 'white' }]
            })
          })
      }

    }
  },
  mounted () {
    // console.log(process.env)
    this.runSearch()
  }

}
</script>
