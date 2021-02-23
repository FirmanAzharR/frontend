<template>
  <div>
    <Navbar />
    <div class="bg">
      <b-container class="animate__animated animate__fadeIn">
        <h2
          style="padding-top:60px;margin-bottom:60px; color:white;font-weight:700;max-width:370px"
          class="rubik shadow-text"
        >
          Finish your customer order now!
        </h2>
        <b-row>
          <b-col sm="12" md="6" lg="6" xl="6">
            <div class="rubik margin-btm" style="max-width:450px;">
              <b-card>
                <h3 class="sub-title">{{ getOrdersData.user_name }}</h3>
                <div class="list-group">
                  <div
                    style="margin-right:10px"
                    class="items"
                    v-for="(item, index) in getByIdHistory"
                    :key="index"
                  >
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
                  <h5>IDR {{ getOrdersData.sub_total }}</h5>
                </div>
                <div class="items">
                  <h5>TAX & FEES</h5>
                  <h5>IDR {{ getOrdersData.tax }}</h5>
                </div>
                <div class="items">
                  <h5>DISCOUNT</h5>
                  <h5>IDR {{ getOrdersData.discount }}</h5>
                </div>
                <div class="items">
                  <h4>TOTAL</h4>
                  <h4>IDR {{ getOrdersData.total }}</h4>
                </div>
                <label style="color:#7D4F2A" v-if="getOrdersData.discount !== 0"
                  >*Use coupon</label
                >
                <label style="color:#7D4F2A" v-else hidden>*Use coupon</label>
              </b-card>
              <br />
              <b-card style="border-radius:15px">
                <div class="page-info">
                  <h6>Page : {{ getPageOrder }}</h6>
                  <h6>Total Order : {{ getTotal }}</h6>
                </div>
                <div v-if="statusPage === 1">
                  <h6>*First page</h6>
                </div>
                <div v-if="statusPage === 2">
                  <h6>*Last page</h6>
                </div>
              </b-card>
              <br />
              <div class="d-flex justify-content-center">
                <b-button class="btn-navigation" @click="prevOrder"
                  ><b-icon icon="arrow-left"></b-icon>see previous
                  orders</b-button
                >
                <b-button class="btn-navigation" @click="nextOrder"
                  >see upcoming orders<b-icon icon="arrow-right"></b-icon
                ></b-button>
              </div>
            </div>
          </b-col>

          <b-col sm="12" md="6" lg="6" xl="6">
            <div class="rubik" style="max-width:450px">
              <h6 style="color:white" class="shadow-text">Address details</h6>
              <b-card>
                <hr />
                <b-card-text>
                  <b>Delivery</b> to {{ getOrdersData.user_address }}
                </b-card-text>
                <hr />
                <b-card-text>
                  <b>Phone</b> {{ getOrdersData.user_phone }}
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
              v-if="getOrdersData.status_confirm !== 0 || clickStatus !== 0"
              class="btn-style-done rubik btn-style-large"
              variant="success"
              >Done</b-button
            >
            <b-button
              v-else
              class="btn-style rubik btn-style-large"
              variant="warning"
              @click="confirmOrder"
              >Mark as done</b-button
            >
            <b-button
              block
              class="btn-style rubik btn-style-small"
              variant="warning"
              >Mark as done</b-button
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
  name: 'ConfirmOrder',
  components: {
    Footer,
    Navbar
  },
  data() {
    return {
      ENV: `${process.env.VUE_APP_PORT}`,
      clickStatus: 0,
      selected: '',
      res: '',
      form: {
        id: ''
      },
      statusPage: 0
    }
  },
  beforeCreate() {},
  created() {
    this.getOrders().then(result => {
      this.res = result
      this.getHistoryById(this.getOrdersData.transaction_id)
      this.selected = this.getOrdersData.payment
      this.form.id = this.getOrdersData.transaction_id
    })
  },
  computed: {
    ...mapGetters([
      'getOrdersData',
      'getByIdHistory',
      'getPageOrder',
      'getLimit',
      'getTotal'
    ])
  },
  methods: {
    ...mapActions(['getOrders', 'getHistoryById', 'markDone']),
    ...mapMutations(['setCart', 'handleNavigationConfirm']),
    confirmOrder() {
      this.markDone(this.form)
        .then(result => {
          this.res = result
          this.clickStatus = 1
        })
        .catch(error => {
          this.res = error
          this.makeToast('Failed', 'Confirm Order Failed', 'danger')
        })
    },
    nextOrder() {
      const next = this.getPageOrder + 1
      this.clickStatus = 0
      if (next > this.getTotal) {
        this.statusPage = 2
      } else {
        this.handleNavigationConfirm(next)
        this.getOrders().then(result => {
          this.form.id = this.getOrdersData.transaction_id
          this.getHistoryById(this.getOrdersData.transaction_id).then(
            result => {
              this.selected = this.getOrdersData.payment
              this.res = result
            }
          )
          this.res = result
        })
      }
    },
    prevOrder() {
      this.clickStatus = 0
      const next = this.getPageOrder - 1
      if (next < 1) {
        this.statusPage = 1
      } else {
        this.handleNavigationConfirm(next)
        this.getOrders().then(result => {
          this.form.id = this.getOrdersData.transaction_id
          this.getHistoryById(this.getOrdersData.transaction_id).then(
            result => {
              this.selected = this.getOrdersData.payment
              this.res = result
            }
          )
          this.res = result
        })
      }
    }
  }
}
</script>

<style scoped>
.page-info {
  display: flex;
  justify-content: space-between;
}
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
  margin-bottom: 50px;
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
  background-color: #7d4f2a;
  border-radius: 15px;
  color: white;
  font-weight: 600;
  border: none;
  font-weight: 700;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-top: 40px;
}
.btn-style-done {
  padding: 10px;
  background-color: #28a745;
  border-radius: 15px;
  color: white;
  font-weight: 600;
  border: none;
  font-weight: 700;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-top: 40px;
}
.btn-navigation {
  padding: 10px;
  background-color: #ffba33;
  border-radius: 15px;
  color: #7d4f2a;
  font-weight: 600;
  border: none;
  font-weight: 700;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-left: 10px;
  margin-right: 10px;
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
