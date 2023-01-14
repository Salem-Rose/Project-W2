    
   window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault();

    let programSelector = document.getElementById("ruby");
      programSelector.setAttribute("class", "hidden");
    let programSelector2 = document.getElementById("swift"); 
      programSelector2.setAttribute("class", "hidden");
    let programSelector3 = document.getElementById("python");
      programSelector3.setAttribute("class", "hidden")

    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);


    if (age > 18 && height > 58) {
      programSelector.removeAttribute("class");
    } else if (age < 18 && height < 58) {
      programSelector2.removeAttribute("class"); 
    } else if (age === 18 && height === 58) {
      programSelector3.removeAttribute("class");
    }
   };
  };
   