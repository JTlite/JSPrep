const starContainer = document.getElementById('starContainer');
const ratingDisplay = document.getElementById('rating-display');
const countInput = document.getElementById('count');
let stars;

let totalStars = parseInt(countInput.value); 
let currentRating = 0; 

countInput.addEventListener('input', updateStarCount);

function updateStarCount() {
    totalStars = parseInt(countInput.value);
    createStars(totalStars);
    currentRating = 0; 
    ratingDisplay.textContent = currentRating;
}

function createStars(count) {
    starContainer.innerHTML = ''; 
    for (let i = 1; i <= count; i++) {
            const star = document.createElement('span');
            star.innerHTML='&starf;';
            star.classList.add('star');
            star.dataIndex = i;

            star.addEventListener('mouseover', () => handleHover(i));
            star.addEventListener('mouseout', handleMouseOut);

            star.addEventListener('click', () => handleClick(i));

            starContainer.appendChild(star);
    }
    stars = starContainer.querySelectorAll('.star');
}

function handleHover(index) {
   
    stars.forEach(star => {
        if (parseInt(star.dataIndex) <= index) {
                star.classList.add('hovered');
            } else {
                star.classList.remove('hovered');
        }
    });
}
   
function handleMouseOut() {
   
    stars.forEach(star => {
            star.classList.remove('hovered');
    });
    }

function handleClick(index) {
    currentRating = index;
    updateStars();
    ratingDisplay.textContent = currentRating; 
}

function updateStars() {
    
    stars.forEach(star => {
            if (parseInt(star.dataIndex) <= currentRating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
    });
}



  

  

