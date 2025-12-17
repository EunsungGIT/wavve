/* a태그 */
const a_all = document.querySelectorAll('body a')

for(let i of a_all){
    i.addEventListener('click',(e)=>{
        e.preventDefault();
    })
}

const contents_title = document.querySelectorAll('.contents_title a')
const section = document.querySelectorAll('.customer_service section')

const section_hide = ()=>{for(let i of section){i.style.display = 'none'}}
section_hide()
section[0].style.display = 'block'

contents_title.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        section_hide()
        section[i].style.display = 'block'
        for(let j of contents_title){
            if(j === t){
                j.style.backgroundColor = '#1351F9'
                j.style.color = '#fff'
            }else{
                j.style.backgroundColor = '#252525'
                j.style.color = '#a5a5a5'
            }
        }
    })
})

// 공지사항
const notice_category = document.querySelectorAll('.notice_category a')
const notice_info = document.querySelectorAll('.notice_info')

const notice_info_hide = ()=>{for(let i of notice_info){i.style.display = 'none'}}
notice_info_hide()
notice_info[0].style.display = 'block'

notice_category.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        notice_info_hide()
        notice_info[i].style.display = 'block'
        for(let j of notice_category){
            if(j === t){
                j.style.color = '#fff'
            }else{
                j.style.color = '#a5a5a5'
            }
        }
    })
})

// 자주 묻는 질문 FAQ
const faq_info = document.querySelectorAll('.faq_info > a')
const faq_info_img = document.querySelectorAll('.faq_info > a img')
const faq_contents = document.querySelectorAll('.faq_contents')

const faq_contents_hide = ()=>{for(let i of faq_contents){i.style.display = 'none'}}
faq_contents_hide()

faq_info.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        if(faq_contents[i].style.display === 'block'){
            faq_contents[i].style.display = 'none'
            faq_info_img[i].style.transform = 'translateY(-50%) rotate(0)'
        }else{
            faq_contents[i].style.display = 'block'
            faq_info_img[i].style.transform = 'translateY(-50%) rotate(180deg)'
        }
    })
})

// 1:1 문의


// 이용약관
const agree_category = document.querySelectorAll('.agree_category a')
const agree_contents = document.querySelectorAll('.agree_contents')
const agree_print = document.querySelectorAll('.agree_right a')

const agree_contents_hide = ()=>{for(let i of agree_contents){i.style.display = 'none'}}
agree_contents_hide()
agree_contents[0].style.display = 'block'

agree_category.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        agree_contents_hide()
        agree_contents[i].style.display = 'block'
        for(let j of agree_category){
            if(j === t){
                j.style.color = '#fff'
            }else{
                j.style.color = '#a5a5a5'
            }
        }
    })
})
// 프린트 설정
for(let i of agree_print){
    i.addEventListener('click',()=>{
        window.print()
    })
}