<template>
  <div>
    <div class="rubik">
      <b-row style="margin-right:0px;">
        <b-col xs="12" sm="12" md="6" lg="6" style="padding:0px">
          <div class="img animate__animated animate__fadeIn">
            <img src="../assets/img/bg-login.png" alt="" class="responsive" />
          </div>
        </b-col>
        <b-col style="padding:0px">
          <!-- <div class="bg"> -->
          <div>
            <div v-if="getPage === 'signin'">
              <FormLogin class="animate__animated animate__fadeIn" />
            </div>
            <div
              v-else-if="getPage === 'signup'"
              class="animate__animated animate__fadeIn"
            >
              <FormSignUp />
            </div>
            <div
              v-else-if="getPage === 'forgot'"
              class="animate__animated animate__fadeIn"
            >
              <FormForgot />
            </div>
            <div
              v-else-if="getPage === 'reset'"
              class="animate__animated animate__fadeIn"
            >
              <UpdatePass />
            </div>
          </div>
          <div class="before-footer-login" v-if="getPage === 'signin'"></div>
          <div
            class="before-footer-signup"
            v-else-if="getPage === 'signup'"
          ></div>
          <div
            class="before-footer-forgot"
            v-else-if="getPage === 'forgot'"
          ></div>
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
import UpdatePass from '../components/_base/UpdatePass'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    Footer,
    FormLogin,
    FormSignUp,
    FormForgot,
    UpdatePass
  },
  data() {
    return {
      page: ''
    }
  },
  created() {
    this.page = this.$route.query.page
    if (this.page === 'reset') {
      this.setPage(this.page)
    } else if (this.page === 'undefined') {
      this.setPage('signin')
    }
  },
  computed: {
    ...mapGetters(['getPage'])
  },
  methods: {
    ...mapMutations(['setPage'])
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
