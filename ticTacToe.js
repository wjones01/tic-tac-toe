// tic tac toe //

let player = ["", "X", "O"];
let playnum = 1; // 1=X and 2=Oh //
let output = ""; // player to play output //
let message = "";
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // board .. 0 = open, 1 = X, 2 = X //
let pos = 1; // where on the board 1 to 9... first array is dead//

let winner = 0;
let move = ""; // good or bad
let where = 0;
let who = 0;
let winCom = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function thestatus() {
  output = "Player " + player[playnum] + " Select Square.";
  console.log(output);
  document.getElementById("status").innerHTML = output;
}

function square(pos) {
  if (board[pos] === 0) {
    board[pos] = playnum;
    move = "good";
    document.getElementById("message").innerHTML = "";
    placeSet(pos, player[playnum]);
  } else {
    move = "bad";
    document.getElementById("message").innerHTML =
      "Square NOT available - choose again.";
  }
  console.log(move);
  console.log(pos);
  console.log(board[pos - 1]);

  if (move === "good") {
    playnum += 1;
    if (playnum > 2) playnum = 1;
    console.log(playnum);
  }
  winTest();
  thestatus();
}

function placeSet(where, who) {
  console.log("place");
  console.log(where);
  console.log(who);
  if (where === 1) {
    document.getElementById("pos1-el").innerHTML = who;
    console.log("who");
  }
  if (where === 2) {
    document.getElementById("pos2-el").innerHTML = who;
    console.log("who");
  }
  if (where === 3) {
    document.getElementById("pos3-el").innerHTML = who;
    console.log("who");
  }
  if (where === 4) {
    document.getElementById("pos4-el").innerHTML = who;
    console.log("who");
  }
  if (where === 5) {
    document.getElementById("pos5-el").innerHTML = who;
    console.log("who");
  }
  if (where === 6) {
    document.getElementById("pos6-el").innerHTML = who;
    console.log("who");
  }
  if (where === 7) {
    document.getElementById("pos7-el").innerHTML = who;
    console.log("who");
  }
  if (where === 8) {
    document.getElementById("pos8-el").innerHTML = who;
    console.log("who");
  }
  if (where === 9) {
    document.getElementById("pos9-el").innerHTML = who;
    console.log("who");
  }
}

function winTest() {
  for (let count = 0; count < 8; count += 1) {
    for (let check = 1; check < 3; check += 1) {
      if (
        board[winCom[count[0]]] === check &&
        board[winCom[count[1]]] === check &&
        board[winCom[count[2]]] === check
      ) {
        winner = check;
        break;
      }
    }
    endGame(winner);
    break;
  }
}

function endGame(winner) {
  console.log("winner " + winner);
}
