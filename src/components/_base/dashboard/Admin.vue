<template>
  <div>
    <h3 style="text-align:center;color: white" class="rubik shadow-text">
      See how your store progress so far
    </h3>
    <div style="margin-top:80px">
      <b-row>
        <b-col sm="12" md="12" lg="4" xl="4">
          <div class="shadow card-style">
            <b-card title="Today Income" class="card-style">
              <!-- <h4 v-if="getDashboard.today[0].subtotal_transaksi">
                Rp. {{ getDashboard.today[0].subtotal_transaksi }}
              </h4>
              <h4 v-else>Rp. 0</h4>
              <b-card-text>
                Total transaction :
                {{ getDashboard.today[0].total_transaction }}
              </b-card-text> -->
            </b-card>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="4" xl="4">
          <div class="shadow card-style">
            <b-card title="Year Income" class="card-style">
              <!-- <h4>Rp. {{ getDashboard.year[0].subtotal_transaksi }}</h4>
              <b-card-text>
                Total transaction :
                {{ getDashboard.year[0].total_transaction }}
              </b-card-text> -->
            </b-card>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="4" xl="4">
          <div class="shadow card-style">
            <b-card title="Total Transaction" class="card-style">
              <!-- <h4>{{ getDashboard.total[0].total_transaction }}</h4>
              <b-card-text>
                Total all transaction
              </b-card-text> -->
            </b-card>
          </div>
        </b-col>
      </b-row>
    </div>
    <div style="margin-top:40px">
      <h6 style="color:white">Untuk Filter</h6>
      <div class="shadow card-style">
        <b-card title="Card title" sub-title="Card subtitle" class="card-style">
          <b-card-text>
            Some quick example text to build on the <em>card title</em> and make
            up the bulk of the card's content.
          </b-card-text>
        </b-card>
      </div>
    </div>
    <div style="margin-top:20px">
      <b-row>
        <b-col sm="12" md="8" lg="8" xl="8">
          <div>
            <b-button block class="btn rubik shadow">Download Report</b-button>
          </div>
        </b-col>
        <b-col sm="12" md="8" lg="4" xl="4">
          <div>
            <b-button block class="btn rubik shadow">Share Report</b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['typeForm'],
  name: 'DashboardAdmin',
  data() {
    return {}
  },
  created() {
    //this.dashboard()
  },
  computed: {
    ...mapGetters(['getDashboard'])
  },
  methods: {
    // mapaction dan mapmutation
    ...mapActions(['dashboard'])
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
.rubik {
  font-family: 'Rubik', sans-serif;
}
.shadow-text {
  text-shadow: 3px 3px 3px #313131;
}
.shadow {
  -webkit-box-shadow: -2px -1px 18px 5px rgba(130, 130, 130, 0.47);
  -moz-box-shadow: -2px -1px 18px 5px rgba(130, 130, 130, 0.47);
  box-shadow: -2px -1px 18px 5px rgba(130, 130, 130, 0.47);
}
.btn {
  background-color: #6a4029;
  border: none;
  color: white;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 15px;
}
.card-style {
  border-radius: 15px;
  border: none;
}
</style>
