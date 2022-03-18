let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let estado = document.querySelector('#estado');
let valFrete = document.querySelector('#valFrete')

cep.value = '';

cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
    document.body.appendChild(script);
})

function popularForm(resposta) {

    if("erro" in resposta){
        alert('CEP não encontrado');
        return;
    }
    let entrega = 'Rua União da Vitória'
    if(resposta.logradouro==entrega){
        valFrete.value = 'Frete: R$2,00'
        valFrete.style.background = 'green'
        valFrete.style.color = 'white'
    }else{
        valFrete.value = 'Não entregamos não sua região!'
        valFrete.style.background = 'red'
        valFrete.style.color = 'white'
    }
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}