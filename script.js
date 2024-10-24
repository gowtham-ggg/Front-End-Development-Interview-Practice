// Questions and correctAnswers stored as an array of objects
const questionData = [
  {
    question: "What is HTML?",
    correctAnswer: "HTML stands for HyperText Markup Language. Markup means it is used to structure the content of the webpage. HTML contains the set of elements or tags which are used to define the structure and semantics of a webpage."
  },
  {
    question: "What is the purpose of the <!DOCTYPE html> declaration?",
    correctAnswer: "It informs the browser about the version of HTML being used and ensures proper rendering."
  },
  {
    question: "What are the main sections of an HTML document?",
    correctAnswer: "The main sections are <html>, <head>, and <body>."
  },
  {
    question: "How do you write a comment in HTML?",
    correctAnswer: "Starting tag: <!--, Ending tag: -->"
  },
  {
    question: "What is the purpose of the <head> element?",
    correctAnswer: "It holds the below information:\n- Metadata\n- Links to stylesheets\n- Scripts\nIn general, it contains information that is not displayed directly on the page."
  },
  {
    question: "What is the purpose of the <title> element?",
    correctAnswer: "It sets the title of the web page, which is displayed on the browser tab."
  },
  {
    question: "What is the purpose of the <body> element?",
    correctAnswer: "It contains the content of the HTML document that is displayed in the browser."
  },
  {
    question: "How do you create a hyperlink in HTML?",
    correctAnswer: "Use the <a> tag with the href attribute.\n<a href=\"URL\">Link text</a>"
  },
  {
    question: "What is the difference between an absolute URL and a relative URL?",
    correctAnswer: "An absolute URL includes the full path (e.g., https://www.example.com/page).Relative URL is relative to the current page's location (e.g., /page)."
  },
  {
    question: "What is the difference between an element and a tag?",
    correctAnswer: "An element includes the opening tag, content, and closing tag <p>content</p>\nA tag is the part inside angle brackets <p>"
  }
];

// Function to dynamically generate question containers
function generateQuestions() {
  const container = document.getElementById('questions-container');

  questionData.forEach((item, index) => {
    const questionNumber = document.createElement('h3');
    questionNumber.innerText = `Question ${index + 1}:`;

    const questionContainer = document.createElement('div');
    questionContainer.className = 'question-container';

    const questionText = document.createElement('p');
    questionText.innerText = item.question;

    const textarea = document.createElement('textarea');
    textarea.id = `userAnswer${index + 1}`;
    textarea.rows = 6;
    textarea.placeholder = "Write your answer here...";

    const submitButton = document.createElement('button');
    submitButton.innerText = "Submit answer";
    submitButton.onclick = () => checkAnswer(index + 1);

    const showAnswerButton = document.createElement('button');
    showAnswerButton.className = "show-answer-button";
    showAnswerButton.innerText = "Show Correct Answer";
    showAnswerButton.onclick = () => showCorrectAnswer(index + 1);

    const result = document.createElement('p');
    result.className = "result";
    result.id = `result${index + 1}`;

    const correctAnswer = document.createElement('p');
    correctAnswer.className = "correct-answer";
    correctAnswer.id = `correctAnswer${index + 1}`;
    correctAnswer.style.display = "none";

    questionContainer.appendChild(questionNumber);
    questionContainer.appendChild(questionText);
    questionContainer.appendChild(textarea);
    questionContainer.appendChild(submitButton);
    questionContainer.appendChild(showAnswerButton);
    questionContainer.appendChild(result);
    questionContainer.appendChild(correctAnswer);

    container.appendChild(questionContainer);
  });
}

// Call the function to generate the questions on page load
generateQuestions();

// Calculate Levenshtein distance (edit distance)
function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) {
      costs[s2.length] = lastValue;
    }
  }
  return costs[s2.length];
}

// Calculate similarity between two answers
function similarity(s1, s2) {
  let longer = s1.length > s2.length ? s1 : s2;
  let shorter = s1.length > s2.length ? s2 : s1;
  let longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

// Function to check the user's answer
function checkAnswer(questionId) {
  let userAnswer = document.getElementById(`userAnswer${questionId}`).value.trim();
  let correctAnswer = questionData[questionId - 1].correctAnswer;

  if (userAnswer === "") {
    document.getElementById(`result${questionId}`).innerText = "Please provide an answer.";
    return;
  }

  let matchPercentage = similarity(userAnswer, correctAnswer) * 100;

  let resultText = matchPercentage >= 70
    ? `Good job! Your answer matches ${matchPercentage.toFixed(2)}% with the expected answer.`
    : `Keep trying. Your answer only matches ${matchPercentage.toFixed(2)}%.`;

  document.getElementById(`result${questionId}`).innerText = resultText;
}

// Function to show the correct answer
function showCorrectAnswer(questionId) {
  let correctAnswer = questionData[questionId - 1].correctAnswer;
  document.getElementById(`correctAnswer${questionId}`).innerText = `Correct Answer: ${correctAnswer}`;
  document.getElementById(`correctAnswer${questionId}`).style.display = "block";
}
