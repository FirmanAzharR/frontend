<template>
  <div style="padding:20px">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <div
        class="promo-title"
        style="text-align:center; max-width: 17rem;margin-bottom:40px"
      >
        <h4 class="font2 color">Promo Today</h4>
        <p class="font1 color">
          Cupon will be updated every weeks. Check them out!
        </p>
      </div>
      <div>
        <b-card
          id="card-style"
          class="font1"
          v-for="(item, index) in coupon"
          :key="index"
        >
          <div style="font-size: 2rem;position: absolute;right:10px;top:0px;">
            <router-link to="/editcoupon" class="link">
              <b-icon
                icon="pencil-fill"
                class="rounded-circle bg p-2"
                variant="light"
                style="background-color:#6A4029"
              ></b-icon>
            </router-link>
            <div
              style="font-size: 2rem;position: absolute;right:0px;top:80px;cursor:pointer;"
            >
              <b-icon
                @click="getCouponById(item.id_coupon)"
                icon="trash-fill"
                class="rounded-circle bg-danger p-2"
                variant="light"
                v-b-modal.modal-center
              ></b-icon>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <img src="../../assets/img/aside-icon2.png" alt="" />
            <!-- <img
              v-if="item.coupon_img === ''"
              src="../../assets/img/aside-icon2.png"
              alt=""
            />
            <img
              v-else
              :src="'http://localhost:5000/' + item.coupon_img"
              alt=""
            /> -->
            <p>{{ item.coupon_information }} {{ index }}</p>
          </div>
        </b-card>
        <router-link to="/addcoupon" class="link">
          <b-button block id="btn">
            Add Coupon
          </b-button>
        </router-link>
      </div>
    </div>
    <div>
      <b-modal
        id="modal-center"
        centered
        title="Delete This Coupon ?"
        header-bg-variant="warning"
        header-text-variant="dark"
        body-bg-variant="light"
        body-text-variant="dark"
        footer-bg-variant="warning"
        footer-text-variant="dark"
      >
        <h4>{{ couponName }}</h4>
        <template #modal-footer="{ cancel }">
          <b-button variant="danger" @click="deleteCoupon(couponId)">
            OK
          </b-button>
          <b-button @click="cancel()">
            Cancel
          </b-button>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      coupon: [],
      couponId: '',
      couponName: ''
    }
  },
  created() {
    this.getPromo()
  },
  methods: {
    getPromo() {
      axios
        .get(`http://localhost:5000/coupon`)
        .then(response => {
          this.coupon = response.data.data
          // //console.log(response.data.pagination.totalData)
          // this.totalRows = response.data.pagination.totalData
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteCoupon(id) {
      axios
        .delete(`http://localhost:5000/coupon/${id}`)
        .then(response => {
          alert(`delete success ${response}`)
          this.getPromo()
          //this.coupon = response.data.data
          // //console.log(response.data.pagination.totalData)
          // this.totalRows = response.data.pagination.totalData
        })
        .catch(error => {
          console.log(error)
        })
    },
    getCouponById(id) {
      axios
        .get(`http://localhost:5000/coupon/${id}`)
        .then(response => {
          this.couponId = response.data.data[0].id_coupon
          this.couponName = response.data.data[0].coupon_name
          //this.coupon = response.data.data
          // //console.log(response.data.pagination.totalData)
          // this.totalRows = response.data.pagination.totalData
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
#card-style {
  border-radius: 15px;
  max-width: 22rem;
  width: 22rem;
  margin-bottom: 20px;
  background-color: #ffb836;
  border: none;
}
.color {
  color: #6a4029;
}
#btn {
  background-color: #6a4029;
  border: none;
  color: white;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 15px;
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
}
</style>
