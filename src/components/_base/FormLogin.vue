<template>
  <div>
    <b-container>
      <b-row>
      <b-col></b-col>
          <b-col>
                  <div style="margin-top:160px">
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <h4 style="margin-bottom:20px">Login</h4>
          <label for="" class="label-input">Email Address</label>
          <b-form-input
            v-focus
            v-model="form.user_email"
            type="email"
            class="input"
            autocomplete="off"
            placeholder="Enter your email address"
            required
          ></b-form-input>
          <label for="" class="label-input">Password</label>
          <b-form-input
            v-model="form.user_password"
            type="password"
            class="input"
            placeholder="Enter your password"
            autocomplete="current-password"
            required
          ></b-form-input>
            <br/>
          <b-button
            type="submit"
            block
            class="btn-style2 shadow"
            variant="success"
            >Login</b-button
          >
        </b-form>
        <br>
                    <h6>email: admin@gmail.com</h6>
            <h6>password: admin</h6>
      </div>
          </b-col>
          <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import alertkMixin from '../../mixins/alertMixin'
export default {
  name: 'Login',
  mixins: [alertkMixin],
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  computed: {},
  methods: {
    ...mapActions(['login']),
    ...mapMutations(['setPage']),
    onSubmit() {
      this.login(this.form)
        .then(result => {
          this.makeToast(
            'Congratulations',
            `${result.data.data.user_name} Login successfully`,
            'success'
          )
          setTimeout(() => {
            this.$router.push('/')
          }, 2000)
        })
        .catch(error => {
          this.makeToast('Login Failed', error.data.msg, 'danger')
        })
    },
    onReset() {
      this.form = {
        user_email: '',
        user_password: ''
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
.rubik {
  font-family: 'Rubik', sans-serif;
}

.btn-style2 {
  padding: 10px;
  height: 55px;
  width:300px;
  font-weight: 600;
  border: none;
}
.label-input {
  color: #868b95;
  font-weight: bold;
}
.input {
  height: 55px;
  width:300px;
  margin-bottom: 15px;
}
.input:focus {
  border-color: #3480eb;
}
.shadow {
  -webkit-box-shadow: 1px 2px 8px 0px #2e2d2d54;
  -moz-box-shadow: 1px 2px 8px 0px #2e2d2d54;
  box-shadow: 1px 2px 8px 0px #2e2d2d54;
}

@media only screen and (max-width: 600px) {
  .padding-login {
    padding: 30px;
    margin-top: 10px;
  }
}
</style>
