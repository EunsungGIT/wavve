var mySwiper = new Swiper('.swiper_category', { 
    slidesPerView: 1,
    spaceBetween: 10,
    navigation:{
        nextEl:'.swiper_category .swiper-button-next',
        prevEl:'.swiper_category .swiper-button-prev',
    },
    breakpoints:{
        430: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1240: {
            slidesPerView: 5,
        },
    },
})