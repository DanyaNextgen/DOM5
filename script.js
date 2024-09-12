let color_btns = document.querySelectorAll('.color-box button')
let btns = document.querySelectorAll('.btn-box button')
let mainImg = document.querySelector('.grid-box img')
let color = document.querySelector('.color')
let colors = [
    'White',
    'Space Gray'
]
let images = [
    "./white-mac.png",
    "./gray-mac.png"
]

color_btns.forEach((btn, idx) => {
    btn.onclick = () => {
        mainImg.setAttribute('src', images[idx])
        color.innerHTML = colors[idx]
        document.querySelector('button.active').classList.remove('active')
        btn.classList.add('active')
    }
})

btns.forEach((btn) => {
    btn.onclick = () => {
        if(btn.classList.contains('inactive')) {
            btn.classList.remove('inactive')
            btn.classList.add('active')
        } 
        else{
            btn.classList.remove('active')
            btn.classList.add('inactive')
        }
    }
})


