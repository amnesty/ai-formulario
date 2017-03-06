/***************************************
**** Auto rellenado de datos via JS ****
****************************************/

// URL Vars
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

jQuery(function($) {

  // Rellena a partir de parámetros GET
  var urlVars = getUrlVars();

  // Cuota
  /*$("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-1").attr("checked", false);
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-2").attr("checked", false);
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-3").attr("checked", false);
  $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48-4").attr("checked", true);
  $(".otra_cuota").attr("disabled", false);
  $(".otra_cuota").attr("enabled", true);
  $(".capa-other-quant").css("display", "block");
  $(".otra_cuota").css("display", "block");*/
  if((urlVars['cuota'])){
    $(".otra_cuota").val(urlVars['cuota']);
  }
  if((urlVars['frec'])){
    $(".frecuencia").val(urlVars['frec']);
  }

  if((urlVars['inicio-pagos'])){
    $inicio = urlVars['inicio-pagos'].split("-");
    $(".inicio-pagos .day").val($inicio[0]);
    $(".inicio-pagos .month").val($inicio[1]);
    $(".inicio-pagos .year").val($inicio[2]);
  }

  // Datos Personales
  if((urlVars['nombre'])){
    $(".nombre").val(decodeURIComponent(urlVars['nombre']));
  }
  if((urlVars['apellido1'])){
    $(".primer-apellido").val(decodeURIComponent(urlVars['apellido1']));
  }
  if((urlVars['apellido2'])){
    $(".segundo-apellido").val(decodeURIComponent(urlVars['apellido2']));
  }
  if((urlVars['tipo-doc'])){
    $(".tipo_documento").val(urlVars['tipo-doc']);
  }
  if((urlVars['num-doc'])){
    $(".number-dni").val(urlVars['num-doc']);
  }
  if((urlVars['genero'])){
    $(".genero").val(urlVars['genero']);
  }
  if((urlVars['email'])){
    $(".email").val(decodeURIComponent(urlVars['email']));
  }
  if((urlVars['telefono'])){
    $(".mobile").val(urlVars['telefono']);
  }
  if((urlVars['idioma'])){
    $(".language").val(urlVars['idioma']);
  }
  if((urlVars['profesion'])){
    $(".profesion").val(urlVars['profesion']);
  }
  if((urlVars['nacimiento'])){
    $nacimiento = urlVars['nacimiento'].split("-");
    $(".nacimiento .day").val($nacimiento[0]);
    $(".nacimiento .month").val($nacimiento[1]);
    $(".nacimiento .year").val($nacimiento[2]);
  }

  // Dirección
  if((urlVars['tipo-via'])){
    $(".tipo-via").val(urlVars['tipo-via']);
  }
  if((urlVars['nombre-via'])){
    $(".nombre-via").val(decodeURIComponent(urlVars['nombre-via']));
  }
  if((urlVars['dir-add'])){
    $(".numero-bloque").val(decodeURIComponent(urlVars['dir-add']));
  }
  if((urlVars['cp'])){
    $(".postal").val(urlVars['cp']);
  }
  if((urlVars['poblacion'])){
    $(".poblacion").val(decodeURIComponent(urlVars['poblacion']));
  }
  if((urlVars['provincia'])){
    $(".provincia").val(urlVars['provincia']);
  }
  if((urlVars['pais'])){
    $(".pais").val(urlVars['pais']);
  }

  // Cuenta corriente
  if((urlVars['iban-letras'])){
    $(".iban-letras").val(urlVars['iban-letras']);
  }
  if((urlVars['iban-numero'])){
    $(".iban-numero").val(urlVars['iban-numero']);
  }
  if((urlVars['entidad'])){
    $(".entidad").val(urlVars['entidad']);
  }
  if((urlVars['oficina'])){
    $(".oficina").val(urlVars['oficina']);
  }
  if((urlVars['dc'])){
    $(".dc").val(urlVars['dc']);
  }
  if((urlVars['cuenta'])){
    $(".ncuenta").val(urlVars['cuenta']);
  }

  // donativo
  if((urlVars['donativo'])){
    $(".donativo").val(urlVars['donativo']);
  }

  // revista en papel
  if((urlVars['revista']) == 'si'){
    $("#edit-submitted-caja-donativo-fila-2-revista-civicrm-1-contact-1-cg10-custom-22-1").attr("checked", true);
  }
  else if((urlVars['revista']) == 'no'){
    $("#edit-submitted-caja-donativo-fila-2-revista-civicrm-1-contact-1-cg10-custom-22-2").attr("checked", true);
  }

  // No llamar
  if((urlVars['no-llam']) == 'si'){
    $("#edit-submitted-caja-donativo-fila-2-revista-civicrm-1-contact-1-contact-privacy-1").attr("checked", true);
  }

  /* Para subida de cuota */
  if(!(urlVars['cuota'])){
      $("#edit-submitted-caja-colaborar-fila-1-estado-civicrm-1-activity-1-cg22-custom-108-1").attr("checked", true);
  }
  else {
      $("#edit-submitted-caja-colaborar-fila-1-estado-civicrm-1-activity-1-cg22-custom-108-2").attr("checked", true);
  }



  // pvkey
  if((urlVars['pvkey'])){
    $("[name='submitted[civicrm_1_contact_1_cg9_custom_21]']").val(urlVars['pvkey']);
  }
  // memkey
  if((urlVars['memkey'])){
    $("[name='submitted[civicrm_1_contact_1_cg9_custom_38]']").val(urlVars['memkey']);
  }
  // cnkey
  if((urlVars['cnkey'])){
    $("[name='submitted[civicrm_1_activity_1_cg22_custom_105]']").val(urlVars['cnkey']);
  }
  // Outcome
  if( outcome = urlVars['outcome'] ){
    switch(outcome){
      case 'C':
        $("#edit-submitted-caja-donativo-fila-1-estado-civicrm-1-activity-1-cg22-custom-106-1").attr("checked", true);
        break;
      case 'NC':
        $("#edit-submitted-caja-donativo-fila-1-estado-civicrm-1-activity-1-cg22-custom-106-2").attr("checked", true);
        break;
      case 'ILOCAL':
        $("#edit-submitted-caja-donativo-fila-1-estado-civicrm-1-activity-1-cg22-custom-106-3").attr("checked", true);
        break;
      case 'TEL_ERR':
        $("#edit-submitted-caja-donativo-fila-1-estado-civicrm-1-activity-1-cg22-custom-106-4").attr("checked", true);
        break;
    }
  }

  // Motivo
  if( outcome = urlVars['motivo'] ){
    $("#edit-submitted-caja-donativo-fila-1-estado-civicrm-1-activity-1-cg22-custom-107").val(urlVars['motivo']);
  }

  // Política desactivada por defecto
  //$(".check-politica").attr("checked", false);

});
