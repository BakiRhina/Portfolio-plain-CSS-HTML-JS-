//    ENLARGE PROJECT BUTTON    //

const projectButton = document.getElementById('projectButton');
let count = 0;

projectButton.addEventListener('click', function () {
  
  // Get current height
  let currentHeight = parseInt(window.getComputedStyle(projectButton).height);
  let newHeight;

  if (count%2 === 0) {
    // Double the height
    newHeight = currentHeight * 2;
  } else {
    newHeight = currentHeight / 2;
  }

    // Update the button's style
  projectButton.style.height = `${newHeight}px`;
  count++;
});
