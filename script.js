let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn");

let trunO = true; //playerX , playerY

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Alternate X and O turn
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");
    if (trunO) {
      // playerO
      box.innerText = "O";
      trunO = false;
    } else {
      // playerX    
      box.innerText = "X";
      trunO = true;
    }
    box.disabled = true;
    checkWinner(); // function of check winner
  });
});


// Check winner 
const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0],pattern[1],pattern[2]);
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

// On top show winner
const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
   
  disableBoxes();
}

// Disable button when one is winner
const disableBoxes = () => {
  for (let box of boxes) {
      box.disabled = true;
  } 
}

// Enable button 
const enableBoxes = () => {
  for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
  } 
}

// Reset button
const resetGame = () => {
  trunO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);