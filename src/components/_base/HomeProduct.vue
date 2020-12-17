<template>
  <div style="padding:20px">
    <b-nav fill align="center" class="font2" style="font-size: 20px">
      <b-nav-item
        ><router-link to="#" class="link"
          >Favorite & Promo</router-link
        ></b-nav-item
      >
      <b-nav-item>
        <router-link to="" class="link">Coffee</router-link>
      </b-nav-item>
      <b-nav-item
        ><router-link to="#" class="link">Non Coffee</router-link></b-nav-item
      >
      <b-nav-item
        ><router-link to="#" class="link">Foods</router-link></b-nav-item
      >
      <b-nav-item
        ><router-link to="#" class="link">Add-on</router-link></b-nav-item
      >
    </b-nav>
    <div style="margin-top:30px">
      <b-row>
        <b-col
          xl="3"
          lg="3"
          md="3"
          sm="4"
          cols="6"
          v-for="(item, index) in products"
          :key="index"
        >
          <div class="item font1 centered">
            <router-link to="#" class="link">
              <b-card class="card-item" style="border-radius: 40px;border:none">
                <div align="center">
                  <img
                    src="../../assets/img/food-1.png"
                    alt=""
                    class="item-img"
                  />
                  <div class="badge-pos" v-if="item.product_discon !== 0">
                    <b-badge pill variant="light" style="font-size:19px"
                      >{{ item.product_discon }}%</b-badge
                    >
                  </div>
                  <h6 style="font-weight:bold;font-size:18px" class="font1">
                    {{ item.product_name }}
                  </h6>
                  <h6 class="font1" style="font-weight:bold;color:#8B5830;">
                    IDR {{ item.product_price }}
                  </h6>
                </div>
              </b-card>
            </router-link>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    getProduct() {
      axios
        .get('http://localhost:5000/product?page=1&limit=10&search=&sort=')
        .then(response => {
          console.log(response)
          this.products = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
.font1 {
  font-family: 'Poppins', sans-serif;
}
.font2 {
  font-family: 'Rubik', sans-serif;
}
.link {
  color: #6a4029;
}
.link:hover {
  color: #6a4029;
  font-weight: 400;
}
.centered {
  display: grid;
  justify-content: center;
}
.item-img {
  border-radius: 50%;
  position: relative;
  top: -40px;
  left: -5px;
}
.card-item {
  max-width: 10rem;
  margin-bottom: 50px;
  height: 14rem;
  width: 10rem;
  -webkit-box-shadow: 1px 5px 12px 0px #2e2d2d54;
  -moz-box-shadow: 1px 5px 12px 0px #2e2d2d54;
  box-shadow: 1px 5px 12px 0px #2e2d2d54;
}
.badge-pos {
  position: absolute;
  top: 15px;
  left: 120px;
}
</style>
