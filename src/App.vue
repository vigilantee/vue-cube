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
              title="Tab Sales Query"
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
      <div class="col-sm-12">
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
    </div>
    <div id="chart_div" style="width: 900px; height: 500px;"></div>
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
import TabSalesInvoiceItemHorizontalBarChartByItemName from "./view/Chart";
import TabSalesInvoiceItemHorizontalBarChartByItemGroup from "./view/Chart";
import TabPurchaseInvoiceHorizontalBarChartBySupplier from "./view/Chart";
import PieSalesInvoiceByStatus from "./view/Chart";
import TabBinItemCodeWise from "./view/Chart";
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
    TabSalesInvoiceItemHorizontalBarChartByItemName,
    TabSalesInvoiceItemHorizontalBarChartByItemGroup,
    TabPurchaseInvoiceHorizontalBarChartBySupplier,
    TabBinItemCodeWise,
    QueryBuilder,
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
      tabsalesQuery: QUERY.tabsalesQuery(this.selected),
      tabBinQuery: QUERY.tabBinQuery,
      tabBinPieQuery: {
        measures: ["TabBin.actualQty"],
        timeDimensions: [
          {
            dimension: "TabBin.creation",
          },
        ],
        order: {
          "TabBin.warehouse": "desc",
        },
        dimensions: ["TabBin.warehouse"],
        filters: [],
      },
      tabBinPieTerritoryQuery: {
        measures: ["TabSalesInvoice.netTotal"],
        timeDimensions: [
          {
            dimension: "TabSalesInvoice.creation",
          },
        ],
        order: {
          "TabSalesInvoice.netTotal": "asc",
          "TabSalesInvoice.territory": "asc",
        },
        dimensions: ["TabSalesInvoice.territory"],
        filters: [],
      },
      TabSalesInvoiceCustomerGroup: {
        measures: ["TabSalesInvoice.netTotal"],
        timeDimensions: [
          {
            dimension: "TabSalesInvoice.creation",
          },
        ],
        order: {
          "TabSalesInvoice.total": "desc",
        },
        dimensions: ["TabSalesInvoice.customerGroup"],
        filters: [],
      },
      PieSalesInvoiceByStatus: {
        measures: ["TabSalesInvoice.netTotal"],
        timeDimensions: [
          {
            dimension: "TabSalesInvoice.creation",
          },
        ],
        order: {
          "TabSalesInvoice.netTotal": "desc",
        },
        dimensions: ["TabSalesInvoice.status"],
        filters: [],
      },
      TabSalesAverageInvoiceAmount: {
        measures: ["TabSalesInvoice.AverageInvoiceAmount"],
        timeDimensions: [
          {
            dimension: "TabSalesInvoice.creation",
          },
        ],
        order: {},
        filters: [],
      },
      TabSalesTotalInvoiceCount: {
        measures: ["TabSalesInvoice.trueCount"],
        timeDimensions: [
          {
            dimension: "TabSalesInvoice.creation",
          },
        ],
        order: {},
        filters: [],
      },
      TabCustomerCount: {
        measures: ["TabCustomer.count"],
        timeDimensions: [
          {
            dimension: "TabCustomer.creation",
          },
        ],
        order: {},
        filters: [],
      },
      TabSalesInvoiceNetTotal: {
        measures: ["TabSalesInvoice.trueNetTotal"],
        timeDimensions: [
          {
            dimension: "TabSalesInvoice.creation",
          },
        ],
        order: {},
        filters: [],
      },
      TabSalesInvoiceItemHorizontalBarChartByItemName: {
        measures: ["TabSaleInvoiceItem.amount"],
        timeDimensions: [
          {
            dimension: "TabSaleInvoiceItem.creation",
          },
        ],
        order: {
          "TabSaleInvoiceItem.amount": "desc",
        },
        dimensions: ["TabSaleInvoiceItem.itemName"],
        filters: [],
        limit: 10,
      },
      TabSalesInvoiceItemHorizontalBarChartByItemGroup: {
        measures: ["TabSaleInvoiceItem.amount"],
        timeDimensions: [
          {
            dimension: "TabSaleInvoiceItem.creation",
          },
        ],
        order: {
          "TabSaleInvoiceItem.amount": "desc",
        },
        dimensions: ["TabSaleInvoiceItem.itemGroup"],
        filters: [],
      },
      TabPurchaseInvoiceHorizontalBarChartBySupplier: {
        measures: ["TabPurchaseInvoice.netTotal"],
        timeDimensions: [
          {
            dimension: "TabPurchaseInvoice.creation",
          },
        ],
        order: {
          "TabPurchaseInvoice.netTotal": "desc",
        },
        dimensions: ["TabPurchaseInvoice.supplier"],
        filters: [],
        limit: 10,
      },
      TabCustomerBarChartByNewCustomer: {
        measures: ["TabCustomer.count"],
        timeDimensions: [
          {
            dimension: "TabCustomer.creation",
            granularity: "month",
          },
        ],
        order: {},
        filters: [],
      },
      TabSalesInvoiceBarChartBySalesPartner: {
        measures: ["TabSalesInvoice.netTotal"],
        timeDimensions: [
          {
            dimension: "TabSalesInvoice.creation",
          },
        ],
        order: {
          "TabSalesInvoice.netTotal": "desc",
        },
        dimensions: ["TabSalesInvoice.salesPartner"],
        filters: [],
      },
      TabBinItemCodeWise: {
        measures: ["TabBin.actualQty"],
        timeDimensions: [
          {
            dimension: "TabBin.creation",
          },
        ],
        order: {
          "TabBin.itemCode": "asc",
        },
        dimensions: ["TabBin.itemCode"],
        filters: [],
      },
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
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


