//상단 쿠폰 등록 js
const registration = document.querySelector('.holding_coupon_btn')
const registration_input = document.querySelector('.holding_coupon_input')
console.log(registration)
const coupon_num = /^[2-9]{8}$/ 
registration.addEventListener('click',()=>{
    console.log(registration_input.value)
    if(coupon_num.test(registration_input.value)){
        window.alert('쿠폰이 등록되었습니다')
    }else{
        window.alert('유요한 쿠폰번호가 아닙니다 쿠폰번호를 확인해주세요')
    }
})

// 하단 클릭시 바뀌는 js
const coupon_title = document.querySelectorAll ('.holding_exhaust_nav li a')
console.log(coupon_title[0])
const coupon_contents = document.querySelectorAll ('.not_coupon div')
console.log(coupon_contents[1])
coupon_contents[1].style.display = 'none'

coupon_title[0].addEventListener('click',(e)=>{
    coupon_contents[1].style.display = 'none'
    coupon_contents[0].style.display = 'block'
    e.preventDefault()
})

coupon_title[1].addEventListener('click',(e)=>{
    coupon_contents[0].style.display = 'none'
    coupon_contents[1].style.display = 'block'
    e.preventDefault()
})

