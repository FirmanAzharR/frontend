<template>
  <div>
    <Navbar />
    <div class="bg">
      <b-container>
        <h2
          style="padding-top:80px; color:white"
          class="rubik shadow-text"
          v-item-center
        >
          Let's see what you have bought!
        </h2>
        <p
          style="margin-bottom:80px;color:white;"
          class="rubik shadow-text"
          v-item-center
        >
          Press Icon delete to delete history
        </p>
        <b-row>
          <b-col
            sm="6"
            md="4"
            lg="4"
            xl="4"
            v-for="(item, index) in getHistory"
            :key="index"
          >
            <div class="centered">
              <b-card class="card-style">
                <div
                  v-b-modal.modal-sm
                  style="position:absolute;z-index:2;top:10px;right:10px"
                  @click="
                    confirmDelete(item.transaction_number, item.transaction_id)
                  "
                >
                  <b-iconstack font-scale="2">
                    <b-icon
                      stacked
                      icon="circle-fill"
                      variant="danger"
                    ></b-icon>
                    <b-icon
                      stacked
                      icon="trash-fill"
                      scale="0.5"
                      variant="white"
                    ></b-icon>
                  </b-iconstack>
                </div>
                <b-row
                  v-b-modal.modal-scrollable
                  @click="getHistoryById(item.transaction_id)"
                >
                  <b-col cols="4" style="border-right:1px solid #d2d2d2">
                    <b-img
                      rounded="circle"
                      thumbnail
                      fluid
                      :src="require('../assets/img/food-1.png')"
                      alt="Image"
                      class="shadow-card"
                    ></b-img
                  ></b-col>
                  <b-col cols="8"
                    ><b-card-text class="rubik">
                      Invoice : <b>#{{ item.transaction_number }}</b> <br />
                      Price : Rp. {{ item.total }} <br />
                      {{ item.transaction_created_at.substr(0, 10) }}
                    </b-card-text></b-col
                  >
                </b-row>
              </b-card>
            </div>
          </b-col>
        </b-row>
        <div style="padding-top:100px"></div>
        <b-modal
          id="modal-sm"
          centered
          title="Delete history ?"
          header-bg-variant="warning"
          header-text-variant="dark"
          body-bg-variant="light"
          body-text-variant="dark"
          footer-bg-variant="warning"
          footer-text-variant="dark"
          size="sm"
        >
          <h4>invoice #{{ invoice }}</h4>
          <template #modal-footer="{ cancel }">
            <b-button size="sm" variant="danger" @click="onDelete()">
              OK
            </b-button>
            <b-button size="sm" @click="cancel()">
              Cancel
            </b-button>
          </template>
        </b-modal>
        <b-modal
          id="modal-scrollable"
          scrollable
          :title="'Detail History #'"
          ok-only
          ok-variant="success"
          button-size="sm"
        >
          <b-row
            v-for="(item, index) in getByIdHistory"
            :key="index"
            style="margin-bottom:20px"
            class="rubik"
          >
            <b-col>
              <div class="centered">
                <b-img
                  rounded="circle"
                  thumbnail
                  fluid
                  :src="'http://localhost:5000/product/' + item.product_img"
                  alt="Image"
                  class="shadow-card"
                  style="width:80px"
                ></b-img>
              </div>
            </b-col>
            <b-col>
              <div class="centered">
                {{ item.product_name }} <br />
                Rp. {{ item.product_price }} <br />
                x {{ item.quantity }}
              </div>
            </b-col>
            <b-col>
              <div class="centered">Rp. {{ item.subtotal }}</div>
            </b-col>
          </b-row>
          <hr />
          <b-row>
            <b-col>
              <div class="centered rubik" style="font-weight:bold">
                Subtotal <br />
                Discon <br />
                Fees <br />
                Total <br />
              </div>
            </b-col>
            <b-col>
              <div class="centered rubik" style="font-weight:bold">
                Rp. 130000 <br />
                Rp. 10000 <br />
                Rp. 10000 <br />
                Rp. 120000 <br />
              </div>
            </b-col>
          </b-row>
        </b-modal>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/_base/Footer'
import Navbar from '../components/_base/Navbar'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'History',
  components: {
    Footer,
    Navbar
  },
  data() {
    return {
      invoice: '',
      id: ''
    }
  },
  created() {
    this.getHistorys(this.setUser.user_id)
  },
  computed: {
    ...mapGetters(['getHistory', 'getByIdHistory', 'setUser'])
  },
  methods: {
    ...mapActions(['getHistorys', 'deleteHistory', 'getHistoryById']),
    makeToast(bodyMsg, msg, variant) {
      this.$bvToast.toast(bodyMsg, {
        title: msg,
        variant: variant,
        solid: true
      })
    },
    onDelete() {
      this.deleteHistory(this.id)
        .then(result => {
          this.makeToast('History Deleted', ` ${result.data.msg} !!`, 'success')
          this.getHistorys(5)
        })
        .catch(error => {
          console.log(error)
          this.makeToast('Delete History Failed', 'Failed', 'danger')
        })
    },
    confirmDelete(inv, id) {
      this.invoice = inv
      this.id = id
    }
  }
}
</script>

<style scoped>
.shadow-card {
  -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
}
.centered {
  display: flex;
  align-items: center;
}
.shadow-text {
  text-shadow: 3px 3px 3px #313131;
}
.bg {
  /* The image used */
  background-image: url('../assets/img/history-bg.png');

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
.card-style {
  height: auto;
  width: auto;
  border: none;
  border-radius: 15px;
  margin-bottom: 30px;
  cursor: pointer;
  border-bottom: 3px solid #d46804;
}
.img {
  width: auto;
  border-radius: 50%;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
</style>
