<template>
  <div>
    <b-container>
      <div class="d-flex justify-content-between" style="padding:30px">
        <div class="align-self-center" style="font-weight:bold;font-size:20px">
          <img
            src="../../assets/img/coffee-logo.png"
            alt=""
            style="margin-right:10px"
          />Coffeeland
        </div>
        <div class="align-self-center">
          <b-button class="btn-style">Sign Up</b-button>
        </div>
      </div>
      <div style="padding:80px;margin-top:20px">
        <h3
          style="text-align:center;color:#7d4f2a;margin-bottom:50px;font-weight:bold"
        >
          Login
        </h3>
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <label for="" class="label-input">Email Address</label>
          <b-form-input
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
            required
          ></b-form-input>
          <br />
          <h6 style="margin-bottom:40px">Forgot password?</h6>
          <b-button
            type="submit"
            block
            class="btn-style2 shadow"
            style="background-color:#FFBA33;color:#7D4F2A"
            >Login</b-button
          ><br />
          <b-button
            block
            class="btn-style2 shadow"
            style="background-color:white;color:black
                "
            ><img
              src="../../assets/img/logo-google.png"
              alt=""
              style="margin-right:10px"
            />Login with Google</b-button
          ><br />
          <h6
            for=""
            style="margin-top:40px;margin-bottom:40px;text-align:center"
          >
            Don't have account ?
          </h6>
          <br />
          <b-button
            block
            class="btn-style2 shadow"
            style="color:white;background-color:#6A4029"
            >Sign up here</b-button
          ><br />
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  computed: {
    // ...mapState(['name']),
    //rename pemanggilan data dalam bentuk obj
    ...mapState({ dataName: 'name' })
  },
  methods: {
    // mapaction dan mapmutation
    ...mapActions(['login']),
    //toast notification
    makeToast(bodyMsg, msg, variant) {
      this.$bvToast.toast(bodyMsg, {
        title: msg,
        variant: variant,
        solid: true
      })
    },
    onSubmit() {
      //console.log(this.form)
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
