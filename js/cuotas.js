/* JS especifico para la ponderación de las cantidades de las cuotas en función de la periodicidad*/

jQuery(function($) {
$(".frecuencia").change( function() {

  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1").addClass("cuota-1");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2").addClass("cuota-2");
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3").addClass("cuota-3");

  var cuota_1 = $(".cuota-1");
  var cuota_2 = $(".cuota-2");
  var cuota_3 = $(".cuota-3");

  var cuota_1_text = $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1]");
  var cuota_2_text = $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2]");
  var cuota_3_text = $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3]");

  cuota_1.addClass("cuota-1");
  cuota_2.addClass("cuota-2");
  cuota_3.addClass("cuota-3");

    switch($(".frecuencia").val()){
      case '12': //Mensual
        //Value
        cuota_1.val(9);
        cuota_2.val(12);
        cuota_3.val(25);
        //Texto
        cuota_1_text.text('9 €');
        cuota_2_text.text('12 €');
        cuota_3_text.text('25 €');
        break;

      case '6': //Bimestral
        //Value
        cuota_1.val(15);
        cuota_2.val(24);
        cuota_3.val(40);
        //Texto
        cuota_1_text.text('15 €');
        cuota_2_text.text('24 €');
        cuota_3_text.text('40 €');
        break;

      case '4': //Trimestral
        //Value
        cuota_1.val(20);
        cuota_2.val(36);
        cuota_3.val(50);
        //Texto
        cuota_1_text.text('20 €');
        cuota_2_text.text('36 €');
        cuota_3_text.text('50 €');
        break;

      case '2': //Semestral
        //Value
        cuota_1.val(45);
        cuota_2.val(60);
        cuota_3.val(100);
        //Texto
        cuota_1_text.text('45 €');
        cuota_2_text.text('60 €');
        cuota_3_text.text('100 €');
        break;

      case '1': //Anual
        //Value
        cuota_1.val(70);
        cuota_2.val(100);
        cuota_3.val(120);
        //Texto
        cuota_1_text.text('70 €');
        cuota_2_text.text('100 €');
        cuota_3_text.text('120 €');
        break;
    }
});

});
