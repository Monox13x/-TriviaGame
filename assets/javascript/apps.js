

    
  function buildQuiz() {
    
    var output = [];

    
    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      var answers = [];

     
      for (letter in currentQuestion.answers) {
        
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    
    var answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    
    myQuestions.forEach((currentQuestion, questionNumber) => {
      
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
       
        answerContainers[questionNumber].style.color = "red";

      }

      stop()
    });

    
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");
  var myQuestions = [
    {
      question: "how old was John when he made the wish that made Ted real ?",
      answers: {
        a: "8",
        b: "10",
        c: "11"
      },
      correctAnswer: "a"
    },
    {
      question: "What is Ted's girl friend's name?",
      answers: {
        a: "Heather Lynn",
        b: "Tami Lynn",
        c: "Fucking Becky"
      },
      correctAnswer: "b"
    },
    {
      question: "What movie was at the base of John and Ted's friendship?",
      answers: {
        a: "E.T.",
        b: "Planet of the Apes",
        c: "Tron",
        d: "Flash Gordan"
      },
      correctAnswer: "d"
    },
    {
      question: "How many years were John and Lori together?",
      answers: {
        a: "2",
        b: "3",
        c: "4",
        d: "5"
      },
      correctAnswer: "c"
    },
    {
      question: "What is Lori's ringtone?",
      answers: {
        a: "darth vader theme",
        b: "octopussy",
        c: "Nora Jones",
        d: "Flash Gordan theme song"
      },
      correctAnswer: "a"
    },
    {
      question: "What drug did Ted and John try with Sam Jones?",
      answers: {
        a: "acid",
        b: "marijuana",
        c: "heroin",
        d: "cocaine"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the special on Tuesday at Ted and John's resturuant?",
      answers: {
        a: "risotto",
        b: "fettuccine alfredo",
        c: "egg plant parm",
        d: "lasagne"
      },
      correctAnswer: "c"
    },
    {
      question: "What song does Donny creeply dance to?",
      answers: {
        a: "i think we're alone now",
        b: "call me",
        c: "dont you want me baby",
        d: "every breath you take"
      },
      correctAnswer: "a"
    },
    {
      question: "What disease does John wish  Lori's boss contracts?",
      answers: {
        a: "Lou Gehrig's disease",
        b: "Cancer",
        c: "Hiv/Aids",
        d: "Tuberculosis"
      },
      correctAnswer: "a"
    },
    {
      question: "What year was Ted release?",
      answers: {
        a: "2011",
        b: "2012",
        c: "2013",
        d: "2014"
      },
      correctAnswer: "b"
    }



  ];

  
  buildQuiz();

  
  $(submit).on("click", showResults);


 var number = 120;

    var intervalId;

    

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#timer").html("<h2>" + number + "</h2>");

      if (number === 0) {

        stop();
        showResults();


        alert("Time Up!");
      }
    }

    function stop() {

      clearInterval(intervalId);
      
    }

    run();