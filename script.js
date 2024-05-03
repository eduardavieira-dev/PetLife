var elementosDuvida = document.querySelectorAll('.duvida');
//seleciona todos os elementos e os coloca numa variavel
elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        //adicionar um ouvidor de eventos. passamos um evento que queremos que o js monitore que é o click
        duvida.classList.toggle('ativa')
        //toggle é um liga e desliga. coloca a classe se ela não existir,  remover se ela existir
        //add adciona a tela algum elemento como por exemplo um fundo verde ex: duvida.classList.add('fundo-verde')
    })

})

// function nome(argumento){
//     //conteudo da função
// }