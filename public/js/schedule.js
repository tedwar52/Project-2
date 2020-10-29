const log = (msg) => console.log(msg)

$(document).ready(() => {
   const criteria1 = $("input#search1");
   const criteria2 = $("input#search2");
   const criteria3 = $("input#search3");
   const criteria4 = $("input#search4");
   const criteria5 = $("input#search5");
   const criteria6 = $("input#search6");
   const criteria7 = $("input#search7");

    log(criteria1);

    $("#saveAppointment").on("click", (event) => {
        event.preventDefault();
        log("click event operational")
        const appData = {
            input1:
            input2:
            input3:
            input4:
            input5:
            input6:
            input7:
        }
    })

})
 // const mysql = require('mysql');

    // const log = (msg) => console.log(msg)


    // const connection = mysql.createConnection({
    //     host: 'localhost',
    //     PORT: 3306,
    //     user: 'root',
    //     password: "root",
    //     database: 'passportdb'
    // });

    // connection.connect((err, res) => {
    //     if (err) throw err;
    //     appScheduler();
    // })

    // const appScheduler = () => {

    // }

    // log('Its working')