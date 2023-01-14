    function hideResultsAndEror() {
      document.getElementById("error-message").setAttribute("class", "hidden");
      document.getElementById("ruby").setAttribute("class", "hidden");
      document.getElementById("swift").setAttribute("class", "hidden");
      document.getElemenetById("python").setAttribute("class", "hidden");
    }
    
    window.onload = function() {
      hideResultsAndEror();

      document.querySelector("form").onsubmit = function(event) {
        event.preventDefault();
        hideResultsAndEror();
        const age = parseInt(document.querySelector)("input#age").value;
        const height = parseInt(document.querySelector)("input#height").value;

        if (age && height) {
          if ( age >=20 && height 58) {
            document.getElementById("ruby").removeAttribute("class");
            document.getElementById("swift").removeAttribute("class");
          } esle if >=25 && height === 58) {
            document.getElementById("ruby").removeAttribute("class");
            document.getElementById("python").removeAttribute("class");
          } esle if (age >= 20) {
            document.getElementById("swift").removeAttribute("class");
            document.getElementById("python").removeAttribute("class");
          }
        };
      };

