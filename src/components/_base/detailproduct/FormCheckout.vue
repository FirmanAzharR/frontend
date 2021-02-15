<template>
  <div>
    <b-row>
      <b-col xl="5" lg="5" md="12" sm="12">
        <div>
          <ul>
            <li>
              <a href="#">Favorite & Promo>{{ productById.product_name }}</a>
            </li>
          </ul>
        </div>
        <div class="centered" style="margin-top:25px">
          <div id="preview">
            <div
              v-if="productById.product_img === ''"
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
              :src="'http://localhost:5000/product/' + productById.product_img"
              alt=""
              style="background-color:#d2d2d2;border-radius:50%;width:170px;height:170px"
            />
          </div>
          <br />
          <div>
            <b-button
              v-if="setUser.user_role === 1"
              pill
              style="background-color:#6A4029;color:white;border:none"
              @click.prevent="handleClick"
              >Delete Product&nbsp;&nbsp;<b-icon-trash></b-icon-trash
            ></b-button>
          </div>
        </div>
      </b-col>
      <b-col xl="7" lg="7" md="12" sm="12">
        <h3 style="margin-top:60px">{{ productById.product_name }}</h3>
        <p style="text-align:justify">
          {{ productById.product_information }}
        </p>
      </b-col>
    </b-row>

    <b-row style="margin-top:50px">
      <b-col xl="5" lg="5" md="12" sm="12">
        <div class=" d-flex justify-content-center align-items-center">
          <b-card class="shadow-card card-style">
            <div style="margin-bottom:20px">Delivery and Time</div>
            <div>
              <b-button
                v-if="productById.delivery_methods.split(',').length > 0"
                @click="addDelivery('dineIn')"
                :class="
                  dineIn !== '' ? 'button-style-card2' : 'button-style-card'
                "
                >Dine in</b-button
              >
              <b-button
                v-if="productById.delivery_methods.split(',').length > 1"
                @click="addDelivery('home')"
                :class="
                  home !== '' ? 'button-style-card2' : 'button-style-card'
                "
                >Door Delivery</b-button
              >
              <b-button
                v-if="productById.delivery_methods.split(',').length > 2"
                @click="addDelivery('take')"
                :class="
                  take !== '' ? 'button-style-card2' : 'button-style-card'
                "
                >Pick up</b-button
              >
            </div>
            <div class="d-flex align-items-center" style="margin-top:15px">
              <div style="margin-right:50px">Now</div>
              <b-button
                @click="timeDelive('yes')"
                :class="yes !== '' ? 'button-style-card2' : 'button-style-card'"
                >Yes</b-button
              >
              <b-button
                @click="timeDelive('no')"
                :class="no !== '' ? 'button-style-card2' : 'button-style-card'"
                >No</b-button
              >
            </div>
            <div class="d-flex align-items-center" style="margin-top:15px">
              <div style="margin-right:30px">Set time</div>
              <input
                type="text"
                placeholder="Enter time to reservation"
                style="border:none"
                v-if="time === 'Yes'"
                disabled
                v-model="timeReservation"
              />
              <input
                type="text"
                placeholder="Enter time to reservation"
                style="border:none"
                v-else
                v-model="timeReservation"
              />
            </div>
          </b-card>
        </div>
      </b-col>
      <b-col xl="7" lg="7" md="12" sm="12">
        <div>
          <b-row>
            <b-col xl="2" lg="2" md="12" sm="12"></b-col>
            <b-col xl="4" lg="4" md="12" sm="12">
              <b-input-group>
                <b-input-group-prepend>
                  <b-button style="background-color:#6A4029" @click="qtyMin()"
                    >-</b-button
                  >
                </b-input-group-prepend>

                <b-form-input
                  style="text-align:center"
                  type="number"
                  min="0.00"
                  v-model="qty"
                  readonly
                ></b-form-input>

                <b-input-group-append>
                  <b-button style="background-color:#6A4029" @click="qtyPlus()"
                    >+</b-button
                  >
                </b-input-group-append>
              </b-input-group>
              <div>Normal price Rp. {{ normalPrice }}</div>
              <div>
                Discount {{ productById.product_discon }}% (Rp. {{ disc }})
              </div>
            </b-col>
            <b-col xl="4" lg="4" md="12" sm="12">
              <h5 style="text-align:right">Rp. {{ productPrice }}</h5>
            </b-col>
            <b-col xl="2" lg="2" md="12" sm="12"></b-col>
          </b-row>
          <br />
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <b-button
              class="button-style"
              style="background-color:#6A4029"
              @click="addCart()"
              >Add to Cart</b-button
            ><br />
            <router-link
              v-if="setUser.user_role === 1"
              class="button-style"
              style="background-color:#FFBA33;color:#6A4029;text-align:center"
              :to="{
                name: 'EditProduct',
                params: { id: productId }
              }"
            >
              Edit Product
            </router-link>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row style="margin-top:30px;margin-bottom:30px">
      <b-col xl="5" lg="5" md="12" sm="12">
        <div class=" d-flex justify-content-center align-items-center">
          <b-card
            class="shadow-card card-style d-flex justify-content-center align-items-center"
            style="padding:10px"
          >
            <div style="text-align:center;margin-bottom:10px">
              Choose a size
            </div>
            <div class="d-flex justify-content-center">
              <b-button
                v-if="productById.product_size.split(',').length > 0"
                :class="R !== '' ? 'style-sizeClick' : 'style-size'"
                @click="addSize('R', 1)"
                >R</b-button
              >
              <b-button
                v-if="productById.product_size.split(',').length > 1"
                :class="L !== '' ? 'style-sizeClick' : 'style-size'"
                @click="addSize('L', 2)"
                >L</b-button
              >
              <b-button
                v-if="productById.product_size.split(',').length > 2"
                :class="XL !== '' ? 'style-sizeClick' : 'style-size'"
                @click="addSize('XL', 3)"
                >XL</b-button
              >
            </div>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <b-card class="shadow-card card-style" style="width:auto">
          <b-row>
            <b-col cols="2">
              <div class="d-flex justify-content-center align-items-center">
                <img
                  style="border-radius:50%;width:90px"
                  :src="
                    'http://localhost:5000/product/' + productById.product_img
                  "
                  alt=""
                />
              </div>
            </b-col>
            <b-col cols="5">
              <ul
                v-for="(item, index) in cartProduct"
                :key="index"
                style="line-height:20px"
              >
                <li>{{ item.product_name }}</li>
                <li>{{ item.size }} ({{ item.quantity }}x)</li>
                <li>Rp. {{ item.price }}</li>
              </ul>
            </b-col>
            <b-col
              cols="5"
              class="d-flex justify-content-center align-items-center"
            >
              <h6 style="margin-right:20px;font-size:20px;font-weight:bold">
                Checkout
              </h6>
              <router-link to="/yourcart" class="link">
                <b-button class="style-size"
                  ><b-icon icon="arrow-right"></b-icon
                ></b-button>
              </router-link>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
//import axios from 'axios'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'FormDetailProduct',
  data() {
    return {
      home: '',
      dineIn: '',
      take: '',
      yes: '',
      no: '',
      R: '',
      L: '',
      XL: '',
      sizeName: '',
      deliveryName: '',
      time: '',
      timeReservation: '',
      productId: (this.id = this.$route.params.id),
      cartProduct: [],
      qty: 0,
      productPrice: 0,
      disc: 0,
      normalPrice: 0
    }
  },
  mounted() {
    //this.getProductById(this.productId)
  },
  created() {
    this.getProductById(this.productId)
  },
  computed: {
    ...mapGetters({
      productById: 'getProductById',
      setUser: 'setUser'
    })
  },
  methods: {
    ...mapActions(['deleteProducts', 'getProductById']),
    ...mapMutations(['cart']),
    handleClick() {
      this.$confirm({
        message: `Are you sure delete ${this.productById.product_name}?`,
        button: {
          no: 'No',
          yes: 'Yes'
        },
        callback: confirm => {
          if (confirm) {
            this.onDelete()
          }
        }
      })
    },
    addCart() {
      if (this.deliveryName === '') {
        this.makeToast(
          'Choose Delivery Methods',
          'Delivery method input empty',
          'warning'
        )
      } else if (this.time === '') {
        this.makeToast('Complete input', 'Time input empty', 'warning')
      } else if (this.sizeName === '') {
        this.makeToast('Choose Size', 'Size empty', 'warning')
      } else if (this.qty === 0) {
        this.makeToast('Add Quantity', 'Minimum 1', 'warning')
      } else {
        const data = {
          product_id: this.productById.product_id,
          product_name: this.productById.product_name,
          product_img: this.productById.product_img,
          size: this.sizeName,
          quantity: this.qty,
          price: this.productPrice,
          delivery: this.deliveryName,
          timeNow: this.time,
          timRes: this.timeReservation
        }
        this.cartProduct.push(data)
        this.cart(data)
      }
    },
    addDelivery(value) {
      if ((this.home === '') & (value === 'home')) {
        this.home = 1
        this.take = ''
        this.dineIn = ''
        this.deliveryName = 'Door Delivery'
      } else if ((this.home !== '') & (value === 'home')) {
        this.home = ''
        this.deliveryName = ''
      } else if ((this.take === '') & (value === 'take')) {
        this.take = 1
        this.home = ''
        this.dineIn = ''
        this.deliveryName = 'Pick Up'
      } else if ((this.take !== '') & (value === 'take')) {
        this.take = ''
        this.deliveryName = ''
      } else if ((this.dineIn === '') & (value === 'dineIn')) {
        this.dineIn = 1
        this.take = ''
        this.home = ''
        this.deliveryName = 'Dine In'
      } else if ((this.dineIn !== '') & (value === 'dineIn')) {
        this.dineIn = ''
        this.deliveryName = ''
      }
    },
    reset() {
      this.qty = 0
      this.productPrice = 0
    },
    addSize(name, value) {
      if ((name === 'R') & (this.R === '')) {
        ;(this.R = value), (this.L = ''), (this.XL = '')
        this.sizeName = 'R'
        this.reset()
      } else if ((name === 'R') & (this.R !== '')) {
        this.R = ''
        this.reset()
      } else if ((name === 'L') & (this.L === '')) {
        this.L = value
        this.sizeName = 'L'
        ;(this.R = ''), (this.XL = '')
        this.reset()
      } else if ((name === 'L') & (this.L !== '')) {
        this.L = ''
        this.reset()
      } else if ((name === 'XL') & (this.XL === '')) {
        this.XL = value
        this.sizeName = 'XL'
        ;(this.R = ''), (this.L = '')
        this.reset()
      } else if ((name === 'XL') & (this.XL !== '')) {
        this.XL = ''
        this.reset()
      }
    },
    timeDelive(value) {
      if ((this.yes === '') & (value === 'yes')) {
        this.yes = 1
        this.no = ''
        this.time = 'Yes'
      } else if ((this.yes !== '') & (value === 'yes')) {
        this.yes = ''
      } else if ((this.no === '') & (value === 'no')) {
        this.no = 1
        this.yes = ''
        this.time = 'No'
      } else if ((this.no !== '') & (value === 'no')) {
        this.no = ''
      }
    },
    qtyPlus() {
      if ((this.R === '') & (this.L === '') & (this.XL === '')) {
        this.makeToast(
          'Choose size',
          'Choose size before add quantity',
          'warning'
        )
      } else {
        this.qty = this.qty + 1

        if (this.R !== '') {
          this.productPrice = this.productById.product_price * this.qty
        } else if (this.L !== '') {
          this.productPrice = (this.productById.product_price + 3500) * this.qty
        } else {
          this.productPrice = (this.productById.product_price + 7000) * this.qty
        }
      }
      this.disc =
        ((this.productById.product_price * this.productById.product_discon) /
          100) *
        this.qty
      this.productPrice = this.productPrice - this.disc
      this.normalPrice = this.productPrice + this.disc
    },
    qtyMin() {
      this.qty = this.qty - 1
      if (this.qty <= 0) {
        this.reset()
      }
      if ((this.R === '') & (this.L === '') & (this.XL === '')) {
        this.makeToast(
          'Minimum size',
          'Choose size before change quantity',
          'warning'
        )
      } else {
        if (this.R !== '') {
          this.productPrice = this.productById.product_price * this.qty
        } else if (this.L !== '') {
          this.productPrice = (this.productById.product_price + 3500) * this.qty
        } else {
          this.productPrice = (this.productById.product_price + 7000) * this.qty
        }
      }
      this.disc =
        ((this.productById.product_price * this.productById.product_discon) /
          100) *
        this.qty
      this.productPrice = this.productPrice - this.disc
      this.normalPrice = this.productPrice + this.disc
    },
    makeToast(bodyMsg, msg, variant) {
      this.$bvToast.toast(bodyMsg, {
        title: msg,
        variant: variant,
        solid: true
      })
    },
    onDelete() {
      this.deleteProducts(this.productId)
        .then(result => {
          this.makeToast(
            'Product Delete',
            `Your Product ${result.data.data.product_name} Deleted successfully`,
            'success'
          )
          setTimeout(() => {
            this.$router.push('/product')
          }, 1500)
        })
        .catch(error => {
          console.log(error.msg)
          this.makeToast('Delete Product Failed', 'Failed', 'danger')
        })
    }
  }
}
</script>

<style scoped>
.card-style {
  border: none;
  border-radius: 15px;
  width: 400px;
}
.style-size {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: #ffba33;
  font-weight: bold;
  color: #6a4029;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
.style-sizeClick {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: #6a4029;
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
.button-style {
  border-radius: 15px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  padding: 20px;
  max-width: 70%;
  width: 70%;
}
.button-style-card {
  border-radius: 15px;
  border: none;
  font-weight: bold;
  margin-right: 10px;
  background-color: #f1f3f4;
  color: #cccccc;
}
.button-style-card2 {
  border-radius: 15px;
  border: none;
  font-weight: bold;
  margin-right: 10px;
  background-color: #6a4029;
  color: white;
}
.button-style-card:hover {
  border-radius: 15px;
  border: none;
  font-weight: bold;
  margin-right: 10px;
  background-color: #6a4029;
  color: white;
  -webkit-box-shadow: 1px 3px 12px 2px #2e2d2d54;
  box-shadow: 1px 3px 10px 0px #2e2d2d54;
}

.shadow-card {
  -webkit-box-shadow: 1px 3px 10px 0px #2e2d2d54;
  -moz-box-shadow: 1px 3px 10px 0px #2e2d2d54;
  box-shadow: 1px 3px 10px 0px #2e2d2d54;
}
</style>
