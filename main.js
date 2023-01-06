let mainImage = document.querySelector('.image img');
let secondaryImage = document.querySelectorAll('.choose-phone img');
let container = document.querySelector('.container');
let btn = document.querySelector('button');

secondaryImage.forEach((img)=>{
   img.onclick =function change(){
    // change image phone 
    mainImage.src = img.getAttribute('src');
   // change background of container 
   container.style.background =img.dataset.color;
      // change background of button
   btn.style.background =img.dataset.color;

   }
});

