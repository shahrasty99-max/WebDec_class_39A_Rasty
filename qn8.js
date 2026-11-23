const getFoodPrice = (foodName) => {
  if (foodName === "Burger") {
    return 250;
  } else if (foodName === "Pizza") {
    return 500;
  } else if (foodName === "Momo") {
    return 150;
  } else if (foodName === "Chowmein") {
    return 180;
  } else {
    return 0;
  }
};

const calculateServiceCharge = (total) => total * 0.05;

const calculateOrder = (foodName, quantity, priceFinder) => {
  return priceFinder(foodName) * quantity;
};

const generateReceipt = (customerName, foodName, quantity, orderCalculator) => {
  const foodAmount = orderCalculator(foodName, quantity, getFoodPrice);
  const serviceCharge = calculateServiceCharge(foodAmount);
  const finalAmount = foodAmount + serviceCharge;

  console.log(`Customer: ${customerName}`);
  console.log(`Food: ${foodName}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Food Amount: Rs. ${foodAmount}`);
  console.log(`Service Charge: Rs. ${serviceCharge}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

generateReceipt("Samanta", "Burger", 2, calculateOrder);