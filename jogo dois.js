//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'O jogo';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10!';

let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial()
{
exibirTextoNaTela ('h1' , 'Jogo do número secreto');
exibirTextoNaTela ('p' , 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute()
{
    let chute = document.querySelector('imput').value;
   
    if (chute == numeroSecreto)
        {
            exibirTextoNaTela ('h1' , 'Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativatentativa} !`;
            exibirTextoNaTela ('p' , 'mensagemTentativa');
            document.getElementById('reiniciar').removeAttribute('disabled');
        }

        else

        {
            if (chute > numeroSecreto)
            {
                exibirTextoNaTela ('p' , ' O número secreto é menor');
            }
            else
            {
                exibirTextoNaTela ('p' , ' O número secreto é maior');
            }
            //tentativas = tentativas + 1;
            tentativas ++;
            limparCampo ();
        }
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random() * 10 + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (listaDeNumerosSorteados.includes(numeroEscolhido))
    {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return gerarNumeroAleatorio();
    }
    else
    {
        return numeroEscolhido;
    }
}

function limparCampo()
{
    chute = document.querySelector('imput');
    chute.value = '';
}

function reiniciarJogo()
{
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1; 
   exibirMensagemInicial;
}