# Week 4 Challenge
### A timed coding quiz using JS events and local storage


## Description
This is a 10 question multiple choice quiz with some broad, beginner front-end coding questions. A timer will tick down to zero, with wrong answers taking even more time off of it. At the end you will receive a score, and be able to put post it with your name onto a scoreboard.

## Installation

N/A

## Usage
You will be presented with a 'start' button to begin the quiz. Once started, you will face 10 questions and four choices with which to answer, with 60 seconds on the timer. Click on your selected answer. If correct, you will be told so and will be presented with the next question. If wrong, you will be told so, will see the next question, and will receieve a 10 second deduction to the timer. The game will end once you've answered the last question _or_ the timer hits zero. Once done, you will see your score -- each correct answer is worth one point, plus however many seconds were left on the timer when you finished. You can enter your name/initials to submit it to the scoreboard. On the scoreboard page, you will see your name and score (and other scores stored on the browser). You have the option to look at the scoreboard at any time, as well as clear the scoreboard.

Screenshots:
![A quiz question](/assets/mockups/quiz.png?raw=true)
![Game over screen; submit score form](/assets/mockups/game-over.png?raw=true)
![Scoreboard with a few scores](/assets/mockups/scoreboard.png?raw=true)

Link to live site: 


## Flaws/Comments
I don't think there's anything really big that is wrong here. The emphasis was not on super detailed styling so I did just enough CSS to make things uncramped and clear. To add and remove elements from the page, I created a lot in the HTML and just showed/hid sections when needed. This seemed a little faster than adding/removing everything in JS. The user feedback ('You got the last question right/wrong') section I struggled to make show up for a moment and then fade away like in the mock-up, though that's not a huge problem. The scoreboard display could probably be nicer, like a table or something -- but it works enough the way it is. Also, I did not _sort_ the scores numerically, which would obviously be an intuitive improvement. It's kind of goofy, but I allowed a score submission even with a score of 0.
 We haven't learned 'escaping' yet, so I'm a bit concerned about deploying a site with the user input box -- but I may just be paranoid about that! I gave it a 'maxlength', if that helps.

## Credits

N/A

## License

MIT License (as referred to in the repo)
