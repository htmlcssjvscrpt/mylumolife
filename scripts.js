function openModal(clickedThumbnail) {
    var modal = document.getElementById('lightboxModal');
    var modalImg = document.getElementById('lightboxImage');
    // Replace the thumbnail path and filename for the full-size image path and filename
    var fullSizeSrc = clickedThumbnail.src.replace('thumbnails/', 'images/').replace('-thumb.jpg', '.jpg');
    modalImg.src = fullSizeSrc;
    modalImg.alt = clickedThumbnail.alt; // Set an appropriate alt attribute
    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById('lightboxModal');
    modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    var thumbnails = document.getElementsByClassName('thumbnail');
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', function() {
            openModal(this); // 'this' refers to the clicked thumbnail
        });
    }

    var closeButton = document.querySelector('#lightboxModal .close'); // Make sure this selector matches your close button
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
});
