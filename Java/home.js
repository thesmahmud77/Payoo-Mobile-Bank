document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bankName = document.getElementById("bank").value;
    const accountNumber = parseInt(
      document.getElementById("account-number").value
    );
    const cashInAmt = document.getElementById("add-amount").value;
    const pinNumber = document.getElementById("add-pin").value;
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    // console.log(
    //   bankName,
    //   accountNumber,
    //   cashInAmt,
    //   pinNumber,
    //   availableBalance
    // );

    const newBalance = availableBalance + cashInAmt;
    document.getElementById("available-balance").innerText = newBalance;
  });
