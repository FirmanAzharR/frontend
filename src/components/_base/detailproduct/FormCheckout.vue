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
              pill
              style="background-color:#6A4029;color:white;"
              @click.prevent="onDelete"
              >Delete This Product<b-icon-trash></b-icon-trash
            ></b-button>
          </div>
        </div>
      </b-col>
      <b-col xl="7" lg="7" md="12" sm="12">
        <h3 style="margin-top:60px">{{ productById.product_name }}</h3>
        <p>
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
              <b-button class="button-style-card">Dine in</b-button>
              <b-button class="button-style-card">Door Delivery</b-button>
              <b-button class="button-style-card">Pick up</b-button>
            </div>
            <div class="d-flex align-items-center" style="margin-top:15px">
              <div style="margin-right:50px">Now</div>
              <b-button class="button-style-card">Yes</b-button>
              <b-button class="button-style-card">No</b-button>
            </div>
            <div class="d-flex align-items-center" style="margin-top:15px">
              <div style="margin-right:30px">Set time</div>
              <input
                type="text"
                placeholder="Enter time to reservation"
                style="border:none"
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
                  type="number"
                  min="0.00"
                  v-model="qty"
                ></b-form-input>

                <b-input-group-append>
                  <b-button style="background-color:#6A4029" @click="qtyPlus()"
                    >+</b-button
                  >
                </b-input-group-append>
              </b-input-group>
            </b-col>
            <b-col xl="4" lg="4" md="12" sm="12"
              ><h5 style="text-align:right">{{ productPrice }}</h5></b-col
            >
            <b-col xl="2" lg="2" md="12" sm="12"></b-col>
          </b-row>
          <br />
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <b-button
              class="button-style"
              style="background-color:#6A4029"
              @click="addToCart()"
              >Add to Cart</b-button
            ><br />
            <router-link
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
              <b-form-radio
                v-model="size"
                v-for="(item, index) in detailProduct"
                :key="index"
                name="some-radios"
                :value="{ id_size: item.size_id, price: item.product_price }"
                ><b-button class="style-size">{{ item.size_name }}</b-button
                >{{ size }}</b-form-radio
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
                  src="../../../assets/img/coldbrew.png"
                  alt=""
                />
              </div>
            </b-col>
            <b-col cols="5">
              <ul>
                {{
                  getCarts
                }}
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
      size: '',
      products: [],
      productId: (this.id = this.$route.params.id),
      //checkout: [],
      qty: 0,
      productPrice: 0
    }
  },
  created() {
    this.getProductById(this.productId)
    this.getProductDetail(this.productId)
  },
  computed: {
    ...mapGetters({
      productById: 'getProductById',
      detailProduct: 'getProductDetail',
      getCarts: 'getCart'
    })
  },
  methods: {
    ...mapActions(['deleteProducts', 'getProductById', 'getProductDetail']),
    ...mapMutations(['cart']),
    qtyPlus() {
      this.qty = this.qty + 1
      this.productPrice = this.qty * this.size.price
    },
    qtyMin() {
      this.qty = this.qty - 1
      this.productPrice = this.qty * this.size.price
      if (this.qty <= 0) {
        this.qty = 0
        this.productPrice = 0
      }
    },
    addToCart() {
      const setCart = {
        product_id: this.productId,
        product_name: this.productById.product_name,
        id_size: this.size.id_size,
        product_price: this.size.price,
        product_qty: this.qty,
        product_total: this.productPrice
      }
      this.cart(setCart)
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
