function checkAnswer() {
    // Funcfunction checkAnswer() {
    // Step 2: Identify the correct answer
    const correctAnswer = "4";
    
    // Step 3: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // If no answer is selected
    if (!selectedOption) {
        document.getElementById('feedback').textContent = 'Please select an answer!';
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = 'Correct! Well done.';
        document.getElementById('feedback').style.color = 'green';
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        document.getElementById('feedback').style.color = 'red';
    }
}

// Step 5: Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
