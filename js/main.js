//    ENLARGE PROJECT BUTTON    //

/* 

There's a bug when changing the screensize withouth refreshing:

The browser measures with px height and width even though in css they are 
set up using 'vh' or 'vw'. Therefore, when the button is clicked, the height
becomes current_pixels * 2. If the window size changes without refreshing the site,
(when changing to another screen, for instance) then, current_pixels will remain
the same.
*/


const projectButton = document.getElementById('projectButton');
let count = 0;

projectButton.addEventListener('click', function () {
  
  // Get current height and create a variable to compute the new height
  let currentHeight = parseInt(window.getComputedStyle(projectButton).height);
  let newHeight;

  // Variable to store the new text alignment
  let newJustifyContent;
  let newPaddingTop;

  if (count%2 === 0) {
    // Double the height
    newHeight = currentHeight * 2;

    // from center-center to top-center
    newJustifyContent = 'flex-start'
    newPaddingTop = 5


  } else {
    newHeight = currentHeight / 2;

    newJustifyContent = 'center'
    newPaddingTop = 0

  }

  // Update the button's style
  projectButton.style.justifyContent = `${newJustifyContent}`
  projectButton.style.paddingTop = `${newPaddingTop}vh`
  projectButton.style.height = `${newHeight}px`;

  // Controls the number of clicks
  count++;
});
