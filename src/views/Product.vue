<template>
  <div class="product">
    <div>
      <Navbar />
      <b-container fluid class="bv-example-row">
        <b-row style="border-top: 1px solid #d2d2d2;">
          <b-col
            xl="4"
            lg="4"
            md="12"
            sm="12"
            style="border-right: 1px solid #d2d2d2"
            ><HomePromo
          /></b-col>
          <b-col xl="8" md="12" sm="12"><HomeProduct /></b-col>
        </b-row>
      </b-container>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import HomePromo from '../components/_base/HomePromo'
import HomeProduct from '../components/_base/HomeProduct'
//import axios from 'axios'
export default {
  name: 'Product',
  components: {
    Navbar,
    HomePromo,
    HomeProduct,
    Footer
  }
}
</script>
