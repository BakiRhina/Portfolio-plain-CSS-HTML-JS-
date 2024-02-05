const skillsDiv = document.getElementById('skillsDiv');

let count2 = 0;
skillsDiv.addEventListener('click', function(event) {
  if (event.target == skillsDiv) {

    let skillsDivWidth;
    if (count2%2 === 0) {
      skillsDivWidth = 100
      skillsDiv.style.width = `${skillsDivWidth}%`
    } else {
      skillsDivWidth = 60
      skillsDiv.style.width = `${skillsDivWidth}vw`
    }
    count2++;
  }
})