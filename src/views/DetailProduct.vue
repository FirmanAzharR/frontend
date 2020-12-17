<template>
  <div class="detailproduct">
    <div>
      <Navbar />
      <b-container
        fluid
        class="bv-example-row"
        style="border-top: 1px solid #d2d2d2;"
      >
        <b-container>
          <div style="margin-top:25px">
            <ProductInformation />
          </div>
          <div style="margin-top:50px"></div>
          <FormCheckout />
        </b-container>
      </b-container>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import ProductInformation from '../components/_base/detailproduct/ProductInformation'
import FormCheckout from '../components/_base/detailproduct/FormCheckout'

//import axios from 'axios'
export default {
  name: 'Product',
  components: {
    Navbar,
    Footer,
    ProductInformation,
    FormCheckout
  }
}
</script>
