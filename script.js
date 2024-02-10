let submit= document.querySelector("#button");
let pop= document.querySelector(".container");
let ok=document.querySelector("#ok")

submit.addEventListener("click",()=>{
    submit.style.display="none";
    pop.style.display="block";
})

ok.addEventListener("click",()=>{
    submit.style.display="block";
    pop.style.display="none";
})