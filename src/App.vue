<template>
  <v-app>
    <v-main style="background: #b1bcd0">
        <transition name="fade" mode="out-in"><router-view></router-view></transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
  },
};
</script>

<style>
html {
  overflow-y: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
