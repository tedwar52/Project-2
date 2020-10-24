const log = (msg) => console.log(msg)

$("button").on("click", () => {
  let searchButton = $("doctorSearch").val().trim()

  const queryURL = "https://cors-anywhere.herokuapp.com/https://npiregistry.cms.hhs.gov/api/?" + searchButton + "version=2.0"
})
$.ajax({
  url: queryURL,
  method: 'GET'
})
  .then((err, res) => {
    log(res)
    if(err) throw err;
  })
