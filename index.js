var random1=(Math.random()*6) +1;
random1=Math.floor(random1);
console.log(random1);

if(random1===1){
    var image=document.querySelector(".player1Dice").setAttribute("src","./images/dice1.png")
    console.log(image);
}
else if(random1===2){
    var image=document.querySelector(".player1Dice").setAttribute("src","./images/dice2.png")
    console.log(image);
}else if(random1===3){
    var image=document.querySelector(".player1Dice").setAttribute("src","./images/dice3.png")
    console.log(image);
}else if(random1===4){
    var image=document.querySelector(".player1Dice").setAttribute("src","./images/dice4.png")
    console.log(image);
}else if(random1===5){
    var image=document.querySelector(".player1Dice").setAttribute("src","./images/dice5.png")
    console.log(image);
}else {
    var image=document.querySelector(".player1Dice").setAttribute("src","./images/dice6.png")
    console.log(image);
}

var random2=(Math.random()*6) +1;
random2=Math.floor(random2);
console.log(random2);


if(random2===1){
    var image=document.querySelector(".player2Dice").setAttribute("src","./images/dice1.png")   
}
else if(random2===2){
    var image=document.querySelector(".player2Dice").setAttribute("src","./images/dice2.png")
   
}else if(random2===3){
    var image=document.querySelector(".player2Dice").setAttribute("src","./images/dice3.png")
    
}else if(random2===4){
    var image=document.querySelector(".player2Dice").setAttribute("src","./images/dice4.png")

}else if(random2===5){
    var image=document.querySelector(".player2Dice").setAttribute("src","./images/dice5.png")
}else {
    var image=document.querySelector(".player2Dice").setAttribute("src","./images/dice6.png")   
}

if(random1>random2){
    document.querySelector("#heading").textContent="🚩Player 1 Wins";
    document.querySelector("#player1").textContent="🏆 Player 1";
    document.getElementById("player1").style.color="blue"
    document.getElementById("player2").style.color="red"

}else if(random2>random1){
    document.querySelector("#heading").textContent="Player 2 Wins🚩";
    document.querySelector("#player2").textContent="Player 2 🏆";
    document.getElementById("player1").style.color="red"
    document.getElementById("player2").style.color="blue"

}else{
    document.querySelector("#heading").textContent="Its a draw, refresh again";
}