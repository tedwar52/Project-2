$(document).ready(() => {
//   const firstName = $("input#appointment1");
//   const lastName = $("input#appointment2");
//   const streetAddress = $("input#appointment3");
//   const city = $("input#appointment4");
//   const state = $("input#appointment5");
//   const zipCode = $("input#appointment6");
//   const appTime = $("input#appointment7");

//   $("#saveAppointment").on("click", (event) => {
//     event.preventDefault();
//     const appData = {
//       firstName: firstName.val().trim(),
//       lastName: lastName.val().trim(),
//       streetAddress: streetAddress.val().trim(),
//       city: city.val().trim(),
//       state: state.val().trim(),
//       zipCode: zipCode.val().trim(),
//       appTime: appTime.val().trim()
//     };
//     $.post("/api/appointment", appData)
//       .then((response) => {
//         console.log(response)
        
//       }).catch(error => {
//         console.log(error)
//       })
//   }

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
    initializeRows();
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
    console.log(doctor)

    return `<tr class="edit" data-docID=${doctor.id}>
              <td>${doctor.firstName} ${doctor.lastName}</td>
              <td>${doctor.addressOne} ${doctor.addressTwo}</td>
              <td>${doctor.telephone}</td>
              <td>${doctor.email}</td>
              <td>${doctor.orgName}</td>
              <td>${doctor.description}</td>              
              <td><a href="schedule.html"><button type="submit" class="button is-dark is-medium icon" id="doctorSearch"><i class="fas fa-calendar-check"></i></button></a></td> 
            </tr>`;
  }
});
