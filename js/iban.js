jQuery(function($) {

  /**
   * Unifica los campos de la cuenta IBAN en un campo de texto.
   *
   * A partir de los campos con nombre:
   *
   * - iban_pais
   * - iban_digitoscontrol_sepa
   * - iban_entidad_bancaria
   * - iban_oficina_bancaria
   * - iban_digitoscontrol_es
   * - iban_cuenta
   *
   * Se actualiza el campo personalizado IBAN de las membresías:
   *
   * - custom_128
   *
   * (o de las contribuciones, si es el caso):
   *
   * - custom_136
   *
   * La funcionalidad solo se aplica si los campos tienen un
   * ancendiente con la clase `iban`.
   */

  var iban = $('.iban [name$="[civicrm_1_membership_1_membership_custom_128]"]');

  if (!iban.length) {
    iban = $('.iban [name$="[civicrm_1_contribution_1_cg25_custom_136]"]');
  }

  var ibanContacto = $('.iban [name$="[civicrm_1_contact_1_cg2_custom_174]"]');

  var country = $('.iban [name$="[iban_pais]"]');
  var sepa_check = $('.iban [name$="[iban_digitoscontrol_sepa]"]');
  var entity = $('.iban [name$="[iban_entidad_bancaria]"]');
  var office = $('.iban [name$="[iban_oficina_bancaria]"]');
  var es_check = $('.iban [name$="[iban_digitoscontrol_es]"]');
  var account = $('.iban [name$="[iban_cuenta]"]');
 
  function cuentaActual()
  {
    return country.val() +
      sepa_check.val() +
      entity.val() +
      office.val() +
      es_check.val() +
      account.val();
  }

  $('.iban input, .iban select').change(function () {
    iban.val(cuentaActual());

    if (ibanContacto.length) {
	ibanContacto.val(cuentaActual());
    }
  });

  // Al cargar la página, nos aseguramos de cargar los campos
  // de la cuenta IBAN a partir del campo unificado

  // Esto da soporte a la carga del formulario con errores de
  // validación encontrados por el servidor

  if( cuentaActual().length == 2 ) {
    let cuenta = iban.val();

    country.val(cuenta.substring(0, 2));
    sepa_check.val(cuenta.substring(2, 4));
    entity.val(cuenta.substring(4, 8));
    office.val(cuenta.substring(8, 12));
    es_check.val(cuenta.substring(12, 14));
    account.val(cuenta.substring(14));      
  }

  if( iban.hasClass('error') ) {
    country.addClass('error');
    sepa_check.addClass('error');
    entity.addClass('error');
    office.addClass('error');
    es_check.addClass('error');
    account.addClass('error');
  }
});
