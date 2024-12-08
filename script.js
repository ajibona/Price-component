const toogleButton = document.querySelector(".toogle-click");
const toogleCircle = document.querySelector(".toogle-circle")
const basic = document.querySelector(".basic-price")
const professional = document.querySelector(".professional-price")
const master = document.querySelector(".master-price")

let isActive = true;


toogleButton.addEventListener("click", ()=>{

  toogleCircle.classList.toggle("active")

  if(isActive){
    basic.textContent = "199.99"
    professional.textContent = "249.99"
    master.textContent = "399.99"
  }else{
    
  }
 
})

