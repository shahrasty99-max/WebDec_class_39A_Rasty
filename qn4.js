const getTicketPrice = (age) => {
  if (age < 12) return 150;
  if (age <= 17) return 200;
  if (age <= 59) return 300;
  return 200;
};

const applyDiscount = (total, quantity) => {
  if (quantity >= 5) {
    return total - total * 0.1;
  } else {
    return total;
  }
};

const calculateTotal = (price, quantity) => price * quantity;


const bookTicket = (name, age, quantity, booking) => {
  const price = getTicketPrice(age);
  const total = calculateTotal(price, quantity);
  const discount = booking(total, quantity);
  const finalAmount = total - discount;
  console.log(`Customer name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Tickets: ${quantity}`);
  console.log(`Total Before Discount: Rs. ${total}`);
  console.log(`Discount: Rs. ${discount}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};
bookTicket("Taehyung", 25, 5, applyDiscount);