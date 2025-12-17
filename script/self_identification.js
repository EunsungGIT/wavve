const btn = document.querySelectorAll ('li > a ')
for(let i of btn){
    i.addEventListener('click',(e)=>{
        window.alert('본인 인증페이지로 넘어갑니다.')
        e.preventDefault();
    })
}