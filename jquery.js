AOS.init({
    duration: 1200,
  })

  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    dots: false,
    responsive:{
        0:{
            items:1,
          
        },
        600:{
            items:4,
           
        },
        1000:{
            items:4,
            
            loop:false
        }
    }

    
    
})


