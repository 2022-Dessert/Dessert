// const loginClick = document.querySelector("#LoginClick");
// loginClick.addEventListener("click", (event) => {
//   location.href = "mainPage.html";
// });

function loginchecking() {
  let id = document.getElementById("loginid");
  let pw = document.getElementById("loginpw");

  if (id.value === "dessert" && pw.value === "seong") {
    alert("반갑습니다!");
    window.location.href = "header.html";
  } else {
    alert("다시 시도해주세요!");
  }
}
