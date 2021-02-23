<template>
  <div>
    <Navbar />
    <div class="bg">
      <div>
        <b-sidebar
          id="sidebar-right"
          title="Coupon List"
          right
          shadow
          width="400px"
        >
          <div class="px-4 py-2">
            <div class="font1" v-for="(item, index) in getCoupons" :key="index">
              <b-card id="card-style">
                <div class="d-flex align-items-center">
                  <img
                    :src="
                      item.coupon_img === ''
                        ? require('../assets/img/aside-icon2.png')
                        : `${ENV}/fileUploadsApi1/coupon/` + item.coupon_img
                    "
                    alt="img"
                    class="img"
                  />
                  <div class="flex-direction-row">
                    <h6>{{ item.coupon_name }} {{ item.coupon_discon }}%</h6>
                    <h6>{{ item.coupon_information }}</h6>
                  </div>
                </div>
                <b-button
                  style="border-radius:20px;background-color:#8E4F2A;color:white;margin-top:10px"
                  block
                  variant="warning"
                  @click="
                    useCoupon(
                      item.coupon_discon,
                      item.cupon_min,
                      item.cupon_max
                    )
                  "
                  >Use coupon</b-button
                >
              </b-card>
            </div>
          </div>
        </b-sidebar>
      </div>
      <b-container class="animate__animated animate__fadeIn">
        <h2
          style="padding-top:60px;margin-bottom:60px; color:white;font-weight:700;max-width:250px"
          class="rubik shadow-text"
        >
          Checkout your item now!
        </h2>
        <b-row>
          <b-col sm="12" md="6" lg="6" xl="6">
            <div class="rubik margin-btm" style="max-width:450px;">
              <b-card>
                <h3 class="sub-title">Order Summary</h3>
                <div class="list-group">
                  <div
                    style="margin-right:10px"
                    class="items"
                    v-for="(item, index) in getCart"
                    :key="index"
                  >
                    <h4 style="cursor:pointer" @click="removeCart(index)">-</h4>
                    <img
                      class="order-img"
                      :src="
                        `${ENV}/fileUploadsApi1/product/` + item.product_img
                      "
                      alt=""
                    />
                    <div class="sm-font">
                      <ul style="line-height:20px">
                        <li>{{ item.product_name }}</li>
                        <li>x {{ item.quantity }}</li>
                        <li v-if="item.size === 'R'">Regular</li>
                        <li v-else-if="item.size === 'L'">Large</li>
                        <li v-else>Extra Large</li>
                      </ul>
                    </div>
                    <div class="sm-font">IDR {{ item.price }}</div>
                  </div>
                </div>
                <hr />
                <div class="items">
                  <h5>SUBTOTAL</h5>
                  <h5>IDR {{ subTotal }}</h5>
                </div>
                <div class="items">
                  <h5>TAX & FEES</h5>
                  <h5>IDR {{ tax }}</h5>
                </div>
                <div class="items">
                  <h5>DISCOUNT</h5>
                  <h5>IDR {{ disc }}</h5>
                </div>
                <div class="items">
                  <h4>TOTAL</h4>
                  <h4>IDR {{ totalPayment }}</h4>
                </div>
                <label style="color:#7D4F2A" v-if="disc !== 0"
                  >*Use coupon</label
                >
                <label style="color:#7D4F2A" v-else hidden>*Use coupon</label>
              </b-card>
              <b-button
                block
                v-b-toggle.sidebar-right
                class="btn-style rubik"
                variant="warning"
                >Add Coupon</b-button
              >
            </div>
          </b-col>

          <b-col sm="12" md="6" lg="6" xl="6">
            <div class="rubik" style="max-width:450px">
              <h6 style="color:white" class="shadow-text">Address details</h6>
              <b-card>
                <hr />
                <b-card-text>
                  <b>Delivery</b> to {{ getProfile.user_address }}
                </b-card-text>
                <hr />
                <b-card-text>
                  <b>Phone</b> {{ getProfile.user_phone }}
                </b-card-text>
              </b-card>
            </div>
            <br />
            <div class="rubik" style="max-width:450px">
              <h6 style="color:white" class="shadow-text">Payment method</h6>
              <b-card>
                <b-card-text class="pay-konten">
                  <b-form-radio
                    v-model="selected"
                    name="pay"
                    value="Card"
                  ></b-form-radio>
                  <b-iconstack font-scale="3">
                    <b-icon
                      stacked
                      icon="square-fill"
                      style="color:#F47B0A"
                    ></b-icon>
                    <b-icon
                      stacked
                      icon="credit-card-fill"
                      scale="0.5"
                      variant="white"
                    ></b-icon>
                  </b-iconstack>
                  <label>Card</label>
                </b-card-text>
                <hr />
                <b-card-text class="pay-konten">
                  <b-form-radio
                    v-model="selected"
                    name="pay"
                    value="Bank account"
                  ></b-form-radio>
                  <b-iconstack font-scale="3">
                    <b-icon
                      stacked
                      icon="square-fill"
                      style="color:#895537"
                    ></b-icon>
                    <b-icon
                      stacked
                      icon="briefcase-fill"
                      scale="0.5"
                      variant="white"
                    ></b-icon>
                  </b-iconstack>
                  <label>Bank account</label>
                </b-card-text>
                <hr />
                <b-card-text class="pay-konten">
                  <b-form-radio
                    v-model="selected"
                    name="pay"
                    value="Cash on delivery"
                  ></b-form-radio>
                  <b-iconstack font-scale="3">
                    <b-icon
                      stacked
                      icon="square-fill"
                      style="color:#FFBA33;"
                    ></b-icon>
                    <b-icon
                      stacked
                      icon="truck"
                      scale="0.5"
                      variant="white"
                    ></b-icon>
                  </b-iconstack>
                  <label>Cash on delivery</label>
                </b-card-text>
              </b-card>
            </div>
            <b-button
              class="btn-style rubik btn-style-large"
              variant="warning"
              @click="handleClick"
              >Confirm and Pay</b-button
            >
            <b-button
              block
              class="btn-style rubik btn-style-small"
              variant="warning"
              @click="handleClick"
              >Confirm and Pay</b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/_base/Footer'
import Navbar from '../components/_base/Navbar'
import alertkMixin from '../mixins/alertMixin'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  mixins: [alertkMixin],
  name: 'YourCart',
  components: {
    Footer,
    Navbar
  },
  data() {
    return {
      ENV: `${process.env.VUE_APP_PORT}`,
      invoice: '',
      selected: '',
      carts: [],
      subTotal: '',
      tax: 10000,
      disc: 0,
      totalPayment: 0
    }
  },
  created() {
    this.getCoupon()
    this.sumSubtotal()
    this.totalPay()
    this.getProfiles(this.setUser.user_id)
  },
  computed: {
    ...mapGetters(['getCart', 'getCoupons', 'getProfile', 'setUser'])
  },
  methods: {
    ...mapActions([
      'getCoupon',
      'getProfiles',
      'addTransaction',
      'addDetailTransaction'
    ]),
    ...mapMutations(['setCart']),
    handleClick() {
      this.$confirm({
        message: `Confirm payment order ?`,
        button: {
          no: 'No',
          yes: 'Yes'
        },
        callback: confirm => {
          if (confirm) {
            this.postTransaction()
          }
        }
      })
    },
    makeTransId(length) {
      let result = ''
      let characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let charactersLength = characters.length
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        )
      }
      this.invoice = result
    },
    postTransaction() {
      if (this.getCart.length <= 0) {
        this.makeToast(
          'Your cart empty',
          'Choose the product you want ',
          'warning'
        )
      } else if (this.selected === '') {
        this.makeToast('Payment method ', 'Choose payment method', 'warning')
      } else {
        this.makeTransId(5)
        const setData = {
          customer_id: this.setUser.user_id,
          transaction_number: this.invoice,
          address: this.getProfile.user_address,
          payment: this.selected,
          sub_total: this.subTotal,
          tax: this.tax,
          discount: this.disc,
          total: this.totalPayment
        }
        this.addTransaction(setData)
          .then(result => {
            this.addDetailTransaction(this.getCart)
              .then(res => {
                this.setCart([])
                this.selected = ''
                this.subTotal = 0
                this.disc = 0
                this.totalPayment = 0
                this.makeToast(
                  `${res.data.msg}`,
                  `${result.data.msg}`,
                  'success'
                )
              })
              .catch(err => {
                this.makeToast(`${err.data.msg}`, 'Checkout Failed', 'danger')
              })
          })
          .catch(error => {
            this.makeToast(`${error.data.msg}`, 'Checkout Failed', 'danger')
          })
      }
    },
    totalPay() {
      this.totalPayment = this.subTotal + this.tax - this.disc
    },
    useCoupon(discon, min, max) {
      if (this.subTotal >= min) {
        this.disc = (this.subTotal * discon) / 100
        if (this.disc > max) {
          this.disc = max
        }
        this.totalPay()
      } else {
        this.makeToast('Failed use coupon', `Minimum IDR ${min}`, 'warning')
      }
    },
    sumSubtotal() {
      if (this.getCart.length > 0) {
        let jumlah = 0
        this.getCart.forEach(item => {
          jumlah = jumlah + item.price
        })
        this.subTotal = jumlah
      } else {
        this.subTotal = 0
      }
    },
    removeCart(index) {
      if (index > -1) {
        this.getCart.splice(index, 1)
        this.sumSubtotal()
        this.totalPay()
        this.setCart(this.getCart)
      }
    }
  }
}
</script>

<style scoped>
.order-img {
  object-fit: cover;
  border-radius: 15px;
  width: 80px;
  height: 90px;
}
.margin-btm {
  margin-bottom: 150px;
}
.btn-style-large {
  width: 450px;
  max-width: 450px;
}
.add-coupon {
  width: 450px;
  max-width: 450px;
}
.pay-konten {
  display: flex;
  justify-content: left;
  align-items: center;
  align-self: baseline;
  max-width: 250px;
}
.pay-konten label {
  margin-left: 10px;
  font-weight: 500;
}
.list-group {
  max-height: 330px;
  margin-bottom: 10px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.list-group::-webkit-scrollbar {
  width: 3px; /* width of the entire scrollbar */
}

.list-group::-webkit-scrollbar-track {
  background: white; /* color of the tracking area */
}

.list-group::-webkit-scrollbar-thumb {
  background-color: rgba(78, 49, 44, 0.274); /* color of the scroll thumb */
  border-radius: 50px; /* roundness of the scroll thumb */
  border: none; /* creates padding around scroll thumb */
}
.items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.items h5 {
  font-size: 17px;
  color: #4f3d32;
}
.items h4 {
  font-weight: 600;
  color: #4f3d32;
}
.bg {
  /* The image used */
  background-image: url('../assets/img/bg-cart.png');

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
.shadow-text {
  text-shadow: 3px 3px 3px #313131;
}
.btn-style {
  padding: 10px;
  background-color: #ffba33;
  border-radius: 15px;
  color: #7d4f2a;
  font-weight: 600;
  border: none;
  font-weight: 700;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-top: 40px;
}

.card {
  border-radius: 20px;
  padding: 0 20px;
}

.sub-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 60px;
  text-align: center;
  color: #4d3a30;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');

@media only screen and (max-width: 600px) {
  .sm-font {
    font-size: 13px;
  }
  .order-img {
    border-radius: 15px;
    width: 60px;
    height: 70px;
  }
  .add-coupon {
    width: 330px;
  }
  .btn-style {
    margin-top: 10px;
  }
  .margin-btm {
    margin-bottom: 50px;
  }
  .btn-style-large {
    display: none;
  }
  .btn-style-small {
    margin-bottom: 40px;
  }
}

@media only screen and (min-width: 600px) {
  .btn-style-small {
    display: none;
  }
}
</style>
