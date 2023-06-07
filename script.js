/* SCRIPT PARA BARRA DE PESQUISA DO CHAT ------------------------------------------------ */

let inputElement = document.querySelector('.input-chat input')
let listElement = document.querySelector('.conversations ul')
let itemElement = listElement.querySelectorAll('li')

inputElement.addEventListener('input', (e) =>{ //DIGO QUE O EVENTO É O PRÓPRIO INPUT, SEMPRE QUE HOUVER ALTERAÇÃO NELE EXECUTARÁ A FUNÇÃO e salva dentro do parametro (e)

    let inputed = e.target.value.toLowerCase()//pego o valor salvo, especifico o que quero com target e value para mostrar o texto, e jogo o texto para minuscula

    itemElement.forEach((li)=>{

        let text = li.textContent.toLowerCase()

        if(text.includes(inputed)){
            li.style.display = 'block'
        }else{
            li.style.display = 'none'
        }
    })
})

// script para cortar o texto em 26 caracteres ---------------------------------------------------------------

let itemText = document.querySelectorAll('.conversations ul li a p')


itemText.forEach((p)=>{ // dizendo que a função será executada para cada P

    let texta = p.innerText // obter o valor de p

    if(texta.length > 26){ // se verdadeiro, executará o corte 
        p.innerHTML = `${texta.slice(0, 26)}...` //seleciona p e adiciona um o valor de texta que obtemos acima, mas com o corte de caracteres
    }
})

// SCRITP PARA ENCOLHER O SIDEMENU ----------------------------------------------------------------------------

var expandItem = document.querySelector('.sidemenu-profile')
var menuExpansive = document.querySelector('.sidenav')
var setaMenu = document.querySelector('.sidemenu-profile span')

setaMenu.addEventListener('click', sidelist)

function sidelist(){

    if(menuExpansive.style.display == 'block'){
        menuExpansive.style.display = 'none'
        setaMenu.style.transform = 'rotate(0deg)'

    }else{
        menuExpansive.style.display = 'block'
        setaMenu.style.transform = 'rotate(90deg)'
    }
}



/* PUBLICAR UMA POSTAGEM 

const inputpost = document.querySelector('#input-post')
const div = document.querySelector('.content')
const btnpost = document.querySelector('.publisher-post button')

btnpost.addEventListener('click', ativar)

function ativar(){

    if(inputpost.value == ""){
        console.log('vazio')
    } else{
    //crio o elemento
    let divElement = document.createElement('div')

    //adiciono classe nele
    divElement.setAttribute('class', 'publisher-post')

    //adiciono padding left
    divElement.style.paddingLeft = '30px'

    //coloco o conteúdo nele
    divElement.innerHTML = `${inputpost.value}`

    //digo onde ele será criado
    div.appendChild(divElement)

}
    inputpost.value = ""
}
    */








// para fazer ----------------

/*

---> limitar a quantidade de caracteres no nome dos stories
---> adicionar click no sidenavmenu
---> fazer slide de fotos


/*const sidenav = document.querySelector('.sidenav ul li')

// sidenav function click
sidenav.addEventListener('click', sidenavclick)

function sidenavclick(){
    sidenav.style.background = ' var(--purple-light)'   
}*/