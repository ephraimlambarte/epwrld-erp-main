<template>
  <v-app>
    <v-container secondary fill-height fluid> 
      <Boxes />
      </v-container>
  </v-app>
</template>

<script>
import Boxes from "./components/Boxes";

export default {
  name: "App",
  components: {
    Boxes,
  },
};
</script>

<style>
html { overflow-y: auto }
</style>
