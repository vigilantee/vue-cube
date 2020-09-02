<template>
  <div>
    <h4> 5 Task</h4>
    hello from TabSalesAverageInvoiceAmount 
    </br>
    <h1>{{this.values[0]["TabSalesInvoice.AverageInvoiceAmount"]}}</h1>
  </div>
</template>
<script>
  export default {
    name:"TabSalesAverageInvoiceAmount",
    props: {
      values: Array,
      metrics: Array,
    },
    mounted () {
        // console.log("TabSalesAverageInvoiceAmount............",this.values[0]["TabSalesInvoice.AverageInvoiceAmount"]);
    }
  }
</script>