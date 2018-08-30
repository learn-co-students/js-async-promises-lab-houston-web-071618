const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
const questions_container = document.querySelector('.question-container');

function appendQuestion(question){
  questions_container.innerHTML = question["questionText"];
};

const askQuestionThen = function(time){
  question = questions[0];
  appendQuestion(question);
  return new Promise(function (resolve) {
    setTimeout(function(){
      resolve(question);
    }, time)
  });
}



function removeQuestion(){
  return  new Promise(function(){
    questions_container.innerHTML = ""
    toggleTrueAndFalseButtons()
  });
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion);
}

function trueAndFalseButtons(){
  green_btn = document.querySelector('.green');
  red_btn = document.querySelector('.red');
  return [green_btn, red_btn];
}

function toggleTrueAndFalseButtons(){
  for (element of trueAndFalseButtons()){
    element.classList.toggle("hide");
  }
}

function displayQuestionOnClick(){
  let btn = document.querySelector('a')
  return btn.addEventListener('click', () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
