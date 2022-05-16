const prevBtn = document.querySelector('.js-prev');
const nextBtn = document.querySelector('.js-next');
const progressBar = document.querySelector('.js-bar');
const circles = document.querySelectorAll('.js-circle');
let currentStep = 1;

function updateBar() {
  progressBar.style.width = `${(currentStep - 1) * 33}%`;
}

function updateCircles() {
  circles.forEach((c, i) => {
    if (i === currentStep - 1) {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });

  updateBar();
}

function goNext() {
  currentStep += 1;
  prevBtn.disabled = false;
  if (currentStep === circles.length) {
    nextBtn.disabled = true;
  }
  updateCircles();
}

function goPrev() {
  currentStep -= 1;
  nextBtn.disabled = false;
  if (currentStep === 1) {
    prevBtn.disabled = true;
  }
  updateCircles();
}

nextBtn.addEventListener('click', function (e) {
  goNext();
});

prevBtn.addEventListener('click', function () {
  goPrev();
});
