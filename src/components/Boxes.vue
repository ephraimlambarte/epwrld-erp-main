<template>
  <v-layout align="end" justify-center align-center>
    <v-card dark color="secondary" class="rounded-lg" outlined tile elevation="2">
      <Forms />
    </v-card>
  </v-layout>
</template> 

<script>
import Forms from "./Forms";

export default {
  name: "Boxes",
  components: {
    Forms,
  },
};
</script>

<style>
</style>