function getQueryStringValue(key) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

$(document).ready(() => {
  const doctorId = parseInt(getQueryStringValue("doctorId"))
  if (!isNaN(doctorId)) {
    $.get(`api/doctor/${doctorId}`)
      .then((response) => {
        console.log(response)
      })
  }

  var scheduleContainer = $(".scheduleContainer");
  var scheduleDoctors;

  $.post("/api/schedule_doctor/", scheduleDoctors, function (data) {

    scheduleDoctors = data;
    if (!scheduleDoctor || !scheduleDoctor.length) {
      displayEmpty();
    }
    else {
      initializeRows();
    }
    function initializeRows() {
      scheduleContainer.empty();
      ///doctorsToAdd
      var scheduleToAddHTML = "";
      for (var i = 0; i < doctors.length; i++) {
        //doctorsToAdd.push(createNewRow(doctors[i]));
        scheduleToAddHTML += createNewRow(doctors[i])
      }
      scheduleContainer.append(scheduleToAddHTML);
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
              <td><a href="schedule.html?doctorId=${doctor.id}">Click</a></td>
              <td><span><button type="submit" class="button is-dark is-medium icon" id="doctorSearch"><i class="fas fa-calendar-check"></i></button>            
        </span></td> 
            </tr>`;
    }


    $("#saveAppointment").on("click", (event) => {
      event.preventDefault();

      const firstName = $("input#search1");
      const lastName = $("input#search2");
      const streetAddress = $("input#search3");
      const city = $("input#search4");
      const state = $("input#search5");
      const zipCode = $("input#search6");
      const appTime = $("input#search7");

      const appData = {
        firstName: firstName.val().trim(),
        lastName: lastName.val().trim(),
        streetAddress: streetAddress.val().trim(),
        city: city.val().trim(),
        state: state.val().trim(),
        zipCode: zipCode.val().trim(),
        appTime: appTime.val().trim()
      };
      $.post("/api/appointment", appData)
        .then((response) => {
          console.log(response) // has access to sent the response from back end, use to create append functionality
        }).catch(error => {
          console.log(error)
        })
    });
  });