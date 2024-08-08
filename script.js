

                                               // Main Site



  document.addEventListener('DOMContentLoaded', (event) => {
    const correctPassword = 'porn'; // حدد كلمة السر الصحيحة هنا

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



//     const images = [
//     'url("images/sexy1.jpg")',
//     'url("images/sexy2.jpeg")',
//     'url("images/sexy3.jpeg")',
//     'url("images/sexy4.jpeg")',
//     'url("images/sexy5.jpeg")',
//     'url("images/sexy6.jpeg")',
//     'url("images/sexy7.jpeg")',
//     'url("images/sexy8.jpg")',
//     'url("images/sexy9.jpg")',
//     'url("images/sexy10.jpg")',
//     'url("images/sexy11.jpg")',
//     'url("images/sexy12.jpg")',
//     'url("images/sexy13.jpg")',
//     'url("images/sexy14.jpg")',
//     'url("images/sexy15.jpg")'
// ]

// let currentIndex = 0;
// const backgroundDiv = document.querySelector('body');

// function changeBackground() {
//   currentIndex = (currentIndex + 1) % images.length;
//   backgroundDiv.style.backgroundImage = images[currentIndex];
// }

// // تغيير الخلفية كل 5 ثواني
// setInterval(changeBackground, 2000);

// // تعيين الخلفية الأولية
// backgroundDiv.style.backgroundImage = images[currentIndex];












const images1 = [
    'url("images/sexy1.jpg")',
    'url("images/sexy2.jpeg")',
    'url("images/sexy3.jpeg")',
    'url("images/sexy4.jpeg")',
    'url("images/sexy5.jpeg")',
    'url("images/sexy6.jpeg")',
    'url("images/sexy7.jpeg")',
    'url("images/sexy8.jpg")',
    'url("images/sexy9.jpg")',
    'url("images/sexy10.jpg")',
    'url("images/sexy11.jpg")',
    'url("images/sexy12.jpg")',
    'url("images/sexy13.jpg")',
    'url("images/sexy14.jpg")',
    'url("images/sexy15.jpg")'
];

const images2 = [
    'url("images/sexy1.jpg")',
    'url("images/sexy2.jpeg")',
    'url("images/sexy3.jpeg")',
    'url("images/sexy4.jpeg")',
    'url("images/sexy5.jpeg")',
    'url("images/sexy6.jpeg")',
    'url("images/sexy7.jpeg")',
    'url("images/sexy8.jpg")',
    'url("images/sexy9.jpg")',
    'url("images/sexy10.jpg")',
    'url("images/sexy11.jpg")',
    'url("images/sexy12.jpg")',
    'url("images/sexy13.jpg")',
    'url("images/sexy14.jpg")',
    'url("images/sexy15.jpg")'
];

let currentIndex1 = 0;
let currentIndex2 = 0;

function changeBackground(div, images, index) {
  index = (index + 1) % images.length;
  div.style.backgroundImage = images[index];
  return index;
}

setInterval(() => {
  currentIndex1 = changeBackground(document.getElementById('body'), images1, currentIndex1);
  currentIndex2 = changeBackground(document.getElementById('password-form'), images2, currentIndex2);
}, 2000);








  // search engine  
