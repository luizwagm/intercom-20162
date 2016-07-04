$(document).ready(function(){
    $('#programacao .tabs').tabs();
    $('.button-collapse').sideNav();
    $('body').on('click','#open_menu',function(){
        $('.button-collapse').sideNav('show');
    })
    $('body').on('click','.side-nav a',function(){
        var val = $(this).attr('href');

        $('#cabecalho').removeClass('headerInicial').addClass('header');

        $('body').append('<div class="progress"><div class="indeterminate"></div></div>');
        $('.button-collapse').sideNav('hide');
        setTimeout(function(){

            $('.progress').remove();
            $("#programacao, #oficinas, #minicursos, #ij, #expocom, #dts").hide();
            $(val).show();
            
        },500);
        
    })
});

$(function(){
    $(".campoDts").keyup(function(){
            //pega o css da tabela 
            var tabela = $(this).attr('alt');
            if( $(this).val() != ""){
                $("."+tabela+" div, ."+tabela+" h2, ."+tabela+" h1").hide();
                $("."+tabela+" p:contains('" + $(this).val() + "'), ."+tabela+" span:contains('" + $(this).val() + "'), ."+tabela+" h1:contains('" + $(this).val() + "'), ."+tabela+" h2:contains('" + $(this).val() + "')").parent("div").show();
                $("."+tabela+" p:contains('" + $(this).val() + "'), ."+tabela+" span:contains('" + $(this).val() + "'), ."+tabela+" h1:contains('" + $(this).val() + "'), ."+tabela+" h2:contains('" + $(this).val() + "')").css( "text-decoration", "underline" );
                $("."+tabela+" div:contains('" + $(this).val() + "')").parent("div.blocoEventos").show();
                $("."+tabela+" div:contains('" + $(this).val() + "')").css( "text-decoration", "underline" );
            } else{
                $("."+tabela+" div, ."+tabela+" h2, ."+tabela+" h1").show();
                $("."+tabela+" div, ."+tabela+" h2, ."+tabela+" h1, ."+tabela+" p, ."+tabela+" span").css( "text-decoration", "none" );
            }
        }); 
});
$.extend($.expr[":"], {
    "contains-ci": function(elem, i, match, array) {
        return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }


});