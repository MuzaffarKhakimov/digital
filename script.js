let bars = document.querySelector('#bars')
let mark = document.querySelector('#mark')
let nav = document.querySelector('.nav')

bars.addEventListener('click', ()=>{
    nav.style.opacity = '100'
    bars.style.display = 'none'
    mark.style.display = 'inline-block'
})
mark.addEventListener('click', ()=>{
    nav.style.opacity = '0'
    bars.style.display = 'inline-block'
    mark.style.display = 'none'
})