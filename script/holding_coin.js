const holding_coin_btn = document.querySelector(".holding_middle_title > a")


holding_coin_btn.addEventListener("click", ()=>{
    window.open("coin_charging_page.html", "popup", "width=699,height=1377")
})

const coin_title = document.querySelectorAll('li a')
const coin_contents = document.querySelectorAll ('.not_coin div')

coin_contents[1].style.display = ' none'
coin_title[0].addEventListener('click',()=>{
    coin_contents[1].style.display = ' none'
    coin_contents[0].style.display = ' block'
})
coin_title[1].addEventListener('click',()=>{
    coin_contents[0].style.display = ' none'
    coin_contents[1].style.display = ' block'
})
