/* JS especifico para la ponderación de las cantidades de las cuotas en función de la periodicidad*/

jQuery(function($) {

  var class_id = 1;
  $(".payamount-slide").each(function(){
    $(this).addClass("cuota-"+class_id);
    class_id++;
  });

  // Por defecto mostramos solo las cuotas mensuales
  $('.cuota-1').show();
  $('.cuota-2').show();
  $('.cuota-3').show();
  $('.cuota-4').hide();
  $('.cuota-5').hide();
  $('.cuota-6').hide();
  $('.cuota-7').hide();
  $('.cuota-8').hide();
  $('.cuota-9').hide();


  $(".frecuencia").change( function() {

    switch($('input[type="button"] .selectButton-input, .value-selected').attr('id')){
      case '12': //Mensual

      $('.cuota-1').show();
      $('.cuota-2').show();
      $('.cuota-3').show();
      $('.cuota-4').hide();
      $('.cuota-5').hide();
      $('.cuota-6').hide();
      $('.cuota-7').hide();
      $('.cuota-8').hide();
      $('.cuota-9').hide();

      break;

      case '4': //Trimestral

      $('.cuota-1').hide();
      $('.cuota-2').hide();
      $('.cuota-3').hide();
      $('.cuota-4').show();
      $('.cuota-5').show();
      $('.cuota-6').show();
      $('.cuota-7').hide();
      $('.cuota-8').hide();
      $('.cuota-9').hide();

      break;

      case '1': //Anual

      $('.cuota-1').hide();
      $('.cuota-2').hide();
      $('.cuota-3').hide();
      $('.cuota-4').hide();
      $('.cuota-5').hide();
      $('.cuota-6').hide();
      $('.cuota-7').show();
      $('.cuota-8').show();
      $('.cuota-9').show();

      break;
    }
  });
});
