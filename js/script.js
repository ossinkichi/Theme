const tema1 = document.getElementById("dark")
const tema2 = document.getElementById("light")

tema1.addEventListener('click', ()=>{
    document.body.classList.add('dark')
    document.body.classList.remove('light')
})

tema2.addEventListener('click', ()=>{
    document.body.classList.add('light')
    document.body.classList.remove('dark')
})

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

if( prefersColorScheme.matches ) {
    document.body.classList.add('dark')
    document.body.classList.remove('light')
} else {
    document.body.classList.add('light')
    document.body.classList.remove('dark')
}