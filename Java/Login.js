document.getElementById("login-btn"),
  addEventListener("click", function () {
    // Defult Value
    const defultNumber = 123456789;
    const defultPin = 1122;

    // Geting Elements
    const inputLoginNumber =
      document.getElementById("input-login-number").value;
    const inputLoginPin = document.getElementById("input-login-Pin").value;

    // Converting In Number

    convertedLoginNumber = parseInt(inputLoginNumber);
    convertedLoginPin = parseInt(inputLoginPin);

    if (
      convertedLoginNumber === defultNumber &&
      convertedLoginPin === defultPin
    ) {
      console.log("True");
      //   window.location.href = "./home.html";
    } else {
      alert("Invalid Credentials!");
    }
  });
