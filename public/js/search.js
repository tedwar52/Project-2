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
        doctorSearch(userData);
    });

    // var categoryString = category || "";
    // if (categoryString) {
    //     categoryString = "/category/" + categoryString;
    // }
    let doctorSearch = (userData) => $.get("/api/doctor_data/:description", function (req, res, data) {


        let description = req.params.description;
        console.log("testDescription")
        console.log(description);

        console.log("Doctors", data);
        doctors = data;
        if (!doctors || !doctors.length) {
            displayEmpty();
        }
        else {
            initializeRows();
        }
    });

    var doctorContainer = $(".doctor-container");
    var doctors;

    function initializeRows() {
        doctorContainer.empty();
        doctorsToAdd
        var doctorsToAdd = [];
        for (var i = 0; i < doctors.length; i++) {
            doctorsToAdd.push(createNewRow(doctors[i]));
        }
        doctorContainer.append(doctorsToAdd);
    }

    // This function constructs a post's HTML
    function createNewRow(doctor) {
        console.log('testCreateNewRow')
        var newPostCard = $("<div>");
        newPostCard.addClass("card");
        var newPostCardHeading = $("<div>");
        newPostCardHeading.addClass("card-header");
        // var deleteBtn = $("<button>");
        // deleteBtn.text("x");
        // deleteBtn.addClass("delete btn btn-danger");
        var editBtn = $("<button>");
        editBtn.text("Schedule Meeting");
        editBtn.addClass("edit btn btn-default");
        editBtn.css({
            float: "right",
            "font-weight": "700",
            "margin-top":
                "-15px"
        });
        var newPostTitle = $("<h2>");
        var newPostDate = $("<small>");
        var newPostCategory = $("<h5>");
        newPostCategory.text(doctor.description);
        newPostCategory.css({
            float: "right",
            "font-weight": "700",
            "margin-top":
                "-15px"
        });
        var newPostCardBody = $("<div>");
        newPostCardBody.addClass("card-body");
        var newPostBody = $("<p>");
        newPostTitle.text(doctor.firstName + " " + doctor.lastName + "  ");
        newPostBody.text(doctor.addressOne + " " + doctor.addressTwo + " " + doctor.telephone);
        var formattedDate = doctor.orgName;
        // formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        newPostDate.text(formattedDate);
        newPostTitle.append(newPostDate);
        // newPostCardHeading.append(deleteBtn);
        newPostCardHeading.append(editBtn);
        newPostCardHeading.append(newPostTitle);
        newPostCardHeading.append(newPostCategory);
        newPostCardBody.append(newPostBody);
        newPostCard.append(newPostCardHeading);
        newPostCard.append(newPostCardBody);
        newPostCard.data("post", doctor);
        return newPostCard;
    }

    // This function displays a message when there are no posts
    function displayEmpty() {
        doctorContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.css({ "text-align": "center", "margin-top": "50px" });
        messageH2.html("No doctor data.");
        doctorContainer.append(messageH2);
    }
})