import isPrime from "isprime";

const input = document.getElementById("numberInput");
const button = document.getElementById("checkButton");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const value = Number(input.value);

  if (!Number.isInteger(value) || value < 0) {
    result.textContent = "Please enter a valid non-negative integer.";
    return;
  }

  result.textContent = isPrime(value)
    ? `${value} is a prime number`
    : `${value} is not a prime number`;
});