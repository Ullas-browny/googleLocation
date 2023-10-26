

function initMap() {
    const placesInput = document.querySelector('#places');
    let autocomplete = new google.maps.places.Autocomplete((placesInput),{types:['geocode']})
}

// function con() {
//     console.log();
// }
function myFunction() {
    let text = document.getElementById("places").value;
    console.log(text)
  }