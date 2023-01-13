window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {

    const question1Input = document.getElementbyID("question1Input").value;
    const question2Input = document.getElementbyID("question2Input").value;
    const question3Input = document.getElementbyID("question3Input").value;
    const question4Input = document.getElementbyID ("qustion4Input").value;

    document.querySelector("span#question1").innerText = "answer 1";
    document.querySelector("span#question2").innerText = "answer 2";
    document.querySelector("span#question3").innerText = "answer 3";
    document.querySelector("span#question4").innterText = "answer 4";
   
    document.querySelector("div#aboutme").removeAttribute("class");

    event.preventDefault();
  };  
};
  