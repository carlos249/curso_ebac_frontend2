//Adicionando um evento de envio ao formulário
document.getElementById('myform').addEventListener('submit'), function(event){
        //pare o envio do formulário
        event.preventDefault();

        //obtendo os valores dos campos A e B
        var fieldA = document.getElementById('field-a').value;
        var fieldB = document.getElementById('field-b').value;

        //verifique se o valor do campo B é maior que o valor do campo A
        if (fieldB > fieldA){
            //exiba uma mensagem positiva
            alert('formulário válido');
        } else {
            //exiba uma mesagem negativa
            alert('Formulário inválido');
        }
}