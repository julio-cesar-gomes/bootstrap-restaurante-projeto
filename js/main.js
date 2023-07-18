$(document).ready(function(){
    $('form').validate({
        rules:{
            nome:{
                required: true
            },                   
            email:{
                required: true, 
                email: true
            },                    
            mensagem:{
                required: true
            }
        },
        messages:{
            nome: 'Por favor, insira o seu nome.'
        },
    })

    $('#telefone').mask(`(00) 00000-0000`, {
    })
})