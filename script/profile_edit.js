const image_change = document.querySelector('fieldset > a')
const profile_wrap = document.querySelector('.profile_wrap')
const user_name = document.querySelector('#user_name')
const profile_image = document.querySelectorAll('.profile_wrap img')
const user_image = document.querySelector('p img')

// 프로필 이미지 클릭
profile_wrap.style.display = 'none'
image_change.addEventListener('click', ()=>{
    image_change.style.display = 'none'
    profile_wrap.style.display = 'flex'
})

// 최대 글자 수 10자 팝업
user_name.addEventListener('input', () => {
    if (user_name.value.length >= 10) {
        alert('1자~10자까지 가능합니다. (띄어쓰기 포함)');
    }
});

// 이미지 클릭 시 파란 원 생성
profile_image[0].classList.add('select')

for(let i of profile_image){
    i.addEventListener('click', ()=>{
        for (let j of profile_image) {
            if (j === i) {
                j.classList.add('select');
            } else {
                j.classList.remove('select');
            }
        }
        user_image.src = i.src;
    })
}