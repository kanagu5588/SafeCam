const burger = document.querySelector('.burger i');
const nav = document.querySelector('.navlinks');

// Defining a function
function toggleNav() {
         burger.classList.toggle('fa-bars');
         burger.classList.toggle('fa-times');
         nav.classList.toggle('navlinks-active');
      }

// Calling the function after click event occurs
      burger.addEventListener('click', function() {
             toggleNav();
         });



         var swiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });



          var swipe = new Swiper(".testimonial-caro", {
            // loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode:true,
            autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            
          });




          // var swiper = new Swiper(".mySwiper-1", {
          //   loop: true,
          //   slidesPerView: 3,
          //   centeredSlides: true,
          //   spaceBetween: 30,
          //   pagination: {
          //     el: ".swiper-pagination",
          //     clickable: true,
          //   },
          //   navigation: {
          //     nextEl: ".swiper-button-next",
          //     prevEl: ".swiper-button-prev",
          //   },
          // });
      
          // var appendNumber = 4;
          // var prependNumber = 1;
          // document
          //   .querySelector(".prepend-2-slides")
          //   .addEventListener("click", function (e) {
          //     e.preventDefault();
          //     swiper.prependSlide([
          //       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
          //       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
          //     ]);
          //   });
          // document
          //   .querySelector(".prepend-slide")
          //   .addEventListener("click", function (e) {
          //     e.preventDefault();
          //     swiper.prependSlide(
          //       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
          //     );
          //   });
          // document
          //   .querySelector(".append-slide")
          //   .addEventListener("click", function (e) {
          //     e.preventDefault();
          //     swiper.appendSlide(
          //       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
          //     );
          //   });
          // document
          //   .querySelector(".append-2-slides")
          //   .addEventListener("click", function (e) {
          //     e.preventDefault();
          //     swiper.appendSlide([
          //       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
          //       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
          //     ]);
          //   });


          // responsiveClass:true,
          //   responsive:{
          //     0:{
          //       items:1,
          //       nav:true
          //     },
          //     600:{
          //       items:2,
          //       nav:false
          //     }
          //   },



          // var law = new Swiper(".slide-content", {
          //   slidesPerView: 3,
          //   spaceBetween: 30,
          //   slidesPerGroup: 3,
          //   loop: true,
          //   loopFillGroupWithBlank: true,
          //   autoplay: {
          //     delay: 4000,
          //     disableOnInteraction: false,
          //   },
          //   pagination: {
          //     el: ".swiper-pagination",
          //     clickable: true,
          //   },
          //   navigation: {
          //     nextEl: ".swiper-button-next",
          //     prevEl: ".swiper-button-prev",
          //   },
          // });