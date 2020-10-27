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

    function getPosts(category) {
        // var categoryString = category || "";
        // if (categoryString) {
        //     categoryString = "/category/" + categoryString;
        // }
        $.get("/api/doctors", function (data) {
            console.log("Doctors", data);
            doctors = data;
            if (!posts || !doctors.length) {
                displayEmpty();
            }
            else {
                initializeRows();
            }
        });
    }

    getPosts();

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
        var newPostCard = $("<div>");
        newPostCard.addClass("card");
        var newPostCardHeading = $("<div>");
        newPostCardHeading.addClass("card-header");
        var deleteBtn = $("<button>");
        deleteBtn.text("x");
        deleteBtn.addClass("delete btn btn-danger");
        var editBtn = $("<button>");
        editBtn.text("EDIT");
        editBtn.addClass("edit btn btn-default");
        var newPostTitle = $("<h2>");
        var newPostDate = $("<small>");
        var newPostCategory = $("<h5>");
        newPostCategory.text(doctor.lastName);
        newPostCategory.css({
            float: "right",
            "font-weight": "700",
            "margin-top":
                "-15px"
        });
        var newPostCardBody = $("<div>");
        newPostCardBody.addClass("card-body");
        var newPostBody = $("<p>");
        newPostTitle.text(doctor.firstName + " ");
        newPostBody.text(doctor.lastName);
        var formattedDate = new Date(doctor.createdAt);
        formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        newPostDate.text(formattedDate);
        newPostTitle.append(newPostDate);
        newPostCardHeading.append(deleteBtn);
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
        messageH2.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
        doctorContainer.append(messageH2);
    }
})