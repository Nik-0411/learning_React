// Q1: Square each element of an array using map function

const squareArrey = [1, 2, 3, 4, 5];

const squaredNumbers = squareArrey.map((num) => num ** 2);

// Uncomment to execute:
// console.log(squareArrey);
// console.log(squaredNumbers);

// Q2: Function to determine student's grade using ternary operators
function studentGrade(score) {
  return score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
}

// Uncomment to execute:
// console.log(studentGrade(85));

// Q3: Object representing a car with properties and function to change year
const car = {
  companyName: "Mahindra",
  model: "Thar",
  year: 2015,
};

function changeYear(newYear) {
  car.year = newYear;
}

// Uncomment to execute:
// changeYear(2020);
// const { model, year } = car;
// console.log(`Model: ${model}, Year: ${year}`);

// Q4: Filter array to get only prime numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numbers.filter((num) => {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
});

// Uncomment to execute:
// console.log(numbers);
// console.log(primeNumbers);

// Q5: Use cases of map, filter, and reduce functions
// 1. map function
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

const usernames = users.map((user) => user.name);

// console.log(usernames);

const temperatures = [20, 30, 40];
const fahrenheitTemperatures = temperatures.map((temp) => temp * 1.8 + 32);

// console.log(fahrenheitTemperatures);

const words = ["hello", "world", "javascript"];
const uppercaseWords = words.map((word) => word.toUpperCase());

// console.log(uppercaseWords);

// 2. Filter function
const customer = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 20 },
];

const adultUsers = users.filter((user) => user.age >= 18);

// console.log(adultUsers);

const number = [1, 2, null, 4, undefined, 5];
const validNumbers = numbers.filter(
  (number) => number !== null && number !== undefined
);

// console.log(validNumbers);

const fruits = ["apple", "banana", "orange", "grape", "apple"];
const apples = fruits.filter((fruit) => fruit === "apple");

// console.log(apples);

// 3. Reduce function
const numberArr = [1, 2, 3, 4, 5];
const sum = numberArr.reduce((acc, current) => acc + current, 0);

// console.log(sum);

const colors = ["red", "blue", "green", "red", "blue", "blue"];
const colorCounts = colors.reduce((acc, current) => {
  acc[current] = (acc[current] || 0) + 1;
  return acc;
}, {});

// console.log(colorCounts);

const nestedArray = [1, 2, [3, 4], 5, [6, 7]];
const flatArray = nestedArray.reduce((acc, current) => acc.concat(current), []);

// console.log(flatArray);

// Q6: Asynchronous function using async-await to fetch data from API
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Uncomment to execute:
// fetchData();

// Q7: Nested object representing a person with optional chaining
const person = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "Madhya pardesh",
    zip: "12345",
  },
  contact: {
    email: "johndoe@example.com",
    phone: "9854763285",
  },
};

// Uncomment to execute:
// console.log(person?.contact?.phone);
// console.log(person?.contact?.fax);
