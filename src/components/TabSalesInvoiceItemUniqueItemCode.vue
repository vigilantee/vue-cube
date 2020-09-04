<template>
  <div>
    hello from TabSalesInvoiceItemUniqueItemCode 
    </br>
    <h1>{{this.values[0]["TabSaleInvoiceItem.itemCodeCount"]}}</h1>
  </div>
</template>
<script>
  export default {
    name:"TabSalesInvoiceItemUniqueItemCode",
    props: {
      values: Array,
      metrics: Array,
    },
    mounted () {
        // console.log("TabSalesAverageInvoiceAmount............",this.values[0]["TabSalesInvoice.AverageInvoiceAmount"]);
    }
  }
</script>