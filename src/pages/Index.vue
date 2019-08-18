<template>
  <q-page class="index">

    <div class="q-mt-lg row flex flex-center">
      <q-input
      filled
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
