document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('puzzle_container');
    // Initialize numbers 1-15 and an empty space represented by ''
    let numbers = Array.from({ length: 15 }, (_, i) => i + 1).concat('');

    // Shuffle the numbers for the initial puzzle setup
    numbers.sort(() => Math.random() - 0.5);

    // Track the empty space index for movement logic
    let emptyIndex = numbers.indexOf('');

    // Create puzzle blocks
    numbers.forEach((number, index) => {
        const block = document.createElement('div');
        block.textContent = number.toString();
        block.className = 'puzzle_block';
        if (number === '') {
            block.className += ' empty_block'; // Mark the empty space visually
            block.textContent = ''; // Empty block has no text
        }
        container.appendChild(block);

        // Add click event listener to each block
        block.addEventListener('click', () => {
            moveBlock(index);
        });
    });

    function moveBlock(clickedIndex) {
        const isValidMove = isAdjacent(clickedIndex, emptyIndex);

        if (isValidMove) {
            // Swap the clicked block with the empty space
            [numbers[clickedIndex], numbers[emptyIndex]] = [numbers[emptyIndex], numbers[clickedIndex]];
            // Update the display
            updateDisplay();
            // Update the emptyIndex to its new position
            emptyIndex = clickedIndex;
        }
    }

    function isAdjacent(index1, index2) {
        const row1 = Math.floor(index1 / 4);
        const col1 = index1 % 4;
        const row2 = Math.floor(index2 / 4);
        const col2 = index2 % 4;

        return (Math.abs(row1 - row2) === 1 && col1 === col2) ||
               (Math.abs(col1 - col2) === 1 && row1 === row2);
    }

    function updateDisplay() {
        // Clear the current blocks
        container.innerHTML = '';
        // Re-create and append puzzle blocks based on updated numbers array
        numbers.forEach((number, index) => {
            const block = document.createElement('div');
            block.textContent = number.toString();
            block.className = 'puzzle_block';
            if (number === '') {
                block.className += ' empty_block'; // Mark the empty space visually
                block.textContent = ''; // Empty block has no text
            }
            container.appendChild(block);

            // Re-add click event listener to each block
            block.addEventListener('click', () => {
                moveBlock(index);
            });
        });
    }
});
