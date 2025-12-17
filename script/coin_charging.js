/* 탭 */
const normal_tap = document.querySelector(".tab_nomal")
const auto_tap = document.querySelector(".tab_auto")

console.log(normal_tap,auto_tap)
normal_tap.classList.add("coin_mypage_border")

/* 자동충전 */
auto_tap.addEventListener("click",()=>{
    auto_tap.classList.add("coin_mypage_border")
    normal_tap.classList.remove("coin_mypage_border")
})

/* 일반충전 */
normal_tap.addEventListener("click",()=>{
    normal_tap.classList.add("coin_mypage_border")
    auto_tap.classList.remove("coin_mypage_border")
})
/* 탭 끝 */

const normal_charging = document.querySelector("#frm_payment1")

/* 스와이퍼  */
const my_swiper = new Swiper('.crad_container', { 
    slidesPerView: 1, //슬라이드 한번에 1개씩 보이기
    centeredSlides:true, // 슬라이드의 기준을 가운데부터 시작하도록 설정하기
    loop:true,
    pagination:{
        el:'.swiper-pagination'
    },
    navigation:{
        nextEl:'.crad_container .swiper-button-next',
        prevEl:'.crad_container .swiper-button-prev',
    },
})

/* 일반충전 & 자동충전 화면 전환 */
const charging_tap = document.querySelectorAll(".coin_charging_middle > a")
const normal_charging_tap = document.querySelector("#frm_payment1")
const auto_charging_tap = document.querySelector("#frm_payment2")


/* 초기 내용 숨기기 */
auto_charging_tap.style.display = "none"

/* 초기값 활성화 시키기 active */
charging_tap[0].parentElement.classList.add("active")

charging_tap[0].addEventListener("click", ()=> {
    normal_charging_tap.style.display = "block"
    auto_charging_tap.style.display = "none"
})

charging_tap[1].addEventListener("click", ()=>{
    auto_charging_tap.style.display = "block"
    normal_charging_tap.style.display = "none"
})

/* 빠른 결제 & 다른 결제 수단  작업중*/
/* card_pay_ment_box 빠른결제 아래로 전부 */
/* card_btm_content 다른 결제수단 아래로 전부 */

/* 빠른 결제 박스 */
const quick_payment_box = document.querySelector(".card_pay_ment_box")
/* 다른 결제 박스 */
const different_payment_box = document.querySelector(".card_btm_content")

/* 일반충천 - > 빠른결제부단 탭*/
const quick_pay_btn = document.querySelector("#normal_pay_btn")
/* 일반충천 - > 다른 결제수단 탭 */
const other_pay_btn = document.querySelector(".other_pay > label")

console.log(other_pay_btn)

/* 초기 내용 숨기기 */
different_payment_box.style.display= "none"
quick_pay_btn.parentElement.classList.add("active")


other_pay_btn.addEventListener("click", ()=> {
    quick_payment_box.style.display ="none"
    different_payment_box.style.display = "flex"
})


quick_pay_btn.addEventListener("click", ()=> {
    different_payment_box.style.display = "none"
    quick_payment_box.style.display ="flex"
})
/* 일반충전 끝*/
/* 자동충전 시작*/

/* 빠른 결제 박스 */
const auto_quick_payment_box = document.querySelector("#frm_payment2 .card_pay_ment_box")
/* 다른 결제 박스 */
const auto_different_payment_box = document.querySelector("#frm_payment2 .card_btm_content")

/* 빠른 결제수단 탭 */
const auto_quick_pay_btn = document.querySelector("#auto_pay_btn")
/* 다른 결제수단 탭 */
const auto_other_pay_btn = document.querySelector("#frm_payment2 .other_pay > label ")

auto_different_payment_box.style.display = "none"

auto_quick_pay_btn.classList.add("active")

auto_other_pay_btn.addEventListener("click", ()=> {
    auto_quick_payment_box.style.display = "none"
    auto_different_payment_box.style.display = "flex"
})

auto_quick_pay_btn.addEventListener("click",()=>{
    auto_different_payment_box.style.display = "none"
    auto_quick_payment_box.style.display = "flex"
})

/* 자동충전 끝 */
/* 빠른 결제 & 다른 결제 수단 끝 */

/* 카드등록 */
const card_register = document.querySelector(".card_wrap > .card_register_img")
console.log(card_register)

card_register.addEventListener("click", ()=>{
    window.confirm("카드 등록창으로 이동합니다.")
})

/* 일반충전 & 자동충전 화면 전환  끝*/
/* 결제내용- > 충전코인리스트 */
/* 결과금액 */
const coin_price = [3000, 5000, 10000, 30000]
const coin_price_span_nomal = document.querySelectorAll("#frm_payment1 .charging_coin_list span")
const coin_price_span_auto = document.querySelectorAll("#frm_payment2 .charging_coin_list span")

/* 일반충전 - 충전 코인 선택 */
const nomal_coin_result = document.querySelector("#frm_payment1 .price")

coin_price_span_nomal.forEach((t,i)=>{
    console.log(t,i)
    t.addEventListener("click", ()=>{
        console.log(i)
        console.log(coin_price[i])
        coin_price[i]   
        nomal_coin_result.innerHTML = coin_price[i].toLocaleString("ko-kr")
    })
})

/* 자동충전  - 충전 코인 선택 */
const auto_coin_result = document.querySelector("#frm_payment2 .price")

coin_price_span_auto.forEach((t,i)=>{
    t.addEventListener("click", ()=> {
        console.log(coin_price[i])
        coin_price[i]
        auto_coin_result.innerHTML = coin_price[i].toLocaleString("ko-kr")
    })
})

/* 일반충전 - 다른 결제 수단 */
const card_btm_content_box_normal = document.querySelectorAll("#frm_payment1 .card_btm_content li > a");
const coin_abox_img_normal = document.querySelectorAll("#frm_payment1 .card_btm_content a > img")
const coin_abox_span_normal = document.querySelectorAll("#frm_payment1 .card_btm_content a > span")

/* 자동충전 - 다른 결제 수단 */
const card_btm_content_box_auto = document.querySelectorAll("#frm_payment2 .card_btm_content li > a");
const coin_abox_img_auto = document.querySelectorAll("#frm_payment2 .card_btm_content a > img")
const coin_abox_span_auto = document.querySelectorAll("#frm_payment2 .card_btm_content a > span")

/* 일반&자동 충전 다른 결제 수단 초기화 함수*/
const card_normal_auto_reset = () => {
    for(let i of card_btm_content_box_normal){
        i.classList.remove("card_btm_content_box_style");
        i.style.background = "initial";
        i.style.color = "initial";
        i.style.border = ""
    }
    for(let i of card_btm_content_box_auto){
        i.classList.remove("card_btm_content_box_style");
        i.style.background = "initial";
        i.style.color = "initial";
        i.style.border = ""
    }
    for(let i of coin_abox_img_normal){i.style.filter="brightness(100%)"}
    for(let i of coin_abox_img_auto){i.style.filter="brightness(100%)"}
    for(let i of coin_abox_span_normal){i.style.color="#a5a5a5"}
    for(let i of coin_abox_span_auto){i.style.color="#a5a5a5"}
}
card_normal_auto_reset()
//일반 충전 a 클릭 시 이벤트
card_btm_content_box_normal.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        card_normal_auto_reset()
        t.style.background = "#1351f9";
        t.style.border = "1px solid #1351f9";
        coin_abox_img_normal[i].style.filter="brightness(1200%)"
        coin_abox_span_normal[i].style.color="#FFF"
    })
})
//자동 충전 a 클릭 시 이벤트
card_btm_content_box_auto.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        card_normal_auto_reset()
        t.style.background = "#1351f9";
        t.style.border = "1px solid #1351f9";
        coin_abox_img_auto[i].style.filter="brightness(1200%)"
        coin_abox_span_auto[i].style.color="#FFF"
    })
})
//확인 및 취소 버튼
const close_btn = document.querySelectorAll('.close_btn')
const next_btn =document.querySelectorAll('.next_btn')
console.log(close_btn,next_btn)
for(let i of close_btn){
    i.addEventListener('click',()=>{
        // window.open('', '_self', '');
        window.close();
    })
}
for(let j of next_btn){
    j.addEventListener('click',()=>{
        window.alert('결제페이지로 이동합니다.')
        window.close();
    })
}