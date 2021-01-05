<template>
  <div class="product">
    <div>
      <Navbar :dataProductName="productSearch" @sendData="search" />
      <b-container fluid class="bv-example-row">
        <b-row style="border-top: 1px solid #d2d2d2;">
          <b-col
            xl="4"
            lg="4"
            md="12"
            sm="12"
            style="border-right: 1px solid #d2d2d2"
            ><HomePromo
          /></b-col>
          <b-col xl="8" md="12" sm="12">
            <div style="padding:20px">
              <router-link
                :to="{ name: 'AddProduct' }"
                class="link"
                style="background-color:#6A4029;color:white;padding:5px;border-radius:10px;margin-left:25px;font-weight:bold"
                >Add Product</router-link
              >
              <b-nav fill align="center" class="font2" style="font-size: 20px">
                <b-nav-item
                  ><router-link to="#" class="link"
                    >Favorite & Promo</router-link
                  ></b-nav-item
                >
                <b-nav-item
                  @click=";(category = 1), getProductByCategory(category)"
                  ><router-link to="#" class="link"
                    >Coffee</router-link
                  ></b-nav-item
                >
                <b-nav-item
                  @click=";(category = 2), getProductByCategory(category)"
                  ><router-link to="#" class="link"
                    >Non Coffee</router-link
                  ></b-nav-item
                >
                <b-nav-item
                  @click=";(category = 3), getProductByCategory(category)"
                  ><router-link to="#" class="link"
                    >Foods</router-link
                  ></b-nav-item
                >
                <b-nav-item @click="resetProduct"
                  ><router-link to="#" class="link"
                    >All Product</router-link
                  ></b-nav-item
                >
                <b-nav-item-dropdown text="Sort by" right>
                  <b-dropdown-item
                    href="#"
                    @click="getProduct('', '', 'product_discon DESC')"
                    >Biggest promo</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    @click="getProduct('', '', 'product_price ASC')"
                    >Cheapest price</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    @click="getProduct('', '', 'product_price DESC')"
                    >most expensive price</b-dropdown-item
                  >
                </b-nav-item-dropdown>
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
                              src="../assets/img/food-1.png"
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
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import HomePromo from '../components/_base/HomePromo'
import axios from 'axios'
export default {
  name: 'Product',
  props: ['searchProduct'],
  components: {
    Navbar,
    HomePromo,
    Footer
  },
  data() {
    return {
      user: 1,
      products: [],
      productSearch: '',
      sort: 'category_id ASC',
      category: '',
      currentPage: 1,
      totalRows: null,
      limit: 12,
      page: 1
    }
  },
  computed: {
    rows() {
      return this.totalRows
    }
  },
  created() {
    this.getProduct(this.category, this.productSearch, this.sort)
  },
  methods: {
    resetProduct() {
      this.sort = 'category_id ASC'
      this.category = ''
      this.productSearch = ''
      this.page = 1
      this.getProduct(this.category, this.productSearch, this.sort)
    },
    search(event) {
      this.productSearch = event
      this.category = ''
      this.getProduct(this.category, this.productSearch, this.sort)
    },
    getProductByCategory(idCategory) {
      this.page = 1
      this.productSearch = ''
      this.getProduct(idCategory, this.productSearch, this.sort)
    },
    getProduct(category, searchData, sort) {
      axios
        .get(
          `http://localhost:5000/product?page=${this.page}&limit=${this.limit}&category=${category}&search=${searchData}&sort=${sort}`
        )
        .then(response => {
          this.products = response.data.data
          this.totalRows = response.data.pagination.totalData
        })
        .catch(error => {
          console.log(error)
        })
    },
    changePage(numberPage) {
      this.page = numberPage
      this.getProduct('', '', this.sort)
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
