<template>
  <v-app>
    <v-main style="background: #b1bcd0">
        <AppBar />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
export default {
  name: "App",
  components: {

    AppBar,
  },
};
</script>

<style>
html {
  overflow-y: auto;
}
</style>
