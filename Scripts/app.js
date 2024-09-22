// An array of objects storing the quiz questions and options
var questions = [
    {
        question: 'Which of the following is used to declare a variable in JavaScript?',
        options: ['let', 'var', 'const', 'All of the above'],
        correctOption: 'All of the above',
    },
    {
        question: 'Which of the following is not a primitive data type in JavaScript?',
        options: ['String', 'Object', 'Boolean', 'Number'],
        correctOption: 'Object',
    },
    {
        question: 'Which method is used to convert a JSON object into a string in JavaScript?',
        options: ['JSON.parse()', 'JSON.stringify()', 'JSON.objectify()', 'JSON.convert()'],
        correctOption: 'JSON.stringify()',
    },
    {
        question: 'What is the purpose of the isNaN() function in JavaScript?',
        options: ['To check if a value is a string', 'To check if a value is a number', 'To check if a value is not a number', 'To convert a value to a number'],
        correctOption: 'To check if a value is not a number',
    },
    {
        question: 'What is the correct syntax to create a function in JavaScript?',
        options: ['function myFunction[]', 'function:myFunction()', 'function myFunction()', 'create function myFunction()'],
        correctOption: 'function myFunction()',
    },
    {
        question: 'What does the === operator do in JavaScript?',
        options: ['Compares only the values', 'Compares both value and type', 'Compares only the types', 'Converts types before comparing values'],
        correctOption: 'Compares both value and type',
    },
    {
        question: 'Which of the following is the correct way to write an array in JavaScript?',
        options: ['var colors = "red", "green", "blue";', 'var colors = ["red", "green", "blue"];', 'var colors = (1:"red", 2:"green", 3:"blue");', 'var colors = {"red", "green", "blue"};'],
        correctOption: 'var colors = ["red", "green", "blue"];',
    },
    {
        question: 'Which JavaScript keyword is used to check whether a property is in an object?',
        options: ['exists', 'contains', 'in', 'has'],
        correctOption: 'in',
    },
    {
        question: 'How can you prevent the default action of an event in JavaScript?',
        options: ['event.preventDefault()', 'event.stopPropagation()', 'event.prevent()', 'event.stopDefault()'],
        correctOption: 'event.preventDefault()',
    },
    {
        question: 'Which of the following is not a JavaScript framework/library?',
        options: ['React', 'Vue', 'Django', 'Angular'],
        correctOption: 'Django',
    },
]

// Variables to keep track of the current question, score, and buttons
var index = 0;
var score = 0;
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var quizHead = document.getElementById("heading");
var questionBox = document.getElementById("quizContainer");

// Function to update and display the current question
function updateQuestion() {
    var currentQuestion = questions[index];
    var questionHTML = `<p class="fw-bold q-content">${index + 1}. ${currentQuestion.question}</p>`;  // Add dynamic numbering

    // Generate the options dynamically based on how many options are in the current question
    for (var i = 0; i < currentQuestion.options.length; i++) {
        questionHTML += `<label>
                             <input type="radio" name="option" value="${currentQuestion.options[i]}">
                             ${currentQuestion.options[i]}
                         </label><br>`;
    }

    questionBox.innerHTML = questionHTML;  // Insert the dynamically generated question and options into the questionBox

    // Enable the Next button only when an option is selected
    selectingOptions();

    // Update the state of the Previous button (enable/disable)
    updatePrevButtonState();

    // Check if this is the last question, then change the "Next" button to "Submit"
    if (index === questions.length - 1) {
        nextBtn.innerHTML = "Submit";  // Change Next button text to "Submit"
        nextBtn.removeEventListener('click', nextButtonHandler);  // Remove the existing next handler
        nextBtn.addEventListener('click', submitQuiz);  // Add new handler for submitting the quiz
    } else {
        nextBtn.innerHTML = "Next";  // Reset it to "Next" for all other questions
        nextBtn.removeEventListener('click', submitQuiz);  // Remove submit handler if added previously
        nextBtn.addEventListener('click', nextButtonHandler);  // Add next button handler back
    }
}

// Function to handle "Next" button logic
function nextButtonHandler() {
    var options = document.getElementsByName("option");
    var selectedOption;

    // Find the selected option
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = options[i].value;
            break;
        }
    }

    // Check if the selected answer is correct
    if (selectedOption === questions[index].correctOption) {
        score++;  // Increase the score if the answer is correct
    }

    // Move to the next question if available
    if (index < questions.length - 1) {
        index++;  // Move to the next question
        updateQuestion();  // Update the displayed question
        nextBtn.disabled = true;  // Disable the Next button until a new option is selected
    }
}

// Function to submit the quiz and display the final score
function submitQuiz() {
    // Check if the selected option is correct for the last question
    var options = document.getElementsByName("option");
    var selectedOption;

    // Find the selected option
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = options[i].value;
            break;
        }
    }

    // Check if the selected answer is correct
    if (selectedOption === questions[index].correctOption) {
        score++;  // Increase the score if the answer is correct
    }

    // Display the final score
    quizHead.innerHTML = `QUIZ COMPLETED!`
    questionBox.innerHTML = `<p> <strong>Total Questions:</strong> ${questions.length}</p>
                             <p> <strong>Score:</strong> ${score} </p>
                             <p> <strong>Percentage:</strong> ${(score / questions.length) * 100}%`;
    nextBtn.style.display = "none";  // Hide the Next/Submit button
    prevBtn.style.display = "none";  // Hide the Previous button
}

// Function to enable or disable the Previous button based on the current index
function updatePrevButtonState() {
    if (index === 0) {
        prevBtn.disabled = true;  // Disable Previous button on the first question
    } else {
        prevBtn.disabled = false;  // Enable Previous button for other questions
    }
}

// Event listener for the Previous button
prevBtn.addEventListener('click', function () {
    if (index > 0) {
        index--;  // Move to the previous question
        updateQuestion();  // Update the displayed question
    }
});

// Function to check if an option is selected and enable the Next button
function selectingOptions() {
    var options = document.getElementsByName("option");
    for (var i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function () {
            nextBtn.disabled = false;  // Enable Next button when an option is selected
        });
    }
}


// Initialize the quiz by displaying the first question and disabling the Previous button
updateQuestion();


// -------------------------------------------------------------------------------------------------------------------

// STYLING FUNCTIONALITIES

// Get elements
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');

// Add event listener to the search icon
searchIcon.addEventListener('click', function () {
    searchIcon.style.display = 'none'; // Hide the magnifying glass icon
    searchInput.classList.add('active'); // Show the search input
    searchInput.style.display = 'block'; // Display the search bar
    searchInput.focus(); // Set focus on the input field
});

// Add blur event listener to the search input
searchInput.addEventListener('blur', function () {
    searchInput.style.display = 'none'; // Hide the search input
    searchInput.classList.remove('active'); // Remove the active class
    searchIcon.style.display = 'block'; // Show the magnifying glass icon
});
