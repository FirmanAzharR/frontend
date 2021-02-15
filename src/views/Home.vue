<template>
  <div class="rubik">
    <div>
      <Navbar />
    </div>
    <div class="bg">
      <b-container>
        <div class="tittle">
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
        <b-card style="border: none;" class="shadow">
          <div class="card-info">
            <div class="d-flex align-items-center">
              <img class="dash-icon" src="../assets/img/home-user.png" />
              <div style="margin-left:20px">
                <h3>90+</h3>
                Staff
              </div>
            </div>
            <div class="d-flex align-items-center">
              <img class="dash-icon" src="../assets/img/home-location.png" />
              <div style="margin-left:20px">
                <h3>30+</h3>
                Stores
              </div>
            </div>
            <div class="d-flex align-items-center">
              <img
                style="width:70px;height:65px"
                src="../assets/img/home-love.png"
              />
              <div style="margin-left:20px">
                <h3>800+</h3>
                Customers
              </div>
            </div>
          </div>
        </b-card>
      </b-container>
    </div>
    <b-container>
      <div class="store-info">
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
            <h3 class="sub-title">We Provide Good Coffee and Healthy Meals</h3>
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
        <div class="margin-items-menu">
          <b-row>
            <b-col sm="4" md="4" lg="4" xl="4">
              <div>
                <img
                  class="item-img shadow"
                  src="../assets/img/image 27.png"
                  alt=""
                />
                <b-card class="card-menu-item">
                  <b-card-text style="margin-top:80px;text-align:center">
                    <h5>Hazelnut Latte</h5>
                    <div class="d-flex justify-content-center">
                      <div>
                        <ul style="margin-top:40px;text-align:left">
                          <li>
                            <b-icon
                              icon="check"
                              variant="success"
                              font-scale="1.3"
                            ></b-icon>
                            HazelnutSyrup
                          </li>
                          <li>
                            <b-icon
                              icon="check"
                              variant="success"
                              font-scale="1.3"
                            ></b-icon
                            >Wanilla Whipped Cream
                          </li>
                          <li>
                            <b-icon
                              icon="check"
                              variant="success"
                              font-scale="1.3"
                            ></b-icon
                            >Ice / Hot
                          </li>
                          <li>
                            <b-icon
                              icon="check"
                              variant="success"
                              font-scale="1.3"
                            ></b-icon
                            >Sliced Banana on Top
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3 style="margin-top:80px">IDR 25.000</h3>
                    <button class="btn-order">
                      Order Now
                    </button>
                  </b-card-text>
                </b-card>
              </div>
            </b-col>
            <b-col sm="4" md="4" lg="4" xl="4">
              <div>
                <img
                  class="item-img shadow"
                  src="../assets/img/image 22.png"
                  alt=""
                />
                <b-card class="card-menu-item">
                  <b-card-text style="margin-top:80px;text-align:center">
                    <h5>Hazelnut Latte</h5>
                    <div class="d-flex justify-content-center">
                      <div>
                        <ul style="margin-top:40px;text-align:left">
                          <li>
                            <b-icon
                              icon="check"
                              variant="success"
                              font-scale="1.3"
                            ></b-icon>
                            HazelnutSyrup
                          </li>
                          <li>
                            <b-icon
                              icon="check"
                              variant="success"
                              font-scale="1.3"
                            ></b-icon
                            >Wanilla Whipped Cream
                          </li>
                          <li>
                            <b-icon
                              icon="check"
                              variant="success"
                              font-scale="1.3"
                            ></b-icon
                            >Ice / Hot
                          </li>
                          <li>
                            <b-icon
                              icon="check"
                              variant="success"
                              font-scale="1.3"
                            ></b-icon
                            >Sliced Banana on Top
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3 style="margin-top:80px">IDR 25.000</h3>
                    <button class="btn-order">
                      Order Now
                    </button>
                  </b-card-text>
                </b-card>
              </div>
            </b-col>
            <b-col sm="4" md="4" lg="4" xl="4">
              <div>
                <img
                  class="item-img shadow"
                  src="../assets/img/image 30.png"
                  alt=""
                />
                <b-card class="card-menu-item">
                  <b-card-text style="margin-top:80px;text-align:center">
                    <h5>Hazelnut Latte</h5>
                    <div class="d-flex justify-content-center">
                      <div>
                        <ul style="margin-top:40px;text-align:left">
                          <li>
                            <b-icon
                              icon="check"
                              variant="success"
                              font-scale="1.3"
                            ></b-icon>
                            HazelnutSyrup
                          </li>
                          <li>
                            <b-icon
                              icon="check"
                              variant="success"
                              font-scale="1.3"
                            ></b-icon
                            >Wanilla Whipped Cream
                          </li>
                          <li>
                            <b-icon
                              icon="check"
                              variant="success"
                              font-scale="1.3"
                            ></b-icon
                            >Ice / Hot
                          </li>
                          <li>
                            <b-icon
                              icon="check"
                              variant="success"
                              font-scale="1.3"
                            ></b-icon
                            >Sliced Banana on Top
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3 style="margin-top:80px">IDR 25.000</h3>
                    <button class="btn-order">
                      Order Now
                    </button>
                  </b-card-text>
                </b-card>
              </div>
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
      <div style="text-align:center" class="partner">
        <h2>Our Partner</h2>
        <img src="../assets/img/partner.png" alt="" />
      </div>
      <div
        style="margin-top:60px;text-align:center;margin-bottom:80px"
        class="comment"
      >
        <h2>Loved by Thousands of Happy Customer</h2>
        <p>
          These are the stories of our customers who have visited us with great
          pleasure.
        </p>
        <div class="customer-comment">
          <div>
            <b-card class="card-comment">
              <div class="user-info">
                <div style="margin-right:10px">
                  <img src="../assets/img/user1.png" alt="" />
                </div>
                <div style="text-align:left">
                  <h6>Viezh Robert</h6>
                  <div style="font-size:14px">Warsaw, Poland</div>
                </div>
              </div>
              <p style="text-align:left">
                “Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!
              </p>
            </b-card>
          </div>
          <div>
            <b-card class="card-comment">
              <div class="user-info">
                <div style="margin-right:10px">
                  <img src="../assets/img/user2.png" alt="" />
                </div>
                <div style="text-align:left">
                  <h6>Yessica Christy</h6>
                  <div style="font-size:14px">Yessica Christy</div>
                </div>
              </div>
              <p style="text-align:left">
                “I like it because I like to travel far and still can make my
                day better just by drinking their Hazelnut Latte
              </p>
            </b-card>
          </div>
          <div>
            <b-card class="card-comment">
              <div class="user-info">
                <div style="margin-right:10px">
                  <img src="../assets/img/user3.png" alt="" />
                </div>
                <div style="text-align:left">
                  <h6>Kim Young Jou</h6>
                  <div style="font-size:14px">Kim Young Jou</div>
                </div>
              </div>
              <p style="text-align:left">
                “This is very unusual for my taste, I haven’t liked coffee
                before but their coffee is the best! and yup, you have to order
                the chicken wings, the best in town!
              </p>
            </b-card>
          </div>
        </div>
      </div>
    </b-container>
    <div style="margin-bottom:40px">
      <b-container>
        <div class="card-footer-info" style="border:1px solid #d2d2d2">
          <div class="text">
            <h3>Check our promo today!</h3>
            <p>Let see the deals and pick yours</p>
          </div>
          <b-button class="btn-see">
            See Promo
          </b-button>
        </div>
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
.sub-title {
  margin-top: 50px;
}
.margin-items-menu {
  margin-top: 120px;
}
.user-info {
  display: flex;
  justify-content: start;
  margin-bottom: 20px;
  align-items: center;
}
.customer-comment {
  display: flex;
  justify-content: space-between;
}
.card-comment {
  height: 230px;
  width: 350px;
  border-radius: 10px;
}
.btn-see {
  height: 60px;
  width: 250px;
  color: #6a4029;
  border-radius: 10px;
  background-color: #fcb832;
  border: none;
  font-weight: bold;
}
.btn-order {
  border: 1px solid #fcb832;
  border-radius: 50px;
  width: 177px;
  height: 45px;
  color: #6a4029;
  background-color: white;
  margin-top: 20px;
}
.btn-order:hover {
  border: 1px solid #fcb832;
  border-radius: 50px;
  width: 177px;
  height: 45px;
  color: #6a4029;
  background-color: #fcb832;
  margin-top: 20px;
}
.card-menu-item {
  height: 567px;
  max-width: 330px;
  border-radius: 10px;
}
.item-img {
  object-fit: cover;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  top: 70px;
  left: 100px;
  z-index: 2;
}
.store-info {
  margin-top: 120px;
}
.shadow {
  box-shadow: -4px 13px 21px -11px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -4px 13px 21px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px 13px 21px -11px rgba(0, 0, 0, 0.75);
}
.card-info {
  height: 200px;
  width: 1140px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.card-footer-info {
  height: 200px;
  width: 1110px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
}
.card-footer-info .text {
  max-width: 300px;
  color: #6a4029;
}
.centered {
  display: flex;
  align-items: center;
  align-items: center;
}
.dash-icon {
  width: 55px;
  height: 55px;
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
ul {
  padding: 0;
  list-style-type: none;
}
.tittle {
  width: 450px;
  color: white;
  padding-top: 60px;
  padding-bottom: 150px;
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
@media only screen and (max-width: 600px) {
  .card-footer-info {
    width: auto;
  }
  .text h3 {
    font-size: 20px;
  }
  .top-float {
    display: none;
  }
  .tittle {
    width: auto;
    color: white;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .store-info {
    margin-top: 30px;
  }
  .sub-title {
    margin-top: 0px;
  }
  .margin-items-menu {
    margin-top: 0px;
  }
  .partner {
    display: none;
  }
  .comment {
    display: none;
  }
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
</style>
