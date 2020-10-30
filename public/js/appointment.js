$(document).ready(() => {
  const firstName = $("input#search1");
  const lastName = $("input#search2");
  const streetAddress = $("input#search3");
  const city = $("input#search4");
  const state = $("input#search5");
  const zipCode = $("input#search6");
  const appTime = $("input#search7");

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
        console.log(response) // has access to sent the response from back end, use to create append functionality
      }).catch(error => {
        console.log(error)
      })
  });
});