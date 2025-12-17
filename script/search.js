var mySwiper = new Swiper('.swiper_series', { 
    slidesPerView: 1,
    spaceBetween: 10,
    navigation:{
        nextEl:'.swiper_series .search_next',
        prevEl:'.swiper_series .search_prev',
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