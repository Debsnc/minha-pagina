let botao =  document.querySelector("#botao");
botao.style.background="darkgreen"; botao.style.color="white"
botao.addEventListener("mouseover", e =>{
    botao.style.background="darkred"
});

botao.addEventListener("mouseout", e =>{
    botao.style.background="darkgreen"
});

botao.addEventListener("click", e =>{
    botao.style.background="darkred";
    botao.innerHTML= "Seja muito bem vindo, obrigada por visitar a página!"
});

   
