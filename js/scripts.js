    
   window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault();

      let rubyElement = document.getElementById("ruby");
      rubyElement.setAttribute("class", "hidden");
      let swiftElement = document.getElementById("swift"); 
      swiftElement.setAttribute("class", "hidden");
      let pythonElement = document.getElementById("python");
      pythonElement.setAttribute("class", "hidden");
      let sorryElement = document.getElementById("sorry");
      sorryElement.setAttribute("class", "hidden");

      const age = parseInt(document.querySelector("input#age").value);
      const height = parseInt(document.querySelector("input#height").value);
      const mining = document.querySelector("input#mining").value;
      const skiing = document.querySelector("input#skiing").value;
      const snake = document.querySelector("input#snake").value;

    if (age > 18 && height > 58 && mining.toLowerCase() === "yes") {
      rubyElement.removeAttribute("class");
      } else if (age < 18 && height < 58 && skiing.toLowerCase() === "yes") {
      swiftElement.removeAttribute("class"); 
      } else if (age === 18 && height === 58 && snake.toLowerCase() === "yes") {
      pythonElement.removeAttribute("class");
      } else {
      sorryElement.removeAttribute("class");
      }
    }
   };
  
   