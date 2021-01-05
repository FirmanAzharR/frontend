<template>
  <div>
    <b-row>
      <b-col xl="5" lg="5" md="12" sm="12">
        <div>
          <ul>
            <li>
              <a href="#">Favorite & Promo ></a>{{ products[0].product_name }}
            </li>
          </ul>
        </div>
        <div class="centered" style="margin-top:25px">
          <img
            src="../../../assets/img/coldbrew.png"
            style="border-radius:50%; width:200px"
          />
        </div>
      </b-col>
      <b-col xl="7" lg="7" md="12" sm="12">
        <h3 style="margin-top:60px">{{ products[0].product_name }}</h3>
        <p>
          {{ products[0].product_information }}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nam
          id deserunt voluptatibus laudantium voluptatem vitae enim. Aspernatur
          exercitationem eius fuga hic labore placeat sapiente quis
          reprehenderit laboriosam eaque? Laboriosam.
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
                  <b-button style="background-color:#6A4029">-</b-button>
                </b-input-group-prepend>

                <b-form-input type="number" min="0.00"></b-form-input>

                <b-input-group-append>
                  <b-button style="background-color:#6A4029">+</b-button>
                </b-input-group-append>
              </b-input-group>
            </b-col>
            <b-col xl="4" lg="4" md="12" sm="12"
              ><h5 style="text-align:right">Price</h5></b-col
            >
            <b-col xl="2" lg="2" md="12" sm="12"></b-col>
          </b-row>
          <br />
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <b-button class="button-style" style="background-color:#6A4029"
              >Add to Cart</b-button
            ><br />
            <b-button
              class="button-style"
              style="background-color:#FFBA33;color:#6A4029"
              >Edit Product</b-button
            >
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
            <b-button
              class="style-size"
              v-for="(item, index) in products"
              :key="index"
              >{{ item.size_name }}</b-button
            >
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
                <li style="font-weight:bold">item1</li>
                <li>item1</li>
              </ul>
            </b-col>
            <b-col
              cols="5"
              class="d-flex justify-content-center align-items-center"
            >
              <h6 style="margin-right:20px;font-size:20px;font-weight:bold">
                Checkout
              </h6>
              <b-button class="style-size"
                ><b-icon icon="arrow-right"></b-icon
              ></b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
      productId: (this.id = this.$route.params.id)
    }
  },
  created() {
    this.getProductDetail(this.productId)
  },
  methods: {
    getProductDetail(id) {
      axios
        .get(`http://localhost:5000/product/${id}`)
        .then(response => {
          this.products = response.data.data
          console.log(this.products)
        })
        .catch(error => {
          console.log(error)
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
