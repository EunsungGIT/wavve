/* 비슷한 영화 및 남녀노소 모두, 오늘은 애니 앞으로 */
var mySwiper = new Swiper('.wavve_images', { 
    loop:true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation:{
        nextEl:'.wavve_images .swiper-button-next',
        prevEl:'.wavve_images .swiper-button-prev',
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

// 상단 자바스크립트
const optionBtn =document.querySelector('#optionBtn')
const translation_all =document.querySelector('.button_m')
let distinction = true
console.log(optionBtn)
console.log(translation_all)

optionBtn.addEventListener('click',()=>{
    distinction = !distinction
    console.log(distinction)
    if(distinction === false){
        translation_all.style.display = 'block'
    }else{
        translation_all.style.display = 'none'
    }
})

//클릭시 그 내용 보이기
const translation_sub = document.querySelectorAll('.button_m a')

console.log(translation_sub[0],translation_sub[1])

for(let i of translation_sub){
    i.addEventListener('click',(e)=>{
        e.preventDefault()
    })
}

translation_sub[0].addEventListener('click',()=>{
    optionBtn.innerHTML = '자막'
    translation_all.style.display = 'none'
    distinction = true
})
translation_sub[1].addEventListener('click',()=>{
    optionBtn.innerHTML = '더빙'
    translation_all.style.display = 'none'
    distinction = true
})

// 관심
const icon = document.querySelectorAll ('.icon a')
const icon_img =document.querySelectorAll('.icon a img')
const  heart =document.querySelector('.favorite')
console.log(heart)
heart.style.display = 'none'


let heart_change = true
icon[0].addEventListener('click',(e)=>{
    heart_change = !heart_change
    console.log(heart_change)
    if(heart_change === false){
        icon_img[0].src = '../images/live_contents/red_heart.svg'
        heart.innerHTML = '관심채널로 등록되었어요'
        heart.style.display = 'block';
        heart.classList.add('show')
        e.preventDefault();
        setTimeout(() => {
            heart.style.display = 'none'
        }, 2000);
    }else{icon_img[0].src = '../images/live_contents/heart.svg'
        e.preventDefault();
        heart.innerHTML = '관심등록이 해제되었어요'
        heart.style.display = 'block';
        heart.classList.add('show')
        e.preventDefault();
        setTimeout(() => {
            heart.style.display = 'none'
        }, 2000);
    }

})


//공유
const share = document.querySelector('.share_bg')
const share_close = document.querySelector('.share > a')
const copy_message = document.querySelector('.copy')
const copyBtn = document.querySelector('#copyBtn')
const linkInput = document.querySelector('#link')

share.style.display = 'none'
icon[1].addEventListener('click',(e)=>{
    e.preventDefault()
    share.style.display = 'block'
})

copy_message.style.display = 'none'
copyBtn.addEventListener('click',(e)=>{
    navigator.clipboard.writeText(linkInput.value)
    copy_message.style.display = 'block'
    copy_message.classList.add('show')
    e.preventDefault();
    setTimeout(() => {
        copy_message.style.display = 'none'
    }, 3000);
})

share_close.addEventListener('click',(e)=>{
    e.preventDefault()
    share.classList.add('hide')
    setTimeout(() => {
        share.style.display = 'none'
        share.classList.remove('hide')
    }, 500);
})

// 하단 정보 자바스크립트
//제목변수
const menu_title = document.querySelectorAll ('.menu_title')
const contents_container = document.querySelectorAll('.container_contents')
console.log(contents_container[0])

// 숨기기
const hide = () =>{
    for(let i of contents_container ){i.style.display = 'none'}
}
hide()
contents_container[0].style.display = 'flex'
menu_title[0].classList.add('contants_border')

const border_remove = () =>{
    for(let r of menu_title){r.classList.remove('contants_border')}
}

menu_title.forEach((t,i)=>{
    console.log(t,i)
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        border_remove()
        t.classList.add('contants_border')
        hide()
        contents_container[i].style.display = 'block'
    })
})

//더보기 클릭시 상세정보로 가기
const show_more = document.querySelector('.detail a')
console.log(show_more)
// window.addEventListener('scroll',()=>{
//     const scrollaa = window.scrollY
//     console.log(scrollaa)
// })
show_more.addEventListener('click',(e)=>{
    e.preventDefault()
    menu_title[2].classList.add('contants_border')
    menu_title[0].classList.remove('contants_border')
    menu_title[1].classList.remove('contants_border')
    contents_container[0].style.display = 'none'
    contents_container[1].style.display = 'none'
    contents_container[2].style.display = 'block'
    window.scrollTo(0,417)
})

const speak =document.querySelector('#muted img')
const speak_btn=document.getElementById('muted')
console.log(speak_btn)
let speack_variable = true

// 음소거
const video_muted = document.querySelector ('.contents video')
console.log(video_muted)

speak_btn.addEventListener('click',()=>{
    speack_variable = !speack_variable
    console.log(speack_variable)
    if(speack_variable === false){
        speak.src = './images/contents/speak.png'
        video_muted.muted = false
    }else{
        speak.src = './images/contents/muted.png'
        video_muted.muted = true
    }
})


const twitter_facebook = document.querySelectorAll('.twitter_facebook a')
const twittr_link = 'https://twitter.com/?lang=ko'
const facebook_link = 'https://www.facebook.com/?locale=ko_KR'
console.log(twitter_facebook[1],twitter_facebook[0])
twitter_facebook[0].addEventListener('click',()=>{
    window.open(twittr_link,'_blank', 'width=800, height=600')
})
twitter_facebook[1].addEventListener('click',()=>{
    window.open(facebook_link,'_blank', 'width=800, height=600')
})