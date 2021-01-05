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
      <b-card id="card-style" v-for="(item, index) in coupon" :key="index">
        <div class="d-flex align-items-center">
          <img src="../../assets/img/aside-icon2.png" alt="" />
          <p>
            {{ item.coupon_information }}
          </p>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      coupon: []
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
</style>
