$(document).ready(function(){
// initital vlaue for dispaly  
var userTotal= 0;
var wincount=0;
$('#win-count').text(wincount);
var losscount=0;
$('#loss-Count').text(losscount);


// key value for randomnumber 
 var randomValue = function (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min
 }

 // random value with max and min for generated target number and crystal vlaue
 var targetscore = randomValue(19,125); 
 var blue = randomValue(1, 12);
 var green = randomValue(1, 12);
 var red  = randomValue(1, 12);
 var yellow = randomValue(1, 12); 

// initial value of the game  
 function startgame(){
  targetscore = randomValue(19,125); 
  $('#randomNumber').text(targetscore);
  console.log(targetscore);
  blue = randomValue(1, 12);
  green = randomValue(1, 12);
  red  = randomValue(1, 12);
  yellow = randomValue(1, 12); 
  userTotal= 0;
  $('#user-total').text(userTotal);
  console.log(userTotal);
};

// main condition for game
function wincheck(){
  if(userTotal === targetscore){
    startgame();
    wincount++;
    alert("Congratulation! You got the right number");
    $('#win-count').text(wincount);

  }
  else if(userTotal > targetscore){
    startgame();
    losscount++;
    alert ("Sorry You loss the game")
    $('#loss-Count').text(losscount);
    }
};
// generating number for blue crystal and pushin that value to the usertotal

$('#red').on('click',function(){
  userTotal += red;
  $('#user-total').text(userTotal);
  wincheck();
  console.log(userTotal);
});
// generating number for blue crystal and pushin that value to the usertotal
$('#blue').on('click',function(){
  userTotal += blue;
  $('#user-total').text(userTotal);
  wincheck();
  console.log(userTotal);
});
// generating number for yellow crystal and pushin that value to the usertotal
$('#yellow').on('click',function(){
  userTotal += yellow;
  $('#user-total').text(userTotal);
  wincheck();
  console.log(userTotal);

});
// generating number for green crystal and pushin that value to the usertotal
$('#green').on('click',function(){
  userTotal += green;
  $('#user-total').text(userTotal);
  wincheck();
  console.log(userTotal);
});
startgame();

});