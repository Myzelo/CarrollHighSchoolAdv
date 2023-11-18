class Game {
    constructor(){
        
    }

    updateGameState(state){
        firebase.database().ref("/").update({
            gameState:state
        })
    }

    getState(state){
        firebase.database().ref("gameState").on("value", (data)=>{
            gameState = data.val()
        })
    }
    
    play(){
        imageMode(CENTER);
       // image(classroomImg,windowWidth/2, windowHeight/2, windowWidth, windowHeight);
        this.mathClass();
    }

    mathClass(){
        /*
            notes:
            player --> go to math class, get into class, mini how-to from teacher (mini-game directions), given extremly easy 
            questions, correct answers help, incorrect bring down score. highest level of math would be 
            basic algebra probelms like 2x + 3 = 7
        */ 
        /*
        alt code for switch case
        var questionnare = [
            {
             "question" : "",
             "answer" : ""
            }
        ]
        */


        //questions + answers, randomization
        var question1 = createElement("h2");
        var answer1 = "14"
        
        var question2 = createElement("h2");
        var answer2 = "0"

        var question3 = createElement("h2");
        var answer3 = "38"

        var question4 = createElement("h2");
        var answer4 = "47"

        var question5 = createElement("h2");
        var answer5 = "9"

        var question6 = createElement("h2");
        var answer6 = "8"

        var question7 = createElement("h2");
        var answer7 = "31"

        var question8 = createElement("h2");
        var answer8 = "10"

        var question9 = createElement("h2");
        var answer9 = "21"

        var question10 = createElement("h2");
        var answer10 = "14"


        //bts var
        var user_entry = createInput("").attribute("placeholder","What's your answer?");
        user_entry.position(300, 200);
        var input_value = user_entry.value()

        var congrats = createElement("h1");

        var wrong_ans = createElement("h1");

        //question cases/checking
        switch(random_questions){
           case 1: 
                question1.html("25-11") ;
                question1.position(200,200);
                if(input_value === answer1){
                    congrats.html("Your answer is correct !! Well done") ;
                    congrats.position(200,400);
                }
                else {
                    wrong_ans.html("Your answer was incorrect, try to do better in the next problem!") ;
                    wrong_ans.position(200,400);
                }
                break;
           case 2: 
                question2.html("13-13") ;
                question2.position(200,200);
                if(input_value === answer2){
                    congrats.html("Your answer is correct !! Well done") ;
                    congrats.position(200,400);
                }
                else {
                    wrong_ans.html("Your answer was incorrect, try to do better in the next problem!") ;
                    wrong_ans.position(200,400);
                }
                break;
           case 3: 
                question3.html("25+13") ;
                question3.position(200,200);
                if(input_value === answer3){
                    congrats.html("Your answer is correct !! Well done") ;
                    congrats.position(200,400);
                }
                else {
                    wrong_ans.html("Your answer was incorrect, try to do better in the next problem!") ;
                    wrong_ans.position(200,400);
                }
                break;
           case 4:  
                question4.html("37+10") ;
                question4.position(200,200);
                if(input_value === answer4){
                    congrats.html("Your answer is correct !! Well done") ;
                    congrats.position(200,400);
                }
                else {
                    wrong_ans.html("Your answer was incorrect, try to do better in the next problem!") ;
                    wrong_ans.position(200,400);
                }
                break;
           case 5:  
                question5.html("19-10") ;
                question5.position(200,200);
                if(input_value === answer5){
                    congrats.html("Your answer is correct !! Well done") ;
                    congrats.position(200,400);
                }
                else {
                    wrong_ans.html("Your answer was incorrect, try to do better in the next problem!") ;
                    wrong_ans.position(200,400);
                }
                break;
            case 6:  
                question6.html("15-7") ;
                question6.position(200,200);
                if(input_value === answer6){
                    congrats.html("Your answer is correct !! Well done") ;
                    congrats.position(200,400);
                }
                else {
                    wrong_ans.html("Your answer was incorrect, try to do better in the next problem!") ;
                    wrong_ans.position(200,400);
                }
                break;
            case 7:  
                question7.html("19+12") ;
                question7.position(200,200);
                if(input_value === answer7){
                    congrats.html("Your answer is correct !! Well done") ;
                    congrats.position(200,400);
                }
                else {
                    wrong_ans.html("Your answer was incorrect, try to do better in the next problem!") ;
                    wrong_ans.position(200,400);
                }
                break;
            case 8:  
                question8.html("22-12") ;
                question8.position(200,200);
                if(input_value === answer8){
                    congrats.html("Your answer is correct !! Well done") ;
                    congrats.position(200,400);
                }
                else {
                    wrong_ans.html("Your answer was incorrect, try to do better in the next problem!") ;
                    wrong_ans.position(200,400);
                }
                break;
            case 9:  
                question9.html("14+7") ;
                question9.position(200,200);
                if(input_value === answer9){
                    congrats.html("Your answer is correct !! Well done") ;
                    congrats.position(200,400);
                }
                else {
                    wrong_ans.html("Your answer was incorrect, try to do better in the next problem!") ;
                    wrong_ans.position(200,400);
                }
                break;
            case 10:  
                question10.html("18-4") ;
                question10.position(200,200);
                if(input_value === answer10){
                    congrats.html("Your answer is correct !! Well done") ;
                    congrats.position(200,400);
                }
                else {
                    wrong_ans.html("Your answer was incorrect, try to do better in the next problem!") ;
                    wrong_ans.position(200,400);
                }
                break;
           default: 
                congrats.html("Let's try to beat it!") ;
                congrats.position(200,400);
                break;
        }
        //add 10 more cases as part of the assignment for this week *remember to add questions, answers, and change math.round from 5-->25

    }
}