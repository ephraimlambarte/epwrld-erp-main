<template>
  <v-container fluid fill-height>
    <v-layout align="end" justify-center align-center>
      <v-card
        width="400"
        dark
        color="secondary"
        class="rounded-lg"
        outlined
        tile
        elevation="2"
      >
        <v-container>
          <v-card-title
            >Create User Profile
            <v-spacer></v-spacer>
            <v-btn class="mx-2" fab small color="primary" to="/MainPage">
              <v-icon> fas fa-times </v-icon>
            </v-btn>
          </v-card-title>

          <v-card-subtitle>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="FirstName"
                :rules="nRules"
                label="First Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="MiddleName"
                :rules="nRules"
                label="Middle Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="LastName"
                :rules="nRules"
                label="Last Name"
                required
              ></v-text-field>
              
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Birthday"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  :active-picker.sync="activePicker"
                  :max="
                    new Date(
                      Date.now() - new Date().getTimezoneOffset() * 60000
                    )
                      .toISOString()
                      .substr(0, 10)
                  "
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
              <v-combobox
                v-model="chipNo"
                chips
                label="Contact Numbers"
                multiple
                append-icon=""
                fixed
              >
                <template v-slot:selection="{ attrs, item, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click:close="removeNo(item)"
                  >
                    <strong>{{ item }}</strong>
                  </v-chip>
                </template>
              </v-combobox>
              <v-combobox
                v-model="chipAdd"
                chips
                label="Addresses"
                multiple
                append-icon=""
                fixed
              >
                <template v-slot:selection="{ attrs, item, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click:close="removeAdd(item)"
                  >
                    <strong>{{ item }}</strong>
                  </v-chip>
                </template>
              </v-combobox>
              <v-btn
                block
                to="/MainPage"
                color="primary"
                class="mr-4"
                @click="validate"
              >
                Create Profile
              </v-btn>
            </v-form>
          </v-card-subtitle>
        </v-container>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "ProfileForm",
  data: () => ({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    nRules: [(v) => !!v || "This field is required"],
    activePicker: null,
    date: null,
    menu: false,
    chipNo: [],
    chipAdd: [],
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    removeNo(number) {
      this.chipNo.splice(this.chipNo.indexOf(number), 1);
      this.chipNo = [...this.chipNo];
    },
    removeAdd(address) {
      this.chipAdd.splice(this.chipAdd.indexOf(address), 1);
      this.chipAdd = [...this.chipAdd];
    },
  },
};
</script>

<style>
</style>