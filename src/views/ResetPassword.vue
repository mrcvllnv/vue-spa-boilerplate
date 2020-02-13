<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card raised max-width="450">
              <v-toolbar flat dark color="blue-grey darken-4">
                <v-toolbar-title>Reset Password</v-toolbar-title>
              </v-toolbar>
							<v-card-text class="pb-0">
                <div class="subheading">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
              </v-card-text>
              <v-card-text class="pa-4 pb-0">
                <v-form ref="form" v-model="valid" action="#" method="post">
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field
                        v-model="form.newPassword"
                        :rules="form.newPasswordRules"
                        required
                        label="New Password"
                        name="new_password"
                        :append-icon="e1 ? 'visibility_off' : 'visibility'"
                        :type="e1 ? 'password' : 'text'"
												:disabled="loading"
                        outlined
                        dense
												@click:append="() => (e1 = !e1)"
                      />
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="form.newPasswordConfirmation"
                        :rules="form.newPasswordConfirmationRules"
                        required
                        label="New Password Confirmation"
                        name="new_password_confirmation"
                        :append-icon="e2 ? 'visibility_off' : 'visibility'"
                        :type="e2 ? 'password' : 'text'"
												:disabled="loading"
                        outlined
                        dense
												@click:append="() => (e2 = !e2)"
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
                      Reset Password
                    </v-btn>
                  </v-col>
                  <v-col cols="12">
                    <v-btn block text to="/login">
                      Back to login
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
    e2: true,
    form: {
      newPassword: null,
      newPasswordRules: [(v: string) => !!v || 'The new password field is required'],
      newPasswordConfirmation: null,
      newPasswordConfirmationRules: [(v: string) => !!v || 'The new password confirmation field is required'],
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
