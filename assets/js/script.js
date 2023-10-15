/*jshint esversion: 6 */
//initialize email.js//
emailjs.init("UOe2Low0qTXYUslK1");

// Selecting all required elements
const startBtn = document.querySelectorAll(".start_btn button");
const infoBox = document.querySelector(".info_box");
const userBox = document.querySelector(".user_box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const exitQuizBtn = userBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const startQuizBtn = userBox.querySelector(".buttons .start");
const quiz_box = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
var container = document.getElementsByClassName('container');
const queryContainer = document.querySelector(".container");
var questions = {};

// Add JavaScript to open and close the custom dialog

const confirmationDialog = document.getElementById('custom-dialog');
const confirmYesButton = document.getElementById('confirm-yes');
const confirmNoButton = document.getElementById('confirm-no');
const quizBox = document.querySelector('.quiz_box');

function openConfirmationDialog() {
    confirmationDialog.style.display = 'block'; // Show the dialog
    quizBox.classList.add('blur'); // Add blur to the quiz box

    // Disable options and the "Next" button
    const optionElements = document.querySelectorAll('.option');
    optionElements.forEach((option) => {
        option.style.pointerEvents = 'none';
    });

    next_btn.style.pointerEvents = 'none';
    queryContainer.style.pointerEvents = 'none';
}


function closeConfirmationDialog() {
    confirmationDialog.style.display = 'none'; // Hide the dialog
    quizBox.classList.remove('blur'); // Remove blur from the quiz box

    // Re-enable options and the "Next" button
    const optionElements = document.querySelectorAll('.option');
    optionElements.forEach((option) => {
        option.style.pointerEvents = 'auto';
    });

    next_btn.style.pointerEvents = 'auto';
    queryContainer.style.pointerEvents = 'auto';

}
confirmYesButton.addEventListener('click', () => {
    // Handle "Yes" button action here
    closeConfirmationDialog();
    // Add your code to navigate or perform the desired action.
});

confirmNoButton.addEventListener('click', () => {
    // Handle "No" button action here
    closeConfirmationDialog();
    // Add your code for staying on the quiz or any other action.
});

let exitQuiz = false; // A flag to check if the user wants to exit the quiz

// Add event listeners to your anchor tags (e.g., Home, JavaScript Quiz)
const anchorTags = document.querySelectorAll("a");

anchorTags.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (quiz_box.classList.contains("activeQuiz")) {
      // The user is currently in the quiz
      e.preventDefault(); // Prevent the default navigation action

      // Show the custom confirmation dialog
      const dialog = document.getElementById("custom-dialog");
      dialog.style.display = "block";
      openConfirmationDialog();

      // Add event listeners to the "Yes" and "No" buttons in the dialog
      document.getElementById("confirm-yes").addEventListener("click", function () {
        // If the user clicks "Yes," set the exitQuiz flag to true and navigate to the selected anchor link
        exitQuiz = true;
        window.location.href = anchor.getAttribute("href");
      });

      document.getElementById("confirm-no").addEventListener("click", function () {
        // If the user clicks "No," hide the dialog and stay on the quiz
        dialog.style.display = "none";
      });
    }
  });
});

// If StartQuiz Button clicked
startBtn.forEach(button => {
    button.addEventListener('click', () => {
        container[0].style.opacity = "0";   
        var jsbool = button.classList.contains("js");
        infoBox.classList.add("activeInfo");  // Show the info_box

        if(jsbool){
            questions = jsquestions;
        } else {
            questions = htmlcssquestions;
        }
    });
});

// If ExitQuiz button clicked
exitBtn.onclick = ()=>{
    container[0].style.opacity = "1";
    infoBox.classList.remove("activeInfo"); // Hide the info box
    userBox.classList.remove("activeQuiz"); 
};

exitQuizBtn.onclick = ()=>{
    container[0].style.opacity = "1";
    infoBox.classList.remove("activeInfo"); // Hide the info box
    userBox.classList.remove("activeQuiz"); 
};

// If continueQuiz button clicked
continueBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); // Hide the info box
    userBox.classList.add("activeQuiz"); 
};

// Start the quiz
startQuizBtn.onclick = (e)=>{
    // Validate email
    let email = userBox.querySelector(".user_email");
    var emailValidate = email.checkValidity();
    
    if(emailValidate){
        e.preventDefault();
        // Get user name and email
        user_name = userBox.querySelector(".user_name").value;
        user_email = userBox.querySelector(".user_email").value;
        if (user_name !== '' && user_email !== '') {
            userBox.classList.remove("activeQuiz"); 
            quiz_box.classList.add("activeQuiz"); // Show the quiz box
            showQuestions(0); // Call showQuestions function
            queCounter(1); // Pass 1 parameter to queCounter
            startTimer(20); // Call startTimer function
            startTimerLine(0); // Call startTimerLine function
        } else {
            e.preventDefault();
            console.log('Email validation failed');
        }
    }
};

let timeValue = 20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let user_name = 'Mehatab';
let user_email = 'mehatab.pathan231@gmail.com';

const restart_quiz = resultBox.querySelector(".buttons .restart");
const quit_quiz = resultBox.querySelector(".buttons .quit");

// If restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); // Show quiz box
    resultBox.classList.remove("activeResult"); // Hide the result box
    timeValue = 20;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); // Call showQestions function
    queCounter(que_numb); // Pass que_numb value to the queCounter
    clearInterval(counter); // Clear counter
    clearInterval(counterLine); // Clear counterLine
    startTimer(timeValue);  // Call startTimer function
    startTimerLine(widthValue);  // Call startTimerLine function
    timeText.textContent = "Time Left";  
    next_btn.classList.remove("show");  // Hide the next button
};

// If quitQuiz button clicked
quit_quiz.onclick = ()=>{
    container[0].style.opacity = "1";
    window.location.reload();
};

const next_btn = document.querySelector("footer .next_btn");

// If Click Next button clicked
next_btn.onclick = ()=>{
    nextClick();
};

function nextClick() {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}

// Getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].numb+ "." + questions[index].question +'</span>';
    let option_tag =
  '<div class="option"><span>' +
  questions[index].options[0] +
  '</span></div>' +
  '<div class="option"><span>' +
  questions[index].options[1] +
  '</span></div>' +
  '<div class="option"><span>' +
  questions[index].options[2] +
  '</span></div>' +
  '<div class="option"><span>' +
  questions[index].options[3] +
  '</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// Div tags for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// If user clicked on option
function optionSelected(answer){
    next_btn.classList.add("hide");
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    const allOptions = option_list.children.length;
    
    if(userAns == correctAns){
        userScore += 1;
        answer.classList.add("correct");  // Add green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); // Add tick icon
    } else {  // Answer is incorrect
        answer.classList.add("incorrect");  // Add red color to incorrect selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); // Add cross icon

        // If answer is incorrect then automatically select the correct answer
        for(i=0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
    }

    // Once user selected, disable all options
    for (i=0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    

    setTimeout(function() {
        nextClick();
        next_btn.classList.remove("hide");
    }, 2000);
}

// Function to show result
function showResult() {
    sendEmail()
        .then(function(response) {
            // Email sent successfully
            const messageBox = document.querySelector(".result_box .message");
            messageBox.textContent = "Email sent successfully! ";

            infoBox.classList.remove("activeInfo");
            quiz_box.classList.remove("activeQuiz");
            resultBox.classList.add("activeResult");

            const scoreText = resultBox.querySelector(".score_text");
            if (userScore > 3) {
                let scoreTag = '<p>and congrats! You got <span>'+ userScore +'</span> out of <span>'+ questions.length +'</span></p>';
                scoreText.innerHTML = scoreTag;
            } else if (userScore > 1) {
                let scoreTag = '<p>and nice, You got <span>'+ userScore +'</span> out of <span>'+ questions.length +'</span></p>';
                scoreText.innerHTML = scoreTag;
            } else {
                let scoreTag ='<p>and sorry, You got only <span>'+ userScore +'</span> out of <span>'+ questions.length +'</span></p>';
                scoreText.innerHTML = scoreTag;
            }
        })
        .catch(function(error) {
            // Email sending failed
            const messageBox = document.querySelector(".result_box .message");
            messageBox.textContent = "Failed to send email.";

            infoBox.classList.remove("activeInfo");
            quiz_box.classList.remove("activeQuiz");
            resultBox.classList.add("activeResult");

            const scoreText = resultBox.querySelector(".score_text");
            if (userScore > 3) {
                let scoreTag = '<p>and congrats! You got <span>'+ userScore +'</span> out of <span>'+ questions.length +'</span></p>';
                scoreText.innerHTML = scoreTag;
            } else if (userScore > 1) {
                let scoreTag = '<p>and nice, You got <span>'+ userScore +'</span> out of <span>'+ questions.length +'</span></p>';
                scoreText.innerHTML = scoreTag;
            } else {
                let scoreTag ='<p>and sorry, You got only <span>'+ userScore +'</span> out of <span>'+ questions.length +'</span></p>';
                scoreText.innerHTML = scoreTag;
            }
        });
}

// Timer
function startTimer(time){
    timeCount.textContent = time;
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--; // Decrement the time value
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time Off";

            let correctAns = questions[que_count].answer;
            const allOptions = option_list.children.length;

            for (i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correctAns) {
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn.classList.add("show");
        }
    }
}

// TimerLine
function startTimerLine(time){
    counterLine = setInterval(timer, 200);
    function timer(){
        time += 1;
        time_line.style.width = time + `%`;
        if(time > 99){
            clearInterval(counterLine);
        }
    }
}

// Creating a new span tag and passing the question number and total question
function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQueCountTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCountTag; // Adding new span tag inside the bottom_ques_counter
}

// Function to send email using EmailJS
function sendEmail() {
    var templateParams = {
        to_email: user_email,
        to_name: user_name,
        quiz_score: userScore,
    };

    // Return the promise from emailjs.send()
    return emailjs.send('service_kom0awm', 'template_cw85qpi', templateParams, 'UOe2Low0qTXYUslK1');
}

