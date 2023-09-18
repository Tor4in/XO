const move = document.querySelectorAll(".move");
const row1 = document.querySelectorAll(".row1");
const row2 = document.querySelectorAll(".row2");
const row3 = document.querySelectorAll(".row3");
const line1 = document.querySelectorAll(".line1");
const line2 = document.querySelectorAll(".line2");
const line3 = document.querySelectorAll(".line3");
const diadonale1 = document.querySelectorAll(".diadonale1");
const diadonale2 = document.querySelectorAll(".diadonale2");

let playerX = false;
let final = document.querySelector(".final");

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
      final.classList.add("win");
      playerX = false;
      return true;
    } else if (
      name[0].classList.contains("O") &&
      name[1].classList.contains("O") &&
      name[2].classList.contains("O")
    ) {
      final.classList.add("win");
      playerX = false;
      return true;
    }
  }
};

for (const m of move) {
  m.addEventListener("click", () => {
    if (!m.classList.contains("active") && !final.classList.contains("win")) {
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

      if (winCheck(row1)) {
        setTimeout(() => {
          final.classList.add("row1Show");
        }, 400);
      }
      if (winCheck(row2)) {
        setTimeout(() => {
          final.classList.add("row2Show");
        }, 400);
      }
      if (winCheck(row3)) {
        setTimeout(() => {
          final.classList.add("row3Show");
        }, 400);
      }
      if (winCheck(line1)) {
        setTimeout(() => {
          final.classList.add("line1Show");
        }, 400);
      }
      if (winCheck(line2)) {
        setTimeout(() => {
          final.classList.add("line2Show");
        }, 400);
      }
      if (winCheck(line3)) {
        setTimeout(() => {
          final.classList.add("line3Show");
        }, 400);
      }
      if (winCheck(diadonale1)) {
        setTimeout(() => {
          final.classList.add("diadonale1Show");
        }, 400);
      }
      if (winCheck(diadonale2)) {
        setTimeout(() => {
          final.classList.add("diadonale2Show");
        }, 400);
      }
    }
  });
}
let reload = document.querySelector(".reload");

reload.addEventListener("click", () => {
  for (const m of move) {
    if (m.classList.contains("active")) {
      m.classList.remove("active");
      if (m.classList.contains("X")) {
        m.classList.remove("X");
      } else if (m.classList.contains("O")) {
        m.classList.remove("O");
      }
    }
    playerX = false;
    final.classList = "final";
  }
});
