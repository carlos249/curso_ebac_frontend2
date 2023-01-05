document.getElementById('myform').addEventListener('submit', function(event) {
    //impedir que o formulário seja enviado
    event.preventDefault();

    //obter os valores dos campos A e B
    var fieldA = document.getElementById('field-a').value;
    var fieldB = document.getElementById('field-b').value;

    //verifique se o valor do campo B é maior que o valor do campo A
    if (fieldB > fieldA){
        //exibir uma mensagem positiva
        alert('O formulário é válido');
    } else {
        //exibir uma mensagem negativa
        alert('Formulário inválido');
    }
});
    