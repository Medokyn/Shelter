
import json from './pets.json' assert { type: 'json' };


const arrowLeft = document.querySelector('.left-button');
const arrowRight = document.querySelector('.right-button');
const imgPetOne = document.querySelector('.pets-katrine');
const namePetOne = document.querySelector('.name-Katrine')
const imgPetTwo = document.querySelector('.pets-jennifer');
const namePetTwo = document.querySelector('.name-Jennifer');
const imgPetThree = document.querySelector('.pets-woody');
const namePetThree = document.querySelector('.name-woody');


let firstCard,
   secondCard,
   thirdCard;


let arr = [0, 1, 2, 3, 4, 5, 6, 7];



firstCard = arr[Math.floor(Math.random() * arr.length)];


arr = arr.filter((n) => { return n != firstCard });
secondCard = arr[Math.floor(Math.random() * arr.length)];


arr = arr.filter((m) => { return m != secondCard });
thirdCard = arr[Math.floor(Math.random() * arr.length)];





imgPetOne.src = json[firstCard].img;
namePetOne.textContent = json[firstCard].name;

imgPetTwo.src = json[secondCard].img;
namePetTwo.textContent = json[secondCard].name;

imgPetThree.src = json[thirdCard].img;
namePetThree.textContent = json[thirdCard].name;



function slideRight() {

   if (firstCard === 7) {
      firstCard = 0;
   } else {
      firstCard += 1;
   }

   if (secondCard === 7) {
      secondCard = 0;
   } else {
      secondCard += 1;
   }

   if (thirdCard === 7) {
      thirdCard = 0;
   } else {
      thirdCard += 1;
   }

   changeCard();
} slideRight();

function slideLeft() {

   if (firstCard === 7) {
      firstCard = 0;
   } else {
      firstCard += 1;
   }

   if (secondCard === 7) {
      secondCard = 0;
   } else {
      secondCard += 1;
   }

   if (thirdCard === 7) {
      thirdCard = 0;
   } else {
      thirdCard += 1;
   }

   changeCard();
} slideRight();




function changeCard() {
   imgPetOne.src = json[firstCard].img;
   namePetOne.textContent = json[firstCard].name;

   imgPetTwo.src = json[secondCard].img;
   namePetTwo.textContent = json[secondCard].name;

   imgPetThree.src = json[thirdCard].img;
   namePetThree.textContent = json[thirdCard].name;

}


arrowRight.addEventListener('click', slideRight);
arrowLeft.addEventListener('click', slideLeft);
