let currentScore = 0;
let currentProblem;
let timeLeft = 60; // Starting time for the game in seconds

function generateProblem() {
    const operations = ['+', '-', '*', '/'];
    let num1, num2;
    let operation;
    let answer;

    do {
        operation = operations[Math.floor(Math.random() * operations.length)];
        // Adjust the range to ensure no additions or subtractions with numbers less than 5
        // and avoid multiplication with 1
        num1 = Math.floor(Math.random() * (10 - 5)) + 5; 
        num2 = operation === '*' ? Math.floor(Math.random() * 9) + 2 : Math.floor(Math.random() * (10 - 5)) + 5; 

        // For division, adjust to ensure no division resulting in 1 and divisible numbers
        if (operation === '/') {
            num2 = Math.floor(Math.random() * (5 - 2)) + 2; // Avoid 1 as a result
            num1 = num2 * (Math.floor(Math.random() * 8) + 2);
        }

        answer = eval(`${num1} ${operation} ${num2}`);
        // Re-generate if the operation is subtraction and num1 is less than num2 (to avoid negative results)
    } while (answer === 0 || answer === 1 || (operation === '-' && num1 < num2));

    currentProblem = {
        operation,
        num1,
        num2
    };
    
    document.getElementById("question").textContent = `What is ${num1} ${operation} ${num2}?`;
    document.getElementById("answer").value = '';
    document.getElementById("feedback").textContent = '';
}

function submitAnswer() {
    if (timeLeft <= 0) return;

    const playerAnswer = parseFloat(document.getElementById("answer").value);
    const correctAnswer = eval(`${currentProblem.num1} ${currentProblem.operation} ${currentProblem.num2}`);
    
    if (playerAnswer === correctAnswer) {
        currentScore++;
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = "Oops! Try again.";
    }
    
    document.getElementById("score").textContent = `Score: ${currentScore}`;
    generateProblem();
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = `Time left: ${timeLeft}s`;

    const timerId = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            document.getElementById("feedback").textContent = "Time's up! Game over.";
            document.getElementById("answer").disabled = true; // Disable the input field to prevent further answers
        }
    }, 1000);
}

document.getElementById("answer").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Avoid form submission behavior
        submitAnswer();
    }
});

// Assign the submitAnswer function to the button's onclick event programmatically
document.querySelector("button").onclick = submitAnswer;

window.onload = function() {
    generateProblem();
    startTimer(); // Start the countdown timer as soon as the window loads
};
