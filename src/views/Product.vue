<template>
  <div class="product">
    <div>
      <b-container fluid class="bv-example-row">
        <b-row style="border-top: 1px solid #d2d2d2;">
          <b-col xl="12" md="12" sm="12">
            <div style="padding:20px">
              <router-link
                :to="{ name: 'AddProduct' }"
                class="link"
                style="background-color:#6A4029;color:white;padding:5px;border-radius:25px;margin-left:25px;font-weight:500;padding:10px;border:none"
                >Add Product</router-link
              >
                <b-form-input
                id="search"
                style=""
                placeholder="Search Product"
                type="text"
                v-model="cari"
                @keyup.enter="search"
              ></b-form-input>
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
                          name: 'EditProduct',
                          params: { id: item.id_barang }
                        }"
                      >
                        <b-card
                          class="card-item"
                          style="border-radius: 40px;border:none;color:#8B5830;"
                        >
                          <div align="center">
                            <img
                              :src="
                                item.foto === ''
                                  ? require('../assets/img/box.png')
                                  : `${ENV}/fileUploadsApi1/` +
                                    item.foto
                              "
                              alt=""
                              class="item-img"
                            />
                            <h6
                              style="font-weight:bold;font-size:18px"
                              class="font1"
                            >
                              {{ item.nama }}
                            </h6>
                            <h6
                              class="font1"
                              style="font-weight:bold;color:#8B5830;"
                            >
                              IDR {{ item.harga_jual }}
                              <br>
                              IDR {{ item.harga_beli }}
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
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Product',
  components: {
  },
  data() {
    return {
      ENV: `${process.env.VUE_APP_PORT}`,
      user: 1,
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters({
      products: 'getDataProduct',
      page: 'getPageProduct',
      limit: 'getLimitProduct',
      rows: 'getTotalRowsProduct',
      // setUser: 'setUser'
    })
  },
  created() {
    this.productSearchs('')
    this.handleChangePage(1)
    this.getProducts()
  },
  methods: {
    ...mapActions(['getProducts']),
    ...mapMutations([
      'handleChangePage',
      'productSearchs'
    ]),
    changePage(numberPage) {
      this.handleChangePage(numberPage)
      this.getProducts()
    },
    search() {
      this.productSearchs(this.cari)
      this.getProducts()
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
