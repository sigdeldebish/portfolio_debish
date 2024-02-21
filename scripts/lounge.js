function updateClock() {
    const now = new Date(); 
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    
    if (hours < 10) {
        hours = '0' + hours;
    }
    else if (minutes < 10){
        minutes = '0' + minutes;
    }
    else if (seconds < 10){
        seconds = '0' + seconds;
    }
    document.getElementById('hour_container').textContent = hours + ': ';
    document.getElementById('minute_container').textContent = minutes + ': ';
    document.getElementById('second_container').textContent = seconds + ' ';
}


setInterval(updateClock, 1000);

updateClock();


  

document.addEventListener('DOMContentLoaded', function() {
    let currentQuestion = {};

    function loadQuestion() {
        const randomIndex = Math.floor(Math.random() * quizQuestions.length);
        currentQuestion = quizQuestions[randomIndex];
        document.getElementById('question').textContent = currentQuestion.question;
    }

    document.getElementById('submit').addEventListener('click', function() {
        const userAnswer = document.getElementById('quiz_answer').value.trim();
        const feedbackElement = document.getElementById('user_feedback');
        if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            feedbackElement.textContent = 'Yay!!';
            feedbackElement.style.color = 'green';
        } else {
            feedbackElement.textContent = 'Oh No! Ans: ' + currentQuestion.answer;
            feedbackElement.style.color = 'red';
        }
        loadQuestion(); 
    });

    loadQuestion(); 
});


const quizQuestions = [
    {
      "question": "What is the capital of France?",
      "answer": "Paris"
    },
    {
      "question": "Who wrote 'Hamlet'?",
      "answer": "Shakespeare"
    },
    {
      "question": "What element does 'O' represent on the periodic table?",
      "answer": "Oxygen"
    },
    {
      "question": "In what year did the Titanic sink?",
      "answer": "1912"
    },
    {
      "question": "Who painted the Mona Lisa?",
      "answer": "Leonardo da Vinci"
    },
    {
      "question": "What planet is known as the Red Planet?",
      "answer": "Mars"
    },
    {
      "question": "What is the largest ocean on Earth?",
      "answer": "Pacific"
    },
    {
      "question": "In computing, what does CPU stand for?",
      "answer": "Central Processing Unit"
    },
    {
      "question": "Which country is known as the Land of the Rising Sun?",
      "answer": "Japan"
    },
    {
      "question": "Who is the author of the Harry Potter series?",
      "answer": "JK Rowling"
    },
    {
      "question": "What is the capital city of Spain?",
      "answer": "Madrid"
    },
    {
      "question": "Which element has the chemical symbol 'Au'?",
      "answer": "Gold"
    },
    {
      "question": "What is the largest desert in the world?",
      "answer": "Sahara"
    },
    {
      "question": "In which continent is the Amazon Rainforest located?",
      "answer": "South America"
    },
    {
      "question": "What is the hardest natural substance on Earth?",
      "answer": "Diamond"
    },
    {
      "question": "What does WWW stand for in a website browser?",
      "answer": "World Wide Web"
    },
    {
      "question": "How many players are there in a soccer team?",
      "answer": "11"
    },
    {
      "question": "What year did World War II end?",
      "answer": "1945"
    },
    {
      "question": "Who invented the telephone?",
      "answer": "Alexander Graham Bell"
    },
    {
      "question": "What gas do plants absorb from the atmosphere for photosynthesis?",
      "answer": "Carbon Dioxide"
    },
    {
      "question": "Which animal is known as the King of the Jungle?",
      "answer": "Lion"
    },
    {
      "question": "What is the smallest prime number?",
      "answer": "2"
    },
    {
      "question": "Who is known for the theory of relativity?",
      "answer": "Albert Einstein"
    },
    {
      "question": "What is the longest river in the world?",
      "answer": "Nile"
    },
    {
      "question": "What musical instrument has keys, pedals, and strings?",
      "answer": "Piano"
    },
    {
      "question": "What is the main ingredient in guacamole?",
      "answer": "Avocado"
    },
    {
      "question": "What is the currency of Japan?",
      "answer": "Yen"
    },
    {
      "question": "Who directed the movie 'Titanic'?",
      "answer": "James Cameron"
    },
    {
      "question": "What is the chemical formula for water?",
      "answer": "H2O"
    },
    {
      "question": "What is the name of the largest island in the world?",
      "answer": "Greenland"
    }
];