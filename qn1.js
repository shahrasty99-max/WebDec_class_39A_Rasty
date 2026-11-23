const calculateBill = (units) => {
  const serviceFee = 60;
  let charge = 0;
  if (units <= 20) {
    charge = units * 5;
  } else if (units <= 50) {
    charge = 20 * 5 + (units - 20) * 7;
  } else {
    charge = 20 * 5 + 30 * 7 + (units - 50) * 10;
  }
  return charge + serviceFee;
};

const displayBill = (name, units, callback) => {
  const bill = callback(units);
  console.log(`Customer: ${name}`);
  console.log(`Units Consumed: ${units}`);
  console.log(`Total Electricity Bill: Rs. ${bill}`);
};

displayBill("Rasty", 77, calculateBill);