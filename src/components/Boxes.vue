<template>
  <v-layout align="end" justify-center align-center>
    <v-card class="rounded-lg" outlined tile>
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