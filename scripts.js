const menuHome = document.getElementById("link-home")

function callHome(){
    const myHome = document.querySelector(".home").scrollIntoView({ behavior: 'smooth' })
    console.log(myHome)
}

menuHome.addEventListener("click", callHome )



const menuSobre = document.getElementById("link-sobre")

function callSobre(){
    const mySobre = document.querySelector(".sobre").scrollIntoView({ behavior: 'smooth' })
    console.log(mySobre)
}

menuSobre.addEventListener("click", callSobre )



const menuProjetos = document.getElementById("link-projetos")

function callProjetos(){
    const myProjetos = document.querySelector(".projetos").scrollIntoView({ behavior: 'smooth' })
    console.log(myProjetos)
}

menuProjetos.addEventListener("click", callProjetos )



const menuFaleComigo = document.getElementById("link-fale-comigo")

function callFaleComigo(){
    const myFaleComigo = document.querySelector(".rede-social").scrollIntoView({ behavior: 'smooth' })
    console.log(myFaleComigo)
}

menuFaleComigo.addEventListener("click", callFaleComigo )
