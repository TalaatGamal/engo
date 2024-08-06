
// function toggleMenu() {
//     const menu = document.getElementById('header-links');
//     menu.classList.toggle('active');
// }













  document.addEventListener('DOMContentLoaded', (event) => {
    const protectedLinks = document.querySelectorAll('.vds');
    const correctPassword = 'porn'; // حدد كلمة السر الصحيحة هنا

    protectedLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // لمنع التحويل التلقائي للصفحة
        const userPassword = prompt('Please enter the password:');
        
        if (userPassword === correctPassword) {
          window.location.href = link.href; // التحويل للصفحة المطلوبة
        } else {
          alert('Incorrect password!'); // عرض رسالة خطأ
        }
      });
    });
  });
