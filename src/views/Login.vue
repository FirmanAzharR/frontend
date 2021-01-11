<template>
  <div>
    <div class="rubik">
      <b-row style="margin-right:0px;">
        <b-col xs="12" sm="12" md="6" lg="6" style="padding:0px">
          <div class="img">
            <img src="../assets/img/bg-login.png" alt="" class="responsive" />
          </div>
        </b-col>
        <b-col style="padding:0px">
          <div class="bg">
            <div v-if="type === 'signin'">
              <FormLogin :typeForm="type" @changeForm="formChange" />
            </div>
            <div v-else-if="type === 'signup'">
              <FormSignUp :typeForm="type" @changeForm="formChange" />
            </div>
            <div v-else-if="type === 'forgot'">
              <FormForgot />
            </div>
          </div>
          <div class="before-footer-login" v-if="type === 'signin'"></div>
          <div class="before-footer-signup" v-else-if="type === 'signup'"></div>
          <div class="before-footer-forgot" v-else-if="type === 'forgot'"></div>
          <Footer />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Footer from '../components/_base/Footer'
import FormLogin from '../components/_base/FormLogin'
import FormSignUp from '../components/_base/FormSignUp'
import FormForgot from '../components/_base/FormForgot'
export default {
  components: {
    Footer,
    FormLogin,
    FormSignUp,
    FormForgot
  },
  data() {
    return {
      type: 'signin'
    }
  },
  create() {},
  computed: {},
  methods: {
    formChange(type) {
      this.type = type
    }
  }
}
</script>

<style scoped>
.before-footer-login {
  margin-top: 158px;
}
.before-footer-signup {
  margin-top: 115px;
}
.before-footer-forgot {
  margin-top: 258px;
}

@media only screen and (max-width: 600px) {
  .img {
    display: none;
  }
  .before-footer-login {
    margin-top: 0px;
  }
  .bg {
    /* The image used */
    background-image: url('../assets/img/bg-login.png');
    /* Full height */
    height: 100%;
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .konten {
    z-index: 2;
  }
}
</style>
