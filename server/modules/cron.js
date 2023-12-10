const cron = require("node-cron");

// cron.schedule(" */2 * * * * *", () => {
//   console.log("A cron job that runs every 2 seconds");
// });

// cron.schedule(" * */2 * * * *", () => {
//   console.log("A cron job that runs every 2 minutes");
// });

const job = cron.schedule(
  " * */40 * * * *",
  () => {
    console.log("A cron job that runs every 40 minutes");
    console.log("This job will start in 20 minutes");
  },
  {
    scheduled: false,
    timezone: "America/Chicago",
  }
);

// this will start the job in 20 minutes
setTimeout(() => {
  job.start();
}, 1000 * 60 * 20);

module.exports = cron;
