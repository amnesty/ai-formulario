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
console.log("Cuota");
console.log(cuota);
      if (!cuota) {
//          $("input.otra_cuota").val("");
          $("input.otra_cuota").parent().show();
      } else {
          $("input.otra_cuota").val(cuota);
          $("input.otra_cuota").parent().hide();
      }
  }

  $("input.cuota_sugerida").change(function() {
      controlaOtraCuota();
  });

  $("input.cuota_manual").change(function() {
      $("input.otra_cuota").val(this.val());
  });

  if ($("select.frecuencia").length) {
    frecuencia = $("select.frecuencia");
  } else {
    frecuencia = $("input.frecuencia");
  }
 
  function cleanRadiosAndSelectDefault(frec) {
      $('input.cuota_sugerida').prop('checked',false);
      
      if (frec === 1) { 
         $('#edit-submitted-caja-colaborar-fieldset-fila-1-0-cuota-sugerida-anual-2').prop('checked',true); 
      }
      if (frec === 4) { 
         $('#edit-submitted-caja-colaborar-fieldset-fila-1-0-cuota-sugerida-trimestral-2').prop('checked',true);
      }
      if (frec === 6) { 
         $('#edit-submitted-caja-colaborar-fieldset-fila-1-0-cuota-sugerida-bimestral-2').prop('checked',true);
      }
      if (frec === 12) { 
         $('#edit-submitted-caja-colaborar-fieldset-fila-1-0-cuota-sugerida-mensual-2').prop('checked',true); 
      }
      if (frec === 2) {
         $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-cuota-sugerida-semestral-2").prop("checked",true);
      }
      $("input.otra_cuota").parent().hide();
  }

  frecuencia.change(function() {
      cleanRadiosAndSelectDefault(parseInt($(this).val()));
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

