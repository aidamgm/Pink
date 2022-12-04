let navMain = document.querySelector(".navigation");
let navHeader = document.querySelector(".main-header");
let navToggle = document.querySelector(".navigation__toggle");

navMain.classList.remove("navigation--nojs");
navHeader.classList.remove("main-header--nojs");

navToggle.addEventListener("click", function () {
  if (navHeader.classList.contains("main-header__nav")) {
    navHeader.classList.remove("main-header__nav");
  } else {
    navHeader.classList.add("main-header__nav");
  }
});

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("navigation--closed")) {
    navMain.classList.remove("navigation--closed");
    navMain.classList.add("navigation--opened");
  } else {
    navMain.classList.add("navigation--closed");
    navMain.classList.remove("navigation--opened");
  }
});


let likes = document.querySelectorAll(".comment__likes");
let likesCounter = document.querySelector(".likes-counter")

likes.addEventListener("click", function () {
  if (likesCounter.classList.contains("comment__likes--active")) {
    navMain.classList.remove("comment__likes--active");
    navMain.classList.add("comment__likes");
  } else {
    navMain.classList.add("comment__likes--active");
    navMain.classList.remove("comment__likes");
  }
});

const input = document.querySelector('input');
input.addEventListener('input', onInput);

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


function onInput() {
  if (isEmailValid(input.value)) {
    input.style.borderColor = 'green';
  } else {
    input.style.borderColor = 'red';
  }
}

input.addEventListener('input', onInput);

function isEmailValid(value) {
return EMAIL_REGEXP.test(value);
};

function ValidPhone() {
  var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  var myPhone = document.getElementById('phone-number').value;
  var valid = re.test(myPhone);
  if (valid) output = 'Номер телефона введен правильно!';
  else output = 'Номер телефона введен неправильно!';
  document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
  return valid;
}
