$(document).ready(() => {
  const firstName = $("input#appointment1");
  const lastName = $("input#appointment2");
  const streetAddress = $("input#appointment3");
  const city = $("input#appointment4");
  const state = $("input#appointment5");
  const zipCode = $("input#appointment6");
  const appTime = $("input#appointment7");

  $("#saveAppointment").on("click", (event) => {
    event.preventDefault();
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
        appointment = response;
        console.log(response)
        initializeRows();
      }).catch(error => {
        console.log(error)
      })
  });

  let appointmentContainer = $(".appointment-container");
  let appointment;

  const initializeRows = () => {
    let appointmentToAddHTML = "";
    for (let i = 0; i < appointment.length; i++) {
      appointmentToAddHTML += createNewRow(appointment[i])
    }
    appointmentContainer.append(appointmentToAddHTML);
  }

  const createNewRow = (appointment) => {
    // change these params
    return `<tr class="edit" data-docID=${appointment.id}>
          <td>${appointment.firstName}</td>
          <td>${appointment.lastName}</td>
          <td>${appointment.streetAddress}</td>
          <td>${appointment.city}</td>
          <td>${appointment.state}</td>
          <td>${appointment.zipCode}</td>
          <td>${appointment.appTime}</td>              
        </tr>`;
  }
});