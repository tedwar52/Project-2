$(document).ready(() => {
    const criteria1 = $("input#search1");
    const criteria2 = $("input#search2");
    const criteria3 = $("input#search3");

    // console.log(criteria1);

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
            console.log("Doctors", data[1]);
            doctors = data;
            if (!doctors || !doctors.length) {
                displayEmpty();
            }
            else {
                initializeRows();
            }
            $(".doctor-container").on("click", ".edit", function (event) {
                event.preventDefault();

                console.log("testSubmit1");

                $.get("/api/doctor_data/", function (data) {
                    console.log("testData");
                    console.log("doctors: ", doctors);
                    console.log(doctors[1].firstName);

                    for (var i = 0; i < doctors.length; i++) {

                        if (doctors[i].id === doctors.id) {
                            console.log(doctors[i].id);
                        }
                        else {
                            console.log('its not working');
                        }
                    }
                });
            });
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
              <td><span><button type="submit" class="button is-dark is-medium icon" id="doctorSearch"><i class="fas fa-calendar-check"></i></button>            
        </span></td> 
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