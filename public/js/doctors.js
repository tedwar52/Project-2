$(document).ready(() => {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/doctor_data").then(data => {
        console.log("displayingUser_Data")
        $(".doctor-name").text(data.firstName);
    });
});
