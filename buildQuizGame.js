const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Earth", "Venus"],
    answer: "Mars"
  },
  {
    category: "Math",
    question: "What is 5 + 7?",
    choices: ["10", "12", "14"],
    answer: "12"
  },
  {
    category: "Geography",
    question: "Which is the largest ocean?",
    choices: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean"],
    answer: "Pacific Ocean"
  },
  {
    category: "Technology",
    question: "What does CPU stand for?",
    choices: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit"],
    answer: "Central Processing Unit"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington"
  }
];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return "The computer's choice is wrong. The correct answer is: " + question.answer;
  }
}

const randomQuestion = getRandomQuestion(questions);

console.log("Category:", randomQuestion.category);
console.log("Question:", randomQuestion.question);
console.log("Choices:", randomQuestion.choices);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);

console.log("Computer chose:", computerChoice);

const result = getResults(randomQuestion, computerChoice);

console.log(result);