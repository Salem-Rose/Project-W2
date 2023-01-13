window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmti = function(event) {
    event.preventDefault();
    const question1Input = document.getElementbyID("question1Input").value;
    const question2Input = document.getElementbyID("question2Input").value;
    const question3Input = document.getElementbyID("question3Input").value;
    const question4Input = document.getElementbyID ("qustion4Input").value;
  };  
};
  