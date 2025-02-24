// alert("is this working?");

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#winner");

let turn0 = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 7, 8],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];
const resetGame = () => {
  turn0 = true;
  enabledBtn();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 == true) {
      box.innerText = "X";
      box.style.color="red";
      turn0 = false;
    } else {
      box.innerText = "O";
      box.style.color = "blue";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const enabledBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disabledBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  msgContainer.classList.remove("hide");
  msg.innerText = `Congratulation winner is ${winner}`;
  console.log(winner);
  disabledBtn();
};
const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1val = boxes[patterns[0]].innerText;
    let pos2val = boxes[patterns[1]].innerText;
    let pos3val = boxes[patterns[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        // console.log("winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
};
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
