/* JS especifico para la ponderación de las cantidades de las cuotas en función de la periodicidad*/

jQuery(function($) {
$(".frecuencia").change( function() {
  //alert('test');
    switch($(".frecuencia").val()){
      case '12': //Mensual
        //Value
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1").val(9);
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2").val(12);
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3").val(25);
        //Texto
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1]").text('9 €');
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2]").text('12 €');
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3]").text('25 €');
        break;

      case '6': //Bimestral
        //Value
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1").val(15);
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2").val(24);
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3").val(40);
        //Texto
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1]").text('15 €');
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2]").text('24 €');
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3]").text('40 €');
        break;

      case '4': //Trimestral
        //Value
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1").val(20);
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2").val(36);
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3").val(50);
        //Texto
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1]").text('20 €');
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2]").text('36 €');
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3]").text('50 €');
        break;

      case '2': //Semestral
        //Value
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1").val(45);
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2").val(60);
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3").val(100);
        //Texto
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1]").text('45 €');
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2]").text('60 €');
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3]").text('100 €');
        break;
        
      case '1': //Anual
        //Value
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1").val(70);
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2").val(100);
        $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3").val(120);
        //Texto
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1]").text('70 €');
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2]").text('100 €');
        $("label[for=edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3]").text('120 €');
        break;
    }
});

});
