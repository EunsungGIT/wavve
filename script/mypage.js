const mypage_top = document.querySelectorAll('.mypage_top a')

mypage_top[0].addEventListener('click',()=>{
    body_html.style.overflow = 'hidden'
    notification_entire.style.display = 'block'
    notifiaction_wrapper.classList.add('wide')
})

/* 알림함 x 버튼 */
notification_close.addEventListener("click", ()=>{
    body_html.style.overflow = 'auto'
    notification_entire.style.display = "none"
})