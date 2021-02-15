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
          x.bulan === 1
            ? this.dataLabel.push('January')
            : x.bulan === 2
            ? this.dataLabel.push('February')
            : x.bulan === 3
            ? this.dataLabel.push('March')
            : x.bulan === 4
            ? this.dataLabel.push('April')
            : x.bulan === 5
            ? this.dataLabel.push('May')
            : x.bulan === 6
            ? this.dataLabel.push('June')
            : x.bulan === 7
            ? this.dataLabel.push('July')
            : x.bulan === 8
            ? this.dataLabel.push('August')
            : x.bulan === 9
            ? this.dataLabel.push('September')
            : x.bulan === 10
            ? this.dataLabel.push('October')
            : x.bulan === 11
            ? this.dataLabel.push('November')
            : this.dataLabel.push('December')
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
            text: 'Total mounthly transaction'
          }
        }
      )
    }
  },
  created() {},
  computed: {
    ...mapGetters(['getChart', 'statusData', 'getFilter'])
  },
  methods: {
    ...mapActions(['chartActions']),
    addDataChart() {},
    getDataTransaksi() {}
  }
}
</script>
