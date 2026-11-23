const calculateAverage = (m1, m2, m3) => (m1 + m2 + m3) / 3;

const Division = (average) => {
  if (average >= 70) return "First Division";
  if (average >= 60) return "Second Division";
  if (average >= 50) return "Third Division";
  return "Fail";
};

const Result = (name, m1, m2, m3, callback) => {
  const average = calculateAverage(m1, m2, m3);
  const division = callback(average);
  console.log(`Student: ${name}`);
  console.log(`Average: ${average}`);
  console.log(`Division: ${division}`);
};

Result("Rasty", 80, 60, 55, Division);