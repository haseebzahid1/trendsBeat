

  $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:20,
    merge:true,
    dots:false,
    responsive:{
        567:{
            // mergeFit:true,
            items:3,
            margin:20,
        },
        767:{
            // mergeFit:true,
            items:3,
            margin:30,
        },
        1000:{
          // mergeFit:true,
            // mergeFit:false,
            items:4,
            margin:50,
        },
        1300:{
          margin:50,
          // mergeFit:true,
            mergeFit:true,
            items:5,
        }
    }
});