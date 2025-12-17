// sns링크로 들어가기
const sns_link =document.querySelectorAll ('.sns_join a')
for (let i = 0; i < sns_link.length; i++) { 
    sns_link[i].addEventListener('click', function(index) {
    return ()=> {
        let links = ['https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fproxy%3DeasyXDM_Kakao_cm62bqrepk9_provider%26ka%3Dsdk%252F1.43.1%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fwww.wavve.com%26origin%3Dhttps%253A%252F%252Fwww.wavve.com%26response_type%3Dcode%26redirect_uri%3Dkakaojs%26state%3Do3a6w10skogpd04g0onujl%26through_account%3Dtrue%26client_id%3D30fc7e17b5c56a0ca1e861643292c203&talk_login=hidden#login','https://auth.skt-id.co.kr/auth/authorize.do?client_id=271d4bb5-7350-4e57-8816-0895b040d793&client_secret=eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2R0NNIn0.tlmO01_Z_xWuyqqlnmMMRUG0_U7-yxwme3R1xBIaoP3VLLJFtGgj_Q.92NpVkJ9qK5iZHH6.pNivJy5JKMDuUF0QOOfXki53nLFYs-GbK_6Yc3a43UgStbkD-kLELFZ0jh4lxADLHbAkbzVUrExw.-AtTptElH6xVXP3hZzTKCA&redirect_uri=https%3A%2F%2Fmember.wavve.com%2Fmember%2Flogin_tid.html&scope=openid&response_type=id_token%20token&state=20300&nonce=242873&client_type=WEB&service_type=14&popup_request_yn=Y&chnl_q=aHR0cHM6Ly9hdXRoLnNrdC1pZC5jby5rci9zc28vd2ViL3YxL3Nzb2xvZ291dC5kbz9jbGllbnRfaWQ9MjcxZDRiYjUtNzM1MC00ZTU3LTg4MTYtMDg5NWIwNDBkNzkzJnJlZGlyZWN0X3VyaT1odHRwcyUzQSUyRiUyRm1lbWJlci53YXZ2ZS5jb20lMkZtZW1iZXIlMkZsb2dpbl90aWQuaHRtbCUzRmxvZ291dCUzRHRydWUmY2xpZW50X3R5cGU9V0VC','https://nid.naver.com/nidlogin.login?oauth_token=n7WUo4Wh8mg91RrlkQ&consumer_key=IMRF4m29ielhnUTZYGHL&logintp=oauth2&nurl=https%3A%2F%2Fnid.naver.com%2Foauth2.0%2Fauthorize%3Fresponse_type%3Dtoken%26state%3Dcdf70704-738d-4be8-b680-bd5d1d4b5dfc%26client_id%3DIMRF4m29ielhnUTZYGHL%26redirect_uri%3Dhttps%253A%252F%252Fwww.wavve.com%252Fmember%252Flogin_naver.html%26locale%3Dko_KR%26inapp_view%3D%26oauth_os%3D&locale=ko_KR&inapp_view=&svctype=','https://www.facebook.com/?locale=ko_KR','https://appleid.apple.com/auth/authorize?client_id=kr.co.captv.pooqV2.member&redirect_uri=https%3A%2F%2Fmember.wavve.com%2Fmobile%2Fsignup%2Fweb%2Fapple&response_type=code%20id_token&scope=email&response_mode=form_post&frame_id=c601c563-3361-4fe9-be8f-e8e276c70e75&m=11&v=1.5.5'];
        window.open(links[index], '_blank');
        event.preventDefault()
    };
    }(i));
}

/* 비밀번호 수단 변경 */
const find_pw_m = document.querySelectorAll('.find_pw_m a')
const info_box = document.querySelector('.info_box')
const info_box_method = document.querySelector('.info_box .method')
const info_box_method_into = document.querySelector('.info_box .method_info')
const id_email = document.querySelectorAll('.info_box .method a')
const user_tel = document.querySelector('#user_tel')
const user_email = document.querySelector('#user_email')
const common_box = document.querySelector('.common_box')
const phone_pin = document.querySelectorAll('.common_box .method a')

find_pw_m[0].style.color = '#fff'
find_pw_m[0].style.borderBottom = '3px solid #1351f9'
info_box.style.display = 'block'
common_box.style.display = 'none'
find_pw_m[0].addEventListener('click', ()=>{
    find_pw_m[0].style.color = '#fff'
    find_pw_m[0].style.borderBottom = '3px solid #1351f9'
    find_pw_m[1].style.color = '#a5a5a5'
    find_pw_m[1].style.borderBottom = '3px solid #252525'
    info_box.style.display = 'block'
    common_box.style.display = 'none'
})
find_pw_m[1].addEventListener('click', ()=>{
    find_pw_m[1].style.color = '#fff'
    find_pw_m[1].style.borderBottom = '3px solid #1351f9'
    find_pw_m[0].style.color = '#a5a5a5'
    find_pw_m[0].style.borderBottom = '3px solid #252525'
    info_box.style.display = 'none'
    common_box.style.display = 'block'
})

// 페이지 로드시 초기 상태 설정


// 라디오 버튼 변경 시 이벤트 핸들러 등록
document.querySelectorAll('input[name="way"]').forEach(radio => {
    radio.addEventListener('change', updateInputType);
});

// 라디오 버튼에 따라 input 타입 변경
function updateInputType() {
    user_tel.type = user_email.checked ? 'email' : 'tel';
    updatePlaceholder();
}

// 휴대폰 번호 라디오 선택 시 placeholder를 휴대폰 번호로 설정
function updatePlaceholder() {
    if (user_email.checked) {
        user_tel.placeholder = '이메일 주소';
    } else {
        user_tel.placeholder = '휴대폰 번호 (번호만 입력)';
    }
}

info_box_method.style.display = 'flex'
info_box_method_into.style.display = 'none'
id_email[0].addEventListener('click',()=>{
    info_box_method.style.display = 'none'
    info_box_method_into.style.display = 'block'
})
id_email[1].addEventListener('click',()=>{
    info_box_method.style.display = 'none'
    info_box_method_into.style.display = 'block'
})

phone_pin[0].addEventListener('click',()=>{
    window.alert('휴대폰 인증 페이지로 이동합니다.')
})
phone_pin[1].addEventListener('click',()=>{
    window.alert('아이핀 인증 페이지로 이동합니다.')
})