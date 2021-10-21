<template>
  <v-container fluid fill-height>
      <AppBar />
      <Landing />
  </v-container>
</template>

<script>
import AppBar from './AppBar.vue'
import Landing from './Landing.vue'

export default {
    components: {
        AppBar, Landing,
    }
}
</script>

<style>
html {
  overflow-y: auto;
}
</style>