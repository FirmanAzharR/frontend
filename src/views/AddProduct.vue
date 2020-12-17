<template>
  <div class="addproduct">
    <div>
      <Navbar />
      <b-container
        fluid
        class="bv-example-row"
        style="border-top: 1px solid #d2d2d2;"
      >
        <FormAddProduct />
      </b-container>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import FormAddProduct from '../components/_base/addproduct/FormAddProduct'

export default {
  components: {
    Navbar,
    Footer,
    FormAddProduct
  }
}
</script>
