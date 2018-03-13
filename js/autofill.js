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
    $(".capa-fechas .day").val($nacimiento[0]);
    $(".capa-fechas .month").val($nacimiento[1]);
    $(".capa-fechas .year").val($nacimiento[2]);
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
  if((urlVars['revista']) == 'no'){
    $(".revista .form-item:nth-child(2) input").attr("checked", true);
  }
  else if((urlVars['revista']) == 'si'){
    $(".revista .form-item:nth-child(1) input").attr("checked", true);
  }

  // No llamar
  if((urlVars['no-llam']) == 'si'){
    $(".pref-com .form-item:nth-child(1) input").attr("checked", true);
  }

  /* Para subida de cuota */
  if(urlVars['resultado'] != 'POSITIVO' ){
    $(".resultado .form-item:nth-child(2) input").attr("checked", true);
  }
  else {
    $(".resultado .form-item:nth-child(1) input").attr("checked", true);
  }

  // pvkey
  if((urlVars['pvkey'])){
    $("[name='submitted[civicrm_1_contact_1_cg9_custom_21]']").val(urlVars['pvkey']);
  }

  // memkey
  if((urlVars['memkey'])){
    $("[name='submitted[civicrm_1_contact_1_cg9_custom_38]']").val(urlVars['memkey']);
  }
  else {
    $("[name='submitted[civicrm_1_contact_1_cg9_custom_38]']").val(0);
  }

  // cnkey
  if((urlVars['cnkey'])){
    $("[name='submitted[civicrm_1_activity_1_cg22_custom_105]']").val(urlVars['cnkey']);
  }
  else {
    $("[name='submitted[civicrm_1_activity_1_cg22_custom_105]']").val(0);
  }

  // Outcome
  if( urlVars['outcome'] ){
    var outcome = urlVars['outcome'];

    switch(outcome){
      case 'C':
        $(".outcome .form-item:nth-child(1) input").attr("checked", true);
        break;
      case 'NC':
        $(".outcome .form-item:nth-child(2) input").attr("checked", true);
        break;
      case 'ILOCAL':
        $(".outcome .form-item:nth-child(3) input").attr("checked", true);
        break;
      case 'TEL_ERR':
        $(".outcome .form-item:nth-child(4) input").attr("checked", true);
        break;
    }
  }

  // Motivo
  if( urlVars['motivo'] ){
    $(".motivo").val(urlVars['motivo']);
  }

  //$(".check-politica").attr("checked", false);

});
