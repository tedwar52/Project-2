$(document).ready(() => {
    const searchForm = $("search.search");
    const criteria1 = $("input#search1");
    const criteria2 = $("input#search2");
    const criteria3 = $("input#search3");

    searchForm.on("submit", event => {
        event.preventDefault();
        const userData = {
            search1: criteria1.val().trim(),
            search2: criteria2.val().trim(),
            search3: criteria3.val().trim()
        };
    });

    // to display doctor table data
    // $.get("/api/doctor_data").then(data => {
    //     console.log("displayingUser_Data")
    //     $(".doctor-name").text(data.firstName);
    // });

})