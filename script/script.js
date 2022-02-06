const galleryList = document.querySelectorAll('.gallery-item');
console.log(galleryList[1]);
targetForDisplay = galleryList[2];
const displayed = targetForDisplay.classList.toggle('displayed');

// when button next button is pressed, the current image toggles it displayed and not-displayed to be false/true, then the next target does the oposite