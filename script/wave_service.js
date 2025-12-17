let slide = new Swiper('.product_benner',{
    slidesPerView: 1,
    spaceBetween:30,
    navigation:{
        nextEl:'.product_benner .swiper-button-next',
        prevEl:'.product_benner .swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination'
    },
    breakpoints:{
        1240: {
            spaceBetween:10
        }
    }
})

// 하단 새창
const follow_link = document.querySelectorAll('.follow_link a')
console.log(follow_link[0])
follow_link[0].addEventListener('click',(e)=>{
    window.open(`https://www.facebook.com/Wavve.official/`,'_blank')
    e.preventDefault();
})
follow_link[1].addEventListener('click',(e)=>{
    window.open(`https://m.post.naver.com/my.nhn?memberNo=12375258`,'_blank')
    e.preventDefault();
})
follow_link[2].addEventListener('click',(e)=>{
    window.open(`https://www.youtube.com/c/Wavve`,'_blank')
    e.preventDefault();
})
