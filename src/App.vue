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

    <br/>

    <br />
    <br />
    <div class="row">
      <div class="col-sm-12">
        <query-builder :cubejs-api="cubejsApi" :query="tabsalesQuery">
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
    <br/>
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
              title="Tab Bin pie Territory Query"
              type="pieChartTerritory"
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

import LineChart from "./components/Chart";
import BarChart from "./components/Chart";
import PieChart from "./components/Chart";
import PieChartTerritory from "./components/Chart";
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
    PieChart,
    PieChartTerritory,
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
      tabsalesQuery: {
        order: {},
        measures: [
          "TabSalesInvoice.total",
          // "TabSalesInvoice.totalSalesMonthly",
          "TabSalesInvoice.outstandingAmount",
          "TabSalesInvoice.totalQty",
          "TabSalesInvoice.discountAmount",
        ],
        timeDimensions: [
          {
            dimension: "TabSalesInvoice.creation",
            granularity: this.selected.text,
            dateRange:"This year",
            // dateRange: dateRange ? dateRange : [startDate, endDate],
          },
        ],
        filters: [
          {
            dimension: "TabTerritory.name",
            operator: "equals",
            values: ["Northern California"],
          },
        ],
      },
      tabBinQuery: {
          "measures": [
            "TabBin.actualQty"
          ],
          "timeDimensions": [],
          "order": {
            "TabBin.actualQty": "asc"
          },
          "dimensions": [
            "TabBin.itemCode"
          ],
          "filters": []
        },
        tabBinPieQuery: {
            "measures": [
              "TabBin.actualQty"
            ],
            "timeDimensions": [
              {
                "dimension": "TabBin.creation"
              }
            ],
            "order": {
              "TabBin.warehouse": "desc"
            },
            "dimensions": [
              "TabBin.warehouse"
            ],
            "filters": []
        },
        tabBinPieTerritoryQuery: {
          "measures": [
            "TabSalesInvoice.total"
          ],
          "timeDimensions": [
            {
              "dimension": "TabSalesInvoice.creation"
            }
          ],
          "order": {
            "TabSalesInvoice.total": "desc"
          },
          "dimensions": [
            "TabSalesInvoice.territory"
          ],
          "filters": []
        },
    };
    return { ...dataObj, selected };
  },
    methods: {
    customLabel(a) {
      return a.title;
    },
    set(setMeasures, value) {
      setMeasures(value.map(e => e.name));
    }
  }
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


