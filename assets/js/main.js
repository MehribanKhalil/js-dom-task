// JS MODAL BOX
const customBtn = document.createElement('button')
const modalBox = document.createElement('div')
const cancelBtn= document.createElement('button')
const overlay = document.createElement('div')


customBtn.textContent='Open'
cancelBtn.textContent='X'
modalBox.textContent='Surprise'


//customBtn
document.body.append(customBtn)
customBtn.classList.add('custom_btn')

//modal box
modalBox.classList.add('modal_box')

//cancel btn
//normalda style-a aid kodlar belə yazılmır. əsasən klass kimi əlavə edilir.js-də style yazmağa  nümunə olsun deyə yazdım
cancelBtn.style.cursor='pointer'

//overlay
overlay.classList.add('overlay')


document.body.append(modalBox,overlay)
modalBox.append(cancelBtn)
 

customBtn.onclick=()=> {
    modalBox.classList.add('active')
    overlay.classList.add('active')
}

cancelBtn.onclick=()=> {
    modalBox.classList.remove('active')
    overlay.classList.remove('active')
}





