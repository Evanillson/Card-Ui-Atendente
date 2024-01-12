const card_drop_value = document.querySelector("div.content_card")
const card_drop_height = document.querySelector("div.box_value")
const filter_value = document.querySelector("filter_value")
const btnfilter = document.querySelector(".filter_value")
const pophelp = document.querySelector(".pop_card")

const btn_close_help = document.querySelector(".close_btn_card_solucionado")

card_drop_value.addEventListener("click", function(){
    card_drop_value.classList.toggle('active')
    card_drop_height.classList.toggle('active')
})

btnfilter.addEventListener("click", ()=>{
    pophelp.classList.add("active")
})
btn_close_help.addEventListener("click", ()=>{
    pophelp.classList.remove("active")
})