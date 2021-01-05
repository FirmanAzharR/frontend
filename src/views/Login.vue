<template>
  <div>
    <div class="rubik">
      <b-row style="margin-right:0px;">
        <b-col xs="12" sm="12" md="6" lg="6" style="padding:0px" class="img">
          <img src="../assets/img/bg-login.png" alt="" class="responsive" />
        </b-col>
        <b-col xs="12" sm="12" md="6" lg="6" style="padding:0px">
          <div class="bg">
            <div v-if="type === 'signin'">
              <FormLogin />
            </div>
            <div v-else-if="type === 'signup'">
              <FormSignUp />
            </div>
            <div v-else-if="type === 'forgot'">
              <FormForgot />
            </div>
          </div>
          <div class="before-footer-login" v-if="type === 'signin'"></div>
          <div class="before-footer-signup" v-else-if="type === 'signup'"></div>
          <div class="before-footer-forgot" v-else-if="type === 'forgot'"></div>
          <div>
            <Footer />
          </div>
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
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
.rubik {
  font-family: 'Rubik', sans-serif;
}
.responsive {
  width: 100%;
  height: auto;
}
.btn-style {
  padding: 10px;
  width: 120px;
  background-color: #ffba33;
  border-radius: 20px;
  color: #7d4f2a;
  font-weight: 600;
  border: none;
}
.btn-style2 {
  padding: 10px;
  height: 55px;
  border-radius: 20px;
  font-weight: 600;
  border: none;
}
.label-input {
  color: #868b95;
  font-weight: bold;
}
.input {
  height: 55px;
  border-radius: 20px;
  margin-bottom: 15px;
}
.input:focus {
  box-shadow: 0 0 0 0.2rem rgba(163, 100, 65, 0.25);
  border-color: #7d4f2a;
}
.shadow {
  -webkit-box-shadow: 1px 2px 8px 0px #2e2d2d54;
  -moz-box-shadow: 1px 2px 8px 0px #2e2d2d54;
  box-shadow: 1px 2px 8px 0px #2e2d2d54;
}

.before-footer-login {
  margin-top: 156px;
}
.before-footer-signup {
  margin-top: 113px;
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
