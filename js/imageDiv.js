const profileImage = document.getElementById('profileImage');
const textDescription = document.getElementById('textDescription')

let count3 = 0;

profileImage.addEventListener('click', function(event) {
  if (event.target === profileImage) {

    let textVisibility;
    let textOpacity;

    if (count3%2 === 0) {
      textVisibility = 'hidden'
      textOpacity = 0
      

      textDescription.style.visibility = `${textVisibility}`
      textDescription.style.opacity = `${textOpacity}`

    } else { 
      textVisibility = 'visible'
      textOpacity = 1
      textDescription.style.visibility = `${textVisibility}`
      textDescription.style.opacity = `${textOpacity}`
    }

    count3++;
  }
})