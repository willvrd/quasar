<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          William Verde - Testing
        </q-toolbar-title>

        <div>Green v{{ $q.version }}</div>
        <div class="golden-green q-ml-md rounded-borders">
           <q-img
            alt="Green logo"
            src="assets/golden-tipo1.jpg"
            style="width:35px;"
            >
            </q-img>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>

        <!-- <q-separator spaced /> -->

        <q-item-label header>Green Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://ingwilliamverde.wordpress.com/">
          <q-item-section avatar>
            <q-icon name="web" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Website</q-item-label>
            <q-item-label caption>ingwilliamverde.wordpress.com</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/willvrd/">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/willvrd</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
