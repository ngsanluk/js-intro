function play() {
  luckyNumber = document.getElementById("lucky-number");
  luckyNumber.innerHTML = Math.floor(Math.random() * 100 + 1);
}
