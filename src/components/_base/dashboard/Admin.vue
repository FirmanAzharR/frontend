<template>
  <div class="animate__animated animate__fadeIn">
    <h3 style="text-align:center;color: white" class="shadow-text">
      See how your store progress so far
    </h3>
    <div style="margin-top:80px" class="popins">
      <b-row>
        <b-col sm="12" md="12" lg="4" xl="4">
          <div class="shadow card-style">
            <b-card sub-title="Today Income" class="card-style">
              <b-card-text style="margin:20px 0px">
                <h3 v-if="getCard.today[0].total_transaksi !== null">
                  Rp. {{ getCard.today[0].total_transaksi }}
                </h3>
                <h3 v-else>
                  Rp. 0
                </h3>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="4" xl="4">
          <div class="shadow card-style">
            <b-card sub-title="Year Income" class="card-style">
              <b-card-text style="margin:20px 0px">
                <h3>Rp. {{ getCard.year[0].total_transaksi }}</h3>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
        <b-col sm="12" md="12" lg="4" xl="4">
          <div class="shadow card-style">
            <b-card sub-title="Total Transaction" class="card-style">
              <b-card-text style="margin:20px 0px">
                <h3>{{ getCard.total[0].total_transaction }} Data</h3>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </div>
    <div style="margin-top:40px">
      <b-dropdown
        id="dropdown-dropright"
        dropright
        text="Filter"
        variant="primary"
        class="m-2"
      >
        <b-dropdown-item @click="filter('month')">Mounth</b-dropdown-item>
        <b-dropdown-item @click="filter('year')">Year</b-dropdown-item>
      </b-dropdown>
      <div class="shadow card-style">
        <b-card
          :title="
            getFilter === 'month'
              ? 'Chart Total Mounthly Transactions'
              : 'Chart Total Year Transactions'
          "
          :sub-title="'Last Updated ' + dateNow"
          class="card-style"
        >
          <br />
          <div v-if="getFilter === 'month'">
            <LineChartMonth />
          </div>
          <div v-else>
            <LineChartYear />
          </div>
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
import { mapActions, mapGetters, mapMutations } from 'vuex'
import LineChartMonth from './LineChartMonth'
import LineChartYear from './LineChartYear'
export default {
  props: ['typeForm'],
  name: 'DashboardAdmin',
  components: {
    LineChartMonth,
    LineChartYear
  },
  data() {
    return {
      dateNow: ''
    }
  },
  created() {
    this.dateNow = new Date()
    this.cardActions()
  },
  computed: {
    ...mapGetters(['getCard', 'getFilter'])
  },
  methods: {
    // mapaction dan mapmutation
    ...mapActions(['cardActions', 'chartActions']),
    ...mapMutations(['handleFilter']),
    filter(value) {
      this.filterValue = value
      this.handleFilter(value)
      this.chartActions()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
.rubik {
  font-family: 'Rubik', sans-serif;
}
.popins {
  font-family: 'Poppins', sans-serif;
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

@media only screen and (max-width: 600px) {
  .card-style {
    margin-bottom: 20px;
  }
  .btn {
    margin-bottom: 20px;
  }
}
</style>
