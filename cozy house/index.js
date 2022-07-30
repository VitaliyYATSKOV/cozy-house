
$(document).ready(function(){

    $('#jquery').on('click',function(){
    
        alert('hello')
    });
    
    
    });
    $(document).ready(function() {
        $('.burger-menu').click(function(event){
            $('.burger-menu').toggleClass('active');
            $('.burger-background').toggleClass('active');
            $('.nav').toggleClass('active');
        });
    });