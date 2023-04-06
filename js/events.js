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

      $(this).scrollTop(0);
  
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

  const qtdeContainer = document.querySelectorAll('.qtdeTeste');
  const resultadoContainer = document.querySelectorAll('.devolucao-teste');
  const buttonTeste = document.querySelectorAll('.button-teste-avanca');
  const buttonVerifica = document.querySelectorAll('.button-teste');
  let valorTotalTeste = 0;

  function replace( hide, show ){
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "flex";

    window.scrollTo({
      top: 400,
      behavior: 'smooth'
    });
  }
  function replaceFimRea( hide, show, show2 ){
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "flex";
    document.getElementById(show2).style.display = "flex";

    window.scrollTo({
      top: 400,
      behavior: 'smooth'
    });
  }

  function reiniciaREA(){
    document.location.reload();
  }
  

  function verifica(){

    let isChecked = document.querySelectorAll('input[type="checkbox"]');
    let counterChecked = 0;

      isChecked.forEach(e=>{
        if(e.checked){
          counterChecked++
        }
      })

    console.log(counterChecked)

    if(counterChecked < 20){
      Swal.fire('Por favor, marque ao menos 1 opção em cada alternativa');
    } else{

    for (let i = 1; i < 21; i++) {
      let checkedValue = document.querySelector(`.checkbox${i}:checked`).value;
      let className = document.querySelector(`.checkbox${i}:checked`).className;
    
        if(className === 'checkbox8' || className === 'checkbox18'){
          switch(checkedValue){
            case 'S':
              break;
            
            case 'N':
              valorTotalTeste++;
              break;
    
            case 'M':
              valorTotalTeste = valorTotalTeste + 0.5;
              break;
          }
        }else{
          switch(checkedValue){
            case 'S':
              valorTotalTeste++;
              break;
            
            case 'N':
              break;
    
            case 'M':
              valorTotalTeste = valorTotalTeste + 0.5;
              break;
          }
        }
      }
  
      console.log(`Valor Final: ${valorTotalTeste}`)
  
      trocaQtdePontos();
  
      resultadoContainer.forEach(e => {
        e.style.display = 'block';
      })

      buttonTeste.forEach(e => {
        e.style.display = 'flex';
      })

      buttonVerifica.forEach(e => {
        e.disabled = true;
        e.style.backgroundColor = "#CBD0CF";
        e.style.cursor = "default";
      })

      if (window.matchMedia("(min-width:992px)").matches) {
        window.scrollTo({
          top: 2050,
          behavior: 'smooth'
        });
      }

      else if (window.matchMedia("(min-width:768px)").matches){
        window.scrollTo({
          top: 10500,
          behavior: 'smooth'
        });
      }

    }
  }


  function trocaQtdePontos(){
    
      qtdeContainer.forEach(e => {
        e.innerHTML = `${valorTotalTeste} pontos`;
      }) 
  }