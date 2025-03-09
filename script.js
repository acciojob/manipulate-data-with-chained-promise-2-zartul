//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const outputDiv = document.getElementById("output");

    // Initial Promise: Resolves with the array [1, 2, 3, 4] after 3 seconds
    new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then(numbers => new Promise((resolve) => {
        setTimeout(() => {
            // Filtering out odd numbers
            const evenNumbers = numbers.filter(num => num % 2 === 0);
            outputDiv.textContent = evenNumbers.join(", ");
            resolve(evenNumbers);
        }, 1000);
    }))
    .then(evenNumbers => new Promise((resolve) => {
        setTimeout(() => {
            // Multiplying even numbers by 2
            const doubledNumbers = evenNumbers.map(num => num * 2);
            outputDiv.textContent = doubledNumbers.join(", ");
            resolve(doubledNumbers);
        }, 2000);
    }))
    .catch(error => {
        outputDiv.textContent = `Error: ${error}`;
    });
});
