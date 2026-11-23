const calculateDelivery = (distance) => {
  if (distance <= 2) return 30;
  else return 30 + (distance - 2) * 15;
};

const checkFreeDelivery = (orderAmount) => orderAmount >= 1000;

const processOrder = (customer, distance, orderAmount, deliveryCallback) => {
  let charge;
  if (checkFreeDelivery(orderAmount)) charge = 0;
  else charge = deliveryCallback(distance);

  console.log(`Customer: ${customer}`);
  console.log(`Order Amount: Rs. ${orderAmount}`);
  console.log(`Distance: ${distance} km`);
  console.log(`Delivery Charge: Rs. ${charge}`);
};

processOrder("RM", 5, 800, calculateDelivery);