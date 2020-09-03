const tabsalesQuery = (selected) => {
    console.log("selected is,......", selected);
    return ({
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
                granularity: selected? selected.text: "day",
                dateRange: "This year",
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
    });
}
const tabBinQuery = {
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
}
const QUERY = {
    tabsalesQuery: (selected) => tabsalesQuery(selected),
    tabBinQuery,
};
export default QUERY;
