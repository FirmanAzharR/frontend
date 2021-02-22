<template>
  <div class="product">
    <div>
      <!-- <Navbar :dataProductName="productSearch" @sendData="search" /> -->
      <Navbar />
      <b-container fluid class="bv-example-row">
        <b-row style="border-top: 1px solid #d2d2d2;">
          <b-col
            xl="4"
            lg="4"
            md="12"
            sm="12"
            style="border-right: 1px solid #d2d2d2"
            ><HomePromo class="animate__animated animate__fadeIn"
          /></b-col>
          <b-col xl="8" md="12" sm="12">
            <div v-if="setUser.user_role === 1" style="padding:20px">
              <router-link
                :to="{ name: 'AddProduct' }"
                class="link"
                style="background-color:#6A4029;color:white;padding:5px;border-radius:25px;margin-left:25px;font-weight:500;padding:10px;border:none"
                >Add Product</router-link
              >
              <b-nav fill align="center" class="font2 nav-font-size">
                <b-nav-item
                  ><router-link to="#" class="link"
                    >Favorite & Promo</router-link
                  ></b-nav-item
                >
                <b-nav-item @click="getProductByCategory(1)"
                  ><router-link to="#" class="link"
                    >Coffee</router-link
                  ></b-nav-item
                >
                <b-nav-item @click="getProductByCategory(2)"
                  ><router-link to="#" class="link"
                    >Non Coffee</router-link
                  ></b-nav-item
                >
                <b-nav-item @click="getProductByCategory(3)"
                  ><router-link to="#" class="link"
                    >Foods</router-link
                  ></b-nav-item
                >
                <!-- <b-nav-item @click="resetProduct"
                  ><router-link to="#" class="link"
                    >All Product</router-link
                  ></b-nav-item
                > -->
                <b-nav-item @click="getProductByCategory('')"
                  ><router-link to="#" class="link"
                    >All Product</router-link
                  ></b-nav-item
                >
                <b-nav-item-dropdown text="Sort by" right>
                  <b-dropdown-item
                    href="#"
                    @click="getProductSort('product_discon DESC')"
                    >Biggest promo</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    @click="getProductSort('product_price ASC')"
                    >Cheapest price</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    @click="getProductSort('product_price DESC')"
                    >most expensive price</b-dropdown-item
                  >
                </b-nav-item-dropdown>
              </b-nav>
              <div
                style="margin-top:30px"
                class="animate__animated animate__fadeIn"
              >
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
                      <router-link
                        :to="{
                          name: 'DetailProduct',
                          params: { id: item.product_id }
                        }"
                      >
                        <b-card
                          class="card-item"
                          style="border-radius: 40px;border:none;color:#8B5830;"
                        >
                          <div align="center">
                            <img
                              :src="
                                item.product_img === ''
                                  ? require('../assets/img/food-1.png')
                                  : 'http://localhost:5000/api1/fileUploadsApi1/product/' +
                                    item.product_img
                              "
                              alt=""
                              class="item-img"
                            />
                            <div
                              class="badge-pos"
                              v-if="item.product_discon !== 0"
                            >
                              <b-badge
                                pill
                                variant="light"
                                style="font-size:19px"
                                >{{ item.product_discon }}%</b-badge
                              >
                            </div>
                            <h6
                              style="font-weight:bold;font-size:18px"
                              class="font1"
                            >
                              {{ item.product_name }}
                            </h6>
                            <h6
                              class="font1"
                              style="font-weight:bold;color:#8B5830;"
                            >
                              IDR {{ item.product_price }}
                            </h6>
                          </div>
                        </b-card>
                      </router-link>
                    </div>
                  </b-col>
                </b-row>
                <div class="overflow-auto">
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="limit"
                    @change="changePage"
                  ></b-pagination>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import HomePromo from '../components/_base/HomePromo'
//import axios from 'axios'
export default {
  name: 'Product',
  //props: ['searchProduct'],
  components: {
    Navbar,
    HomePromo,
    Footer
  },
  data() {
    return {
      user: 1,
      // products: [],
      // productSearch: '',
      // sort: 'category_id ASC',
      // category: '',
      currentPage: 1
      // totalRows: null,
      // limit: 12,
      // page: 1
    }
  },
  computed: {
    ...mapGetters({
      products: 'getDataProduct',
      page: 'getPageProduct',
      limit: 'getLimitProduct',
      rows: 'getTotalRowsProduct',
      setUser: 'setUser'
    })
    // rows() {
    //   return this.totalRows
    // }
  },
  created() {
    this.productSearchs('')
    this.handleChangePage(1)
    this.handleChangeCategory('')
    this.getProducts()
    //this.getProduct(this.category, this.productSearch, this.sort)
    //this.getProducts
  },
  methods: {
    ...mapActions(['getProducts']),
    ...mapMutations([
      'handleChangePage',
      'handleChangeCategory',
      'handleSort',
      'productSearchs'
    ]),

    getProductByCategory(idCategory) {
      this.handleChangePage(1)
      this.productSearchs('')
      this.handleChangeCategory(idCategory)
      this.getProducts()
      //this.page = 1
      //this.productSearch = ''
      //this.getProducts()
    },
    getProductSort(dataSort) {
      this.handleChangePage(1)
      this.handleSort(dataSort)
      this.getProducts()
    },
    changePage(numberPage) {
      this.handleChangePage(numberPage)
      this.getProducts()
      // this.page = numberPage
      // this.getProduct('', '', this.sort)
    }
  }
}
</script>

<style>
.nav-font-size {
  font-size: 20px;
}
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
  width: 130px;
  height: 130px;
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

@media only screen and (max-width: 600px) {
  .nav-font-size {
    font-size: 17px;
  }
  .card-item {
    max-width: 9rem;
    height: 13rem;
    width: 9rem;
  }
  .item-img {
    width: 110px;
    height: 110px;
  }
  .badge-pos {
    position: absolute;
    top: 15px;
    left: 100px;
  }
}
</style>
