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
        console.log(response)
        
      }).catch(error => {
        console.log(error)
      })

  });
});
