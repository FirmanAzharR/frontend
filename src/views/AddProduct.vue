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
            <li><a href="#">Favorite & Promo ></a>Add new product</li>
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
                  <img
                    v-else
                    src="../assets/img/coldbrew.png"
                    alt=""
                    class="round-img"
                  />
                </div>
                <div>
                  <b-button
                    class="btn-style"
                    style="margin-bottom:15px;margin-top:15px;background-color: #0B132A;color:white"
                    >Take a picture</b-button
                  >
                  <br />
                  <!-- <b-form-file
                    style="width:250px"
                    @change="handleFile"
                  ></b-form-file> -->
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
                  <b-form-input
                    class="input"
                    type="text"
                    placeholder="select start hour"
                  ></b-form-input>
                  <b-form-input
                    class="input"
                    type="text"
                    placeholder="select end hour"
                  ></b-form-input>
                </div>
                <div style="margin-top:100px">
                  <h6>Input stok</h6>
                  <b-form-input
                    class="input"
                    type="number"
                    placeholder="Input Stock"
                    v-model="form.product_stock"
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
                  v-model="form.product_name"
                  required
                ></b-form-input>
                <h6>Input Product Discount</h6>
                <b-form-input
                  class="input2"
                  type="number"
                  placeholder="Input Discount"
                  min="0"
                  v-model="form.product_discon"
                  required
                ></b-form-input>
                <h6>Product Information</h6>
                <b-form-textarea
                  id="input2"
                  placeholder="Enter Product Description"
                  rows="3"
                  max-rows="6"
                  v-model="form.product_information"
                  required
                ></b-form-textarea>
                <div style="margin-bottom:25px">
                  <h6>Product Name</h6>
                  <p>* Click size you want to use for this product</p>
                  <b>(Checked: {{ size }})</b>
                  <div class="d-flex">
                    <b-form-checkbox
                      v-model="size"
                      value="1"
                      @change="getSize()"
                    >
                      <b-button class="style-size">R</b-button>
                    </b-form-checkbox>
                    <b-form-checkbox
                      v-model="size"
                      value="2"
                      @change="getSize()"
                    >
                      <b-button class="style-size">L</b-button>
                    </b-form-checkbox>
                    <b-form-checkbox
                      v-model="size"
                      value="3"
                      @change="getSize()"
                    >
                      <b-button class="style-size">XL</b-button>
                    </b-form-checkbox>
                    <div v-if="size.length < 0">
                      <h6>Choose size to input Product Price</h6>
                    </div>
                    <div v-else-if="size.length === 1">
                      <input type="text" />
                    </div>
                    <div v-else-if="size.length === 2">
                      <input type="text" />
                      <input type="text" />
                    </div>
                    <div v-else-if="size.length === 3">
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                    </div>
                  </div>
                  <!-- <b-button class="style-size" style="font-size:12px"
                    >200gr</b-button
                  >
                  <b-button class="style-size" style="font-size:12px"
                    >300gr</b-button
                  >
                  <b-button class="style-size" style="font-size:12px"
                    >500gr</b-button
                  > -->
                </div>
                <div>
                  <h6>Input Delivery Methods</h6>
                  <p>* Click method you want to use for this product</p>
                  <b-button class="style-size2">Home Delivery</b-button>
                  <b-button class="style-size2">Dine in</b-button>
                  <b-button class="style-size2">Take Away</b-button>
                </div>
                <div style="margin-top:60px;margin-bottom:60px">
                  <b-button
                    type="submit"
                    class="btn-style2"
                    style="background-color:#6A4029;width:250px;margin-right:100px"
                    >Save</b-button
                  >
                  <b-button
                    class="btn-style2"
                    style="background-color:#E7EAED;color:#7B7B7B;width:250px"
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
import { mapActions } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
export default {
  name: 'AddProduct',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      size: [],
      selected: null,
      url: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 1, text: 'Coffee' },
        { value: 2, text: 'Non Coffee' },
        { value: 3, text: 'Food' }
      ],
      form: {
        category_id: '',
        product_name: '',
        product_discon: '',
        product_information: '',
        product_img: '',
        product_status: 1,
        product_stock: '',
        id_size: this.size,
        product_price: [20000, 30000],
        p_detail_status: 1
      }
    }
  },
  created() {},
  methods: {
    ...mapActions(['postProducts']),
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
      this.form.category_id = this.selected
    },
    getSize() {
      this.form.id_size = this.size
    },
    onSubmit() {
      const {
        category_id,
        product_name,
        product_discon,
        product_information,
        product_img,
        product_status,
        product_stock,
        id_size,
        product_price,
        p_detail_status
      } = this.form
      const data = new FormData()
      data.append('category_id', category_id)
      data.append('product_name', product_name)
      data.append('product_discon', product_discon)
      data.append('product_information', product_information)
      data.append('product_img', product_img)
      data.append('product_status', product_status)
      data.append('product_stock', product_stock)
      data.append('id_size', id_size)
      data.append('product_price', product_price)
      data.append('p_detail_status', p_detail_status)
      // for (var pair of data.entries()) {
      //   console.log(pair[0] + ', ' + pair[1])
      // }
      this.postProducts(data)
        .then(result => {
          //console.log(result)
          this.makeToast(
            `Product ${result.data.data[0].product_name} Inserted Successfully`,
            'Congratulations',
            'success'
          )
          //this.onReset()
        })
        .catch(error => {
          this.makeToast('Insert Product Failed', error, 'danger')
        })
    },
    handleFile(e) {
      console.log(e.target.files[0])
      const file = (this.form.product_img = e.target.files[0])
      this.url = URL.createObjectURL(file)
    }
  }
}
</script>

<style scoped>
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
}
</style>
