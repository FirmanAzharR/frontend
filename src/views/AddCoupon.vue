<template>
  <div class="addcoupon">
    <div>
      <Navbar />
      <b-container
        fluid
        class="bv-example-row"
        style="border-top: 1px solid #d2d2d2;"
      >
        <FormAddCoupon />
      </b-container>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import FormAddCoupon from '../components/_base/addcoupon/FormAddCoupon'

export default {
  components: {
    Navbar,
    Footer,
    FormAddCoupon
  }
}
</script>
