<template>
  <v-container style="max-width: 900px">
      <v-row
        no-gutters
        class="text-center"
      >
      <v-col v-for="n in 15"
          :key="n"
          class="py-5 px-5 col-sm-2">
          <v-btn
              color="success"
              fab
              class="rounded-lg"
              x-large
              dark
            >
              <v-icon>fas fa-rocket</v-icon>

            </v-btn>
           <div class="white--text font-weight-medium mt-2">Sample</div>
      </v-col>

      </v-row>

  </v-container>
</template>

<script>
export default {
    components: {
    },
data: () => ({
    
    }),
}
</script>

<style>

</style>