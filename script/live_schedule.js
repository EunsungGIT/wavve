// 새로고침
const now_btn  = document.getElementById('now')
console.log(now_btn)
now_btn.addEventListener('click',(e)=>{
    location.reload()
})

//현재 시간 띄우기

const time = document.querySelector('.time p ')
const current_date = document.querySelector('.time h1 em')
let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let month = now.getMonth()
let days = now.getDate()
let days_week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
let day_week =days_week[now.getDay()]
console.log(now)
console.log(current_date)
console.log(day_week)
console.log(month,days)



time.innerHTML =hour +`:`+(minutes < 10 ? '0':'')+minutes+':'+(seconds < 10 ?'0':'')+seconds+''
current_date.innerHTML = `${month+1}` +`월 `+(days < 10 ? '0':'') + days+'일 '+day_week; 

function reload_time(){
    // 시간 부르기
    now = new Date();
    hour = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    month = now.getMonth()
    days = now.getDate()
    days_week = ['일','월','화','수','목','금','토']
    day_week =days_week[now.getDay()]
    
    time.innerHTML =hour +`:`+(minutes < 10 ? '0':'')+minutes+':'+(seconds < 10 ?'0':'')+seconds+''
    current_date.innerHTML = `${month+1}` +`월 `+(days < 10 ? '0':'') + days+'일 '+day_week + '요일'; 
}
const now_week = document.querySelectorAll('a strong')
const now_day = document.querySelectorAll('.date_list a span')
console.log(now_day[1])
now_day[0].innerHTML = `${days - 3}`
now_day[1].innerHTML = `${days - 2}`
now_day[2].innerHTML = `${days - 1}`
now_day[3].innerHTML = `${days}`
now_day[4].innerHTML = `${days + 1}`
now_day[5].innerHTML = `${days + 2}`
now_day[6].innerHTML = `${days + 3}`



window.onload =function(){
    setInterval(reload_time,1000)
}

//클릭시 날짜  보더
const date_list_border =document.querySelectorAll('.date_list a')
const border_remover = ()=>{
    for(let v of date_list_border){
        v.classList.remove('time_border')
    }
}
date_list_border[3].classList.add('time_border')
console.log(date_list_border[0])
date_list_border.forEach((t,p)=>{
    console.log(t)
    t.addEventListener('click',(e)=>{
        border_remover()
        date_list_border[p].classList.add('time_border')
        date_list_border[5].style.border ='none'
        date_list_border[6].style.border ='none'
        e.preventDefault();
    })
})


//버튼 클릭시 보더
const prev_border = document.querySelector('.time_line_prev')
const next_border = document.querySelector('.time_line_next')
let date_index = 3
date_list_border[5].style.border ='none'
date_list_border[6].style.border ='none'

next_border.addEventListener('click',(e)=>{
    if(date_index > 0){
        date_list_border[date_index].classList.remove('time_border')
        date_index--
        date_list_border[date_index].classList.add('time_border')
        e.preventDefault();
    }
})
prev_border.addEventListener('click',(e)=>{
    if(date_index < date_list_border.length -1 ){
        date_list_border[date_index].classList.remove('time_border')
        date_index++
        date_list_border[date_index].classList.add('time_border')
        e.preventDefault();
    }
})




// 클릭시  내용 보이기

const broadcasting = document.querySelectorAll ('.broadcasting a')
console.log(broadcasting[0],broadcasting[1],broadcasting[2])
const broadcasting_contents = document.querySelectorAll('.announcement_main')
console.log(broadcasting_contents[0],broadcasting_contents[1],broadcasting_contents[2]) 

const hide =()=>{
    for(let i of broadcasting_contents){i.style.display = 'none'}
}

hide()
broadcasting_contents[0].style.display = 'block'


broadcasting.forEach((t,i)=>{
    console.log(t,i)
    t.addEventListener('click',(e)=>{
        hide()
        broadcasting_contents[i].style.display='block'
        e.preventDefault();
    })
})

//실시간 TV
const live_tv = document.querySelector('.real_time')
console.log(live_tv)
live_tv.addEventListener('click',()=>{
    window.location.href = './live.html'
})

//클릭시 이미지 방송사
const broadcasting_img = document.querySelector ('h1 span img')
console.log(broadcasting_img)
broadcasting[0].addEventListener('click',()=>{
    broadcasting_img.src = './images/a_schedule/KBS_rogo.png'
})
broadcasting[1].addEventListener('click',()=>{
    broadcasting_img.src = './images/a_schedule/mbc_rogo.png'
})
broadcasting[2].addEventListener('click',()=>{
    broadcasting_img.src = './images/a_schedule/sbs_rogo.png'
})

//벨 클릭시 색깔 바뀌기
const alarm  = document.querySelectorAll ('.fa-bell') 
let distinction = true
for(let m of alarm){
    m.addEventListener('click',(e)=>{
        console.log(distinction)
        m.style.color = '#fff'
        window.alert ('알림설정이 완료되었습니다')
        e.preventDefault();
    })
}
const title_name =document.querySelectorAll('.title a')
console.log(title_name[0])
for(let v of title_name){
    v.addEventListener('click',(e)=>{
        e.preventDefault()
    })
}
//시간대 별 부르기
const live_on = document.querySelectorAll('.on_air h1')
console.log(live_on[0])
for (let j of live_on){
    j.innerHTML = hour +`:00 `
}
//시간 바꾸기
const first_time = document.querySelectorAll('.first_time h1')
const second_time = document.querySelectorAll('.second_time h1')
const third_time = document.querySelectorAll('.third_time h1')
const four_time = document.querySelectorAll('.four_time h1')
const five_time = document.querySelectorAll('.five_time h1')

for(let a of first_time){
    a.innerHTML =  `${hour-3}` +`:00`
}
for(let b of second_time){
    b.innerHTML =  `${hour-2}` +`:00`
}
for(let c of third_time){
    c.innerHTML =  `${hour-1}` +`:00`
}
for(let d of four_time){
    d.innerHTML =  `${hour+1}` +`:00`
}
for(let e of five_time){
    e.innerHTML =  `${hour+2}` +`:00`
}

//다시보기 
// e.preventDefault();
const replay = document.querySelectorAll('.contents_more  a span')
for(let w of replay){
    w.addEventListener('click',(e)=>{
        e.preventDefault();
        window.location.href = './live_contents.html'
    })
}