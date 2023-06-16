 // selecionar o ano como new date OK
 // criar uma variavel para o formulario e para o resultado
 // selecionar o sexo com o radio button (usar name.checked para escolher masc ou fem)
 // se o valor do formAno foi igual e 0 ou maior q o ano em si, colocar alert com msg de erro
 // criar um novo if com as novas variaveis paara a seleçao dos radio buttons (ifs aninhados)
 // criar variavel com o calculo da idade fazendo o ano ano atual - o ano escrito
 // clicar em verificar chamando o botao com a function OK
 // aparecer o resultado na tela com o innerHTML com interpolação
 // aparecendo a imagem: de forma dinamica - criar uma variavel em que a img é igual a document.createElement('img') e depois um img.setAttribute('id', 'foto') > assim eu estou criando um id chamado foto no js em vez de fazer no html.
 // fazer um if com as idades e dentro colocar o set attribute criado com cada imagem disponivel
 // chamar o setAttribute das imagens colocando um resultado.appendChild() no final
 
 
 function calcular() {

    const formAno = document.querySelector('#ano');
    const resultado = document.querySelector('#result');
    
    let data = new Date();
    let ano = data.getFullYear();
    
    if (formAno.value.length === 0 || formAno.value > ano) {
        alert('Número inválido. Verifique e tente novamente!');
    } else {
        const formSex = document.getElementsByName('radsex')
        const idade = ano - (formAno.value)
        let genero = '';

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formSex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/crianca-menino.jpg')
            } else if (idade >= 10 && idade < 20) {
                img.setAttribute('src', 'img/jovem-homem.jpg')
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'img/adulto-homem.jpg')
            } else {
                img.setAttribute('src', 'img/idoso-homem.jpg')
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/crianca-menina.jpg')
            } else if (idade >= 10 && idade < 20) {
                img.setAttribute('src', 'img/jovem-mulher.jpg')
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'img/adulto-mulher.jpg')
            } else {
                img.setAttribute('src', 'img/idoso-mulher.jpg')
            }
        }

        img.style.padding = '25px'
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos que você é ${genero} com ${idade} anos!`
        resultado.appendChild(img)
    }
}
