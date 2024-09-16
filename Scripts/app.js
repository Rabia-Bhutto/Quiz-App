// // An Array of Objects to store all the Quiz questions.
// var questions = [
//     {
//         question: 'Inside which HTML element do we put the JavaScript?',
//         option1: 'scprit',
//         option2: 'javascrip',
//         option3: 'js',

//         correctOption: 'script',
//     },
//     {
//         question: 'Where is the correct place to insert a JavaScript?',
//         option1: 'The <head> section',
//         option2: 'The <body> section',
//         option3: 'Both the <head> and "body" section are correct',
//         correctOption: 'The <body> section',
//     },
//     {
//         question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
//         option1: 'scripr href="xxx.js"',
//         option2: 'scripr name="xxx.js"',
//         option3: 'scripr src="xxx.js"',
//         correctOption: 'scripr src="xxx.js"',
//     }]


// var index = 0
// var nextBtn = document.getElementById("nextBtn")
// var options = document.getElementsByName("option")

// // The main function to replace the question once it's answered and the NEXT button is clicked.
// function showQuestions() {
//     nextBtn.disabled = true
//     var questionBox = document.getElementById("quizContainer")
//     questionBox.innerHTML = `<p>${questions[index].question}</p>
//         <label>
//             <input type="radio"   name="option" value="${questions[index].option1}" >
//             ${questions[index].option1}
//         </label>
//         <br>
//         <label>
//             <input type="radio" name="option" value="${questions[index].option2}" >
//                   ${questions[index].option2}
//         </label>
//         <br>
//         <label>
//             <input type="radio" name="option" value="${questions[index].option3}" >
//              ${questions[index].option3}
//         </label>

// `
//     // index++;


//     // Enabling the NEXT button and getting the selected value of the Radio button.
//     for (var i = 0; i < options.length; i++) {

//         // if (options[i].checked) {
//         //     console.log(options[i].value);

//         // }

//         options[i].addEventListener("click", function () {
//             nextBtn.disabled = false
//         })

//     }
// }

//     function getSelectedOption() {
//         var radioButtons = document.getElementsByName("option");
//         for (var i = 0; i < radioButtons.length; i++) {
//             if (radioButtons[i].checked) {
//                 return radioButtons[i].value;
//             }
//         }
//         return null;
//     }

//     nextBtn.addEventListener("click", function() {
//         var selectedValue = getSelectedOption();
//         if (selectedValue) {
//             console.log("Selected Option:", selectedValue);
//         }
//         if (index < questions.length - 1) {
//             index++;
//             showQuestions();
//         } else {
//             console.log("Quiz finished!");
//         }
//     });



// // Function Call.
// showQuestions()



// Array of Objects to store all the Quiz questions.
var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        option1: 'script',
        option2: 'javascrip',
        option3: 'js',
        correctOption: 'script',
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        option1: 'The <head> section',
        option2: 'The <body> section',
        option3: 'Both the <head> and <body> section are correct',
        correctOption: 'The <body> section',
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: 'scripr href="xxx.js"',
        option2: 'scripr name="xxx.js"',
        option3: 'scripr src="xxx.js"',
        correctOption: 'scripr src="xxx.js"',
    }
];

var index = 0;
var nextBtn = document.getElementById("nextBtn");

// The main function to display the question and its options.
function showQuestions() {
    nextBtn.disabled = true; // Disable the NEXT button initially
    var questionBox = document.getElementById("quizContainer");

    // Dynamically create the question and options
    questionBox.innerHTML = `<p>${questions[index].question}</p>
        <label>
            <input type="radio" name="option" value="${questions[index].option1}">
            ${questions[index].option1}
        </label>
        <br>
        <label>
            <input type="radio" name="option" value="${questions[index].option2}">
            ${questions[index].option2}
        </label>
        <br>
        <label>
            <input type="radio" name="option" value="${questions[index].option3}">
            ${questions[index].option3}
        </label>
    `;

    // Reassign options and add event listeners for the new options
    var options = document.getElementsByName("option");
    for (var i = 0; i < options.length; i++) {
        options[i].addEventListener("change", function() {
            nextBtn.disabled = false; // Enable the NEXT button once an option is selected
        });
    }
}

// Function to get the selected option
function getSelectedOption() {
    var radioButtons = document.getElementsByName("option");
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return radioButtons[i].value; // Return the value of the selected radio button
        }
    }
    return null; // Return null if no radio button is selected
}

// Event listener for the NEXT button
nextBtn.addEventListener("click", function() {
    var selectedValue = getSelectedOption();
    if (selectedValue) {
        console.log("Selected Option:", selectedValue);
    } else {
        console.log("No option selected");
    }

    // Move to the next question only if index is within bounds
    if (index < questions.length - 1) {
        index++; // Increment the index to move to the next question
        showQuestions(); // Show the next question
    } else {
        console.log("Quiz finished!");
    }
});

// Initial call to display the first question
showQuestions();

