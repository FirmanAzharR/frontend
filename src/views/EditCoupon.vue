<template>
  <div class="addcoupon">
    <div>
      <Navbar />
      <b-container
        fluid
        class="bv-example-row"
        style="border-top: 1px solid #d2d2d2;"
      >
        <div style="margin-left:40px">
          <ul>
            <li><a href="#">Favorite & Promo ></a>Edit Promo</li>
          </ul>
        </div>
        <FormAddCoupon />
      </b-container>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import FormAddCoupon from '../components/_base/coupon/FormEditCoupon'

export default {
  components: {
    Navbar,
    Footer,
    FormAddCoupon
  }
}
</script>
