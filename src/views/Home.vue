<template>
  <div class="rubik">
    <div>
      <Navbar />
    </div>
    <div class="bg">
      <b-container>
        <div
          style="width:450px;color: white;padding-top:60px;padding-bottom:150px"
        >
          <h2 class="text-left" style="font-size:40px;font-weight:600;">
            Start Your Day with Coffee and Good Meals
          </h2>
          <p style="font-weight:500;font-size:16.5px">
            We provide high quality beans, good taste, and healthy meals made by
            love just for you. Start your day with us for a bigger smile!
          </p>
          <button class="btn-style">
            Get Started
          </button>
        </div>
      </b-container>
    </div>
    <div class="top-float">
      <b-container>
        <b-card>
          <div class="dash-icon">
            <img src="../assets/img/home-location.png" />
            <img src="../assets/img/home-love.png" />
            <img src="../assets/img/home-user.png" />
          </div>
        </b-card>
      </b-container>
    </div>
    <b-container>
      <div style="margin-top:60px;">
        <b-row>
          <b-col sm="12" md="12" lg="6" xl="6">
            <img
              src="../assets/img/35744.png"
              alt=""
              class="responsive"
              style="padding:25px"
            />
          </b-col>
          <b-col sm="12" md="12" lg="6" xl="6" style="padding:25px">
            <br /><br />
            <h3>We Provide Good Coffee and Healthy Meals</h3>
            <p>
              You can explore the menu that we provide with fun and have their
              own taste and make your day better.
            </p>
            <ul>
              <li>
                <b-icon
                  icon="check-circle-fill"
                  variant="success"
                  style="margin-right:10px"
                ></b-icon
                >High quality beans
              </li>

              <li>
                <b-icon
                  icon="check-circle-fill"
                  variant="success"
                  style="margin-right:10px"
                ></b-icon
                >Healthy meals, you can request the ingredients
              </li>

              <li>
                <b-icon
                  icon="check-circle-fill"
                  variant="success"
                  style="margin-right:10px"
                ></b-icon
                >Chat with our staff to get better experience for ordering
              </li>

              <li>
                <b-icon
                  icon="check-circle-fill"
                  variant="success"
                  style="margin-right:10px"
                ></b-icon
                >Free member card with a minimum purchase of IDR 200.000.
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
      <div>
        <h2 style="text-align:center">Here is People’s Favorite</h2>
        <p style="text-align:center">
          Let’s choose and have a bit taste of poeple’s favorite. It might be
          yours too!
        </p>
        <div style="margin-top:120px;">
          <b-row>
            <b-col sm="4" md="4" lg="4" xl="4">
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
            <b-col sm="4" md="4" lg="4" xl="4">
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </b-card-text>
                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
            <b-col sm="4" md="4" lg="4" xl="4">
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </b-card-text>
                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </div>
      <div>
        <h2 style="text-align:center; margin-top: 100px">
          Visit Our Store in the Spot on the Map Below
        </h2>
        <p style="text-align:center">
          See our store in every city on the spot and spen your good day there.
          See you soon!
        </p>
        <center>
          <div style="padding:30px">
            <img src="../assets/img/map.png" alt="" class="responsive" />
          </div>
        </center>
      </div>
      <div style="text-align:center">
        <h2>Our Partner</h2>
        <img src="../assets/img/partner.png" alt="" />
      </div>
      <div style="margin-top:60px;text-align:center;margin-bottom:150px">
        <h2>Loved by Thousands of Happy Customer</h2>
        <p>
          These are the stories of our customers who have visited us with great
          pleasure.
        </p>
        <b-row style="margin-top:90px;">
          <b-col sm="12" md="4" xl="4" lg="4">
            <b-card title="Card title" sub-title="Card subtitle">
              <b-card-text>
                Some quick example text to build on the
                <em>card title</em> and make up the bulk of the card's content.
              </b-card-text>

              <b-card-text>A second paragraph of text in the card.</b-card-text>
            </b-card>
          </b-col>
          <b-col sm="12" md="4" xl="4" lg="4">
            <b-card title="Card title" sub-title="Card subtitle">
              <b-card-text>
                Some quick example text to build on the
                <em>card title</em> and make up the bulk of the card's content.
              </b-card-text>
              <b-card-text>A second paragraph of text in the card.</b-card-text>
            </b-card>
          </b-col>
          <b-col sm="12" md="4" xl="4" lg="4">
            <b-card title="Card title" sub-title="Card subtitle">
              <b-card-text>
                Some quick example text to build on the
                <em>card title</em> and make up the bulk of the card's content.
              </b-card-text>
              <b-card-text>A second paragraph of text in the card.</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <div class="bottom-float">
      <b-container>
        <b-card title="Card title" sub-title="Card subtitle">
          <b-card-text>
            Some quick example text to build on the
            <em>card title</em> and make up the bulk of the card's content.and
            make up the bulk of the card's content.and make up the bulk of the
            card's content.
          </b-card-text>
        </b-card>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
body,
html {
  height: 100%;
}
.dash-icon {
  display: flex;
}
.responsive {
  width: 100%;
  height: auto;
}
.bg {
  /* The image used */
  background-image: url('../assets/img/bg-landingpage.png');

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
  padding: 15px;
  width: 300px;
  background-color: #ffba33;
  border-radius: 15px;
  color: #7d4f2a;
  font-weight: 600;
  border: none;
}
.top-float {
  position: absolute;
  z-index: 2;
  top: 67%;
  left: 0px;
}
.bottom-float {
  position: absolute;
  z-index: 2;
  top: 680%;
  left: 0px;
}
ul {
  padding: 0;
  list-style-type: none;
}
@media only screen and (min-width: 600px) {
  .top-float {
    left: 105px;
  }
  .bottom-float {
    top: 470%;
    left: 105px;
  }
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
</style>
