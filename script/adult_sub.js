const close_btn=document.querySelector('#close_btn')
const open_btn = document.querySelector('#open_btn')
open_btn.addEventListener('click',()=>{
    window.location.href = './adult_certified.html'
})

close_btn.addEventListener('click',()=>{
    window.location.href = './adult_main.html'
})