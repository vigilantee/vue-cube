 
<!--
 <template>
  <la-cartesian autoresize :data="values" :colors="colors" :padding="[0, 0, 5, 0]">
    <la-line curve :width="2" color="#7DB3FF" :prop="metrics[0]" />
    <la-y-axis :nbTicks="4"></la-y-axis>
    <la-x-axis prop="x" :format="dateFormatter" :interval="6"></la-x-axis>
    <la-tooltip></la-tooltip>
  </la-cartesian>
</template>

<script>
import moment from "moment";
export default {
  name: "LineChart",
  props: {
    values: Array,
    metrics: Array,
  },
  methods: {
    dateFormatter: function (value) {
      return moment(value).format("MMM YY");
    },
  },
  data() {
    return {
      colors: [
        "#7DB3FF",
        "#49457B",
        "#FF7C78",
        "#FED3D0",
        "#6F76D9",
        "#9ADFB4",
        "#2E7987",
      ],
    };
  },
};
</script>

<style scoped>
</style>
-->


<script>
  import { Line } from 'vue-chartjs';
  import moment from "moment";

  export default {
    props: {
      values: Array,
      metrics: Array,
    },
    extends: Line,
    data () {
      return {
        chartData: {
          labels: this.values.map(value=>moment(value.category).format('YYYY-MM-DD')),
          datasets: [
            {
              label: 'TabSalesInvoice.totalQty',
              data: this.values.map(value=>value["TabSalesInvoice.totalQty"]),
              fill: false,
              borderColor: '#2554FF',
              backgroundColor: '#2554FF',
              borderWidth: 1
            },
            {
              label: 'TabSalesInvoice.total',
              data: this.values.map(value=>value["TabSalesInvoice.total"]),
              fill: false,
              borderColor: '#E2B230',
              backgroundColor: '#E2B230',
              borderWidth: 1
            },
            {
              label: 'TabSalesInvoice.outstandingAmount',
              data: this.values.map(value=>value["TabSalesInvoice.outstandingAmount"]),
              fill: false,
              borderColor: '#E2B230',
              backgroundColor: '#E2B230',
              borderWidth: 1
            }  
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>