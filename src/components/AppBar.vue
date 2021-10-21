<template>
  <v-container fluid fill-height>
    <v-app-bar color="secondary" dark fixed>
      <v-app-bar-nav-icon> <v-icon>fas fa-rocket</v-icon> </v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="50"
        offset-x
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn text large dark v-bind="attrs" v-on="on">
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
              class="rounded-circle"
              height="30"
              width="30"
            >
            &nbsp;Skizzo Pereña
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Skizzo Pereña</v-list-item-title>
                <v-list-item-subtitle>Standard Member</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action> </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>
          <v-list>
            <v-list-item>
              <v-btn text plain>My Account</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn text plain>My Profile</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn text plain color="red">Sign Out</v-btn>
            </v-list-item>
          </v-list>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>
    <Landing />
  </v-container>
</template>

<script>
import Landing from "./Landing";
export default {
  name: "AppBar",
  data: () => ({
    collapseOnScroll: true,
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  components: {
    Landing,
  },
};
</script>

<style>
</style>