$(document).ready(() => {
    const criteria1 = $("input#search1");
    const criteria2 = $("input#search2");
    const criteria3 = $("input#search3");

    console.log(criteria1);

    $("#doctorSearch").on("click", function (event) {
        event.preventDefault();
        console.log("testSubmit1");
        const userData = {
            search1: criteria1.val().trim(),
            search2: criteria2.val().trim(),
            search3: criteria3.val().trim()
        };

        $.get("/api/doctor_data/" + userData.search1, function (data) {
            console.log("testDescription");
            console.log(userData.search1);
            console.log("Doctors", data);
            doctors = data;
            if (!doctors || !doctors.length) {
                displayEmpty();
            }
            else {
                initializeRows();
            }
        });
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
        newPostDate.text(formattedDate);
        newPostTitle.append(newPostDate);
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