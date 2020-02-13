<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card raised max-width="450">
              <v-toolbar flat dark color="blue-grey darken-4">
                <v-toolbar-title>Reset your password</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="pb-0">
                <div class="subheading">
                  Enter your email address and we will send you a link to reset
                  your password.
                </div>
              </v-card-text>
              <v-card-text class="pa-4 pb-0">
                <v-form ref="form" v-model="valid" action="#" method="post">
                  <v-row dense>
                    <v-col cols="12">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        :disabled="loading"
                        required
                        label="Enter your email"
                        type="email"
                        outlined
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
                      Send Password reset email
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
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class ForgotPassword extends Vue {
  private valid: boolean = false;
  private loading: boolean = false;
  private email: string = '';
  private emailRules: object[] = [
    (v: string) => !!v || 'The email field is required',
    (v: string) =>
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
      'The email field must be a valid email',
  ];
  private submit() {
    this.loading = !this.loading;
    setTimeout(() => {
      this.loading = !this.loading;
    }, 2000);
  }
}
</script>
