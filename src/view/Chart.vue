<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <div class="card-text">
        <div class="d-flex justify-content-center text-dark">
          <div class="spinner-border" role="status" v-if="loading">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <h1
          v-if="!loading && type === 'number'"
          height="400"
        >{{ parseFloat(values[0][metrics[0]]).toLocaleString() }}</h1>
        <line-chart v-if="!loading && type === 'line'" :values="values" :metrics="metrics" />
        <bar-chart v-if="!loading && type === 'stackedBar'" :values="values" :metrics="metrics" />
        <tab-customer-bar-chart-by-new-customer v-if="!loading && type === 'TabCustomerBarChartByNewCustomer'" :values="values" :metrics="metrics" />
        <tab-sales-invoice-bar-chart-by-sales-partner v-if="!loading && type === 'TabSalesInvoiceBarChartBySalesPartner'" :values="values" :metrics="metrics" />
        <pie-chart v-if="!loading && type === 'pieChart'" :values="values" :metrics="metrics" />
        <pie-chart-territory v-if="!loading && type === 'pieChartTerritory'" :values="values" :metrics="metrics" />
        <pie-chart-customer-group v-if="!loading && type === 'pieChartCustomerGroup'" :values="values" :metrics="metrics" />
        <tab-sales-average-invoice-amount v-if="!loading && type === 'TabSalesAverageInvoiceAmount'" :values="values" :metrics="metrics" />
        <tab-sales-total-invoice-count v-if="!loading && type === 'TabSalesTotalInvoiceCount'" :values="values" :metrics="metrics" />
        <tab-customer-count v-if="!loading && type === 'TabCustomerCount'" :values="values" :metrics="metrics" />
        <tab-sales-invoice-net-total v-if="!loading && type === 'TabSalesInvoiceNetTotal'" :values="values" :metrics="metrics" />
        <tab-sales-invoice-item-horizontal-bar-chart-by-item-name v-if="!loading && type === 'TabSalesInvoiceItemHorizontalBarChartByItemName'" :values="values" :metrics="metrics" />
        <tab-sales-invoice-item-horizontal-bar-chart-by-item-group v-if="!loading && type === 'TabSalesInvoiceItemHorizontalBarChartByItemGroup'" :values="values" :metrics="metrics" />
        <tab-purchase-invoice-horizontal-bar-chart-by-supplier v-if="!loading && type === 'TabPurchaseInvoiceHorizontalBarChartBySupplier'" :values="values" :metrics="metrics" />
        <pie-sales-invoice-by-status v-if="!loading && type === 'PieSalesInvoiceByStatus'" :values="values" :metrics="metrics" />
        <tab-bin-item-code-wise v-if="!loading && type === 'TabBinItemCodeWise'" :values="values" :metrics="metrics" />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import TabSalesInvoiceBarChartBySalesPartner from "../components/TabSalesInvoiceBarChartBySalesPartner";
import TabCustomerBarChartByNewCustomer from "../components/TabCustomerBarChartByNewCustomer";
import PieChart from "../components/PieChart";
import PieChartTerritory from "../components/PieChartTerritory";
import PieChartCustomerGroup from "../components/PieChartCustomerGroup";
import TabSalesAverageInvoiceAmount from "../components/TabSalesAverageInvoiceAmount";
import TabSalesTotalInvoiceCount from "../components/TabSalesTotalInvoiceCount";
import TabCustomerCount from "../components/TabCustomerCount";
import TabSalesInvoiceNetTotal from "../components/TabSalesInvoiceNetTotal";
import TabSalesInvoiceItemHorizontalBarChartByItemName from "../components/TabSalesInvoiceItemHorizontalBarChartByItemName";
import TabSalesInvoiceItemHorizontalBarChartByItemGroup from "../components/TabSalesInvoiceItemHorizontalBarChartByItemGroup";
import TabPurchaseInvoiceHorizontalBarChartBySupplier from "../components/TabPurchaseInvoiceHorizontalBarChartBySupplier";
import PieSalesInvoiceByStatus from "../components/PieSalesInvoiceByStatus";
import TabBinItemCodeWise from "../components/TabBinItemCodeWise";


export default {
  components: {
    LineChart,
    BarChart,
    TabCustomerBarChartByNewCustomer,
    TabSalesInvoiceBarChartBySalesPartner,
    PieChart,
    PieChartTerritory,
    PieChartCustomerGroup,
    TabSalesAverageInvoiceAmount,
    TabSalesTotalInvoiceCount,
    TabCustomerCount,
    TabSalesInvoiceItemHorizontalBarChartByItemName,
    TabSalesInvoiceItemHorizontalBarChartByItemGroup,
    TabPurchaseInvoiceHorizontalBarChartBySupplier,
    PieSalesInvoiceByStatus,
    TabSalesInvoiceNetTotal,
    TabBinItemCodeWise
  },
  name: "Chart",
  props: {
    resultSet: Object,
    loading: Boolean,
    title: String,
    type: String,
  },
  methods: {
    dateFormatter: function (value) {
      return moment(value).format("MMM YY");
    },
  },
  computed: {
    values: function () {
      if (this.loading) return [];

      console.log(this.title);
      return this.resultSet.chartPivot();
    },
    metrics: function () {
      if (this.loading) return [""];
      return this.resultSet.seriesNames().map((x) => x.key);
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
</style>
