function openModal(clickedThumbnail) {
    var modal = document.getElementById('lightboxModal');
    var modalImg = document.getElementById('lightboxImage');
    var fullSizeSrc = clickedThumbnail.parentElement.href; // Get full-size image URL from the anchor tag
    modalImg.src = fullSizeSrc;
    modalImg.alt = clickedThumbnail.alt; // Use the same alt text as the thumbnail
    modal.style.display = "block"; // Display the modal
    event.preventDefault(); // Prevent the default anchor action
}

function closeModal() {
    var modal = document.getElementById('lightboxModal');
    modal.style.display = "none"; // Hide the modal
}

document.addEventListener('DOMContentLoaded', function() {
    var thumbnails = document.querySelectorAll('.gallery img.thumbnail'); // Select all thumbnails
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function(event) {
            openModal(this); // Open modal on thumbnail click
        });
    });

    var closeButton = document.querySelector('.close'); // Select the close button
    if (closeButton) {
        closeButton.addEventListener('click', closeModal); // Close modal on button click
    }
});
