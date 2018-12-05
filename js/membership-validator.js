jQuery(function($) {

  function calculate_fee() {
    $cuota = 0;
    $(".cuota").each( function() {
        if( $(this).is(":checked") ){
          $cuota = $(this).val();
        }
    });
    $otra = $(".otra_cuota").val();
    $cuota = ($cuota > 0 ? $cuota : $otra);
    $frecuencia = $(".frecuencia").val();

    $cuota_anual = $cuota*$frecuencia;
    if($cuota_anual >= 24 && $cuota_anual < 48){
      alert("La cuota mínima para asociarte a Amnistía Internacional es de 48€ anuales. En caso de ser una persona jubilada, desempleada o estudiante, puedes acogerte a la cuota reducida de 24€ al año. Gracias.");
    }
  }

  // on-load
  calculate_fee();

  // si hay un evento click en cualquier cuota menos "otra cantidad" y su caja correspondiente
  $(".cuota").click(function() {
    if( $(this).attr("id") != "edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-4"
      && $(this).attr("id") != "edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48"
      && $(this).attr("id") != "edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-49"){
      calculate_fee();
      //console.log( $(this).attr("id") );
    }
  });
  // si otra cuota se rellenar
  $(".otra_cuota").focusout(function(){
    calculate_fee();
  });
  // si la periodicidad cambia
  $(".frecuencia").change(function(){
    calculate_fee();
  });



});
