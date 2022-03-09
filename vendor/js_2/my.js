

  $('.owl-carousel').owlCarousel({
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