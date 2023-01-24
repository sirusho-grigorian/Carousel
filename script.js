const delay = 3000;

const slides = document.querySelector(".carousel");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);

const restart = function () {
  clearInterval(autoChange);
};

document.querySelector(".next").addEventListener("click", function () {
  changeSlide();
  restart();
});

document.querySelector(".prev").addEventListener("click", function () {
  changeSlide(false);
  restart();
});

document.querySelector("#pause").addEventListener("click", function (e) {
  clearInterval(autoChange);
  console.log("pause");
});

document.querySelector("#autoplay").addEventListener("click", function (e) {
  autoChange = setInterval(changeSlide, delay);
  console.log("autoplay");
});
