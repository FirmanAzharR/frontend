<template>
  <div>
    <b-container>
      <b-form @submit.prevent="onSubmit">
        <b-row>
          <b-col xl="4" lg="4" md="4" sm="12">
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <div id="preview">
                <img v-if="url" :src="url" class="round-img" />
                <div
                  v-else-if="cobaset.coupon_img === ''"
                  class="d-flex justify-content-center"
                  style="background-color:#d2d2d2;border-radius:50%;width:170px;height:170px"
                >
                  <img
                    class="align-self-center"
                    src="../../../assets/img/camera.png"
                    alt=""
                  />
                </div>
                <img
                  v-else
                  class="round-img"
                  :src="
                    `${ENV}/api1/fileUploadsApi1/coupon/` + cobaset.coupon_img
                  "
                  alt=""
                />
              </div>
              <div>
                <b-button
                  class="btn-style"
                  style="margin-bottom:15px;margin-top:15px;background-color: #0B132A;color:white"
                  >Take a picture</b-button
                >
                <br />
                <input
                  id="fileUpload"
                  @change="handleFile"
                  type="file"
                  hidden
                />
                <button
                  @click.prevent="chooseFiles()"
                  class="btn-style"
                  style="background-color: #FFBA33;"
                >
                  Browse Image
                </button>
              </div>
              <br /><br />
            </div>
          </b-col>
          <b-col xl="8" lg="8" md="8" sm="12">
            <h6>Coupon Name</h6>
            <b-form-input
              class="input2"
              type="text"
              placeholder="Input Coupon Name"
              required=""
              v-model="cobaset.coupon_name"
            ></b-form-input>
            <h6>Coupon Information</h6>
            <b-form-input
              class="input2"
              type="text"
              placeholder="Input Coupon Information"
              required
              v-model="cobaset.coupon_information"
            ></b-form-input>
            <b-row>
              <b-col xl="6" lg="6" md="6" sm="6">
                <h6>Input coupon code</h6>
                <b-form-input
                  class="input2"
                  type="text"
                  placeholder="Add coupon code"
                  required
                  v-model="cobaset.coupon_code"
                ></b-form-input>
                <h6>Minimum purchase:</h6>
                <b-form-input
                  class="input2"
                  type="number"
                  placeholder="Minimum purchase"
                  required
                  v-model="cobaset.cupon_min"
                ></b-form-input>
                <h6>Expire date:(Start Date)</h6>
                <b-form-input
                  class="input2"
                  type="date"
                  placeholder="select start date"
                  required
                  v-model="coupon_start"
                ></b-form-input>
              </b-col>
              <b-col xl="6" lg="6" md="6" sm="6">
                <h6>Enter the discount:</h6>
                <b-form-input
                  class="input2"
                  type="text"
                  placeholder="Input coupon discount"
                  required
                  v-model="cobaset.coupon_discon"
                ></b-form-input>
                <h6>Maximal discount:</h6>
                <b-form-input
                  class="input2"
                  type="number"
                  placeholder="Maximal discount"
                  required
                  v-model="cobaset.cupon_max"
                ></b-form-input>
                <h6>End Date:</h6>
                <b-form-input
                  class="input2"
                  type="date"
                  placeholder="select end date"
                  required
                  v-model="coupon_end"
                ></b-form-input>
              </b-col>
            </b-row>
            <div
              class="d-flex justify-content-center align-items-center"
              style="margin-top:40px;margin-bottom:60px"
            >
              <b-button
                type="submit"
                class="btn-style2"
                style="background-color:#6A4029;width:250px;margin-right:20px"
                >Save</b-button
              >
              <b-button
                type="reset"
                class="btn-style2"
                style="background-color:#E7EAED;color:#7B7B7B;width:250px;margin-left:20px"
                >Cancle</b-button
              >
            </div>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'EditCoupon',
  data() {
    return {
      ENV: `${process.env.VUE_APP_PORT}`,
      url: null,
      couponId: (this.id = this.$route.params.id),
      coupon_start: '',
      coupon_end: ''
    }
  },
  created() {
    this.getCouponsById(this.couponId)
    this.subDate()
  },
  computed: {
    ...mapGetters(['getByIdCoupon', 'cobaset'])
  },
  methods: {
    ...mapActions(['getCouponsById', 'updateCoupon']),
    subDate() {
      this.coupon_start = this.cobaset.coupon_start.substr(0, 10)
      this.coupon_end = this.cobaset.coupon_end.substr(0, 10)
    },
    chooseFiles: function() {
      document.getElementById('fileUpload').click()
    },
    handleFile(e) {
      const file = (this.cobaset.coupon_img = e.target.files[0])
      this.url = URL.createObjectURL(file)
    },

    makeToast(bodyMsg, msg, variant) {
      this.$bvToast.toast(bodyMsg, {
        title: msg,
        variant: variant,
        solid: true
      })
    },
    onSubmit() {
      const data = new FormData()
      data.append('coupon_name', this.cobaset.coupon_name)
      data.append('coupon_code', this.cobaset.coupon_code)
      data.append('coupon_discon', this.cobaset.coupon_discon)
      data.append('cupon_min', this.cobaset.cupon_min)
      data.append('cupon_max', this.cobaset.cupon_max)
      data.append('coupon_start', this.cobaset.coupon_start)
      data.append('coupon_end', this.cobaset.coupon_end)
      data.append('coupon_information', this.cobaset.coupon_information)
      data.append('coupon_status', this.cobaset.coupon_status)
      data.append('coupon_img', this.cobaset.coupon_img)
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      this.updateCoupon({ data: data, id: this.couponId })
        .then(result => {
          this.makeToast(
            `Coupon ${result.data.data.coupon_name} Updated Successfully`,
            'Congratulations',
            'success'
          )
          //this.onReset()
        })
        .catch(error => {
          this.makeToast('Update Coupon Failed', error.data.msg, 'danger')
        })
    }
  }
}
</script>

<style scoped>
.round-img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
}
.btn-style {
  width: 250px;
  padding: 17px;
  font-weight: bold;
  border: none;
  border-radius: 15px;
}
.btn-style2 {
  width: auto;
  padding: 17px;
  font-weight: bold;
  border: none;
  border-radius: 15px;
}
#input {
  height: 45px;
  border-radius: 10px;
  width: 250px;
  margin-bottom: 20px;
}
.input2 {
  height: 45px !important;
  border-radius: 0px !important;
  margin-bottom: 20px !important;
  border: none !important;
  border-bottom: 1px solid #d2d2d2 !important;
}
</style>
