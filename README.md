# Programming Quiz!

Welcome to the JavaScript and HTML/CSS Fundamentals Quiz! This quiz is designed to test your knowledge of core JavaScript and HTML/CSS concepts, syntax, and best practices. Whether you're a beginner looking to reinforce your understanding or an experienced developer seeking to sharpen your skills, this quiz offers a range of questions to challenge your JavaScript and HTML/CSS expertise.

![Programming Quiz Responive website](assets/images/responsive.png)

[View Shoppers Stop Github pages](https://github.com/mehatabpathan/quiz-game "View shoppers stop Github pages")

[View shoppers Stop Live Website](https://mehatabpathan.github.io/quiz-game/ "View Shoppers stop Live Website")

![Static Badge](https://img.shields.io/badge/Last_Commit-September-red)
![Static Badge](https://img.shields.io/badge/Contributors-1-blue)
![Static Badge](https://img.shields.io/badge/Languages-3-greens)


## User Stories
- As a user, I can track my quiz progress and see my scores over time.
- As a user, I want to browse and select quizzes by category so that I can choose quizzes that match my interests or skill level.
- As a user, I want to see a list of available questions in a quiz so that I can prepare and understand the scope of the quiz.
- As a user,  I can answer questions and test my knowledge.
- As a user, I want to answer multiple-choice questions so that I can provide my answers for evaluation.
- As a user, I want to see my progress within the quiz so that I can gauge how much is left and manage my time effectively.
- As a user, I want to review and change my answers before submitting the quiz so that I can make sure I've answered to the best of my ability.
- As a user, I want to receive immediate feedback on my answers so that I can understand which questions I answered correctly and incorrectly.

## Features
### Start Page

Landing page of Programming Quiz. It displays two start button with javascript and html/css when pressed that start showing the rules box if we press continue it will take us to quiz box once we are done with quiz it will display the score card.

![Start page](assets/images/startpage.png)

#### Set Of Rules

![Set Of Rules](assets/images/Rulesbox.png)
---
### Quiz Box

If we press javascript questions it shows javascript quiz else it shows html/css questions .It shows all the question from 1 to 10 .

![Quiz Box](assets/images/Quizbox.png)

#### Score Card
This shows the result of the score.

![Score Crad](assets/images/scorecard.png)

### Colour Scheme

[Website Colour Scheme](assets/images/coolors.png "coolors image")

The website uses bright and light colours using color gradient for more variety.Background image I used #03F2ED color and for buttons #087C4D is used.with opacity 1 and z-index is 1.

## Testing
### How I tested
| What test was completed | Passed? Y(yes)/N(no) |
|:-----------------------:|:-------------------:|
| Responsiveness on Samsung A41 Phone Portrait | Y |
| Responsiveness on Samsung A41 Phone Landscape | Y |
| Responsiveness on Teclast Tablet Portrait | Y |
| Responsiveness on Teclast Tablet Lanscape | Y |
| Responsive behaviours on over 12 mobile device settings in chrome dev tools | Y |
| Responsiveness om desktop Google chrome 1920px x 1080px | Y |
| Responsiveness om desktop Google chrome 5120px x 1440px| Y |
| Responsiveness om desktop Google chrome 2560px by 1440px | Y |
| Google chrome lighthouse | Y |
| HTML Validation All | Y |
| Contrast checker | Y |
| CSS Validation | Y |
| JavaScript Validation script.js | Y |
| JavaScript Validation jsquestions.js | Y |
| JavaScript Validation htmlcssquestions.js | Y |

### bugs encountered

| Bugs/Issues Encountered          | How problem was fixed                               | Fixed Y(yes)/N(no) |
|:--------------------------------:|:---------------------------------------------------:|:------------------:|
| Selected question string comparing was failing due to special chareters | Used element.textContent insted of Text | Y |
| Questions Were Not Displaying | Was a typo in  file name in script.js | Y |
| When deployed in github, images were not displaying | Was due to / infrom of image src path, removed it | Y |
| Author Links appearing underneath other elements at certain resolutions | Removed Z index | Y |
| How to div was displaying upon load | Added hidden class to it to hide it on load | Y |
| Responsive css attempt of landscape mode set everything in an od skew to left | Removed the css that caused issue | Y |
| Over responsive footer | There was a buggy CSS code using footer and anchor tags I removed it | Y |
| Font was difficult to read for some users | Replaced font with a more user friendly font | Y |
| Hover effect remains active after selecting an answer and next question is loading | Added media querry to remove hover effect on touch devices | Y |
| Hover effect disabled on all devices | Added missing media querry to the css | Y |

---

## Validation testing
### CSS
- checked with [W3 CSS Validator](https://jigsaw.w3.org/css-validator/validator "css jiqsaw validation") No CSS issues

[W3 CSS Validation Image](assets/images/cssvalidationss.png "css validation")

### HTML
- checked with [W3 HTML Validator](assets/images/htmlvalidationss.png "html validation") No HTML validation issues found

**Script.js**
- checked with[JShint script.js](assets/images/script.js%20validationss.png "script.js")

**jsquestions.js**
-checked with[JShint javascript questions](assets/images/jsquestionvalidationss.png "jsquestions")

**htmlcssquestions.js**
-checked with[JShint html/css questions](assets/images/htmlcssqvaliss.png "html/css questions")


### Contrast
- Checked all pages with [A11Y contrast checker](https://color.a11y.com/) Any contrast issues?
- No automated color contrast issues found on the webpage tested

![Contrast checker Image](assets/images/contrastcolor.png)

#### Browser Testing

The Website was tested on Google Chrome, Firefox, Microsoft Edge, Safari browsers with no issues noted.

#### Device Testing

The website was viewed on a variety of devices such as Desktop, Laptop, iPhone 8, iPhoneX and iPad to ensure responsiveness on various screen sizes. The website performed as intended. The responsive design was also checked using Chrome developer tools across multiple devices with structural integrity holding for the various sizes.

I also used the following websites to test responsiveness:

http://www.responsinator.com/?url=https%3A%2F%2Fmehatabpathan.github.io%2Fquiz-game%2F

https://ui.dev/amiresponsive?url=https://mehatabpathan.github.io/quiz-game/

#### Friends and Family User Testing

Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

## Bugs

- After deploying the website I found out that the images were broken in the gallery page. This was due to absolute file paths. I fixed it by removing the initial slash and making the file paths relative.
- In the deployed version, the background images for the rules and get were not covering the whole section on tablets and larger screens. I fixed it by adding a height property to the sections affected.
- All font-awesome icons are loaded in svg format as font-awsome-kit is reducing the performance of the website

## Unsolved Bugs

- None.



### JavaScript

All Scripts checked with [JSHint](https://jshint.com/)

| **Sctipt** | **Any Errors?** | **Warnings?** | Other note worthy comments |
|:----------:|:---------------:|:-------------:|:--------------------------:|
| script.js | No Errors | 5 Warnings all to do with compatibility | None |
| jsquestions.js | No Errors | no warnings| None |
| htmlcssquestions.js | No Errors | no warnings| None |

### Light House


[lighthouse ](assets/images/lighthousess.png "view light house")



## Deployment
Used GitHub Pages to bring the site to life [View The Site Here](https://mehatabpathan.github.io/quiz-game/)

### Local Development

#### How To Fork

To fork the depository:

1. Log in or sign up to <https://github.com/>
2. Go to the repository for this project https://github.com/mehatabpathan/quiz-game
3. Click the fork button in the top right corner

#### How To Clone

1. Log in or sign up to <https://github.com/>
2. Go to the repository for this project https://github.com/mehatabpathan/quiz-game
3. Click the code button, select whether you'd like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'Git Clone' into the terminal and then paste the link you copied in step 3. Press Enter.


## Technology used
- [HTML](https://www.w3schools.com/html/default.asp)
- [CSS](https://www.w3schools.com/css/default.asp)
- [JavaScript](https://www.w3schools.com/js/default.asp)
- [Fontawesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Github](https://github.com/)
- [Git](https://git-scm.com/)
- [MS Paint](https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H)
- [Github Desktop App](https://desktop.github.com/)
- [ui.dev Am I Responsive](https://ui.dev/amiresponsive)

## Wireframes
### Start Page
[Start page wireframe](assets/images/startpagewf.png "view Start Page wire frame")

### Set of Rules
[Set of Rules wireframe](assets/images/ruleswf.png "view Set of Rules wire frame")

### Quiz Box
[Quiz Box wireframe](assets/images/quizboxwf.png " view Quiz Box wire frame")

### Score Card
[Score Card wireframe](assets/images/scorecardwf.png "view Score Card wire frame")


## Credits

### Content

All information provided was written by myself.

### Acknowledgments

I'd like to acknowledge the following people for helping me build this website.

- For my mentor, AntonioRodriquez for guiding me and helping me to improve elements of the site to make it more user friendly.
- For my tutor, Ed who helped me in the GitHub issue.
- for my Facilitator, Marko Tot who guided me with all the presentations that helped me to finish this project.

I used this presentation to improve my Readme

<https://docs.google.com/presentation/d/19_7r_To5bu7UjnZD87hrzWQi63Ij0YpaRH1XFnPZZe8/edit#slide=id.g1551aff15c5_1_0>

I used this mark up cheat sheet that I found on the slack community for clear guidance on how to create layouts for this readme file:

<https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md>

Shields.io badges were created for readme.md file using the markup code from:
<https://shields.io/badges>

**Other Notible Mentions**
- [W3Schools](https://www.w3schools.com/) for inspiration on the loading CSS for use on quiz page and to find out uses for all type of varriables and inspiration to the questions. Invaluable tool so much knowledge for free its crazy.

- [Code Institute](https://codeinstitute.net/) for providing an excellent accelerated learning platform worth every penny.
