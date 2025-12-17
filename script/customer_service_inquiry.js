// UP 버튼 스크롤
const up = document.querySelector('#up')

up.addEventListener('click', ()=>{
    window.scrollTo({top: 0})
})

// 취소와 확인 버튼
const cancelBtn = document.querySelector('#cancelBtn')
const submitBtn = document.querySelector('#submitBtn')

cancelBtn.addEventListener('click',()=>{
    const cancel = window.confirm('취소 시 입력된 정보가 저장되지 않습니다. 취소하시겠습니까?');
    if (cancel) {
        window.location.href = './customer_service.html';
    }
})



submitBtn.addEventListener('click',()=>{
    window.alert('문의가 완료되었습니다.')
    setTimeout(() => {
        window.location.href = './customer_service.html';
    }, 100);
})