jQuery(function($) {

  /**
   * Unifica los campos de la cuenta IBAN en un campo de texto
   * y valida el IBAN, reemplazando los dígitos de control
   * por los correctos.
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

  function usaVariosCampos() {
    return country.length > 0;
  }

  function cuentaActual() {
    if (usaVariosCampos()) {
      return country.val() + sepa_check.val() + entity.val() + office.val() + es_check.val() + account.val();
    } else {
      return iban.val();
    }
  }

  function rellenaCampos(cuenta) {
    sepa_check.val(cuenta.substring(2, 4));
    entity.val(cuenta.substring(4, 8));
    office.val(cuenta.substring(8, 12));
    es_check.val(cuenta.substring(12, 14));
    account.val(cuenta.substring(14));
  }

  function anunciaError(hayError) {
    if( hayError ) {
      iban.addClass('error');
      sepa_check.addClass('error');
      entity.addClass('error');
      office.addClass('error');
      es_check.addClass('error');
      account.addClass('error');
    } else {
      iban.removeClass('error');
      sepa_check.removeClass('error');
      entity.removeClass('error');
      office.removeClass('error');
      es_check.removeClass('error');
      account.removeClass('error');
    }
  }

  function modulo (divident, divisor) {
    var cDivident = '';
    var cRest = '';

    for (var i in divident ) {
        var cChar = divident[i];
        var cOperator = cRest + '' + cDivident + '' + cChar;

        if ( cOperator < parseInt(divisor) ) {
                cDivident += '' + cChar;
        } else {
                cRest = cOperator % divisor;
                if ( cRest == 0 ) {
                    cRest = '';
                }
                cDivident = '';
        }

    }
    cRest += '' + cDivident;
    if (cRest == '') {
        cRest = 0;
    }
    return cRest;
  }

  function calcularIBAN(codigoPais, ccc){
    var pesos = {
      A:10, B:11, C:12, D:13,
      E:14, F:15, G:16, H:17,
      I:18, J:19, K:20, L:21,
      M:22, N:23, O:24, P:25,
      Q:26, R:27, S:28, T:29,
      U:30, V:31, W:32, X:33,
      Y:34, Z:35
    };

    var dividendo = ccc+''+pesos[codigoPais.substring(0,1)]+''+pesos[codigoPais.substring(1,2)]+'00';
    var resto = modulo(dividendo,97);
    var digitoControl =  (98 - resto);

    if( digitoControl < 10 ) {
      digitoControl = '0'+digitoControl;
    }

    return codigoPais+''+digitoControl+''+ccc;
  }

  $('.iban input, .iban select').change(function () {
    var actual = cuentaActual();

    if (usaVariosCampos()) {
      iban.val(actual);
    }

    if (actual.length != 24) {
      return;
    }

    var calculado = calcularIBAN(
      actual.substring(0, 2),
      actual.substring(4)
    );

    if (actual != calculado) {
      anunciaError(true);
      return;
    }

    anunciaError(false);

    if (ibanContacto.length) {
      ibanContacto.val(calculado);
    }
  });

  // Al cargar la página, nos aseguramos de cargar los campos
  // de la cuenta IBAN a partir del campo unificado

  // Esto da soporte a la carga del formulario con errores de
  // validación encontrados por el servidor

  if(usaVariosCampos() && iban.val() != '') {
    rellenaCampos(iban.val());
  }

  anunciaError(iban.hasClass('error'));
});
