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
        if (window.innerWidth < 650){
            nav.style.right = "-60vw"
        }else{
            nav.style.right = "-30vw"
        }
        
        bool = false
    }
})
let model_triger = document.getElementById('model')
let service_triger = document.getElementById('service')
function EventCalculate(){
    let model = parseInt(document.getElementById('model').value);
    let service = parseInt(document.getElementById('service').value);
    let time
    switch (service) {
        case 600:
            time = "5 мин"
            break;
        case 1200:
            time = "20-30 мин"
            break;
        case 2000:
            time = "1-3 дня"
            break;
        case 1800:
            time = "1-2 часа"
            break;
        case 3500:
            time = "1-2 дня"
            break;
        case 1500:
            time = "1-2 часа"
            break;
    }
    document.getElementById('price').textContent = model+service+" ₽";
    document.getElementById('time').textContent = time
}
model_triger.addEventListener('change', EventCalculate)
service_triger.addEventListener('change', EventCalculate)