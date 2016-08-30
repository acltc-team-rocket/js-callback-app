// function changeColors() {
//   setTimeout(function() {
//     document.getElementById('first').style.color = "red";
//     setTimeout(function() {
//       document.getElementById('second').style.color = "blue";
//       setTimeout(function() {
//         document.getElementById('third').style.fontSize = "2.0em";
//         setTimeout(function() {
//           document.getElementById('fourth').style.background = "yellow";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }
function getData() {
  var divFoodtrucks = document.getElementById("foodtrucks");
  divFoodtrucks.innerHTML = "Loading...";

  $.get('https://data.sfgov.org/resource/jjew-r69b.json', function(response) {
    var htmlString = ""
    for (var i = 0; i < response.length; i++) {
      var foodtruck = response[i];
      htmlString += '<h2>' + foodtruck.applicant + '</h2>'
      htmlString += '<p>' + foodtruck.optionaltext + '</p>'
    }
    divFoodtrucks.innerHTML = htmlString;
  });
}