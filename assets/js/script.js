const luckyCookie = document.querySelector('.cookie')
const openedCookie = document.querySelector('.opened-cookie')
const lucky = document.querySelector('.lucky')


const messages = [
{
    message: 'Qual o nome da ciência que transforma cachorro em gato? Au que mia.'
},
{
    message: 'Quando o Papai Noel morrer, ele não estará mais em trenós.'
},
{
    message:'A partida de futebol entre cavalos terminou em patada.'
},
{
    message:'Qual é o doce preferido dos átomos? Pé-de-moléculas.'
},
{
    message:'Qual o contrário de papelada? Pá vestida.'
},
{
    message:'Qual cachorro gosta de mergulhar? O Pittbum.'
},
{
    message:'Qual é a tecla favorita do astronauta? O espaço;'
},
{
    message:'Qual o nome da mãe de todos os legumes? Mãe-dioca;'
},
{
    message:' Como se chama o coveiro do cemitério? O Seu Pultura'
},
{
    message:'O que o Aquaman faz para salvar o mundo? Nada.'
},
]

let newMessage = []

for( var index = 0; index < messages.length; index++){


    for( let newMess of messages){
        newMessage.push(newMess.message)
        
}}


function hideToggle(){
    luckyCookie.classList.toggle('hide')
    openedCookie.classList.toggle('hide')
}


function openCookie(){
    hideToggle()
    lucky.innerHTML = newMessage[index]

}


function returnCookie(){
    hideToggle()
    index++
}

