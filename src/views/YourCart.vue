<template>
  <div>
    <Navbar />
    <div class="bg">
      <b-container>
        <h2
          style="padding-top:60px;margin-bottom:60px; color:white"
          class="rubik"
        >
          Checkout your item now!
        </h2>
        <b-row>
          <b-col sm="12" md="6" lg="6" xl="6">
            <div class="rubik" style="max-width:450px">
              <b-card>
                <h3>Order Summary</h3>
                <div>
                  <b-row>
                    <b-col>
                      iamge
                    </b-col>
                    <b-col>
                      items name
                    </b-col>
                    <b-col>
                      price
                    </b-col>
                  </b-row>
                </div>
                <hr />
                <div>
                  <b-row>
                    <b-col>
                      label subtotal
                    </b-col>
                    <b-col>
                      total
                    </b-col>
                  </b-row>
                </div>
                <div>
                  {{ carts }}
                </div>
              </b-card>
            </div>
          </b-col>

          <b-col sm="12" md="6" lg="6" xl="6">
            <div class="rubik" style="max-width:450px">
              <h6 style="color:white">Address details</h6>
              <b-card title="Card title" sub-title="Card subtitle">
                <b-card-text>
                  Some quick example text to build on the
                  <em>card title</em> and make up the bulk of the card's
                  content.
                </b-card-text>

                <b-card-text
                  >A second paragraph of text in the card.</b-card-text
                >
              </b-card>
            </div>
            <div class="rubik" style="max-width:450px">
              <h6 style="color:white">Payment method</h6>
              <b-card title="Card title" sub-title="Card subtitle">
                <b-card-text>
                  Some quick example text to build on the
                  <em>card title</em> and make up the bulk of the card's
                  content.
                </b-card-text>

                <b-card-text
                  >A second paragraph of text in the card.</b-card-text
                >
              </b-card>
            </div>
            <b-button
              class="btn-style rubik"
              style="width:450px;max-width:450px;"
              >Confirm and Pay</b-button
            >
          </b-col>
        </b-row>
      </b-container>
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
      carts: []
    }
  },
  created() {
    this.getCarts()
  },
  methods: {
    getCarts() {
      let getCart = localStorage.getItem('cart')
      getCart = JSON.parse(getCart)
      if (getCart) {
        this.carts = getCart
      } else {
        this.carts = []
      }
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

.btn-style {
  padding: 10px;
  background-color: #ffba33;
  border-radius: 15px;
  color: #7d4f2a;
  font-weight: 600;
  border: none;
  font-weight: 700;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-top: 40px;
  margin-bottom: 160px;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
</style>
