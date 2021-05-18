<template>
  <div class="addproduct" style="margin:30px">
  <vue-confirm-dialog></vue-confirm-dialog>
    <div>
      <b-container
        fluid
        class="bv-example-row"
      >
        <div>
          <ul>
            <li>
              <router-link
							:to="{ name: 'Product' }"
							class="link"
							style="padding:5px;font-weight:500;border:none"
							>Product</router-link
							> > {{ selected.nama }}
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
                    v-else-if="selected.foto === ''"
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
                      `${ENV}/fileUploadsApi1/` +
                        selected.foto
                    "
                    alt=""
                  />
                </div>
                <div>
                <input
                    id="fileUpload"
                    @change="handleFile"
                    type="file"
                    hidden
                  />
                  <button @click.prevent="chooseFiles()" class="btn-style" style="margin-top:40px">
                    Browse Image
                  </button>
                  <br/>
                  <h6 style="margin-bottom:110px;margin-top:20px;text-align:center">Max size 100kb</h6>
              <b-button variant="danger" class="btn-style"
              @click.prevent="handleClick"
              >Delete Product&nbsp;&nbsp;<b-icon-trash></b-icon-trash
            ></b-button>
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
                  v-model="selected.nama"
                  required
                ></b-form-input>
                <h6>Harga Beli</h6>
                <b-form-input
                  class="input2"
                  type="number"
                  placeholder="Input harga beli"
                  min="0"
                  v-model="selected.harga_beli"
                  required
                ></b-form-input>
                <br />
                 <h6>Harga Jual</h6>
                <b-form-input
                  class="input2"
                  type="number"
                  placeholder="Input harga jual"
                  min="0"
                  v-model="selected.harga_jual"
                  required
                ></b-form-input>
                <br />
                <h6>Input stok</h6>
                  <b-form-input
                    class="input2"
                    type="number"
                    placeholder="Input stok"
                    v-model="selected.stok"
                  ></b-form-input>
                <div class="space3">
                  <b-button
                    type="submit"
                    class="btn-style2 margin-right"
                    style="background-color:#0080c9;"
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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'EditProduct',
  components: {

  },
  data() {
    return {
      ENV: `${process.env.VUE_APP_PORT}`,
      url: null,
      productId: (this.id = this.$route.params.id)
    }
  },
  created() {
    this.getProductById(this.productId)
  },
  computed: {
    ...mapGetters({
      selected: 'getProductById'
    })
  },
  methods: {
    ...mapActions(['getProductById', 'patchProducts','deleteProducts']),
      handleClick() {
      this.$confirm({
        message: `Are you sure delete ${this.selected.nama}?`,
        button: {
          no: 'No',
          yes: 'Yes'
        },
        callback: confirm => {
          if (confirm) {
            this.onDelete()
          }
        }
      })
    },
      onDelete() {
      this.deleteProducts(this.productId)
        .then(result => {
          this.makeToast(
            'Product Delete',
            `Your Product ${result.data.data.nama} Deleted successfully`,
            'success'
          )
          setTimeout(() => {
            this.$router.push('/')
          }, 1500)
        })
        .catch(error => {
          console.log(error.msg)
          this.makeToast('Delete Product Failed', 'Failed', 'danger')
        })
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
    onSubmit() {
      const id_product = this.productId

      const data = new FormData()
      data.append('nama', this.selected.nama)
      data.append('harga_beli', this.selected.harga_beli)
      data.append('harga_jual', this.selected.harga_jual)
      data.append('stok', this.selected.stok)
      data.append('foto', this.selected.foto)

      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      const newData = { data, id_product }
      this.patchProducts(newData)
        .then(result => {
          this.getProductById(this.productId)
          this.makeToast(
            `Product ${result.data.data.nama} Updated Successfully`,
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
        const file = (this.selected.foto = e.target.files[0])
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
.margin-right {
  margin-right: 100px;
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
  .margin-input {
    margin-top: 10px;
    margin-bottom: 30px;
  }
}
</style>
