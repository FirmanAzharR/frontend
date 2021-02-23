<template>
  <div class="addproduct">
    <div>
      <Navbar />
      <b-container
        fluid
        class="bv-example-row animate__animated animate__fadeIn"
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
                  <div
                    v-else
                    class="d-flex justify-content-center"
                    style="background-color:#d2d2d2;border-radius:50%;width:170px;height:170px"
                  >
                    <img
                      class="align-self-center"
                      src="../assets/img/camera.png"
                      alt=""
                    />
                  </div>
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
                <div class="space">
                  <h6>Delivery Hour:</h6>
                  <label>Start</label>
                  <b-form-timepicker
                    class="input"
                    v-model="form.delivery_hour_start"
                    locale="id"
                  ></b-form-timepicker>
                  <label>End</label>
                  <b-form-timepicker
                    class="input"
                    v-model="form.delivery_hour_end"
                    locale="id"
                  ></b-form-timepicker>
                </div>
                <div class="space2">
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
                <br />
                <h6>Product Price</h6>
                <b-form-input
                  class="input2"
                  type="number"
                  placeholder="Input Price"
                  min="0"
                  v-model="form.product_price"
                  required
                ></b-form-input>
                <br />
                <div style="margin-bottom:25px">
                  <h6>Product Size</h6>
                  <p>* Click size you want to use for this product</p>
                  <div class="d-flex">
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
                  <b-button
                    :class="home !== '' ? 'style-size2Click' : 'style-size2'"
                    @click="addDeliver('home', 1)"
                    >Home Delivery</b-button
                  >
                  <b-button
                    :class="dineIn !== '' ? 'style-size2Click' : 'style-size2'"
                    @click="addDeliver('dineIn', 2)"
                    >Dine in</b-button
                  >
                  <b-button
                    :class="take !== '' ? 'style-size2Click' : 'style-size2'"
                    @click="addDeliver('take', 3)"
                    >Take Away</b-button
                  >
                </div>
                <div class="space3">
                  <b-button
                    type="submit"
                    class="btn-style2 margin-right"
                    style="background-color:#6A4029;"
                    >Save</b-button
                  >
                  <b-button
                    class="btn-style2"
                    style="background-color:#E7EAED;color:#7B7B7B;"
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
      form: {
        category_id: '',
        product_name: '',
        product_discon: '',
        product_information: '',
        product_size: '',
        product_price: '',
        product_img: '',
        product_status: 1,
        product_stock: '',
        delivery_hour_start: '',
        delivery_hour_end: '',
        delivery_methods: ''
      }
    }
  },
  created() {},
  methods: {
    ...mapActions(['postProducts']),
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
      this.form.category_id = this.selected
    },
    onReset() {
      this.R = ''
      this.L = ''
      this.XL = ''
      this.size = []
      this.home = ''
      this.dineIn = ''
      this.take = ''
      this.deliveMethods = []
      this.selected = null
      this.url = null
      this.form = {
        category_id: '',
        product_name: '',
        product_discon: '',
        product_information: '',
        product_size: '',
        product_price: '',
        product_img: '',
        product_status: 1,
        product_stock: '',
        delivery_hour_start: '',
        delivery_hour_end: '',
        delivery_methods: ''
      }
    },
    onSubmit() {
      if ((this.deliveMethods.length < 0) & (this.size.length < 0)) {
        this.makeToast('Some input form empty', 'Fill input form', 'warning')
      } else {
        this.form.product_size = this.size.toString()
        this.form.delivery_methods = this.deliveMethods.toString()
        const {
          category_id,
          product_name,
          product_discon,
          product_information,
          product_size,
          product_price,
          product_img,
          product_status,
          product_stock,
          delivery_hour_start,
          delivery_hour_end,
          delivery_methods
        } = this.form
        const data = new FormData()
        data.append('category_id', category_id)
        data.append('product_name', product_name)
        data.append('product_discon', product_discon)
        data.append('product_information', product_information)
        data.append('product_size', product_size)
        data.append('product_price', product_price)
        data.append('product_img', product_img)
        data.append('product_status', product_status)
        data.append('product_stock', product_stock)
        data.append('delivery_hour_start', delivery_hour_start)
        data.append('delivery_hour_end', delivery_hour_end)
        data.append('delivery_methods', delivery_methods)
        // for (var pair of data.entries()) {
        //   console.log(pair[0] + ', ' + pair[1])
        // }
        this.postProducts(data)
          .then(result => {
            console.log(result)
            this.makeToast(`Success add product`, 'Congratulations', 'success')
            this.onReset()
          })
          .catch(error => {
            this.makeToast('Insert Product Failed', error.data.msg, 'danger')
          })
      }
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
        const file = (this.form.product_img = e.target.files[0])
        this.url = URL.createObjectURL(file)
      }
    }
  }
}
</script>

<style scoped>
.margin-right {
  margin-right: 100px;
}
.space {
  margin-top: 70px;
}
.space2 {
  margin-top: 100px;
}
.space3 {
  margin-top: 60px;
  margin-bottom: 60px;
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
  width: 250px;
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
  .space {
    margin-top: 30px;
  }
  .space2 {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .input {
    width: 320px !important;
    margin-bottom: 20px !important;
  }
  .style-size2 {
    width: 200px;
    margin-bottom: 10px;
  }
  .style-size2Click {
    width: 200px;
    margin-bottom: 10px;
  }
  .space3 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .btn-style2 {
    width: 300px;
    margin-bottom: 20px;
  }
  .margin-right {
    margin-right: 0px;
  }
  .style-size {
    margin-right: 30px;
  }
  .style-sizeClick {
    margin-right: 30px;
  }
}
</style>
