function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock" || input == "Rock") {
        return "paper";
    } else if (input == "paper" || input == "Paper") {
        return "scissors";
    } else if (input == "scissors" || input == "Scissors" || input == "scissor") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || input == "hi" || input == "Hello" || input == "HELLO" || input == "Hi") {
        return "Hello there!";
    } else if (input == "goodbye" || input == "bye") {
        return "Talk to you later!";
    } 
    else if(input == "Play" || input == "play"){
        return "Let's Play rock Paper Scissors..... You start";
    }
    else if(input == "who are you ?" ||input == "Who are you ?" || input == "Who are you"){
        return "I am Jarvis - A Bot. I can help you with Studies or play games with you";
    }
    else if(input == "Study" || input == "study"){
        return "Which Subject ? ";
    }
    else if(input == "Study" || input == "study"){
        return "Which Subject ? ";
      }
      else if(input == "Sing" || input == "sing") {
          return "Which Song ? ";
      }
      else if(input == "Today" || input == "today") {
          return "Is a nice day. ";
      }
      else if(input == "Language" || input == "language") {
          return "Which Language ? ";
      }
      else if(input == "How old are you?" || input == "How old are you ? " || input == "how old are you") {
        return "I'm Immortal"; 
      }
      else if(input == "Thanks" || input == "thanks") {
          return "I'm honored to serve";
      }
      else if(input == "Thank you" || input == "thank you" || input == "Thank You") {
          return "Shukriyaa to you";
      }
      else if(input == "Please" || input == "please") {
            return "I'll do my best";
      }
      else if(input == "listen" || input == "Listen") {
          return "Sorry, I didn't understand";
      }
      else if(input == "Who created you" || input == "Who created you?" || input == "who created you") {
          return "Aman and Alex";
      }
      else if(input == "Can I change your name?" || input == "can i change your name") {
          return "My name is Jarvis. I'm sorry, but I can't change who I am.";
      }
    else {
        return "Try asking something else!";
    }
}