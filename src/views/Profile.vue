<template>
  <div>
    <Navbar />
    <div class="bg">
      <b-container>
        <h3
          style="color:white;padding-top:70px;padding-bottom:70px"
          class="rubik"
        >
          User Profile
        </h3>
        <div>
          <b-row>
            <b-col md="4" xl="4" lg="4">
              <div>
                <b-card class="card-style">
                  <b-card-text>
                    <h3>image</h3>
                  </b-card-text>
                </b-card>
              </div>
            </b-col>
            <b-col md="8" xl="8" lg="8">
              <div>
                <b-card class="card-style">
                  <b-card-text>
                    <h3>Contacs</h3>
                  </b-card-text>
                </b-card>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="8" xl="8" lg="8">
              <div>
                <b-card class="card-style">
                  <b-card-text>
                    <h3>Details</h3>
                  </b-card-text>

                  <b-card-text>{{ getProfile }}</b-card-text>
                </b-card>
              </div>
            </b-col>
            <b-col md="4" xl="4" lg="4">
              <div v-item-center>
                <h5 style="color:white;margin-bottom:40px" class="rubik">
                  Do you want to save the change?
                </h5>
                <b-button
                  class="btn rubik"
                  style="background-color:#683F28;color:white"
                  >Save change</b-button
                ><br />
                <b-button
                  class="btn rubik"
                  style="background-color:#FFBA33;color:#683F28"
                  >Cancle</b-button
                ><br />
                <b-button
                  class="btn rubik"
                  style="background-color:white;color:#683F28;text-align:left"
                  >Edit Password ></b-button
                ><br />
                <b-button
                  class="btn rubik"
                  style="background-color:white;color:#683F28;text-align:left"
                  >Logout ></b-button
                >
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div style="padding-bottom:70px"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/_base/Footer'
import Navbar from '../components/_base/Navbar'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Profile',
  components: {
    Footer,
    Navbar
  },
  data() {
    return {}
  },
  created() {
    this.getProfiles(5)
  },
  computed: {
    ...mapGetters(['getProfile'])
  },
  methods: {
    ...mapActions(['getProfiles']),
    makeToast(bodyMsg, msg, variant) {
      this.$bvToast.toast(bodyMsg, {
        title: msg,
        variant: variant,
        solid: true
      })
    }
  }
}
</script>

<style scoped>
.bg {
  /* The image used */
  background-image: url('../assets/img/bg-profile.png');

  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.rubik {
  font-family: 'Rubik', sans-serif;
}

.card-style {
  max-height: 360px;
  height: 360px;
  width: auto;
  border: none;
  border-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;
}

.btn {
  margin-bottom: 18px;
  width: 330px;
  height: 60px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
</style>
