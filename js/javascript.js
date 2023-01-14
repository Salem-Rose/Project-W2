function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class","hidden");
  document.getElementById("letter").setAttribute("class", "hidden");
  document.getElementById("color").setAtttribute("class", "hidden");
  document.getElementById("mining").setAttribute("class", "hidden");
  document.getElementById("skiing").setAttribute("class", "hidden");
  document.getElementById("snake").setAttribute("class", "hidden");
}
 
window.onload = function() {
  hideResultsAndError();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    form.onsubmit = function(event) {
    
    if (letter && color && mining && skiing & snake) {
      if (letter === color && color === mining && mining === skiing && skiing ==== snake) {
        result = "mining";
      } else if (letter === color && color === mining || skiing === snake) {
        result = "skiing";
      } else {
        result = "snake";
      } else {
        document.getElementbyId = "error-message";
      }
    }
  };
}; 

