$(document).ready(() => {
    const criteria1 = $("input#search1");

    $("#doctorSearch").on("click", function (event) {
        event.preventDefault();
        console.log("testSubmit1");
        const userData = {
            search1: criteria1.val().trim(),
        };

        $.get("/api/doctor_data/" + userData.search1, function (data) {
            doctors = data;

            console.log(doctors);

            if (!doctors || !doctors.length) {
                displayEmpty();
            }
            else {
                initializeRows();
            }
            // $(".doctor-container").on("click", ".edit", function (event) {
            //     event.preventDefault();
            //     window.location.href = "schedule.html";
            // });
        });
    });

    var doctorContainer = $(".doctor-container");
    var doctors;

    function initializeRows() {
        doctorContainer.empty();
        ///doctorsToAdd
        var doctorsToAddHTML = "";
        for (var i = 0; i < doctors.length; i++) {
            //doctorsToAdd.push(createNewRow(doctors[i]));
            doctorsToAddHTML += createNewRow(doctors[i])
        }
        doctorContainer.append(doctorsToAddHTML);
    }

    // This function constructs a post's HTML
    function createNewRow(doctor) {

        return `<tr class="edit" data-docID=${doctor.id}>
              <td>${doctor.firstName} ${doctor.lastName}</td>
              <td>${doctor.addressOne} ${doctor.addressTwo}</td>
              <td>${doctor.telephone}</td>
              <td>${doctor.email}</td>
              <td>${doctor.orgName}</td>
              <td>${doctor.description}</td>              
              <td><a href="/appointment.html"><button type="submit" class="button is-dark is-medium icon" id="doctorSearch"><i class="fas fa-calendar-check"></i></button></a></td> 
            </tr>`;
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