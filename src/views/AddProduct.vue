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
        <b-row>
          <b-col xl="4" lg="4" md="4" sm="12">
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <div>
                <img
                  src="../assets/img/coldbrew.png"
                  alt=""
                  style="width:170px;border-radius:50%"
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
                  class="btn-style"
                  style="background-color: #FFBA33;color:#6A4029"
                  v-model="file1"
                  :state="Boolean(file1)"
                  placeholder="Choose a file or drop it here..."
                  drop-placeholder="Drop file here..."
                ></b-form-file> -->
                <!-- <div class="mt-3">
                  Selected file: {{ file1 ? file1.name : '' }}
                </div> -->
              </div>
              <div style="margin-top:70px">
                <h6>Delivery Hour:</h6>
                <b-form-input
                  id="input"
                  type="text"
                  placeholder="select start hour"
                ></b-form-input>
                <b-form-input
                  id="input"
                  type="text"
                  placeholder="select end hour"
                ></b-form-input>
              </div>
              <div style="margin-top:100px">
                <h6>Input stok</h6>
                <b-form-input
                  id="input"
                  type="number"
                  placeholder="Input Stock"
                ></b-form-input>
              </div>
            </div>
          </b-col>
          <b-col xl="8" lg="8" md="8" sm="12">
            <div style="margin-left:20px">
              <h6>Category</h6>
              <b-form-select
                id="input2"
                v-model="selected"
                :options="options"
                @change="changeCategory()"
              ></b-form-select>
              <h6></h6>
              <h6>Product Name</h6>
              <b-form-input
                id="input2"
                type="text"
                placeholder="Input Product Name"
              ></b-form-input>
              <h6>Input Product Discount</h6>
              <b-form-input
                id="input2"
                type="number"
                placeholder="Input Discount"
                min="0"
              ></b-form-input>
              <h6>Product Information</h6>
              <b-form-textarea
                id="input2"
                placeholder="Enter Product Description"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
              <div style="margin-bottom:25px">
                <h6>Product Name</h6>
                <p>* Click size you want to use for this product</p>
                <b-button class="style-size">R</b-button>
                <b-button class="style-size">L</b-button>
                <b-button class="style-size">XL</b-button>
                <b-button class="style-size" style="font-size:12px"
                  >200gr</b-button
                >
                <b-button class="style-size" style="font-size:12px"
                  >300gr</b-button
                >
                <b-button class="style-size" style="font-size:12px"
                  >500gr</b-button
                >
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
      </b-container>
      <Footer />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
      file1: '',
      selected: null,
      category: [],
      options: [
        { value: null, text: 'Please select an option' },
        { value: 1, text: 'Coffee' },
        { value: 2, text: 'Non Coffee' },
        { value: 3, text: 'Food' }
      ],
      form: {
        category_id: this.selected,
        product_name: '',
        product_discon: '',
        product_information: '',
        product_status: 1,
        product_stock: '',
        id_size: 1,
        product_price: 20000,
        p_detail_status: 1
      }
    }
  },
  created() {
    this.getCategory()
  },
  methods: {
    changeCategory() {
      this.form.category_id = this.selected
    },
    getCategory() {
      axios
        .get('http://localhost:5000/category')
        .then(response => {
          this.category = response.data.data
          console.log(this.category)
        })
        .catch(error => {
          console.log(error)
        })
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
#input {
  height: 45px;
  border-radius: 10px;
  width: 250px;
  margin-bottom: 20px;
}
#input2 {
  height: 45px;
  border-radius: 0px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #d2d2d2;
}
</style>
