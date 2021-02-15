<script>
import { Line } from 'vue-chartjs'
import { mapActions, mapGetters } from 'vuex'
import alertMixin from '../../../mixins/alertMixin'
export default {
  extends: Line,
  mixins: [alertMixin],
  data() {
    return {
      dataLabel: [],
      chartData: [],
      dateNow: ''
    }
  },
  async mounted() {
    //ditambahkanm async await untuk menunggu program menampung data total_transaksi ke array
    //dtambahkan kondisi this.statusData === true untuk kondisi jika proses wait sudah selesai
    this.dateNow = new Date()
    await this.chartActions()
      .then(result => {
        result.data.data.map(x => {
          this.chartData.push(x.total_transaksi)
          this.dataLabel.push(x.tahun)
        })
      })
      .catch(error => {
        this.makeToast(`Failed load data chart`, `${error.data.msg}`, 'danger')
      })
    if (this.statusData === true) {
      this.renderChart(
        {
          labels: this.dataLabel,
          datasets: [
            {
              label: 'Year ' + this.dateNow.getFullYear(),
              data: this.chartData,
              backgroundColor: 'transparent',
              borderColor: 'rgba(19,158,91,0.65)',
              pointBackgroundColor: 'rgba(171, 71, 188, 1)'
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Total Year transaction'
          }
        }
      )
    }
  },
  created() {},
  computed: {
    ...mapGetters(['getChart', 'statusData'])
  },
  methods: {
    ...mapActions(['chartActions']),
    addDataChart() {},
    getDataTransaksi() {}
  }
}
</script>
