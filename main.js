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

 <div class="container">
        <header>
            <div class="logo">
                <img src="images/pngegg.png" alt="">
            </div>

        </header>
        <div class="content">
            <div class="text">
                <h2>Iphone 13 pro max</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ea veniam ab facere alias itaque nam ipsam, iure nostrum, modi, aperiam expedita. Possimus magni facilis tempore itaque, inventore nemo ullam!</p>
            <button>All product</button>

            </div>
            <div class="image" >
                <img src="images/iPhone 12 Pro Max Png Transparent.png" >
                
            </div>
        </div>
      <div class="phones">
        <div class="choose-phone">
            <img src="images/Apple iPhone 12 Pro Max Png Transparent.png" alt="" data-color="#fdc82936">
            <img src="images/iPhone 12 Pro Max Png Transparent.png" data-color="#9e9e9e1f">
            <img src="images/Iphone-xr-yellow-mobile-phone-on-transparent-background-PNG.png" data-color="rgb(255 193 7 / 59%)">
            <img src="images/Xiaomi Mi 11 Png Transparent.png" data-color="#607d8b94">
          
        </div>
      </div>
    </div>