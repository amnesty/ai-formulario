/**
 * Muestra las cuotas sugeridas que corresponden a la
 * periodicidad elegida.
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
});

