const number = document.querySelector('.number')
const container = document.querySelectorAll('.container')
const circles = document.querySelectorAll('.fa-circle')

//marca todas as mensagens como lida e zera o 'number'
function markAllAsRead() {
    number.innerHTML = '0'

    //percorre cada 'circle' e adiciona a classe 'color'
    circles.forEach(circle => {
        circle.classList.add('color')
    });

    //muda o background-color de todos os elemento add uma classe
    container.forEach(cont => {
        cont.classList.add('background')
    });
}

document.querySelector('.markRead').addEventListener('click', markAllAsRead)

//----------------------------------------------------------------
//----------------------------------------------------------------


function markOneRead(event) {
    //remove o circle clicado
    event.currentTarget.remove() 
    
    //contator das mensagens não lidas
    //faz o decremento de 'number' a cada 'circle' clicado
    const count = number.innerHTML = parseInt(number.textContent)
    if(count !== 0) {
        number.innerHTML = parseFloat(number.textContent) -1
    }

    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //seleciona do primeiro ao 4º elemento
    const sections = document.querySelectorAll('.container:nth-child(-n+4)')

    // muda background-color das novas mensagens
    function mudaBG(event) {
        let bg = event.currentTarget //bg recebe o elemento em que foi clicado
        bg.classList.add('background')
    }

    //percorre todas as 'sections' que possuem '.container:nth-child(-n+4)'
    sections.forEach(section => {
        section.addEventListener('click', mudaBG)
    })

    mudaBG()
}   
//adiciona um evento para cada circle
circles.forEach(item => {
    item.addEventListener('click', markOneRead)
})


//----------------------------------------------------------------
//----------------------------------------------------------------

//seleciona do primeiro ao 4º elemento
// const sections = document.querySelectorAll('.container:nth-child(-n+4)')

// muda a cor do background das novas mensagens
// function mudaBG(event) {
//     let bg = event.currentTarget
//     bg.classList.add('background')
// }

// sections.forEach(section => {
//     section.addEventListener('click', mudaBG)
// })


