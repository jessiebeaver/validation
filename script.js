var inputName = document.body.querySelector(".nameInput");
var inputPass = document.body.querySelector(".passwordInput");
var buttonEle = document.body.querySelector(".submit");
var errorDiv = document.body.querySelector(".error");

var list = [];

buttonEle.addEventListener("click", function () {
  if (inputName.value === "coolStudent123" && inputPass.value === "coolPassword") {
    list.push({
      name: inputName.value
    });

    errorDiv.innerHTML = "Success";
  } else {
    if (inputName.value !== "coolStudent123" && inputPass.value === "Password") {
      errorDiv.innerHTML = "Username is wrong";
    } else if (inputName.value === "coolStudent123" && inputPass.value !== "coolPassword") {
      errorDiv.innerHTML = "Password is wrong";
    } else {
      errorDiv.innerHTML = "Both username and password are wrong";
    }
  }

  console.log(list);
});