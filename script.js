

                                               // Main Site



  document.addEventListener('DOMContentLoaded', (event) => {
    const correctPassword = 'sex'; // حدد كلمة السر الصحيحة هنا

    const form = document.getElementById('form');
    const passwordInput = document.getElementById('password');
    const content = document.getElementById('content');
    const passwordForm = document.getElementById('password-form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const userPassword = passwordInput.value;

      if (userPassword === correctPassword) {
        passwordForm.style.display = 'none';
        content.style.display = 'block';
        document.body.style.display = 'block'; // عرض محتوى الصفحة
      } else {
        alert('Incorrect password!');
        window.location.href = 'https://www.google.com'; // تحويل إلى Google
      }
    });

    document.body.style.display = 'block'; // عرض نموذج كلمة المرور
  });



// background

const images1 = [
  'images/sexy-1.jpg',
  'images/sexy2.jpeg',
  'images/sexy3.jpeg',
  'images/sexy4.jpeg',
  'images/sexy5.jpeg',
  'images/sexy6.jpeg',
  'images/sexy7.jpeg',
  'images/sexy8.jpg',
  'images/sexy9.jpg',
  'images/sexy10.jpg',
  'images/sexy11.jpg',
  'images/sexy12.jpg',
  'images/sexy13.jpg',
  'images/sexy14.jpg',
  'images/sexy15.jpg'
];

const images2 = [
  'images/sexy-1.jpg',
  'images/sexy2.jpeg',
  'images/sexy3.jpeg',
  'images/sexy4.jpeg',
  'images/sexy5.jpeg',
  'images/sexy6.jpeg',
  'images/sexy7.jpeg',
  'images/sexy8.jpg',
  'images/sexy9.jpg',
  'images/sexy10.jpg',
  'images/sexy11.jpg',
  'images/sexy12.jpg',
  'images/sexy13.jpg',
  'images/sexy14.jpg',
  'images/sexy15.jpg'
];

// Function to preload images
function preloadImages(images) {
  images.forEach((src) => {
      const img = new Image();
      img.src = src;
  });
}

// Preload all images
preloadImages(images1);
preloadImages(images2);

let currentIndex1 = 0;
let currentIndex2 = 0;

function changeBackground(div, images, index) {
  index = (index + 1) % images.length;
  div.style.backgroundImage = `url(${images[index]})`;
  return index;
}

setInterval(() => {
  currentIndex1 = changeBackground(document.getElementById('body'), images1, currentIndex1);
  currentIndex2 = changeBackground(document.getElementById('password-form'), images2, currentIndex2);
}, 2000);






  // search engine  
