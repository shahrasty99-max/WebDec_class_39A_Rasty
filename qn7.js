const FEE = 25;

const validateWithdrawal = (amount, balance) => {
  if (amount % 500 !== 0) return "Amount must be a multiple of 500";
  else if (amount + FEE > balance) return "Insufficient balance";
  else return "valid";
};

const withdrawMoney = (amount, balance, validator) => {
  console.log(`Account Balance: Rs. ${balance}`);
  console.log(`Withdrawal Amount: Rs. ${amount}`);

  const result = validator(amount, balance);

  if (result === "valid") {
    balance = balance - amount - FEE;
    console.log("Withdrawal Successful!");
    console.log(`Transaction Fee: Rs. ${FEE}`);
  } else {
    console.log(`Withdrawal Failed: ${result}`);
  }
  console.log(`Remaining Balance: Rs. ${balance}`);
  return balance;
};

withdrawMoney(3000, 10000, validateWithdrawal);