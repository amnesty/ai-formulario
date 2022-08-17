/**
 * Muestra las cuotas sugeridas que corresponden a la
 * periodicidad elegida.
 */

 jQuery(function($) {

  /* Cuotas */

  function frecuenciaSeleccionada() {
    if ($("select.frecuencia").length) {
      return $("select.frecuencia").val();
    } else {
      return $("input.frecuencia:checked").val();
    }
  }

  function cuotaActual() {
      let sugeridaSeleccionada = $("input.cuota_sugerida:visible:checked").val();

      if (sugeridaSeleccionada != 0) {
          return sugeridaSeleccionada;
      }
  }

  function controlaCuotasSugeridas() {
      let frecuencia = frecuenciaSeleccionada();
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

  if ($("select.frecuencia").length) {
    frecuencia = $("select.frecuencia");
  } else {
    frecuencia = $("input.frecuencia");
  }

  frecuencia.change(function() {
      controlaCuotasSugeridas();
      controlaOtraCuota();
  });

  controlaCuotasSugeridas();
  controlaOtraCuota();

  frecuencia.closest("form")
      .addClass("webform-conditional-processed");

  frecuencia.closest("form").parent()
      .addClass("content-form");
});

