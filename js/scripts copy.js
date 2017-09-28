// Business Logic
function Player (playerID) {
  this.playerID = playerID;

}
function Game (playerID) {
  this.players = [1,2];
  this.round = 0;
  this.currentRoll = 0;
  this.scoreToWin = 100;
}

function Scores (playerID) {
this.roundScore = 0;
this.totalScore = 0;

}
// var diceValue = dice();
// var playerOne =  new Player.this.playerID("1");
// var playerTwo = new Player.this.playerID("2");
var buttonHold = $("button#hold").val()
//
Player.prototype.randomNumber = function () {
  // console.log("roll method");
  this.currentRoll = Math.floor(Math.random() * (6 - 1) + 1);
  // this.roundScore=this.roundScore++
};

Player.prototype.endTurn = function () {
if (this.currentRoll === 1) {
  this.roundScore = 0;
  console.log("Your turn is done!" + this.currentRoll);
}
};

Scores.prototype.hold = function () {
this.TotalScore = this.totalScore + this.roundScore;
this.roundScore = 0;
}

 Game.prototype.win = function () {
  if (this.totalScore === this.scoreToWin) {
    alert("You win!");

  }
}

// Player.prototype.endPlayer = function () {
//
// }
//
// Game.prototype.endGame = function () {
//
// }
//     if ($("#hold").click(function() === true) {
//       // this.round=this.round++
//       //     Player.totalScore = Player.totalScore + Player.roundScore;
//       //     this.round=this.round++
//       alert("hi");
// }
// }
// if (("button#hold").click(function() {
//   // if (document.getElementById('button#hold').clicked == true) {
//   // this.totalScore = this.totalScore + this.roundScore;var flavor = $("input:radio[name=flavor]:checked").val();Ω
//   // var hold = $("button:button[name=hold]:clicked").val();
//   console.log("You are on hold");
// })


//User Interface
$(document).ready(function() {
  var playerOne =  new Player("1");
  var playerTwo = new Player("2");
  $("#roll").click(function(event) {
    event.preventDefault();


  // var diceRoll = parseInt($("button#roll").val());

  playerOne.randomNumber();
  playerOne.endTurn();
  // console.log(playerOne.currentRoll)
  playerTwo.randomNumber();
  playerTwo.endTurn();
  // if (currentPlayer === "One") {
  //   $(".outputOne").prepend("<li>"+diceValue+"</li>")
  // } else {
    // return $(".outputTwo").prepend("<li>"+diceValue+"</li>")
    // $(".row").show();
    // $(".outputOne").prepend("<li>"+diceRoll+"</li>");
    $(".row").show();
    $(".outputOne").append("<li>"+playerOne.currentRoll+"</li>");
    $("#score1").text(playerOne.roundScore);
    $("#total1").text(playerOne.totalScore);
    $("#score2").text(playerTwo.roundScore);
    $("#total2").text(playerTwo.totalScore);

    });


    // var diceRoll = parseInt($("button#roll").val());
    // playerOne.hold(Scores.totalScore);
    // playerTwo.hold(Scores.totalScore);
    $("#hold").click(function() {
  var id = $(this).attr("id");
  alert("Your clicked the " + id + " button");
});
    // playerOne.hold();
    // console.log(playerOne.currentRoll)
    // playerTwo.hold();
    // if (currentPlayer === "One") {
    //   $(".outputOne").prepend("<li>"+diceValue+"</li>")
    // } else {
      // return $(".outputTwo").prepend("<li>"+diceValue+"</li>")
      // $(".row").show();
      // $(".outputOne").prepend("<li>"+diceRoll+"</li>");

      //--output for holds-->
      // $(".row").show();
      // $(".outputOne").prepend("<li>"+playerOne.currentRoll+"</li>");

});
