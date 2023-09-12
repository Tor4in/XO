const move = document.querySelectorAll(".move");
const row1 = document.querySelectorAll(".row1");
const row2 = document.querySelectorAll(".row2");
const row3 = document.querySelectorAll(".row3");
const line1 = document.querySelectorAll(".line1");
const line2 = document.querySelectorAll(".line2");
const line3 = document.querySelectorAll(".line3");
const diadonale1 = document.querySelectorAll(".diadonale1");
const diadonale2 = document.querySelectorAll(".diadonale2");

let playerX = true;
let win = false;
  
let winCheck = (name) => {
  if (
    name[0].innerHTML == name[1].innerHTML &&
    name[1].innerHTML == name[2].innerHTML
  ) {
    if (
      name[0].classList.contains("X") &&
      name[1].classList.contains("X") &&
      name[2].classList.contains("X")
    ) {
      win = !win;
      console.log("X won");
    } else if (
      name[0].classList.contains("O") &&
      name[1].classList.contains("O") &&
      name[2].classList.contains("O")
    ) {
      win = !win;
      console.log("O won");
    }
  }
};

for (const m of move) {
  m.addEventListener("click", () => {
    if (!m.classList.contains("active") && !win) {
      if (playerX) {
        m.classList.add("X");
      } else {
        m.classList.add("O");
      }

      playerX = !playerX;
      m.classList.add("active");
      winCheck(row1);
      winCheck(row2);
      winCheck(row3);
      winCheck(line1);
      winCheck(line2);
      winCheck(line3);
      winCheck(diadonale1);
      winCheck(diadonale2);
    }
  });
}
