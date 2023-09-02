# Programming Quiz!

Welcome to the JavaScript and HTML/CSS Fundamentals Quiz! This quiz is designed to test your knowledge of core JavaScript and HTML/CSS concepts, syntax, and best practices. Whether you're a beginner looking to reinforce your understanding or an experienced developer seeking to sharpen your skills, this quiz offers a range of questions to challenge your JavaScript and HTML/CSS expertise.

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
### Index Page

Landing page of JavaScript Showdown. It displays a play button when pressed that starts the quiz. Also visible is a leaderboard button which will take you to the leaderboard page.

![Index Page](./assets/images/readme/features/index.png)

#### How To Play

![How To Play](./assets/images/readme/features/howtoplay.png)
---
### Quiz Page

This page starts with a loading animation which will be hidden when the quiz has fully loaded. From here a user will select an answer and it will highlight red if it is wrong or green if its correct and after 1 second it will load the next question. There is a HUD that will diplay the score and current question with a progress bar. After the final question it will take you to the end page.

![Quiz Page](./assets/images/readme/features/quiz.png)

#### Loader
This appears while quiz loads then disapears.

![Loader](./assets/images/readme/features/loader.png)
#### Correct Answer

![Correct Highlight](./assets/images/readme/features/correct.png)

#### Incorrect Answer

![Incorrect Highlight](./assets/images/readme/features/incorrect.png)
---
### End Page

The page will load and display your score, allowing you to save it to the leaderboard.

![End Page](./assets/images/readme/features/end.png)
---
### Leaderboard Page

This page will display the leaderboard data upon loading.

![Leaderboard Page](./assets/images/readme/features/lead.png)
---
### 404 Page

This page will display an error message relating to error 404 page not found with a link back to indext.html

![404 Page](./assets/images/readme/features/404.png)
---
### No JavaScript

This will appear if the browser doesn't support JavaScript or if the user has disabled it

![No Java Script Warning](./assets/images/readme/features/nojs.png)
---
### Please Rotate

This message appears when users have their mobile devices in landscape mode, though it may not cover all devices.

![Please Rotate](./assets/images/readme/features/rotate.png)
---
### Footer

Footer with social links to the author that open in new tabs.

![Author Social Links Footer](./assets/images/readme/features/footer.png)
---
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
| Play button was not loading quiz | was a missing bracket that was deleted accidentally | Y |
| Questions Were Not Displaying | Was a typo in json file name in script.js | Y |
| Mobile device landscape not displaying as intended. Author links and title appear in odd fashion on certian resolutions | Ongoing issue tried diffrent css finally found one that works although going to keep my script for the set resolutions to rotate back as it is best experiance. still | Y |
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
- checked with [W3 CSS Validator](https://jigsaw.w3.org/css-validator/) No CSS issues

![W3 CSS Validation Image](./assets/images/cssvalidationss.png)

### HTML
- checked with [W3 HTML Validator](./assets/images/htmlvalidationss.png) No HTML validation issues found

**Script.js**
![W3 HTML Validation Image Index Page](assets/images/script.js%20validationss.png)

**jsquestions.js**
![W3 HTML Validation Image Quiz Page](assets/images/jsquestionvalidationss.png)

**htmlcssquestions.js**
![W3 HTML Validation Image End Page](assets/images/htmlcssqvaliss.png)


### Contrast
- Checked all pages with [A11Y contrast checker](https://color.a11y.com/) Any contrast issues?
- The contrast checker has issues checking based on the link its  self colors needed to input manually.

![Contrast checker Image](./assets/images/readme/contrast/colorcontrasttest.png)

### JavaScript

All Scripts checked with [JSHint](https://jshint.com/)

| **Sctipt** | **Any Errors?** | **Warnings?** | Other note worthy comments |
|:----------:|:---------------:|:-------------:|:--------------------------:|
| script.js | No Errors | 5 Warnings all to do with compatibility | None |
| jsquestions.js | No Errors | no warnings| None |
| htmlcssquestions.js | No Errors | no warnings| None |

### Light House


![lighthouse ](./assets/images/lighthousess.png)


## Deployment
Used GitHub Pages to bring the site to life [View The Site Here](https://danger0101.github.io/JavaScript-Quiz-PP2/index.html)

## Technology used
- [HTML](https://www.w3schools.com/html/default.asp)
- [CSS](https://www.w3schools.com/css/default.asp)
- [JavaScript](https://www.w3schools.com/js/default.asp)
- [Json](https://www.w3schools.com/js/js_json_intro.asp)
- [Fontawesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Visual Studios Code (VSCode)](https://visualstudio.microsoft.com/)
- [Github](https://github.com/)
- [Hypervisor (virtual enviorment)](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/about/)
- [Git](https://git-scm.com/)
- [Gyazo](https://gyazo.com/en)
- [MS Paint](https://apps.microsoft.com/store/detail/paint/9PCFS5B6T72H)
- [Github Desktop App](https://desktop.github.com/)
- [ui.dev Am I Responsive](https://ui.dev/amiresponsive)

## Wireframes
### Index.html
![index.html wireframe](./assets/images/readme/wireframes/indexwireframe.png)

### Quiz.html
![quiz.html wireframe](./assets/images/readme/wireframes/quizwireframe.png)

### End.html
![end.html wireframe](./assets/images/readme/wireframes/endwireframe.png)

### Leaderboard.html
![leaderboard.html wireframe](./assets/images/readme/wireframes/leaderboardwireframe.png)

### 404.html
![404.html wireframe](./assets/images/readme/wireframes/404wireframe.png)

## Credits
**Code related**
- [My project one](https://github.com/Danger0101/Meaningful_Careers_P1) for structure of this reademe file

- My previous assessor for ideas on the readme file and the footer issues PP1 had. Sorry do to the nature of assessing I have no idea who you are but thank you for the invaluable advice.

**Other Notible Mentions**
- [W3Schools](https://www.w3schools.com/) for inspiration on the loading CSS for use on quiz page and to find out uses for all type of varriables and inspiration to the questions. Invaluable tool so much knowledge for freee its crazy.

- [My wife](https://www.twitch.tv/flame_121) who’s been supper supportive of this change in career for me and just being out right amazing we will get her into this one way or another I am sure.

- [Code Institute](https://codeinstitute.net/) for providing an excellent accelerated learning platform worth every penny.
---
## Future feature ideas
| **Features to add** | **Added Y(yes)/N(no)** | **Why not added?** |
|:-------------------:|:--------------------:|:-------:|
| Pages for the menu, leaderboard, quiz, and end page | Y | N/A |
| Fifteen Quiz questions to start | Y | N/A |
| HUD to show score and question progress | Y | N/A |
| Leaderboard which uses local storage (svae/load) | Y | N/A |
| Loader to display whil quiz loads up | Y | N/A |
| Footer with author links | Y | N/A |
| Add more questions to aproximatly 40+ | Y | N/A |
| How to play button that opens a div on how to play the quiz | Y | N/A |
| Add no JavaScript Error text | Y | N/A |
| Remove hover effect on mobile/touch devices where there is no active cursor to hover | Y | N/A |
| Add a difficulty picker | N | One of the two ways I might take it in the future |
| Maybe instead of difficulty checker having option to choose othe coding language quiz's | N |  One of the two ways I might take it in the future |
| Backend database for score keeping | N | Will be added in the future when I have a good idea how to do it although I couldn't find a reliable way to make it work through github pages |
| Seperate leaderboards based on difficulty or based on quiz type | N | Will be implemented at the time these features go live |
| Add more questions to total 100+ | N | Was looing to continue it further in the future although I feel 40+ is sufficient for the time being |
| Swap leaderboard to a table instead of a list although for now its as intended  | N | When difficulty or other quiz types are added this is the planed route and I will make it so you can switch between the leaderboards as well. Only one will show at a time. |