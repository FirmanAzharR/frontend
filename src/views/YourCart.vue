<template>
  <div>
    <Navbar />
    <div class="bg">
      <h2>Checkout your item now!</h2>
      <b-row>
        <b-col sm="12" md="6" lg="6" xl="6">
          <div>
            <b-card title="Card title" sub-title="Card subtitle">
              <b-card-text>
                Some quick example text to build on the <em>card title</em> and
                make up the bulk of the card's content.
              </b-card-text>

              <b-card-text>A second paragraph of text in the card.</b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col sm="12" md="6" lg="6" xl="6">
          <div>
            <h6>Address details</h6>
            <b-card title="Card title" sub-title="Card subtitle">
              <b-card-text>
                Some quick example text to build on the <em>card title</em> and
                make up the bulk of the card's content.
              </b-card-text>

              <b-card-text>A second paragraph of text in the card.</b-card-text>
            </b-card>
          </div>
          <div>
            <h6>Payment method</h6>
            <b-card title="Card title" sub-title="Card subtitle">
              <b-card-text>
                Some quick example text to build on the <em>card title</em> and
                make up the bulk of the card's content.
              </b-card-text>

              <b-card-text>A second paragraph of text in the card.</b-card-text>
            </b-card>
          </div>
          <b-button>Confirm and Pay</b-button>
        </b-col>
      </b-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/_base/Footer'
import Navbar from '../components/_base/Navbar'
export default {
  components: {
    Footer,
    Navbar
  },
  data() {
    return {
      type: 'signin'
    }
  }
}
</script>

<style scoped>
.bg {
  /* The image used */
  background-image: url('../assets/img/bg-cart.png');

  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.rubik {
  font-family: 'Rubik', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
</style>
