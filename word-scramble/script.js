document.addEventListener("DOMContentLoaded", () => {
    const wordText = document.querySelector(".word"),
          hintText = document.querySelector(".hint span"),
          timeText = document.querySelector(".time b"),
          inputField = document.querySelector("input"),
          refreshBtn = document.querySelector(".refresh-word"),
          checkBtn = document.querySelector(".check-word"),
          feedbackMessage = document.querySelector(".feedback-message");

    let correctWord, timer, maxTime = 60, usedWords = new Set(), isFirstGame = true;

    const initTimer = () => {
        if (timer) clearInterval(timer);
        timer = setInterval(() => {
            if (maxTime > 0) {
                maxTime--;
                timeText.innerText = maxTime;
            } else {
                clearInterval(timer);
                feedbackMessage.textContent = `Time off! ${correctWord.toUpperCase()} was the correct word`;
                inputField.disabled = true;
                refreshBtn.disabled = true;
                checkBtn.disabled = true;
            }
        }, 1000);
    };

    const shuffleWord = (word) => {
        let shuffledWord = word.split("");
        for (let i = shuffledWord.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledWord[i], shuffledWord[j]] = [shuffledWord[j], shuffledWord[i]];
        }
        return shuffledWord.join("");
    };

    const initGame = () => {
        if (words.length === 0 || words.length === usedWords.size) {
            feedbackMessage.textContent = "Well done! You've gone through all the words!";
            inputField.disabled = true;
            refreshBtn.disabled = true;
            checkBtn.disabled = true;
            return;
        }

        let randomIndex, randomObj;
        do {
            randomIndex = Math.floor(Math.random() * words.length);
            randomObj = words[randomIndex];
        } while (usedWords.has(randomIndex));

        usedWords.add(randomIndex); 

        if (isFirstGame) {
            maxTime = 60;  // Only reset if it's the start of the game session
            isFirstGame = false; // Subsequent games won't reset the timer
        }
        timeText.innerText = maxTime; 
        correctWord = randomObj.word.toLowerCase();
        wordText.innerText = shuffleWord(correctWord);
        hintText.innerText = randomObj.hint;
        inputField.value = "";
        inputField.setAttribute("maxlength", correctWord.length);
        inputField.disabled = false;
        refreshBtn.disabled = false;
        checkBtn.disabled = false;
        feedbackMessage.textContent = "";
        initTimer();
    };

    const checkWord = () => {
        let userWord = inputField.value.toLowerCase();
        if(!userWord) {
            feedbackMessage.textContent = "Please enter the word to check!";
            return;
        }
        clearInterval(timer); // Stop timer to pause while showing feedback
        if(userWord === correctWord) {
            feedbackMessage.textContent = `Congrats! ${userWord.toUpperCase()} is the correct word`;
        } else {
            feedbackMessage.textContent = `Oops! ${userWord.toUpperCase()} is not the correct word. The correct word was ${correctWord.toUpperCase()}.`;
        }
        setTimeout(initGame, 2000); // Delay before starting a new game, but do not reset timer here
    };

    refreshBtn.addEventListener("click", () => {
        isFirstGame = true; // Allow timer reset only when explicitly restarting the game
        initGame();
    });
    checkBtn.addEventListener("click", checkWord);

    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission
            checkWord();
        }
    });

    initGame(); // Start the game initially
});
