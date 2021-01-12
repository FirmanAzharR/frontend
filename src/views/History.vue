<template>
  <div>
    <Navbar />
    <div class="bg">
      <b-container>
        <h2 style="padding-top:80px; color:white" class="rubik" v-item-center>
          Let's see what you have bought!
        </h2>
        <p style="margin-bottom:80px;color:white;" class="rubik" v-item-center>
          Press delete to delete item
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
            <div>
              <b-card class="card-style">
                <b-card-text>
                  Invoice : {{ item.transaction_number }} <br />
                  subtotal : {{ item.subtotal }}
                </b-card-text>
                <b-button @click="deleteConfirm()">delete</b-button>
                <b-button
                  v-b-modal.modal-center
                  @click="getHistoryById(item.transaction_id)"
                  >view</b-button
                >
              </b-card>
            </div>
          </b-col>
        </b-row>
        <div style="padding-top:100px"></div>
        <b-modal id="modal-center" centered :title="'Detail History  '">
          <p class="my-4">{{ getByIdHistory[0] }}</p>
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
    return {}
  },
  created() {
    this.getHistorys(5)
  },
  computed: {
    ...mapGetters(['getHistory', 'getByIdHistory'])
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
    onDelete(id) {
      this.deleteHistory(id)
        .then(result => {
          this.makeToast(
            'Coupon Deleted',
            `Your History ${result} Deleted successfully`,
            'success'
          )
          this.getHistorys(5)
        })
        .catch(error => {
          console.log(error.msg)
          this.makeToast('Delete History Failed', 'Failed', 'danger')
        })
    },
    deleteConfirm() {
      this.boxTwo = ''
      this.$bvModal
        .msgBoxConfirm('Are you sure to delete this history ?', {
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
        .then(value => {
          this.boxTwo = value
        })
        .catch(err => {
          this.boxTwo = err
        })
    }
  }
}
</script>

<style scoped>
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
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
</style>
