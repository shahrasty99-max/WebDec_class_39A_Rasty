const calculateBonus = (amount) => {
  if (amount >= 1000) {
    return amount * 0.15;
  } else if (amount >= 500) {
    return amount * 0.10;
  } else if (amount >= 100) {
    return amount * 0.05;
  } else {
    return 0;
  }
};

const calculateTotalBalance = (amount, bonus) => amount + bonus;

const rechargeProcessor = (amount) => {
  const bonus = calculateBonus(amount);
  const totalBalance = calculateTotalBalance(amount, bonus);
  return { bonus, totalBalance };
};

const recharge = (number, amount, processor) => {
  const { bonus, totalBalance } = processor(amount);

  console.log(`Mobile Number: ${number}`);
  console.log(`Recharge Amount: Rs. ${amount}`);
  console.log(`Bonus Received: Rs. ${bonus}`);
  console.log(`Total Balance: Rs. ${totalBalance}`);
};

recharge("9800000000", 1000, rechargeProcessor);