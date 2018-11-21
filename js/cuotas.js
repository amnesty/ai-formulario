/* JS especifico para la ponderación de las cantidades de las cuotas en función de la periodicidad*/

jQuery(function($) {

  //Aniadimos un class específico para cantidad (previamente se han añadido todas las cantidades en los formularios)
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1").addClass("cuota-1");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2").addClass("cuota-2");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3").addClass("cuota-3");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-4").addClass("cuota-4");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-5").addClass("cuota-5");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-6").addClass("cuota-6");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-7").addClass("cuota-7");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-8").addClass("cuota-8");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-9").addClass("cuota-9");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-10").addClass("cuota-10");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-11").addClass("cuota-11");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-12").addClass("cuota-12");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-13").addClass("cuota-13");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-14").addClass("cuota-14");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-15").addClass("cuota-15");

  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1]").addClass("cuota-1");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2]").addClass("cuota-2");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3]").addClass("cuota-3");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-4]").addClass("cuota-4");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-5]").addClass("cuota-5");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-6]").addClass("cuota-6");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-7]").addClass("cuota-7");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-8]").addClass("cuota-8");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-9]").addClass("cuota-9");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-10]").addClass("cuota-10");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-11]").addClass("cuota-11");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-12]").addClass("cuota-12");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-13]").addClass("cuota-13");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-14]").addClass("cuota-14");
  $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-15]").addClass("cuota-15");

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
  $('.cuota-10').hide();
  $('.cuota-11').hide();
  $('.cuota-12').hide();
  $('.cuota-13').hide();
  $('.cuota-14').hide();
  $('.cuota-15').hide();

  $(".frecuencia").change( function() {

    switch($(".frecuencia").val()){
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
      $('.cuota-10').hide();
      $('.cuota-11').hide();
      $('.cuota-12').hide();
      $('.cuota-13').hide();
      $('.cuota-14').hide();
      $('.cuota-15').hide();

      break;

      case '6': //Bimestral

      $('.cuota-1').hide();
      $('.cuota-2').hide();
      $('.cuota-3').hide();
      $('.cuota-4').show();
      $('.cuota-5').show();
      $('.cuota-6').show();
      $('.cuota-7').hide();
      $('.cuota-8').hide();
      $('.cuota-9').hide();
      $('.cuota-10').hide();
      $('.cuota-11').hide();
      $('.cuota-12').hide();
      $('.cuota-13').hide();
      $('.cuota-14').hide();
      $('.cuota-15').hide();

      break;

      case '4': //Trimestral

      $('.cuota-1').hide();
      $('.cuota-2').hide();
      $('.cuota-3').hide();
      $('.cuota-4').hide();
      $('.cuota-5').hide();
      $('.cuota-6').hide();
      $('.cuota-7').show();
      $('.cuota-8').show();
      $('.cuota-9').show();
      $('.cuota-10').hide();
      $('.cuota-11').hide();
      $('.cuota-12').hide();
      $('.cuota-13').hide();
      $('.cuota-14').hide();
      $('.cuota-15').hide();

      break;

      case '2': //Semestral

      $('.cuota-1').hide();
      $('.cuota-2').hide();
      $('.cuota-3').hide();
      $('.cuota-4').hide();
      $('.cuota-5').hide();
      $('.cuota-6').hide();
      $('.cuota-7').hide();
      $('.cuota-8').hide();
      $('.cuota-9').hide();
      $('.cuota-10').show();
      $('.cuota-11').show();
      $('.cuota-12').show();
      $('.cuota-13').hide();
      $('.cuota-14').hide();
      $('.cuota-15').hide();

      break;

      case '1': //Anual
      $('.cuota-1').hide();
      $('.cuota-2').hide();
      $('.cuota-3').hide();
      $('.cuota-4').hide();
      $('.cuota-5').hide();
      $('.cuota-6').hide();
      $('.cuota-7').hide();
      $('.cuota-8').hide();
      $('.cuota-9').hide();
      $('.cuota-10').hide();
      $('.cuota-11').hide();
      $('.cuota-12').hide();
      $('.cuota-13').show();
      $('.cuota-14').show();
      $('.cuota-15').show();

      break;
    }
  });

});
