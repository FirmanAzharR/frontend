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
          v-for="(item, index) in getCoupons"
          :key="index"
        >
          <div style="font-size: 2rem;position: absolute;right:10px;top:0px;">
            <router-link
              v-if="setUser.user_role === 1"
              :to="{
                name: 'EditCoupon',
                params: { id: item.id_coupon }
              }"
            >
              <b-icon
                icon="pencil-fill"
                class="rounded-circle bg p-2"
                variant="light"
                style="background-color:#6A4029"
              ></b-icon>
            </router-link>
            <div
              v-if="setUser.user_role === 1"
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
          <div class="d-flex align-items-center promo-card">
            <img
              :src="
                item.coupon_img === ''
                  ? require('../../assets/img/aside-icon2.png')
                  : `${ENV}/api1/fileUploadsApi1/coupon/` + item.coupon_img
              "
              alt="img"
              class="img"
            />
            <div class="flex-direction-row">
              <h6>{{ item.coupon_name }}</h6>
              <h6>{{ item.coupon_information }}</h6>
            </div>
          </div>
        </b-card>
        <router-link
          to="/addcoupon"
          class="link"
          v-if="setUser.user_role === 1"
        >
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
        <h4>{{ getCouponName }}</h4>
        <template #modal-footer="{ cancel }">
          <b-button variant="danger" @click="onDelete()">
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
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      ENV: `${process.env.VUE_APP_PORT}`,
      couponId: ''
    }
  },
  created() {
    this.getCoupon()
  },
  computed: {
    ...mapGetters(['getCoupons', 'getCouponName', 'setUser'])
  },
  methods: {
    ...mapActions(['getCoupon', 'deleteCoupon', 'getCouponsById']),
    getCouponById(id) {
      this.couponId = id
      this.getCouponsById(id)
    },
    makeToast(bodyMsg, msg, variant) {
      this.$bvToast.toast(bodyMsg, {
        title: msg,
        variant: variant,
        solid: true
      })
    },
    onDelete() {
      this.deleteCoupon(this.couponId)
        .then(result => {
          this.makeToast(
            'Coupon Deleted',
            `Your Couppon ${result} Deleted successfully`,
            'success'
          )
          this.getCoupon()
        })
        .catch(error => {
          console.log(error.msg)
          this.makeToast('Delete Coupon Failed', 'Failed', 'danger')
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
.promo-card {
  padding: 10px !important;
  height: 90px !important;
  width: auto !important;
}
.img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
  border-radius: 50%;
}
</style>
