<script>
  import { Bar } from 'vue-chartjs';
  import colour from "./colour";


  export default {
    name:"TabCustomerBarChartByNewCustomer",
    props: {
    values: Array,
    metrics: Array,
    },
    extends: Bar,
    data() {
      return {
        chartData: {
          labels: this.values.map(value=>value.category),
          datasets: [{
            label: 'Bar Chart',
            borderWidth: 1,
            backgroundColor: colour,
            borderColor: colour,
            pointBorderColor: '#2554FF',
            data:this.values.map(value=>value["TabBin.actualQty"])
          }]
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
            xAxes: [{
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
    mounted() {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>