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
            <li><a href="#">Favorite & Promo ></a>Add new Promo</li>
          </ul>
        </div>
        <b-row>
          <b-col xl="4" lg="4" md="4" sm="12">
            <EditImageCoupon />
          </b-col>
          <b-col xl="8" lg="8" md="8" sm="12">
            <FormAddCoupon />
          </b-col>
        </b-row>
      </b-container>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import FormAddCoupon from '../components/_base/addcoupon/FormAddCoupon'
import EditImageCoupon from '../components/_base/editcoupon/EditImageCoupon'

export default {
  components: {
    Navbar,
    Footer,
    FormAddCoupon,
    EditImageCoupon
  }
}
</script>
