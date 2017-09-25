//import Swiper from 'swiper'
//import tracker from './tracker'
//import ScrollTrigger from './scrollTrigger'

var isAndroidApp = (window.location.origin === "file://" && /(android)/i.test(navigator.userAgent) ) ? true : false;

// function init() {
//     var analytics = tracker();
//     var swipers = [];
//     var cardStacks = document.querySelectorAll('.swiper-container');

//     for (var s = 0; s < cardStacks.length; s++) {

//       cardStacks[s].setAttribute('data-stack-position', s+1);

//       var swiper = new Swiper(cardStacks[s], {
//             paginationClickable: true,
//             loop: true,
//             slidesPerView: 1.2,
//             loopedSlides: 2,
//             spaceBetween: 10,
//             pagination: ".pagination",
//             centeredSlides: true
//         })
//         .on('slideChangeEnd', function(currentSwiper, event) {

//             swipers.forEach(function(s,i) {
//               var eq = (currentSwiper == s) ? true : false;
//               if(eq){
//                 var stackPosition = swiper.container[0].getAttribute('data-stack-position');
//                 analytics.registerEvent('stack_card_view', i)
//               }

//                 if (s.activeIndex != currentSwiper.activeIndex) {
//                   //s.activeIndex = currentSwiper.activeIndex;
//                     s.slideTo(currentSwiper.activeIndex, 0, false);
//                 } else {


//                 }
//             });
//         })
//         .on('onTouchStart', function(currentSwiper, e) {
//             if (isAndroidApp && window.GuardianJSInterface.registerRelatedCardsTouch) {
//                 window.GuardianJSInterface.registerRelatedCardsTouch(true);
//             }
//         })
//         .on('onTouchEnd', function(currentSwiper, e) {
//             if (isAndroidApp && window.GuardianJSInterface.registerRelatedCardsTouch) {
//                 window.GuardianJSInterface.registerRelatedCardsTouch(false);
//             }
//         });
//       swipers.push(swiper);
//     }
// }