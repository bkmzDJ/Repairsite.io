let bool = false
let nav = document.getElementById('nav')
let burger = document.getElementById('burger')
document.getElementById('burger').addEventListener('click', ()=>{
    if(!bool){
        burger.style.rotate = "90deg"
        burger.style.height = "5vh"
        nav.style.right = "0"
        bool = true
    } else if (bool){
        burger.style.rotate = "0deg"
        burger.style.height = "4vh"
        nav.style.right = "-30vw"
        bool = false
    }
     
})