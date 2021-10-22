<template>
<v-container fluid fill-height>
  <v-layout align="end" justify-center align-center>
    <v-card width="400" dark color="secondary" class="rounded-lg" outlined tile elevation="2">
  <v-container>
    <v-card-title
      >Sign In
      <v-spacer></v-spacer>
      <v-btn class="mx-2" fab small color="primary">
        <v-icon> fas fa-times </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email Address"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Enter password"
          :rules="pwRules"
          :append-icon="value ? 'fas fa-eye' : 'fas fa-eye-slash'"
          @click:append="() => (value = !value)"
          :type="value ? 'password' : 'text'"
        ></v-text-field>

        <v-checkbox v-model="checkbox" label="Remember Me"></v-checkbox>

        <v-btn block to="./MainPage" color="primary" class="mr-4" @click="validate">
          Sign In
        </v-btn>
        <v-row class="mt-4" no-gutters>
          <v-btn x-small text>Don't have an account?</v-btn>
          <v-spacer></v-spacer>
          <v-btn x-small text>Forgot Password?</v-btn>
        </v-row>
      </v-form>
    </v-card-subtitle>
  </v-container>
      </v-card>
  </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    value: String,
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    pwRules: [(v) => !!v || "Password is required"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      }

    },

};
</script>

<style>
</style>