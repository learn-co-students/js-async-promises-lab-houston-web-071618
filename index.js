const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;
function askQuestion(){
  return questions[0]
}

function appendQuestion(question) {
  document.querySelector('.question-container').innerText = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion() {
  return new Promise(function(){
    document.querySelector('.question-container').innerHTML = ''
    toggleTrueAndFalseButtons()
  })
}

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return document.querySelector('.true-false-list').querySelectorAll('.lighten-2')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(element) {
    element.classList.toggle("hide")
  })
}

function checkQuestion(question, answer){
  question.questionAnswer == answer
}

function displayQuestionOnClick(){
  let btn = document.querySelector('a')
  return btn.addEventListener('click', function() {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000)
  })
}
