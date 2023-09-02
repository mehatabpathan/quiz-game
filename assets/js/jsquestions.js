/*jshint esversion: 6 */
//creating an array and passing the number, questions, options, and answers
let jsquestions = [
    {
        numb: 1,
        question: "How to write an IF statement in JavaScript?",
        answer: "if (i == 5)",
        options: [
               "if i = 5 then",
               "if i == 5 then",
               "if (i == 5)",
               " if i = 5"
        ]
    },
    {
        numb: 2,
        question: "How does a FOR loop start?",
        answer: "for (i = 0; i< 5; i++)",
        options: [
            
             "for (i = 0; i <= 5)",
             "for (i = 0; i< 5; i++)",
             "for i = 1 to 5",
             "for (i <= 5; i++)"
        ]
     },
    {
        numb: 3,
        question: "How does a WHILE loop start?",
        answer: "while (i <= 10)",
        options:[
            "while i = 1 to 10",
             "while (i <= 10; i++)",
             "while (i <= 10)",
             "while (i=1 to 10)"
            ]
    },
    {
        numb: 4,
        question: "How do you round the number 7.25, to the nearest integer?",
        answer: "Math.round(7.25)",
        options: [
              "rnd(7.25)",
            "Math.round(7.25)",
             "Math.rnd(7.25)",
            "round(7.25)"
             ]
    },
    {
        numb: 5,
        question: "How do you find the number with the highest value of x and y?",
        answer: "Math.max(x, y)",
        options: [
            "Math.max(x, y)",
             "Math.ceil(x, y)",
             "top(x, y)",
             "ceil(x, y)"
            ]
    },
    {
        numb: 6,
        question: "How can you add a comment in a JavaScript?",
        answer: "//This is a comment",
        options: [
                 "//This is a comment",
                "&sbquo;This is a comment",
                 "&lt;!--This is a comment--&gt;",
                 "/This is a comment"

            ]
    },
    {
        numb: 7,
        question: "How to insert a comment that has more than one line?",
        answer: "/*This comment has more than one line*/",
        options: [
                "/*This comment has more than one line*/",
                "//This comment has more than one line//",
             "&lt;!--This comment has more than one line--&gt;",
             "/This comment has more than one line"
             ]
    },
    {
        numb: 8,
        question: "How do you declare a JavaScript variable?",
        answer: "var carName;",
        options: [
            "var carName;",
            "variable carName;",
            "v carName;",
            "var CarName;"
        ]
    },
    {
        numb: 9,
        question: "Which event occurs when the user clicks on an HTML element?",
        answer: "onclick",
        options: [
                "onchange",
                "onclick",
                "onmouseclick",
                "onmouseover"
            ]
    },
    {
        numb: 10,
        question: "Which operator is used to assign a value to a variable?",
        answer: "=",
        options: [
                 "*",
                "-",
                 "=",
                 "x"
            ]
    },
];