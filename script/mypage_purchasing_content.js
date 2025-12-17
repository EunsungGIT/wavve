const taget = document.querySelector('.taget')
const  package = document.querySelector('.package')
console.log(taget,package)

const taget_buy = document.getElementById('taget_buy') 
const package_buy =document.getElementById('package_buy')
console.log(taget_buy,package_buy)
taget.classList.add('mypage_border')

package_buy.style.display = 'none'
package.addEventListener('click',()=>{
    package_buy.style.display = 'block'
    taget_buy.style.display = 'none'
    package.classList.add('mypage_border')
    taget.classList.remove('mypage_border')
})

taget.addEventListener('click',()=>{
    package_buy.style.display = 'none'
    taget_buy.style.display = 'block'
    taget.classList.add('mypage_border')
    package.classList.remove('mypage_border')
})

