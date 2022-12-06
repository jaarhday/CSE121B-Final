let all_numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
let odds = [0,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
let evens = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];
let red = [0,1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
let black = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
let bets = [];
let betamt = [];
let counter = 1;
let funds = 0;
document.getElementById("funds").innerHTML = funds;
document.getElementById("insert").addEventListener("click", addFunds(funds));//adds funds
document.getElementById('play').addEventListener('click', getBets()); //gets the bets
document.getElementById('spinthewheel').addEventListener('click', spinWheel()); //"spins" the wheel, generates number
document.getElementById('check').addEventListener('click', checkBets(spinNum, bets, betamt, funds)); // sees if the user won

function addFunds(funds){
    let funds = document.getElementById("insert")
}

function resetBets() {
    bets = [];
    betamt = [];
    return bets, betamt;
}

function getBets(){
    resetBets();
    getBetAmt();
    return bets;
}

function getBetAmt(){
    return betamt;
}

function spinWheel(){
    spinNum = Math.floor(Math.random() *37);
    return spinNum;
}

function checkBets(spinNum, bets, betamt, funds){
    if (bets == '1'){ //red bet
        for (let i=0; i < red.length; i++){
            if (red[i] == spinNum){ //if the bet = the landed number, then the player wins and the bet is added to the funds.
                funds = betamt*2 + funds;
                return funds;
            }
        }
        funds = funds - betamt;
        return funds;
    }
    else if (bets == '2'){ //black bet
        for (let i=0; i < black.length; i++){
            if (black[i] == spinNum){ 
                funds = betamt*2 + funds;
                return funds;
            }
        }
        funds = funds - betamt;
        return funds;
    }
    else if (bets == '3'){ //odds bet
        for (let i=0; i < odds.length; i++){
            if (odds[i] == spinNum){ 
                funds = betamt*2 + funds;
                return funds;
            }
        }
        funds = funds - betamt;
        return funds;
    }
    else if (bets == '4'){ //evens bet
        for (let i=0; i < evens.length; i++){
            if (evens[i] == spinNum){ 
                funds = betamt*2 + funds;
                return funds;
            }
        }
        funds = funds - betamt;
        return funds;
    }
    else if (bets == '5'){ //specific bet
        for (let i=0; i < bets.length; i++){
            if (bets[i] == spinNum){ 
                funds = betamt[i]*10 + funds;
            }
            else if (bets[i] != spinNum){
                funds = funds - betamt[i];
            }
        }
        return funds;
    }
}


//add event listeners to the buttons if buttons will be used, probably not going to be included
/*document.getElementById("b0").addEventListener("click", betFunction());
document.getElementById("b1").addEventListener("click", betFunction());
document.getElementById("b2").addEventListener("click", betFunction());
document.getElementById("b3").addEventListener("click", betFunction());
document.getElementById("b4").addEventListener("click", betFunction());
document.getElementById("b5").addEventListener("click", betFunction());
document.getElementById("b6").addEventListener("click", betFunction());
document.getElementById("b7").addEventListener("click", betFunction());
document.getElementById("b8").addEventListener("click", betFunction());
document.getElementById("b9").addEventListener("click", betFunction());
document.getElementById("b10").addEventListener("click", betFunction());
document.getElementById("b11").addEventListener("click", betFunction());
document.getElementById("b12").addEventListener("click", betFunction());
document.getElementById("b13").addEventListener("click", betFunction());
document.getElementById("b14").addEventListener("click", betFunction());
document.getElementById("b15").addEventListener("click", betFunction());
document.getElementById("b16").addEventListener("click", betFunction());
document.getElementById("b17").addEventListener("click", betFunction());
document.getElementById("b18").addEventListener("click", betFunction());
document.getElementById("b19").addEventListener("click", betFunction());
document.getElementById("b20").addEventListener("click", betFunction());
document.getElementById("b21").addEventListener("click", betFunction());
document.getElementById("b22").addEventListener("click", betFunction());
document.getElementById("b23").addEventListener("click", betFunction());
document.getElementById("b24").addEventListener("click", betFunction());
document.getElementById("b25").addEventListener("click", betFunction());
document.getElementById("b26").addEventListener("click", betFunction());
document.getElementById("b27").addEventListener("click", betFunction());
document.getElementById("b28").addEventListener("click", betFunction());
document.getElementById("b29").addEventListener("click", betFunction());
document.getElementById("b30").addEventListener("click", betFunction());
document.getElementById("b31").addEventListener("click", betFunction());
document.getElementById("b32").addEventListener("click", betFunction());
document.getElementById("b33").addEventListener("click", betFunction());
document.getElementById("b34").addEventListener("click", betFunction());
document.getElementById("b35").addEventListener("click", betFunction());
document.getElementById("b36").addEventListener("click", betFunction());*/