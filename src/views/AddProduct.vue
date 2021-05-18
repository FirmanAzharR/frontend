<template>
  <div class="addproduct">
    <div>
      <b-container
        fluid
        class="bv-example-row animate__animated animate__fadeIn"
        style="margin-top:20px"
      >
      <router-link
							:to="{ name: 'Product' }"
							style="background-color:#6A4029;color:white;padding:5px;font-weight:500;border:none"
							>Go to Page Prouct</router-link
							>
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
              </div>
            </b-col>
            <b-col xl="8" lg="8" md="8" sm="12">
              <div style="margin-left:20px;">
                <h6>Nama Barang</h6>
                <b-form-input
                  class="input2"
                  type="text"
                  placeholder="Input nama barang"
                  v-model="form.nama"
                  required
                ></b-form-input>
                <h6>Harga Beli</h6>
                <b-form-input
                  class="input2"
                  type="number"
                  placeholder="Input harga beli"
                  min="0"
                  v-model="form.harga_beli"
                  required
                ></b-form-input>
                <br />
                 <h6>Harga Jual</h6>
                <b-form-input
                  class="input2"
                  type="number"
                  placeholder="Input harga jual"
                  min="0"
                  v-model="form.harga_jual"
                  required
                ></b-form-input>
                <br />
                <h6>Input stok</h6>
                  <b-form-input
                    class="input"
                    type="number"
                    placeholder="Input stok"
                    v-model="form.stok"
                  ></b-form-input>
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
     
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddProduct',
  components: {

  },
  data() {
    return {
      url: null,
      form: {
        nama:'',
        harga_beli:'',
        harga_jual:'',
        stok:'',
        foto:''
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
    onReset() {
      this.url = null
      this.form = {
        nama:'',
        harga_beli:'',
        harga_jual:'',
        stok:'',
        foto:''
      }
    },
    onSubmit() {
        const {
        nama,
        harga_beli,
        harga_jual,
        stok,
        foto
        } = this.form
        const data = new FormData()
        data.append('nama', nama)
        data.append('harga_beli', harga_beli)
        data.append('harga_jual', harga_jual)
        data.append('stok', stok)
        data.append('foto', foto)
        for (var pair of data.entries()) {
          console.log(pair[0] + ', ' + pair[1])
        }
        this.postProducts(data)
          .then(result => {
            console.log(result)
            this.makeToast(`Success add product`, 'Congratulations', 'success')
            this.onReset()
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
        const file = (this.form.foto = e.target.files[0])
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
