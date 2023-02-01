/***************************************
**** Auto rellenado de datos via JS ****
****************************************/

/* Funcion que decodifica caracteres de la URL */
function decode_url(url){
   url = url.replace(/%D1/g,'Ñ');
   url = url.replace(/%AA/g,'ª');
   url = url.replace(/%F1/g,'ñ');
   url = url.replace(/%BA/g,'º');
   url = url.replace(/%C1/g,'Á');
   url = url.replace(/%E1/g,'á');
   url = url.replace(/%C9/g,'É');
   url = url.replace(/%E9/g,'é');
   url = url.replace(/%CD/g,'Í');
   url = url.replace(/%ED/g,'í');
   url = url.replace(/%D3/g,'Ó');
   url = url.replace(/%F3/g,'ó');
   url = url.replace(/%DA/g,'Ú');
   url = url.replace(/%FA/g,'ú');
   url = url.replace(/%D2/g,'Ò');
   url = url.replace(/%F2/g,'ò');
   url = url.replace(/%C8/g,'È');
   url = url.replace(/%E8/g,'è');
   url = url.replace(/%C0/g,'À');
   url = url.replace(/%E0/g,'à');
   url = url.replace(/%E7/g,'ç');
   url = url.replace(/%C7/g,'Ç');
   return url;
}

// URL Vars
function getUrlVars() {
    var url = decode_url(decodeURIComponent(window.location.href));
    var vars = {};
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
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
  if((urlVars['resultado'] != 'POSITIVO') || !(urlVars['cuota']) && !(urlVars['donativo']) ){
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

  // f2f agencias externas

  // Interes en Activista
  if(urlVars['interes_act'] == 'si'){
    $("[name='submitted[opciones][civicrm_5_activity_1_activity_activity_type_id][196]']").attr("checked",true);
  }

  // Interés en Libertad de expresión
  if((urlVars['interes_lde']) == 'si'){
    $("[name='submitted[opciones][civicrm_2_activity_1_activity_activity_type_id][195]']").attr("checked",true);
  }

  // Interés en Derechos Sociales y Culturales 
  if((urlVars['interes_desc']) == 'si'){
    $("[name='submitted[opciones][civicrm_4_activity_1_activity_activity_type_id][195]']").attr("checked",true);
  }

  // Interés en Feminismo y Género 
  if((urlVars['interes_fem']) == 'si'){
    $("[name='submitted[opciones][civicrm_3_activity_1_activity_activity_type_id][195]']").attr( "checked",true);
  }

});
