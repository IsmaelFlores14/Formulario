$(document).on("ready", inicio);

function inicio(){
    $('span.help-block').hide();
}

function validar(id){
        switch (id){
            case 'nombre':
                nombre = $('#nombre').val();
                if(nombre.length < 1 || nombre === null ){
                    $('#icoerrnombre').remove();
                    $('#nombre').parent().parent().attr('class','form-group has-error has-feedback');
                    $('#nombre').parent().children('span').text('Campo obligatorio').show();
                    $('#nombre').parent().append('<span id="icoerrnombre" class="glyphicon glyphicon-remove form-control-feedback"></span>');
                    return false;
                }else{
                    $('#icoerrnombre').remove();
                    $('#divNombre').attr('class', 'form-group has-success has-feedback');
                    $('#nombre').parent().children('span').text('').hide();
                    $('#nombre').parent().append('<span id="icoerrnombre" class="glyphicon glyphicon-ok form-control-feedback"></span>');
                }
                break;
            case 'email': 
                email = $('#email').val();
                patronEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                //patronEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
                if(email.length > 1 || email === null){
                    if( !patronEmail.test(email) ){
                        console.log(!patronEmail.test(email));
                        $('#icoerremail').remove();
                        $('#email').parent().parent().attr('class','form-group has-error has-feedback');
                        $('#email').parent().children('span').text('Introduzca un email valido').show();
                        $('#email').parent().append('<span id="icoerremail" class="glyphicon glyphicon-remove form-control-feedback"></span>');
                        return false;
                    }else{
                        $('#icoerremail').remove();
                        $('#divEmail').attr('class', 'form-group has-success has-feedback');
                        $('#email').parent().children('span').text('').hide();
                        $('#email').parent().append('<span id="icoerremail" class="glyphicon glyphicon-ok form-control-feedback"></span>');
                    }
                    
                }else{
                    $('#icoerremail').remove();
                    $('#email').parent().parent().attr('class','form-group has-error has-feedback');
                    $('#email').parent().children('span').text('Campo obligatorio').show();
                    $('#email').parent().append('<span id="icoerremail" class="glyphicon glyphicon-remove form-control-feedback"></span>');
                    return false;
                }
                break;
            case 'telefono': 
                telefono = $('#telefono').val();
                if(telefono.length < 1 || telefono === null ){
                    $('#icoerrtel').remove();
                    $('#telefono').parent().parent().attr('class','form-group has-error has-feedback');
                    $('#telefono').parent().children('span').text('Campo obligatorio').show();
                    $('#telefono').parent().append('<span id="icoerrtel" class="glyphicon glyphicon-remove form-control-feedback"></span>');
                    return false;
                }else{
                    $('#icoerrtel').remove();
                    $('#divTel').attr('class', 'form-group has-success has-feedback');
                    $('#telefono').parent().children('span').text('').hide();
                    $('#telefono').parent().append('<span id="icoerrtel" class="glyphicon glyphicon-ok form-control-feedback"></span>');
                }
                break;
            case 'direccion': 
                direccion = $('#direccion').val();
                if(direccion.length < 1 || direccion === null ){
                    $('#icoerrdir').remove();
                    $('#direccion').parent().parent().attr('class','form-group has-error has-feedback');
                    $('#direccion').parent().children('span').text('Campo obligatorio').show();
                    $('#direccion').parent().append('<span id="icoerrdir" class="glyphicon glyphicon-remove form-control-feedback"></span>');
                    return false;
                }else{
                    $('#icoerrdir').remove();
                    $('#divDir').attr('class', 'form-group has-success has-feedback');
                    $('#direccion').parent().children('span').text('').hide();
                    $('#direccion').parent().append('<span id="icoerrdir" class="glyphicon glyphicon-ok form-control-feedback"></span>');
                }
                break; 
            case 'propietario': 
                propietario = $('#propietario').val();
                if(propietario.length < 1 || propietario === null ){
                    $('#icoerrprop').remove();
                    $('#propietario').parent().parent().attr('class','form-group has-error has-feedback');
                    $('#propietario').parent().children('span').text('Campo obligatorio').show();
                    $('#propietario').parent().append('<span id="icoerrprop" class="glyphicon glyphicon-remove form-control-feedback"></span>');
                    return false;
                }else{
                    $('#icoerrprop').remove();
                    $('#divProp').attr('class', 'form-group has-success has-feedback');
                    $('#propietario').parent().children('span').text('').hide();
                    $('#propietario').parent().append('<span id="icoerrprop" class="glyphicon glyphicon-ok form-control-feedback"></span>');
                }
                break;
            case 'md5': 
                md5 = $('#md5').val();
                if(md5.length < 1 || md5 === null ){
                    $('#icoerrmd5').remove();
                    $('#md5').parent().parent().attr('class','form-group has-error has-feedback');
                    $('#md5').parent().children('span').text('Campo obligatorio').show();
                    $('#md5').parent().append('<span id="icoerrmd5" class="glyphicon glyphicon-remove form-control-feedback"></span>');
                    return false;
                }else{
                    $('#icoerrmd5').remove();
                    $('#divMd5').attr('class', 'form-group has-success has-feedback');
                    $('#md5').parent().children('span').text('').hide();
                    $('#md5').parent().append('<span id="icoerrmd5" class="glyphicon glyphicon-ok form-control-feedback"></span>');
                }
                break;    
        }
}


