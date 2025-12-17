// 채팅 API
const chat = document.querySelector ('#chat')
const chat_icon = document.querySelector('#chat_icon')
const chat_icon_img = document.querySelector('#chat_icon img')
const chat_box = document.querySelector('.chat_box')
const chat_message = document.querySelector('.chat_message')
const user_text = document.querySelector('.user_text')
const chatBtn = document.querySelector('#chatBtn')
const apiEndpoint = 'https://api.openai.com/v1/chat/completions'
const apiKey = 'OPEN API 키';

chat_box.classList.add('chatHide')
chat_icon.addEventListener('click', ()=>{
    chat_box.classList.toggle('chatHide')
    chat_box.classList.toggle('chatShow')
    if(chat_box.classList.contains('chatShow')){
        chat_icon_img.src = './images/common/chat_close.png'
        chat_icon_img.style.transform = 'rotate(90deg)';
    }else{
        chat_icon_img.src = './images/common/chat.jpg'
        chat_icon_img.style.transform = 'rotate(0)';
    }
})

async function fetchAIResponse(prompt) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: prompt
            }, ],
            temperature: 0.3,
            max_tokens: 400,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0.5,
            stop: ["Human"],
        }),
    };
    try {
        const response = await fetch(apiEndpoint, requestOptions);
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        return aiResponse;
    } catch (error) {
        console.error('OpenAI API 호출 중 오류 발생:', error);
        return 'OpenAI API 호출 중 오류 발생';
    }
}

chatBtn.addEventListener('click', async()=>{
    let message = user_text.value
    addMessage  ('프로필1',message)
    user_text.value = ''
    //ai
    let aiMessage = await fetchAIResponse(message)
    addMessage('AI', aiMessage);
})

user_text.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13){
        chatBtn.click();
    }
})

function addMessage(target, contents){
    const messageElement = document.createElement('div')
    messageElement.classList.add('message')
    messageElement.innerHTML = `${target} : ${contents}`
    chat_message.appendChild(messageElement)
}

// UP 버튼 스크롤
const up = document.querySelector('#up')

up.addEventListener('click', ()=>{
    window.scrollTo({top: 0})
})

/* header 모바일 */
const menu_a = document.querySelectorAll('.menu a')
const profile_mobile = document.querySelector('.profile_mobile > a')
const profile_mobile_a = document.querySelectorAll('.profile_mobile_m a')
const profile_mobile_m = document.querySelector('.profile_mobile_m')
const coupon_mobile = document.querySelector('.coupon_mobile > a')
const coupon_mobile_m = document.querySelector('.coupon_mobile_m')

profile_mobile_a[3].addEventListener('click',()=>{
    body_html.style.overflow = 'hidden'
    notification_entire.style.display = 'block'
    notifiaction_wrapper.classList.add('wide')
})

menu_a[1].addEventListener('click',()=>{
    category_all.style.display = 'block'
})

let menuActice = true
profile_mobile_m.style.display = 'none'
profile_mobile.addEventListener('click',()=>{
    menuActice = !menuActice
    console.log(menuActice)
    if(menuActice === false){
        profile_mobile_m.classList.add('slide_up')
        profile_mobile_m.classList.remove('slide_down')
        profile_mobile_m.style.display = 'flex'
    }else{
        profile_mobile_m.classList.add('slide_down')
        profile_mobile_m.classList.remove('slide_up')
        setTimeout(() => {
            profile_mobile_m.style.display = 'none'
        }, 500);
    }
})
let couponActice = true
coupon_mobile_m.style.display = 'none'
coupon_mobile.addEventListener('click',()=>{
    couponActice = !couponActice
    if(couponActice === false){
        coupon_mobile_m.classList.add('slide_up')
        coupon_mobile_m.classList.remove('slide_down')
        coupon_mobile_m.style.display = 'flex'
    }else{
        coupon_mobile_m.classList.add('slide_down')
        coupon_mobile_m.classList.remove('slide_up')
        setTimeout(() => {
            coupon_mobile_m.style.display = 'none'
        }, 500);
    }
})

// header 프로필 mouseenter
const profile = document.querySelector('.profile')
const profile_m = document.querySelector('.profile_m')

profile_m.style.opacity = '0';
profile_m.style.display = 'none';
profile.addEventListener('mouseenter', () => {
    profile_m.classList.add('show')
    profile_m.classList.remove('hide')
    setTimeout(() => {
        profile_m.style.display = 'block'
    }, 100);
});
profile.addEventListener('mouseleave', () => {
    profile_m.classList.add('hide')
    profile_m.classList.remove('show')
    setTimeout(() => {
        profile_m.style.display = 'none'
    }, 300);
});

// header 프로필 내 알림함
const body_html = document.querySelector('body, html')
const profile_m_a = document.querySelectorAll('.profile_m a')
const notification_entire = document.querySelector(".notification_bg")
const notifiaction_wrapper = document.querySelector('.notification_wrap')
const notification_wrap = document.querySelector(".notification")
const setting_wrap = document.querySelector(".setting_wrap")

notification_entire.style.display = 'none'
profile_m_a[3].addEventListener('click',()=>{
    body_html.style.overflow = 'hidden'
    notification_entire.style.display = 'block'
    notifiaction_wrapper.classList.add('wide')
})

/* 알림함 & 알림설정 */

/* 알림함 & 알림설정 버튼 - > 알림설정으로 가는 버튼 */
const notification_btn = document.querySelector(".notification_top a")
console.log(notification_btn)
const notification_title = document.querySelector('.notification_top h2')
const notification_title_btn = document.querySelector("notification_top a img")
const notification_close = document.querySelector(".setting_close > a")
console.log(notification_title,notification_title_btn )
/* 초기 내용 숨기기 */
setting_wrap.style.display = "none"
notification_btn.parentElement.classList.add("active")

notification_btn.addEventListener("click", () => {
    if (setting_wrap.style.display === "none") {
        setting_wrap.style.display = "block";
        notification_wrap.style.display = "none";
        notification_title.innerHTML = '알림설정'
        notification_btn.innerHTML = "<img src= /images/icon/notification_icon.png> 알림함"
    } else {
        setting_wrap.style.display = "none";
        notification_wrap.style.display = "block";
        notification_title.innerHTML = '알림함';
        notification_btn.innerHTML = "<img src= /images/icon/notification_icon.png> 알림설정";
    }
});

/* 알림함 x 버튼 */
notification_close.addEventListener("click", ()=>{
    body_html.style.overflow = 'auto'
    notification_entire.style.display = "none"
})

// header 쿠폰 mouseenter
const coupon = document.querySelector('.coupon')
const coupon_m = document.querySelector('.coupon_m')

coupon_m.style.opacity = '0';
coupon_m.style.display = 'none';
coupon.addEventListener('mouseenter', () => {
    coupon_m.classList.add('show')
    coupon_m.classList.remove('hide')
    setTimeout(() => {
        coupon_m.style.display = 'block'
    }, 100);
});
coupon.addEventListener('mouseleave', () => {
    coupon_m.classList.add('hide')
    coupon_m.classList.remove('show')
    setTimeout(() => {
        coupon_m.style.display = 'none'
    }, 300);
});

// 카테고리 mouseenter
const category = document.querySelector('.category')
const category_m = document.querySelector('.category_m')

category_m.style.display = 'none';
category.addEventListener('mouseenter', ()=>{
    category_m.style.display = 'block';
})
category.addEventListener('mouseleave', ()=>{
    category_m.style.display = 'none';
})

// 카테고리 내 전체 카테고리
const category_m_a = document.querySelectorAll('.category_m a')
const category_all = document.querySelector('.category_s')
const close_category = document.getElementById('close_btn')
category_all.style.display = 'none'
category_m_a[0].addEventListener('click', ()=>{
    category_all.style.display = 'block'
})
close_category.addEventListener('click',()=>{
    category_all.style.display = 'none'
})

/* header 메뉴 버튼 */
const menuBtn = document.querySelector('.menuBtn')
const header_m = document.querySelector('.header_m')
const backBtn = document.querySelector('.header_m > a')

header_m.style.display = 'none'
header_m.style.transform = 'translateX(400px)'
menuBtn.addEventListener('click',()=>{
    
    header_m.style.display = 'block'
    setTimeout(() => {
        header_m.style.transform = 'translateX(0)'
    }, 100);
})
backBtn.addEventListener('click',()=>{
    header_m.style.transform = 'translateX(400px)'
    setTimeout(() => {
        header_m.style.display = 'none'
    }, 500);
})

// footer swiper
var mySwiper = new Swiper('#swiper_notice', {
    direction: 'vertical',
    autoplay:{delay:1000},
    loop:true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation:{
        nextEl:'#swiper_notice #f_next',
        prevEl:'#swiper_notice #f_prev',
    },
})

