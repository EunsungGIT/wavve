const join = document.querySelector( '#join')
const waveon = document.querySelector( '#interests')
console.log(join,waveon)
join.addEventListener('click',()=>{
    alert('본인 인증 페이지로 이동합니다')
    window.location = 'self_identification.html'
})
waveon.addEventListener('click',()=>{
    window.location = './wave_service.html'
})