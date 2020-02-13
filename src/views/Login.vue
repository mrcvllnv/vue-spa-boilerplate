<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card raised max-width="450">
              <v-toolbar flat dark color="blue-grey darken-4">
                <v-toolbar-title>Login to your account</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="pa-4 pb-0">
                <v-form ref="form" v-model="valid" action="#" method="post">
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field
                        v-model="form.email"
                        :rules="form.emailRules"
												:disabled="loading"
                        required
                        label="Email"
                        type="email"
                        outlined
                        dense
                      />
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="form.password"
                        :rules="form.passwordRules"
                        required
                        label="Password"
                        name="password"
                        :append-icon="e1 ? 'visibility_off' : 'visibility'"
                        :type="e1 ? 'password' : 'text'"
												:disabled="loading"
                        outlined
                        dense
												@click:append="() => (e1 = !e1)"
                      />
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions class="pa-4 pt-0">
                <v-row dense>
                  <v-col cols="12">
                    <v-btn
      								class="primary"
                      block
                      :loading="loading"
                      :disabled="loading || !valid"
                      @click="submit"
                    >
                      Login
                    </v-btn>
                  </v-col>
                  <v-col cols="12">
                    <v-btn block text to="/forgot-password">
                      Forgot Password?
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    valid: false,
    loading: false,
    e1: true,
    form: {
      email: null,
      emailRules: [
        (v: string) => !!v || 'The email field is required',
        (v: string) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'The email field must be a valid email',
      ],
      password: null,
      passwordRules: [(v: string) => !!v || 'The password field is required'],
    },
  }),
  methods: {
    submit() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
});
</script>
