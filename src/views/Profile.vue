<template>
  <div>
    <Navbar />
    <div class="bg">
      <b-container>
        <h2
          style="color:white;padding-top:70px;padding-bottom:70px;font-weight:bold"
          class="rubik shadow-text"
        >
          User Profile
        </h2>
        <div>
          <b-row>
            <b-col md="4" xl="4" lg="4">
              <div>
                <b-card class="card-style shadow-card">
                  <div id="preview" class="centered">
                    <img v-if="url" :src="url" class="round-img" />
                    <div
                      v-else
                      class="d-flex justify-content-center round-img"
                      style="background-color:#d2d2d2;border-radius:50%;"
                    >
                      <img
                        class="align-self-center"
                        src="../assets/img/user-no-img.png"
                        alt=""
                        style="width:60px"
                      />
                    </div>
                    <b-iconstack
                      font-scale="2"
                      @click.prevent="chooseFiles()"
                      class="btn-icons"
                    >
                      <b-icon
                        stacked
                        icon="circle-fill"
                        variant="warning"
                      ></b-icon>
                      <b-icon
                        stacked
                        icon="pencil-fill"
                        scale="0.5"
                        variant="white"
                      ></b-icon>
                    </b-iconstack>
                  </div>
                  <div>
                    <input
                      id="fileUpload"
                      @change="handleFile"
                      type="file"
                      hidden
                    />
                  </div>
                  <br />
                  <div v-item-center class="rubik">
                    <h4>{{ display_name }}</h4>
                    <p>{{ form.user_email }}</p>
                  </div>
                </b-card>
              </div>
            </b-col>
            <b-col md="8" xl="8" lg="8">
              <div class="rubik">
                <b-card class="card-style shadow-card">
                  <b-card-text>
                    <h3 style="color:#4F5665">Contacts</h3>
                  </b-card-text>
                  <br />
                  <b-row>
                    <b-col>
                      <h5>Email address :</h5>
                      <b-form-input
                        v-model="form.user_email"
                        class="input2"
                        type="email"
                        placeholder="email"
                      ></b-form-input
                    ></b-col>
                    <b-col>
                      <h5>Mobile number :</h5>
                      <b-form-input
                        v-model="form.user_phone"
                        class="input2"
                        type="number"
                        placeholder="Insert your phone number"
                      ></b-form-input
                    ></b-col>
                  </b-row>
                  <br />
                  <b-row>
                    <b-col>
                      <h5>Delivery address :</h5>
                      <b-form-textarea
                        v-model="form.user_address"
                        class="input2"
                        id="textarea"
                        placeholder="Enter delivery address"
                        rows="3"
                        max-rows="6"
                      ></b-form-textarea
                    ></b-col>
                  </b-row>
                </b-card>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="8" xl="8" lg="8">
              <div class="rubik">
                <b-card class="card-style shadow-card">
                  <b-card-text>
                    <h3 style="color:#4F5665">Details</h3>
                  </b-card-text>
                  <b-row>
                    <b-col cols="7">
                      <h5>Display name :</h5>
                      <b-form-input
                        v-model="display_name"
                        class="input2"
                        type="text"
                        placeholder="Enter display name"
                      ></b-form-input>
                      <h5>First name :</h5>
                      <b-form-input
                        v-model="form.first_name"
                        class="input2"
                        type="text"
                        placeholder="Enter first name"
                      ></b-form-input>
                      <h5>Last name :</h5>
                      <b-form-input
                        v-model="form.last_name"
                        class="input2"
                        type="text"
                        placeholder="Enter Last name"
                      ></b-form-input>
                    </b-col>
                    <b-col> </b-col>
                  </b-row>
                </b-card>
              </div>
            </b-col>
            <b-col md="4" xl="4" lg="4">
              <div v-item-center>
                <h5
                  style="color:white;margin-bottom:40px"
                  class="rubik shadow-text"
                >
                  Do you want to save the change?
                </h5>
                <b-button
                  class="btn rubik shadow-card"
                  style="background-color:#6A4029;color:white"
                  >Save change</b-button
                ><br />
                <b-button
                  class="btn rubik shadow-card"
                  style="background-color:#FFBA33;color:#683F28"
                  >Cancle</b-button
                ><br />
                <b-button
                  class="btn rubik shadow-card"
                  style="background-color:white;color:#683F28;text-align:left"
                  >Edit Password ></b-button
                ><br />
                <b-button
                  class="btn rubik shadow-card"
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
    return {
      url: null,
      display_name: 'Default name user',
      form: {}
    }
  },
  created() {
    this.getProfiles(5)
    this.setData()
  },
  computed: {
    ...mapGetters(['getProfile'])
  },
  methods: {
    ...mapActions(['getProfiles']),

    setData() {
      this.form = this.getProfile
      console.log(this.form)
    },
    chooseFiles: function() {
      document.getElementById('fileUpload').click()
    },
    handleFile(e) {
      console.log(e.target.files[0])
      const file = (this.form.user_img = e.target.files[0])
      this.url = URL.createObjectURL(file)
    },
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
.shadow-card {
  -webkit-box-shadow: 0px 4px 22px -1px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 4px 22px -1px rgba(0, 0, 0, 1);
  box-shadow: 0px 4px 22px -1px rgba(0, 0, 0, 1);
}
.centered {
  display: flex;
  align-items: center;
}
.shadow-text {
  text-shadow: 4px 4px 4px #313131;
}
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
  max-height: 370px;
  height: 380px;
  width: auto;
  border: none;
  border-radius: 10px;
  margin-bottom: 30px;
  border-bottom: 10px solid #6a4029;
}

.btn {
  margin-bottom: 18px;
  width: 330px;
  height: 60px;
  border: none;
  border-radius: 20px;
  font-weight: bold;
}
.round-img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-top: 40px;
}
.btn-icons {
  cursor: pointer;
  position: absolute;
  top: 140px;
  left: 210px;
}
.input2 {
  height: 45px !important;
  border-radius: 0px !important;
  margin-bottom: 20px !important;
  border: none !important;
  border-bottom: 1px solid #d2d2d2 !important;
}
.input2:focus {
  box-shadow: 0 0 0 0.2rem rgba(163, 100, 65, 0.25);
  border-color: #7d4f2a;
}
h5 {
  color: #ababab;
  font-size: 18px;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
</style>
