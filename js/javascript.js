function getAndSetProject2Values() {
  const question1Input = document.getElementbyID("question1Input").value;
  const question2Input = document.getElementbyID("question2Input").value;
  const question3Input = document.getElementbyID("question3Input").value;
  const question4Input = document.getElementbyID ("question4Input").value;

  document.querySelector("span#question1").innerText = question1Input;
  document.querySelector("span#question2").innerText = question2Input;
  document.querySelector("span#question3").innerText = question3Input;
  document.querySelector("span#question4").innerText = question4Input;
}   
function setFormSubmissionEventHandler() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetProjectValues();
    document.querySelector("div#aboutme").removeAttribute("class");
   }
}
window.onload = function() {
  setFormSubmissionEventHandler();
}; 