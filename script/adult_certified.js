const certified = document.querySelectorAll('ul > li >a')
console.log(certified)
for(let i of certified){
    i.addEventListener('click',()=>{
        window.alert('인증페이지로 이동합니다')
        window.location.href = './self_identification.html'
    })
}