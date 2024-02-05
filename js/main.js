//    ENLARGE PROJECT BUTTON    //

/* 

There's a bug when changing the screensize withouth refreshing:

The browser measures with px height and width even though in css they are 
set up using 'vh' or 'vw'. Therefore, when the button is clicked, the height
becomes current_pixels * 2. If the window size changes without refreshing the site,
(when changing to another screen, for instance) then, current_pixels will remain
the same.
*/


const projectDiv = document.getElementById('projectDiv');
const projectList = document.getElementById('projectList')
let count = 0;

projectDiv.addEventListener('click', function (event) {
  if (event.target == projectDiv || event.target == projectList) {
    
    // Get current height and create a variable to compute the new height
    let currentHeight = parseInt(window.getComputedStyle(projectDiv).height);
    let newHeight;

    // Store the new text alignment for Project division
    let newJustifyContent;
    let newPaddingTop;

    // Store new display and visibility of projectList

    let newDisplay;
    let newVisibility;

    if (count%2 === 0) {

      // Double the height
      newHeight = currentHeight * 2;

      // from center-center to top-center
      newJustifyContent = 'flex-start'
      newPaddingTop = 5

      // Visible project list (visually and phtsically)
      newDisplay = 'grid'
      newVisibility = 'visible'


    } else {
      newHeight = currentHeight / 2;

      newJustifyContent = 'center'
      newPaddingTop = 0

      newDisplay = 'none'
      newVisibility = 'hidden'

    }

    // Update the button's style
    projectDiv.style.justifyContent = `${newJustifyContent}`
    projectDiv.style.paddingTop = `${newPaddingTop}vh`
    projectDiv.style.height = `${newHeight}px`;
    projectList.style.display = `${newDisplay}`
    projectList.style.visibility = `${newVisibility}`

    // Controls the number of clicks
    count++;
  }
});
