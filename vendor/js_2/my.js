
    // Init Scrollspy
    $('body').scrollspy({
      target: '#main-nav'
  });

  // Smooth Scrolling
  $("#main-nav a").on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();

          const hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function() {

              window.location.hash = hash;
          });
      }
  });



$('.owl-carousel-3').owlCarousel({
 
  autoplay:false,
  items:1,
  loop:true,
  margin:10,
  responsiveClass:true,
  nav:false,
  dots:false,
  // responsive:{
      
  //     676:{
  //         items:2
  //     },
  //     1000:{
  //         items:3
  //     }
  // }
})

  $('.owl-carousel-product').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    merge:true,
    dots:false,
    mergeFit:true,
    responsive:{
        567:{
            mergeFit:true,
            items:3,
            margin:20,
        },
        // 767:{
        //     mergeFit:true,
        //     items:3,
        //     margin:30,
        // },
        1000:{
          mergeFit:true,
            // mergeFit:false,
            items:4,
            margin:50,
        },
        1400:{
          margin:50,
          mergeFit:true,
            // mergeFit:true,
            items:4,
        }
    }
});



//////////////  FEATURE BLOGS OWL CAROUSEL
$('.blog-owl-caorousel').owlCarousel({
  items:4,
  loop:true,
  margin:21,
  merge:false,
  dots:false,
  mergeFit:true,
  // mergeFit:false,
  responsive:{
      567:{
          mergeFit:true,
          // mergeFit:false,
          items:3,
          margin:20,
      },
      767:{
          mergeFit:true,
          items:3,
          margin:30,
      },
      1000:{
        mergeFit:true,
          // mergeFit:false,
          items:3,
          margin:50,
      },
      1400:{
        margin:50,
        mergeFit:true,
        // mergeFit:false,
          items:4,
      }
  }
});




var swiper = new Swiper(".mySwiper2", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) =>{
   faq.addEventListener("click", () =>{
       faq.classList.toggle("active");
   });
});

$('.header-mobile-container').owlCarousel({
  loop:false,
  autoplay:false,
  margin:0,
  responsiveClass:false,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      }
      
  }
})
$('.meta-owl-carousel').owlCarousel({
  loop:false,
  autoplay:false,
  margin:0,
  responsiveClass:false,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      }
      
  }
})
