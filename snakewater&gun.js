// Question:1- use javascript to create a game of snake, water & gun. The game should ask you to enter S, W & G. The computer should
// be able to randomly generate S, W & G and declare win or loss using alert. use confirm and prompt wherever required
const match= ()=>{
    let cpuScore=3;
    let userScore=3;
    while(userScore!==0 && cpuScore!==0){
        let user= prompt("Enter S, W or G");
        let cpuI= Math.floor(Math.random() * 3) ;
        let cpu= ["S","W","G"][cpuI];
    if(cpu===user){
        alert("Nobody wins match is tied");
    }
    else if(cpu=="S" && user=="W"){
        userScore= userScore-1;
        alert(`cpu win & user lose \n cpu score is: ${cpuScore} \n user score is: ${userScore}`) ;
    }
    else if(cpu=="G" && user=="W"){
        cpuScore= cpuScore-1;
        alert(`user win & cpu lose \n cpu score is: ${cpuScore} \n user score is: ${userScore}`)
    }
    else if(cpu=="W" && user=="S"){
        cpuScore= cpuScore-1;
        alert(`user win & cpu lose \n cpu score is: ${cpuScore} \n user score is: ${userScore}`);
    }
    else if(cpu=="G" && user=="S"){
        userScore= userScore-1;
        alert(`cpu win & user lose \n cpu score is: ${cpuScore} \n user score is: ${userScore}`) ;
    }
    else if(cpu=="W" && user=="G"){
        userScore= userScore-1;
        alert(`cpu win & user lose \n cpu score is: ${cpuScore} \n user score is: ${userScore}`);
    }
    else if(cpu=="S" && user=="G"){
        cpuScore= cpuScore-1;
        alert(`user win & cpu lose \n cpu score is: ${cpuScore} \n user score is: ${userScore}`);
    }
    else{
        alert("please only give S, W & G as input");
    }

    }
    if(userScore==cpuScore){
        alert("match tie");
    }
    else if(userScore>cpuScore){
        alert("user win");
    }
    else{
        alert("computer win");
    }

    return `user score is: ${userScore} <br> computer score is ${cpuScore}`;

}

document.write(match());








