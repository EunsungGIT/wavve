/* 시청예약 */
const live_body_html = document.querySelector('body, html')
const reservation_table = document.querySelectorAll('.reservation_table a')
const reservation_bg = document.querySelector('.reservation_bg')
const reservation = document.querySelector('.reservation')
const reservation_close = document.querySelector('.reservation #close')

reservation_bg.style.display = 'none'
reservation_table[0].addEventListener('click',()=>{
    live_body_html.style.overflow = 'hidden'
    reservation_bg.style.display = 'flex'
    reservation.classList.add('wide')
})
reservation_close.addEventListener('click',()=>{
    live_body_html.style.overflow = 'auto'
    reservation_bg.style.display = 'none'
})

/* 비디오 */
const live_video_a = document.querySelectorAll('.live_video a')
const live_video = document.querySelectorAll('.live_video a video')
const video_playbar = document.querySelectorAll('.live_video a .playbar')
const video_title = document.querySelectorAll('.live_video a .video_title')
const muted = document.querySelectorAll('.live_video a .muted')

live_video_a.forEach((t,i)=>{
    muted[i].style.display = 'none'
    t.addEventListener('mouseenter',()=>{
        live_video_a[i].style.width = '385px'
        muted[i].style.display = 'block'
        video_title[i].style.opacity = '0'
        live_video[i].play();
    })
})
live_video_a.forEach((t,i)=>{
    t.addEventListener('mouseleave',()=>{
        live_video_a[i].style.width = '240px'
        video_playbar[i].style.display = 'block'
        muted[i].style.display = 'none'
        video_title[i].style.opacity = '1'
        live_video[i].pause()
    })
})

const mutedBtn = document.querySelectorAll('.muted')
const mutedBtn_img = document.querySelectorAll('.muted img')
let speak_variable = true

mutedBtn.forEach((t,i)=>{
    t.addEventListener('click', ()=>{
        speak_variable = !speak_variable
        if(speak_variable === false){
            mutedBtn_img[i].src = './images/live/speak.png'
            live_video[i].muted = false
        }else{
            mutedBtn_img[i].src = './images/live/muted.png'
            live_video[i].muted = true
        }
    })
})