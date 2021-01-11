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
                  v-else-if="form.coupon_img === ''"
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
                  :src="'http://localhost:5000/coupon/' + form.coupon_img"
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
            </div>
          </b-col>
          <b-col xl="8" lg="8" md="8" sm="12">
            <h6>Coupon Name</h6>
            <b-form-input
              class="input2"
              type="text"
              placeholder="Input Coupon Name"
              required=""
              v-model="form.coupon_name"
            ></b-form-input>
            <h6>Coupon Information</h6>
            <b-form-input
              class="input2"
              type="text"
              placeholder="Input Coupon Information"
              required
              v-model="form.coupon_information"
            ></b-form-input>
            <b-row>
              <b-col xl="6" lg="6" md="6" sm="6">
                <h6>Input coupon code</h6>
                <b-form-input
                  class="input2"
                  type="text"
                  placeholder="Add coupon code"
                  required
                  v-model="form.coupon_code"
                ></b-form-input>
                <h6>Minimum purchase:</h6>
                <b-form-input
                  class="input2"
                  type="number"
                  placeholder="Minimum purchase"
                  required
                  v-model="form.cupon_min"
                ></b-form-input>
                <h6>Expire date:(Start Date)</h6>
                <b-form-input
                  class="input2"
                  type="date"
                  placeholder="select start date"
                  required
                  v-model="form.coupon_start"
                ></b-form-input>
              </b-col>
              <b-col xl="6" lg="6" md="6" sm="6">
                <h6>Enter the discount:</h6>
                <b-form-input
                  class="input2"
                  type="text"
                  placeholder="Input coupon discount"
                  required
                  v-model="form.coupon_discon"
                ></b-form-input>
                <h6>Maximal discount:</h6>
                <b-form-input
                  class="input2"
                  type="number"
                  placeholder="Maximal discount"
                  required
                  v-model="form.cupon_max"
                ></b-form-input>
                <h6>End Date:</h6>
                <b-form-input
                  class="input2"
                  type="date"
                  placeholder="select end date"
                  required
                  v-model="form.coupon_end"
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
      {{ form.coupon_start }}
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'EditCoupon',
  data() {
    return {
      url: null,
      couponId: (this.id = this.$route.params.id),
      form: {
        coupon_name: '',
        coupon_code: '',
        coupon_discon: '',
        cupon_min: '',
        cupon_max: '',
        coupon_start: '',
        coupon_end: '',
        coupon_information: '',
        coupon_status: 1,
        coupon_img: ''
      }
    }
  },
  created() {
    this.getCouponsById(this.couponId)
    this.setData()
  },
  computed: {
    ...mapGetters(['getByIdCoupon'])
  },
  methods: {
    ...mapActions(['getCouponsById']),
    chooseFiles: function() {
      document.getElementById('fileUpload').click()
    },
    handleFile(e) {
      const file = (this.form.coupon_img = e.target.files[0])
      this.url = URL.createObjectURL(file)
    },
    setData() {
      ;(this.form.coupon_name = this.getByIdCoupon.coupon_name),
        (this.form.coupon_code = this.getByIdCoupon.coupon_code),
        (this.form.coupon_discon = this.getByIdCoupon.coupon_discon),
        (this.form.cupon_min = this.getByIdCoupon.cupon_min),
        (this.form.cupon_max = this.getByIdCoupon.cupon_max),
        (this.form.coupon_start = this.getByIdCoupon.coupon_start),
        (this.form.coupon_end = this.getByIdCoupon.coupon_end),
        (this.form.coupon_information = this.getByIdCoupon.coupon_information),
        (this.form.coupon_status = this.getByIdCoupon.coupon_status),
        (this.form.coupon_img = this.getByIdCoupon.coupon_img)
    },
    makeToast(bodyMsg, msg, variant) {
      this.$bvToast.toast(bodyMsg, {
        title: msg,
        variant: variant,
        solid: true
      })
    },
    onSubmit() {
      const {
        coupon_name,
        coupon_code,
        coupon_discon,
        cupon_min,
        cupon_max,
        coupon_start,
        coupon_end,
        coupon_information,
        coupon_status,
        coupon_img
      } = this.form
      const data = new FormData()
      data.append('coupon_name', coupon_name)
      data.append('coupon_code', coupon_code)
      data.append('coupon_discon', coupon_discon)
      data.append('cupon_min', cupon_min)
      data.append('cupon_max', cupon_max)
      data.append('coupon_start', coupon_start)
      data.append('coupon_end', coupon_end)
      data.append('coupon_information', coupon_information)
      data.append('coupon_status', coupon_status)
      data.append('coupon_img', coupon_img)

      // for (var pair of data.entries()) {
      //   console.log(pair[0] + ', ' + pair[1])
      // }
      this.addCoupon(data)
        .then(result => {
          this.makeToast(
            `Coupon ${result.data.data.coupon_name} Inserted Successfully`,
            'Congratulations',
            'success'
          )
          //this.onReset()
        })
        .catch(error => {
          this.makeToast('Insert Coupon Failed', error, 'danger')
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
