<template>
  <div class="addproduct">
    <div>
      <Navbar />
      <b-container
        fluid
        class="bv-example-row"
        style="border-top: 1px solid #d2d2d2;"
      >
        <div>
          <ul>
            <li>
              <a href="#">Favorite & Promo ></a>{{ productById.product_name }}
            </li>
          </ul>
        </div>
        <b-form @submit.prevent="onSubmit">
          <b-row>
            <b-col xl="4" lg="4" md="4" sm="12">
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <div id="preview">
                  <img v-if="url" :src="url" class="round-img" />
                  <div
                    v-else-if="productById.product_img === ''"
                    class="d-flex justify-content-center"
                    style="background-color:#d2d2d2;border-radius:50%;width:170px;height:170px"
                  >
                    <img
                      class="align-self-center"
                      src="../assets/img/camera.png"
                      alt=""
                    />
                  </div>
                  <img
                    v-else
                    class="round-img"
                    :src="
                      `${ENV}/fileUploadsApi1/product/` +
                        productById.product_img
                    "
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
                  <button @click.prevent="chooseFiles()" class="btn-style">
                    Browse Image
                  </button>
                </div>
                <div style="margin-top:70px">
                  <h6>Delivery Hour:</h6>
                  <label>Start</label>
                  <b-form-timepicker
                    class="input"
                    v-model="productById.delivery_hour_start"
                    locale="id"
                  ></b-form-timepicker>
                  <label>End</label>
                  <b-form-timepicker
                    class="input"
                    v-model="productById.delivery_hour_end"
                    locale="id"
                  ></b-form-timepicker>
                </div>
                <div class="margin-input">
                  <h6>Input stok</h6>
                  <b-form-input
                    class="input"
                    type="number"
                    placeholder="Input Stock"
                    v-model="productById.product_stock"
                  ></b-form-input>
                </div>
              </div>
            </b-col>
            <b-col xl="8" lg="8" md="8" sm="12">
              <div style="margin-left:20px">
                <h6>Category</h6>
                <b-form-select
                  class="input2"
                  v-model="selected"
                  :options="options"
                  @change="changeCategory()"
                  required
                ></b-form-select>
                <h6></h6>
                <h6>Product Name</h6>
                <b-form-input
                  class="input2"
                  type="text"
                  placeholder="Input Product Name"
                  v-model="productById.product_name"
                  required
                ></b-form-input>
                <h6>Input Product Discount</h6>
                <b-form-input
                  class="input2"
                  type="number"
                  placeholder="Input Discount"
                  min="0"
                  v-model="productById.product_discon"
                  required
                ></b-form-input>
                <h6>Product Information</h6>
                <b-form-textarea
                  id="input2"
                  placeholder="Enter Product Description"
                  rows="3"
                  max-rows="6"
                  v-model="productById.product_information"
                  required
                ></b-form-textarea>
                <br />
                <h6>Product Price</h6>
                <b-form-input
                  class="input2"
                  type="number"
                  placeholder="Input Price"
                  min="0"
                  v-model="productById.product_price"
                  required
                ></b-form-input>
                <br />
                <div style="margin-bottom:25px">
                  <h6>Product Size</h6>
                  <p>* Click size you want to use for this product</p>
                  <div class="d-flex justify-content-center">
                    <b-button
                      :class="R !== '' ? 'style-sizeClick' : 'style-size'"
                      @click="addSize('R', 1)"
                      >R</b-button
                    >
                    <b-button
                      :class="L !== '' ? 'style-sizeClick' : 'style-size'"
                      @click="addSize('L', 2)"
                      >L</b-button
                    >
                    <b-button
                      :class="XL !== '' ? 'style-sizeClick' : 'style-size'"
                      @click="addSize('XL', 3)"
                      >XL</b-button
                    >
                  </div>
                </div>
                <div>
                  <h6>Input Delivery Methods</h6>
                  <p>* Click method you want to use for this product</p>
                  <center>
                    <b-button
                      style="margin-bottom:10px !important"
                      :class="home !== '' ? 'style-size2Click' : 'style-size2'"
                      @click="addDeliver('home', 1)"
                      >Home Delivery</b-button
                    >
                    <b-button
                      style="margin-bottom:10px"
                      :class="
                        dineIn !== '' ? 'style-size2Click' : 'style-size2'
                      "
                      @click="addDeliver('dineIn', 2)"
                      >Dine in</b-button
                    >
                    <b-button
                      style="margin-bottom:10px"
                      :class="take !== '' ? 'style-size2Click' : 'style-size2'"
                      @click="addDeliver('take', 3)"
                      >Take Away</b-button
                    >
                  </center>
                </div>
                <div
                  style="margin-top:60px;margin-bottom:60px;text-align:center"
                >
                  <b-button
                    type="submit"
                    class="btn-style2"
                    style="background-color:#6A4029;width:250px;margin:10px"
                    >Save Changes</b-button
                  >
                  <b-button
                    class="btn-style2"
                    style="background-color:#E7EAED;color:#7B7B7B;width:250px;margin:10px"
                    >Cancle</b-button
                  >
                </div>
              </div>
            </b-col>
          </b-row>
        </b-form>
      </b-container>
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
export default {
  name: 'EditProduct',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      ENV: `${process.env.VUE_APP_PORT}`,
      R: '',
      L: '',
      XL: '',
      size: [],
      home: '',
      dineIn: '',
      take: '',
      deliveMethods: [],
      selected: null,
      url: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 1, text: 'Coffee' },
        { value: 2, text: 'Non Coffee' },
        { value: 3, text: 'Food' }
      ],
      productId: (this.id = this.$route.params.id)
    }
  },
  created() {
    this.getProductById(this.productId)
    this.selected = this.productById.category_id
    this.size = this.productById.product_size.split(',').map(function(item) {
      return parseInt(item, 10)
    })
    this.getSize(1)
    this.getSize(2)
    this.getSize(3)

    this.deliveMethods = this.productById.delivery_methods
      .split(',')
      .map(function(deliv) {
        return parseInt(deliv, 10)
      })
    this.getDeliveMethods(1)
    this.getDeliveMethods(2)
    this.getDeliveMethods(3)
  },
  computed: {
    ...mapGetters({
      productById: 'getProductById'
    })
  },
  methods: {
    ...mapActions(['getProductById', 'patchProducts']),
    getSize(val) {
      const x = this.size.indexOf(val)
      if ((val === 1) & (x !== -1)) {
        this.R = 'R'
      } else if ((val === 2) & (x !== -1)) {
        this.L = 'L'
      } else if ((val === 3) & (x !== -1)) {
        this.XL = 'XL'
      }
    },
    getDeliveMethods(val) {
      const x = this.deliveMethods.indexOf(val)
      if ((val === 1) & (x !== -1)) {
        this.home = 'home'
      } else if ((val === 2) & (x !== -1)) {
        this.dineIn = 'dineIn'
      } else if ((val === 3) & (x !== -1)) {
        this.take = 'take'
      }
    },
    removeArr(type, value) {
      if (type === 'size') {
        const index = this.size.indexOf(value)
        if (index > -1) {
          this.size.splice(index, 1)
        }
      } else if (type === 'delive') {
        const index = this.deliveMethods.indexOf(value)
        if (index > -1) {
          this.deliveMethods.splice(index, 1)
        }
      }
    },
    addSize(name, value) {
      if ((name === 'R') & (this.R === '')) {
        this.R = name
        this.size.push(value)
      } else if ((name === 'R') & (this.R !== '')) {
        this.R = ''
        this.removeArr('size', value)
      } else if ((name === 'L') & (this.L === '')) {
        this.L = name
        this.size.push(value)
      } else if ((name === 'L') & (this.L !== '')) {
        this.L = ''
        this.removeArr('size', value)
      } else if ((name === 'XL') & (this.XL === '')) {
        this.XL = name
        this.size.push(value)
      } else if ((name === 'XL') & (this.XL !== '')) {
        this.XL = ''
        this.removeArr('size', value)
      }
      console.log(this.size)
    },
    addDeliver(name, value) {
      if ((name === 'home') & (this.home === '')) {
        this.home = name
        this.deliveMethods.push(value)
      } else if ((name === 'home') & (this.home !== '')) {
        this.home = ''
        this.removeArr('delive', value)
      } else if ((name === 'dineIn') & (this.dineIn === '')) {
        this.dineIn = name
        this.deliveMethods.push(value)
      } else if ((name === 'dineIn') & (this.dineIn !== '')) {
        this.dineIn = ''
        this.removeArr('delive', value)
      } else if ((name === 'take') & (this.take === '')) {
        this.take = name
        this.deliveMethods.push(value)
      } else if ((name === 'take') & (this.take !== '')) {
        this.take = ''
        this.removeArr('delive', value)
      }
    },
    chooseFiles: function() {
      document.getElementById('fileUpload').click()
    },
    makeToast(bodyMsg, msg, variant) {
      this.$bvToast.toast(bodyMsg, {
        title: msg,
        variant: variant,
        solid: true
      })
    },
    changeCategory() {
      this.productById.category_id = this.selected
    },
    onSubmit() {
      const id_product = this.productId

      const data = new FormData()
      data.append('category_id', this.productById.category_id)
      data.append('product_name', this.productById.product_name)
      data.append('product_discon', this.productById.product_discon)
      data.append('product_information', this.productById.product_information)
      data.append('product_size', this.size)
      data.append('product_price', this.productById.product_price)
      data.append('product_img', this.productById.product_img)
      data.append('product_status', this.productById.product_status)
      data.append('product_stock', this.productById.product_stock)
      data.append('delivery_hour_start', this.productById.delivery_hour_start)
      data.append('delivery_hour_end', this.productById.delivery_hour_end)
      data.append('delivery_methods', this.deliveMethods)
      // for (var pair of data.entries()) {
      //   console.log(pair[0] + ', ' + pair[1])
      // }
      const newData = { data, id_product }
      this.patchProducts(newData)
        .then(result => {
          this.getProductById(this.productId)
          this.makeToast(
            `Product ${result.data.data.product_name} Updated Successfully`,
            'Congratulations',
            'success'
          )
          // setTimeout(() => {
          //   this.$router.push('/product')
          // }, 1500)
        })
        .catch(error => {
          this.makeToast('Insert Product Failed', error.data.msg, 'danger')
        })
    },
    handleFile(e) {
      if (
        (e.target.files[0].type !== 'image/png') &
        (e.target.files[0].type != 'image/jpeg')
      ) {
        this.makeToast(
          'Image must be JPG or PNG',
          'Wrong format image',
          'warning'
        )
      } else {
        const file = (this.productById.product_img = e.target.files[0])
        this.url = URL.createObjectURL(file)
      }
    }
  }
}
</script>

<style scoped>
.margin-input {
  margin-top: 100px;
}
.style-size {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: #ffba33;
  font-weight: bold;
  color: black;
  font-size: 20px;
  margin-right: 60px;
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
  margin-right: 60px;
}
.style-size2 {
  border-radius: 10px;
  width: 160px;
  height: 45px;
  border: none;
  background-color: #ffba33;
  font-weight: bold;
  color: black;
  font-size: 15px;
  margin-right: 60px;
}
.style-size2Click {
  border-radius: 10px;
  width: 160px;
  height: 45px;
  border: none;
  background-color: #6a4029;
  font-weight: bold;
  color: white;
  font-size: 15px;
  margin-right: 60px;
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
.input {
  height: 45px !important;
  border-radius: 10px !important;
  width: 250px !important;
  margin-bottom: 20px !important;
}
.input2 {
  height: 45px !important;
  border-radius: 0px !important;
  margin-bottom: 20px !important;
  border: none !important;
  border-bottom: 1px solid #d2d2d2 !important;
}
.round-img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
}
@media only screen and (max-width: 600px) {
  .margin-input {
    margin-top: 10px;
    margin-bottom: 30px;
  }
}
</style>
