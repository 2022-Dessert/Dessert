$(function () {
  $("#Date").datepicker({});
});

function submitSignUp(event) {
  event.preventDefault();
  const date = document.querySelector("#Date");
  const selectedDate = date.value;
  const month = selectedDate.slice(0, 2);
  const day = selectedDate.slice(3, 5);
  const year = selectedDate.slice(6, 10);
  console.log(`${year}년 ${month}월 ${day}일`); //.아...뉘... 그건 아니구... ....제 마우스 움직임 보여요...? 넹 8자 헉...
  location.href = "DessertLogin.html";
}

const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", submitSignUp);
