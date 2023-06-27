propertyId = "293931872"; // this is for hackweek property
//propertyId = "319278063"; // this is our GA4 getunleash.io

// Imports the Google Analytics Data API client library.
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

const analyticsDataClient = new BetaAnalyticsDataClient();

const buildReport = (start, st) => {};

async function runReport() {
  const [response] = await analyticsDataClient.runRealtimeReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: "2023-06-24",
        endDate: "2023-06-27",
      },
    ],
    dimensions: [
      {
        name: "eventName",
        // name: "membership_level",
      },
    ],
    metrics: [
      {
        // name: "countCustomEvent:unleash_demoApp.step2", // this might work tomorrow
        // name: "membership_level",
      },
    ],
  });

  console.log("Report result:");
  response.rows.forEach((row) => {
    console.log(row.dimensionValues[0], row.metricValues[0]);
  });


  //console.log(JSON.stringify(await analyticsDataClient.getMetadata({ name: `properties/${propertyId}/metadata` }), null, 2));
  console.log("Ok I'm done!");
}

runReport();
