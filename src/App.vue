<template>
  <div class="container-fluid">
    <div class="row">
      <select v-model="selected" id="granularitySelect" :key="selected.value">
        <option
          v-for="granular in granularity"
          :value="granular"
          v-bind:key="granular.value"
        >{{ granular.text }}</option>
      </select>
    </div>

    <br />

    <br />
    <br />
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="tabsalesQuery" :granularity="granularity">
          <template v-slot="{ loading, resultSet }">
            <LineChart
              title="Tab Sales Query 9"
              type="line"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="tabBinQuery">
          <template v-slot="{ loading, resultSet }">
            <BarChart
              title="Tab Bin Query"
              type="stackedBar"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="TabCustomerBarChartByNewCustomer">
          <template v-slot="{ loading, resultSet }">
            <TabCustomerBarChartByNewCustomer
              title="Tab Customer Bar Chart By New Customer Query 13"
              type="TabCustomerBarChartByNewCustomer"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="TabSalesInvoiceBarChartBySalesPartner">
          <template v-slot="{ loading, resultSet }">
            <TabSalesInvoiceBarChartBySalesPartner
              title="Tab Sales Invoice Bar Chart By Sales Partner Query 14"
              type="TabSalesInvoiceBarChartBySalesPartner"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="tabBinPieQuery">
          <template v-slot="{loading, resultSet }">
            <PieChart
              title="Tab Bin pie Query"
              type="pieChart"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="tabBinPieTerritoryQuery">
          <template v-slot="{loading, resultSet }">
            <PieChartTerritory
              title="Tab Bin pie Territory Query 4"
              type="pieChartTerritory"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="TabSalesInvoiceCustomerGroup">
          <template v-slot="{loading, resultSet }">
            <PieChartCustomerGroup
              title="Tab Sales Customer Group Query 17  "
              type="pieChartCustomerGroup"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="PieSalesInvoiceByStatus">
          <template v-slot="{loading, resultSet }">
            <PieSalesInvoiceByStatus
              title="Pie Sales Invoice By Status Query 20"
              type="PieSalesInvoiceByStatus"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="TabSalesTotalInvoiceCount">
          <template v-slot="{loading, resultSet }">
            <TabSalesTotalInvoiceCount
              title="Tab Sales total Invoice count Query 1"
              type="TabSalesTotalInvoiceCount"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="TabSalesAverageInvoiceAmount">
          <template v-slot="{loading, resultSet }">
            <TabSalesAverageInvoiceAmount
              title="Tab Sales Average Invoice Amount Query 5"
              type="TabSalesAverageInvoiceAmount"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="TabCustomerCount">
          <template v-slot="{loading, resultSet }">
            <TabCustomerCount
              title="Tab Customer Count Query 10"
              type="TabCustomerCount"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="TabSalesInvoiceNetTotal">
          <template v-slot="{loading, resultSet }">
            <TabSalesInvoiceNetTotal
              title="Tab Sales Invoice NetTotal Query 3"
              type="TabSalesInvoiceNetTotal"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="TabSalesInvoiceItemUniqueItemCode">
          <template v-slot="{loading, resultSet }">
            <TabSalesInvoiceItemUniqueItemCode
              title="Tab Sales Invoice Item Unique Item Code Query 11"
              type="TabSalesInvoiceItemUniqueItemCode"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder
          :cubejs-api="cubejsApi"
          :query="TabSalesInvoiceItemHorizontalBarChartByItemName"
        >
          <template v-slot="{loading, resultSet }">
            <TabSalesInvoiceItemHorizontalBarChartByItemName
              title="Tab Sales Invoice Item Horizontal Bar Chart By Item Name Query 7"
              type="TabSalesInvoiceItemHorizontalBarChartByItemName"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder
          :cubejs-api="cubejsApi"
          :query="TabSalesInvoiceItemHorizontalBarChartByItemGroup"
        >
          <template v-slot="{loading, resultSet }">
            <TabSalesInvoiceItemHorizontalBarChartByItemGroup
              title="Tab Sales Invoice Item Horizontal Bar Chart By Item Group Query 8"
              type="TabSalesInvoiceItemHorizontalBarChartByItemGroup"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder
          :cubejs-api="cubejsApi"
          :query="TabPurchaseInvoiceHorizontalBarChartBySupplier"
        >
          <template v-slot="{loading, resultSet }">
            <TabPurchaseInvoiceHorizontalBarChartBySupplier
              title="Tab Purchase Invoice Horizontal Bar Chart By Supplier Query 19"
              type="TabPurchaseInvoiceHorizontalBarChartBySupplier"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <query-builder :cubejs-api="cubejsApi" :query="TabBinItemCodeWise">
          <template v-slot="{loading, resultSet }">
            <TabBinItemCodeWise
              title="Tab Bin Item Code Wise Query 15"
              type="TabBinItemCodeWise"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
      <div class="col-sm-6">
        <query-builder :cubejs-api="cubejsApi" :query="TabBinHandWareHouseWise">
          <template v-slot="{loading, resultSet }">
            <TabBinHandWareHouseWise
              title="Tab Bin hand ware Wise Query 16"
              type="TabBinHandWareHouseWise"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="TabLeadByCityLocation">
          <template v-slot="{loading, resultSet }">
            <TabLeadByCityLocation
              title="TabLeadByCityLocation Query 18"
              type="TabLeadByCityLocation"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="TabSalesInvoiceNetTotal">
          <template v-slot="{loading, resultSet }">
            <GuageChart
              title="GuageChart Query 2"
              type="GuageChart"
              :loading="loading"
              :result-set="resultSet"
            />
          </template>
        </query-builder>
      </div>
    </div>
  </div>
</template>

<script>
import cubejs from "@cubejs-client/core";
import { QueryBuilder } from "@cubejs-client/vue";

import LineChart from "./view/Chart";
import BarChart from "./view/Chart";
import TabCustomerBarChartByNewCustomer from "./view/Chart";
import TabSalesInvoiceBarChartBySalesPartner from "./view/Chart";
import PieChart from "./view/Chart";
import PieChartTerritory from "./view/Chart";
import PieChartCustomerGroup from "./view/Chart";
import TabSalesAverageInvoiceAmount from "./view/Chart";
import TabSalesTotalInvoiceCount from "./view/Chart";
import TabCustomerCount from "./view/Chart";
import TabSalesInvoiceNetTotal from "./view/Chart";
import TabSalesInvoiceItemUniqueItemCode from "./view/Chart";
import TabSalesInvoiceItemHorizontalBarChartByItemName from "./view/Chart";
import TabSalesInvoiceItemHorizontalBarChartByItemGroup from "./view/Chart";
import TabPurchaseInvoiceHorizontalBarChartBySupplier from "./view/Chart";
import PieSalesInvoiceByStatus from "./view/Chart";
import TabBinItemCodeWise from "./view/Chart";
import TabBinHandWareHouseWise from "./view/Chart";
import TabLeadByCityLocation from "./view/Chart";
import GuageChart from "./view/Chart";
import QUERY from "./components/Query";
const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTc4Mzk2MDYsImV4cCI6MTU5NzkyNjAwNn0.eyS33ppbBdPZsb9K7ymkhKrHS-l2x_hf25lXFVk5m30",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

export default {
  name: "App",
  components: {
    LineChart,
    BarChart,
    GuageChart,
    TabCustomerBarChartByNewCustomer,
    TabSalesInvoiceBarChartBySalesPartner,
    PieChart,
    PieChartTerritory,
    PieChartCustomerGroup,
    PieSalesInvoiceByStatus,
    TabSalesTotalInvoiceCount,
    TabSalesAverageInvoiceAmount,
    TabCustomerCount,
    TabSalesInvoiceNetTotal,
    TabSalesInvoiceItemUniqueItemCode,
    TabSalesInvoiceItemHorizontalBarChartByItemName,
    TabSalesInvoiceItemHorizontalBarChartByItemGroup,
    TabPurchaseInvoiceHorizontalBarChartBySupplier,
    TabBinItemCodeWise,
    TabBinHandWareHouseWise,
    TabLeadByCityLocation,
    QueryBuilder,
    QUERY
  },

  data() {
    let selected = { value: 2, text: "day" };
    const dataObj = {
      cubejsApi,
      granularity: [
        { value: 1, text: "hour" },
        { value: 2, text: "day" },
        { value: 3, text: "week" },
        { value: 4, text: "month" },
        { value: 5, text: "year" },
      ],
      tabsalesQuery: QUERY.tabsalesQuery(selected),
      tabBinQuery: QUERY.tabBinQuery,
      tabBinPieQuery:QUERY.tabBinPieQuery,
      tabBinPieTerritoryQuery:QUERY.tabBinPieTerritoryQuery,
      TabSalesInvoiceCustomerGroup: QUERY.TabSalesInvoiceCustomerGroup,
      PieSalesInvoiceByStatus:QUERY.PieSalesInvoiceByStatus,
      TabSalesAverageInvoiceAmount:QUERY.TabSalesAverageInvoiceAmount,
      TabSalesTotalInvoiceCount: QUERY.TabSalesTotalInvoiceCount,
      TabCustomerCount: QUERY.TabCustomerCount,
      TabSalesInvoiceNetTotal:QUERY.TabSalesInvoiceNetTotal,
      TabSalesInvoiceItemUniqueItemCode:QUERY.TabSalesInvoiceItemUniqueItemCode,
      TabSalesInvoiceItemHorizontalBarChartByItemName:QUERY.TabSalesInvoiceItemHorizontalBarChartByItemName,
      TabSalesInvoiceItemHorizontalBarChartByItemGroup:QUERY.TabSalesInvoiceItemHorizontalBarChartByItemGroup,
      TabPurchaseInvoiceHorizontalBarChartBySupplier:QUERY.TabPurchaseInvoiceHorizontalBarChartBySupplier,
      TabCustomerBarChartByNewCustomer:QUERY.TabCustomerBarChartByNewCustomer,
      TabSalesInvoiceBarChartBySalesPartner:QUERY.TabSalesInvoiceBarChartBySalesPartner,
      TabBinItemCodeWise:QUERY.TabBinItemCodeWise,
      TabBinHandWareHouseWise:QUERY.TabBinHandWareHouseWise,
      TabLeadByCityLocation:QUERY.TabLeadByCityLocation,
      GuageChart:QUERY.GuageChart
    };
    return { ...dataObj, selected };
  },
  methods: {
    customLabel(a) {
      return a.title;
    },
    set(setMeasures, value) {
      setMeasures(value.map((e) => e.name));
    },
  },
};
</script>
<style>
html {
  -webkit-font-smoothing: antialiased;
}

body {
  padding-top: 30px;
  padding-bottom: 30px;
  background: #f5f6f7;
}
</style>


