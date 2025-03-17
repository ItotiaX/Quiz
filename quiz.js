function quiz(){

let Total = 0; 

const questions = [

    {question: "what it the capital of France? ", answer: "paris"},
    {question: "what game is Ryu from? ", answer: "street fighter"},
    {question: "what is the largest ocean on Earth? ", answer: "pacific"}
    
]

//for loop through quiz
for (let i = 0; i < questions.length; i++){
    let points = 0;
    let guesses = 3;

//nested while loop
while(guesses > 0){
    //prompt user for answer
    let UserAnswer = prompt(questions[i].question);
    //normalize user input to lowercase to match answers in array

    UserAnswer = UserAnswer.toLocaleLowerCase().trim();

    //check answer

    if(UserAnswer === questions[i].answer){

        if(guesses === 3 ){
            points = 3; //first try

        } else if (guesses === 2){
            points = 2; //second try

        } else if ( guesses === 1)
            points = 1; //third try
            
            Total += points; // add points to total
            alert(`Correct! You now have ${points} points.`);
            break;
            

    } else {
        guesses--;
        if (guesses > 0){
            alert(`Wrong! You have ${guesses} guesses left!`);
        } else {
            alert(`oops! The answer was: ${questions[i].answer}.`);
        }
    }
    
            
} 

} 
 alert('Your total score is: ${total}');
}
quiz();