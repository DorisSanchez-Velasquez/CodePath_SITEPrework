
# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Doris Sanchez Velasquez**

Time spent: **6** hours spent in total

Link to project: 

Code:(https://glitch.com/edit/#!/simplememory-game)

Live Website:(https://simplememory-game.glitch.me)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
- [x] After each sequence, points are updated when player completes correctly
- [x] Audio changes when player makes a mistake or earns a point
- [x] Audio played when player wins the game or losing game

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

User Wins Game
![x](http://g.recordit.co/49QhtB2I5J.gif)

User Loses Game
![x](http://g.recordit.co/OscHUbC7v1.gif)

Timer Runs Out
![x](http://g.recordit.co/G0G1H2Xlld.gif)

Lives are lost when Mistake Made
![x](http://g.recordit.co/mtuJvNr0lY.gif)

Points Updated
![x](http://g.recordit.co/sj6SyQeC7a.gif)

Game Speeds Up After Each Sequence
![x](http://g.recordit.co/wjqw5ftLv5.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
 
Implementing Javascript Attributes: https://www.w3schools.com/js/js_intro.asp

Researching setInterval: https://www.w3schools.com/jsref/met_win_setinterval.asp 

Researching clearInterval: https://developer.mozilla.org/en-US/docs/Web/API/setInterval

Implement Math.Random() for Pattern: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

Researching Bootstrap CSS: https://getbootstrap.com/docs/3.4/css/ 


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The biggest challenge I encountered when creating this submission was finding a way to implement the clock setInterval and restart the timer countdown each time a new sequence was played until the player either loses or wins the game. I spent a lot of time researching how to implement set Interval and clear interval within the code and find a way to update it each time a clue sequence was played. However, when I initially implemented the setInterval instruction, I wrote the code within the start game function rather than in the playClueSequence() function. In this format, the program would only countdown once. Eventually, I implemented the function into playClueSequence and added a new function that would decrement the timer at the same time the user is playing the game. 

The next issue I faced was that the timer would either count down too quickly or the timer would not reset when the next clue sequence was played. I decided to research into implementing setInterval and clearInterval more thoroughly to gain a better understanding for my problem rather than attempting to determine a solution blindly. In doing so, I was able to implement the clearInterval instruction within the correct decrementTime() function where, if the time runs out, the timer is restarted and the game is stopped and, whenever a new clue sequence is played, the setInterval instruction is called upon in the playClueSequence as the timer begins to count down. 

Interestingly, my curiosity with implementing the timer continued to grow as I researched different ways the timer could be curated for larger scale projects specifically within game design development and animating elements using Javascript. At first, it seemed intimidating but researching the process more made me curious on how programming with such a small scale instruction has impacted the game development industry.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

How can you connect the front-end development programs with the back-end development tools within larger scale projects? How can you implement data analysis software and security software to these websites to protect the user better? What are some other technologies or languages a web developer should implement apart from HTML, CSS, and JavaScript when curating programs for mobile or desktop? What more can you do with JavaScript specifically on large scale projects? How can these languages be used to create more user interaction and accessibility? What are the most essential technical and interpersonal skills a front end developer should have? 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

	Prior to completing this project, I was working on various personal projects specifically created to learn more about front end development tools and languages while providing more user interaction and accessibility. However, this project made me realize how much more I could learn and just how powerful HTML, CSS, and JavaScript can be when used together. If I had a few more hours to work on this project, my main focus would be to increase the user interaction with the game and implement certain features that made the game more personal to whomever is playing. For example, I would create another feature that allows the user to change how many buttons are displayed, control the speed of the clue sequences, and change the difficulty level of the game. In this way, the game would become more accessible as the user is able to control how difficult the game should be. In terms of accessibility separate from game functionality or visual appeal, I would implement screen reader features curated for users with visual impairments to read the instructions and a volume slider to the game so that the user can control how loud the tones of the buttons should be played. Additionally, I would add a feature that allows the game to be played with keyboard controls to provide accessibility to users with mobility impairments so that the user would not have to use a mouse to interact with the game.




## Interview Recording URL Link

https://drive.google.com/file/d/1fhMqIjideZDG8ngqCeDYgW6XcXMsGj8I/view?usp=sharing


## License

    Copyright [Doris Sanchez Velasquez]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.