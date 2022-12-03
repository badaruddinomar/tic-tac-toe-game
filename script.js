// selector--------------
const container = document.querySelector(`.container`);
const child = document.querySelectorAll(`.child`);
const winner = document.querySelector(`.winner`);
const restartBtn = document.querySelector(`.restart`);

// global variable-------------
const cros = `x`;
const zero = `o`;
let done = false;

// function --------------
// winner background change function --------------
const winnerBgChange = function (el1, el2, el3) {
  return (
    (el1.style.background = `#f9f9f9`),
    (el2.style.background = `#f9f9f9`),
    (el3.style.background = `#f9f9f9`)
  );
};
// winner function ------------
const winnerFunc = function (val1, val2, val3) {
  if (
    val1.textContent === `x` &&
    val2.textContent === `x` &&
    val3.textContent === `x`
  ) {
    winner.classList.remove(`hidden`);
    winner.textContent = `Winner 🔥X🔥`;
    restartBtn.classList.remove(`hidden`);
    winnerBgChange(val1, val2, val3);
    container.removeEventListener("click", mainFunc);
  } else if (
    val1.textContent === `o` &&
    val2.textContent === `o` &&
    val3.textContent === `o`
  ) {
    winner.classList.remove(`hidden`);
    winner.textContent = `Winner 🔥O🔥`;
    restartBtn.classList.remove(`hidden`);
    winnerBgChange(val1, val2, val3);
    container.removeEventListener(`click`, mainFunc);
  }
};
// Draw function-----------
const drawFunc = function (arr) {
  if (
    arr[0].textContent !== `` &&
    arr[1].textContent !== `` &&
    arr[2].textContent !== `` &&
    arr[3].textContent !== `` &&
    arr[4].textContent !== `` &&
    arr[5].textContent !== `` &&
    arr[6].textContent !== `` &&
    arr[7].textContent !== `` &&
    arr[8].textContent !== ``
  ) {
    setTimeout(() => {
      restartBtn.classList.remove(`hidden`);
    }, 1000);
  }
};
// Main Function ---------------
const mainFunc = function (e) {
  const clicked = e.target.closest(`.child`);
  if (!clicked) return;

  if (!done && clicked.textContent === ``) {
    clicked.textContent = cros;
    done = true;
  } else if (done && clicked.textContent === ``) {
    clicked.textContent = zero;
    done = false;
  }
  child.forEach(function (_, _, arr) {
    drawFunc(arr);
    //-------------------------------
    winnerFunc(arr[0], arr[3], arr[6]);
    winnerFunc(arr[1], arr[4], arr[7]);
    winnerFunc(arr[2], arr[5], arr[8]);

    winnerFunc(arr[0], arr[1], arr[2]);
    winnerFunc(arr[3], arr[4], arr[5]);
    winnerFunc(arr[6], arr[7], arr[8]);

    winnerFunc(arr[0], arr[4], arr[8]);
    winnerFunc(arr[6], arr[4], arr[2]);
  });
};
// container addevent listener--------
container.addEventListener(`click`, mainFunc);
// restart btn ------
restartBtn.addEventListener(`click`, function () {
  container.classList.remove(`hidden`);
  winner.classList.add(`hidden`);
  restartBtn.classList.add(`hidden`);
  container.addEventListener(`click`, mainFunc);

  child.forEach(function (el) {
    el.textContent = ``;
    el.style.background = `#e0e0e0`;
  });
});
