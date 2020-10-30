const mysql = require('mysql');

const log = (msg) => console.log(msg)

$(document).ready(() => {
  const firstName = $("input#search1");
  const lastName = $("input#search2");
  const streetAddress = $("input#search3");
  const city = $("input#search4");
  const state = $("input#search5");
  const zipCode = $("input#search6");
  const appTime = $("input#search7");

  log(firstName);

  $("#saveAppointment").on("click", (event) => {
    event.preventDefault();
    log("click event operational")
    const appData = {
      input1: firstName.val().trim(),
      input2: lastName.val().trim(),
      input3: streetAddress.val().trim(),
      input4: city.val().trim(),
      input5: state.val().trim(),
      input6: zipCode.val().trim(),
      input7: appTime.val().trim()
    }
    log(appData);

  })

})

const connection = mysql.createConnection({
  host: 'localhost',
  PORT: 3306,
  user: 'root',
  password: "root",
  database: 'passportdb'
});

connection.connect((err, res) => {
  if (err) throw err;
  appScheduler();
});
