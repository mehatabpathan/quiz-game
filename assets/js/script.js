/*jshint esversion: 6 */
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");


//If StartQuiz Button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show the info box
};

// if ExitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
};