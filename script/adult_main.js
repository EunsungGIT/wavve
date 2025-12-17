const btn1 = document.querySelectorAll('.btn')
console.log(btn1)
for(let i of btn1){
    i.addEventListener('click',()=>{
        window.location.href = './adult_sub.html'
    })
}



const btn2 = document.querySelector('#pw_btn')

btn2.addEventListener('click',()=>{
    window.location.href = './adult_sub.html'})
