/* JS especifico para la ponderación de las cantidades de las cuotas en función de la periodicidad*/

jQuery(function($) {

  function valores_mensuales(){
    $('.cuota-1').show();
    $('.cuota-2').show();
    $('.cuota-3').show();
    $('.cuota-4').hide();
    $('.cuota-5').hide();
    $('.cuota-6').hide();
    $('.cuota-7').hide();
    $('.cuota-8').hide();
    $('.cuota-9').hide();
  }

  function valores_trimestrales(){
    $('.cuota-1').hide();
    $('.cuota-2').hide();
    $('.cuota-3').hide();
    $('.cuota-4').show();
    $('.cuota-5').show();
    $('.cuota-6').show();
    $('.cuota-7').hide();
    $('.cuota-8').hide();
    $('.cuota-9').hide();
  }

  function valores_anuales(){
    $('.cuota-1').hide();
    $('.cuota-2').hide();
    $('.cuota-3').hide();
    $('.cuota-4').hide();
    $('.cuota-5').hide();
    $('.cuota-6').hide();
    $('.cuota-7').show();
    $('.cuota-8').show();
    $('.cuota-9').show();
  }

  // Al inicializar, añadimos a cada cuota con un identificador cuota-x
  var class_id = 1;
  $(".payamount-slide").each(function(){
    $(this).addClass("cuota-"+class_id);
    class_id++;
  });

  // Al inicializar, vemos qué valores hay que poner según la periodicidad
  switch( $('input[type="button"] .selectButton-input, .value-selected').attr('id') ) {
    case '12': //Mensual
    valores_mensuales();
    break;

    case '4': //Trimestral
    valores_trimestrales();
    break;

    case '1': //Anual
    valores_anuales();
    break;
  }

  /***** Cada vez que cambia la periodicidad, revisamos los valores *****/
  $(".frecuencia").change( function() {

    // Escondemos otra cuota  por si acaso ya que va a cambiar al valor del medio
    $('.otra_cantidad').parent().css("display", "none");
    // Desmarcamos "otra"
    $('.cuota-10').find('.payamount-input').removeClass('value-selected');


    switch( $('input[type="button"] .selectButton-input, .value-selected').attr('id') ){
      case '12': //Mensual
      //Si no hay cantidad marcada, marcamos la por defecto
      if( ! $('.cuota-1').find('.payamount-input').find('value-selected') && ! $('.cuota-3').find('.payamount-input').find('value-selected') ){
          $('.cuota-2').find('.payamount-input').addClass("value-selected");
      }
      valores_mensuales();
      break;

      case '4': //Trimestral
      //Cantidad por defecto
      //Si no hay cantidad marcada, marcamos la por defecto
      if( ! $('.cuota-4').find('.payamount-input').find('value-selected') && ! $('.cuota-6').find('.payamount-input').find('value-selected') ){
          $('.cuota-5').find('.payamount-input').addClass("value-selected");
      }      valores_trimestrales();
      break;

      case '1': //Anual
      //Cantidad por defecto
      //Si no hay cantidad marcada, marcamos la por defecto
      if( ! $('.cuota-7').find('.payamount-input').find('value-selected') && ! $('.cuota-9').find('.payamount-input').find('value-selected') ){
          $('.cuota-8').find('.payamount-input').addClass("value-selected");
      }      valores_anuales();
      break;
    }

  });

});
