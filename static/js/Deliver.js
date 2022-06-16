function Orderchecking() {
  let order = confirm("Are you sure you want to complete your order?");
  alert(order);

  if (order == true) {
    alert("Your order has been successfully received.");
    window.location.href = "../../../Dessert/templates/mainPage.html";
  } else {
    alert("Return to the shipping window.");
  }
}
