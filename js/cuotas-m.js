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

  function cuotaSugeridaActual() {
    let sugeridas = ".sugeridas_periodicidad_" + frecuenciaSeleccionada();
    return $(sugeridas).find("input.cuota_sugerida:checked").val();
  }

  function controlaCuotasSugeridas() {
      let frecuencia = frecuenciaSeleccionada();
      $(".cuotas").hide();
      $(`.sugeridas_periodicidad_${frecuencia}`).show();
  }

  function controlaOtraCuota() {
      let cuota = cuotaSugeridaActual();

      if (cuota == 0) {
          $("input.otra_cuota").val("");
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

