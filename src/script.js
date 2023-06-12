const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// Анімація затримки відправлення форми
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Затримка перед відправленням форми
    setTimeout(function() {
      // Ваш код для відправлення форми
      // Наприклад, ви можете використовувати AJAX або відправити дані на сервер
      // Після відправлення форми очистити поля введення
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      // Відображення підтвердження або повідомлення про помилку
      // Можна вивести повідомлення на сторінку або використовувати модальне вікно
      // Наприклад:
      alert("Дякуємо! Ваше повідомлення надіслано.");
    }, 1000);
  });