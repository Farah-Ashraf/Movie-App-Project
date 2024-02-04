let successName , successEmail , successPhone , successAge , successPass, successRepass = false;

$('#name').keyup( function(){

    const nameRegex =  /^[A-Za-z]{1,30}$/;
    if( nameRegex.test( $('#name').val() ) == false  ){

        showError($(this).next());

    }
    else{
 
        hideError($(this).next());
        successName = true;

    }

    if( $('#name').val() == "" ){

        hideError($(this).next())

    }

} );



$('#email').keyup( function(){

    const emailRegex =  /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{3}$/i;
    if( emailRegex.test( $('#email').val() ) == false  ){

        showError($(this).next());

    }
    else{
 
        hideError($(this).next());
        successEmail = true;

    }

    if( $('#email').val() == "" ){

        hideError($(this).next())

    }

} );




$('#phone').keyup( function(){

    const phoneRegex =  /^(02)?01[0125][0-9]{8}$/;
    if( phoneRegex.test( $('#phone').val() ) == false ){

        showError($(this).next());
    }
    else{
        hideError($(this).next());
        successPhone = true;

    }

    if( $('#phone').val() == "" ){

        hideError($(this).next())

    }
} );



$('#age').keyup( function(){

    const ageRegex =  /^(1[7-9]|[2-9]\d+)$/;
    if( ageRegex.test( $('#age').val() ) == false ){

        showError($(this).next());
    }
    else{
        hideError($(this).next());
        successAge = true;

    }

    if( $('#age').val() == "" ){
        hideError($(this).next())
    }

} );


const passwordInput = $('#password');
$('#password').keyup( function(){

    if(passwordInput.val()) {
        $('.pass-input i').css('display', 'block');
    } else {
        $('.pass-input i').css('display', 'none');
    }

    // regex of the pass input

    const passwordRegex =   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if( !passwordRegex.test( $('#password').val() ) ){

        showError($(this).next());
    }
    else{
        hideError($(this).next());
        successPass = true;

    }

    if( $('#password').val() == "" ){
        hideError($(this).next())
    }
} );


$('.pass-input i').click(function() {
    if (passwordInput.attr('type') === 'password') {
        passwordInput.attr('type', 'text');
        $('.pass-input i').removeClass('fa-eye-slash').addClass('fa-eye');
    } else {
        passwordInput.attr('type', 'password');
        $('.pass-input i').removeClass('fa-eye').addClass('fa-eye-slash');
    }
});

$('#repassword').keyup( function(){

    const repasswordRegex =   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if( $('#repassword').val()  != $('#password').val() ){

        showError($(this).next());
    }
    else{
        hideError($(this).next());
        successRepass = true;

    }

    if( $('#repassword').val() == "" ){
        hideError($(this).next())
    }
} );




function showError(element){

    $(element).css( 'visibility' , 'visible' );
    $('#input').css('border-color' , 'red');

}

function hideError(element){

    $(element).css( 'visibility' , 'hidden' );
    $('#input').css('border-color' , 'red');


}


