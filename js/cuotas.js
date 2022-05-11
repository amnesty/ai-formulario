/**
 * JS especifico para la ponderación de las cantidades de las cuotas
 * en función de la periodicidad y para la unión de las partes de
 * una cuenta IBAN en un único campo.
 */

 jQuery(function($) {

  /* Cuotas */

  function cuotaActual() {
      let sugeridaSeleccionada = $("input.cuota_sugerida:visible:checked").val();

      if (sugeridaSeleccionada != 0) {
          return sugeridaSeleccionada;
      }
  }

  function controlaCuotasSugeridas() {
      let frecuencia = $("select.frecuencia").val();

      $(".cuotas").hide();
      $(`.sugeridas_periodicidad_${frecuencia}`).show();
  }

  function controlaOtraCuota() {
      let cuota = cuotaActual();

      if (!cuota) {
          $("input.otra_cuota").parent().show();
      } else {
          $("input.otra_cuota").val(cuota);
          $("input.otra_cuota").parent().hide();
      }
  }

  $("input.cuota_sugerida").change(function() {
      controlaOtraCuota();
  });

  $("select.frecuencia").change(function() {
      controlaCuotasSugeridas();
      controlaOtraCuota();
  });

  controlaCuotasSugeridas();
  controlaOtraCuota();

  $("select.frecuencia").closest("form")
      .addClass("webform-conditional-processed");

  $("select.frecuencia").closest("form").parent()
      .addClass("content-form");

  /* Cuenta bancaria */

  function cuentaActual()
  {
      return $('.iban [name$="[iban_pais]"]').val() +
          $('.iban [name$="[iban_digitoscontrol_sepa]"]').val() +
          $('.iban [name$="[iban_entidad_bancaria]"]').val() +
          $('.iban [name$="[iban_oficina_bancaria]"]').val() +
          $('.iban [name$="[iban_digitoscontrol_es]"]').val() +
          $('.iban [name$="[iban_cuenta]"]').val();
  }

  $('.iban input, .iban select').change(function () {
      let iban = cuentaActual();
      $('.iban [name$="[civicrm_1_membership_1_membership_custom_128]"]').val(iban);
  });

  if (cuentaActual().length == 2) {
      let cuenta = $('.iban [name$="[civicrm_1_membership_1_membership_custom_128]"]').val();

      $('.iban [name$="[iban_digitoscontrol_sepa]"]').val(cuenta.substring(2, 4));
      $('.iban [name$="[iban_entidad_bancaria]"]').val(cuenta.substring(4, 8));
      $('.iban [name$="[iban_oficina_bancaria]"]').val(cuenta.substring(8, 12));
      $('.iban [name$="[iban_digitoscontrol_es]"]').val(cuenta.substring(12, 14));
      $('.iban [name$="[iban_cuenta]"]').val(cuenta.substring(14));
      $('.iban [name$="[iban_digitoscontrol_sepa]"]').val(cuenta.substring(2, 4));
  }
});




