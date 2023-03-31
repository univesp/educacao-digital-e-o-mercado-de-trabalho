const testeContainer = document.querySelector("#testeContainer");

$(document).ready(function(){

    //////////////////////////////////////////////////////////////////
    // HEADER DINÂMICO
    // Mostra header somente no início da página.
    // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.
  
      $(window).scroll(function(){
        var nav = $(".header-dinamico .container");
        var scroll = $(window).scrollTop();
        if(scroll == 0){
          nav.fadeIn();
        } else {
          nav.fadeOut();
        }
      });
  
    //////////////////////////////////////////////////////////////////
  
    // Seu código abaixo


    // the selector will match all input controls of type :checkbox
    // and attach a click event handler 
    $("input:checkbox").on('click', function() {
      // in the handler, 'this' refers to the box clicked on
      let $box = $(this);
      if ($box.is(":checked")) {
        // the name of the box is retrieved using the .attr() method
        // as it is assumed and expected to be immutable
        let group = "input:checkbox[name='" + $box.attr("name") + "']";
        // the checked state of the group/box on the other hand will change
        // and the current value is retrieved using .prop() method
        $(group).prop("checked", false);
        $box.prop("checked", true);
      } else {
        $box.prop("checked", false);
      }
    });
  
  })

  const qtdeContainer = document.querySelector('#qtde-teste');
  const resultadoContainer = document.querySelector('#resultadoTeste');
  const buttonTeste = document.querySelector('#teste-button');
  let valorTotalTeste = 0;

  function replace( hide, show ){
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "flex";
  }

  function verifica(){
    let checkedValue = document.querySelector('.checkbox1:checked').value;
    let checkedValue2 = document.querySelector('.checkbox2:checked').value;

    switch(checkedValue){
      case 'S':
        valorTotalTeste++;
        break;
      
      case 'N':
        console.log('Valor N');
        break;

      case 'M':
        valorTotalTeste = valorTotalTeste + 0.5;
        break;
    }

    switch(checkedValue2){
      case 'S':
        valorTotalTeste++;
        break;
      
      case 'N':
        console.log('Valor N');
        break;

      case 'M':
        valorTotalTeste = valorTotalTeste + 0.5;
        break;
    }

    console.log(`Valor Final: ${valorTotalTeste}`)

    trocaQtdePontos();

    resultadoContainer.style.display = 'block';
    buttonTeste.style.display = 'flex';
    
  }

  function trocaQtdePontos(){
    qtdeContainer.innerHTML = `${valorTotalTeste} pontos`;
  }