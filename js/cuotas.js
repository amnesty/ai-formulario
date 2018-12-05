/* JS especifico para la ponderación de las cantidades de las cuotas en función de la periodicidad*/

jQuery(function($) {

  var class_id = 1;
   var num_cuotas = $(".form-item-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48").length;
   $(".form-item-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-48").each(function(){
     //marcamos todas las cuotas con un class específico menos la última que es "otra cantidad" que siempre se tiene que mostrar
     if (class_id < num_cuotas){
         $(this).find(".cuota").addClass("cuota-"+class_id);
         $(this).find(".option").addClass("cuota-"+class_id);
     }
     class_id++;
   });


  //Por defecto marcamos 12€
  /*$(".cuota-2").prop("checked",true);*/

  // Por defecto mostramos solo las cuotas mensuales
  $('.cuota-1').show();
  $('.cuota-2').show();
  $('.cuota-3').show();
  $('.cuota-4').hide();
  $('.cuota-5').hide();
  $('.cuota-6').hide();
  $('.cuota-7').hide();
  $('.cuota-8').hide();
  $('.cuota-9').hide();
  $('.cuota-10').hide();
  $('.cuota-11').hide();
  $('.cuota-12').hide();
  $('.cuota-13').hide();
  $('.cuota-14').hide();
  $('.cuota-15').hide();

  $(".frecuencia").change( function() {

    // Escondemos "otra cantidad" por si acaso porque por defecto marcamos la opción del medio
    $('.capa-other-quant').hide();

    switch($(".frecuencia").val()){
      case '12': //Mensual

      //Valor por defecto
      $(".cuota-2").prop("checked",true);

      $('.cuota-1').show();
      $('.cuota-2').show();
      $('.cuota-3').show();
      $('.cuota-4').hide();
      $('.cuota-5').hide();
      $('.cuota-6').hide();
      $('.cuota-7').hide();
      $('.cuota-8').hide();
      $('.cuota-9').hide();
      $('.cuota-10').hide();
      $('.cuota-11').hide();
      $('.cuota-12').hide();
      $('.cuota-13').hide();
      $('.cuota-14').hide();
      $('.cuota-15').hide();

      break;

      case '6': //Bimestral

      //Valor por defecto
      $(".cuota-5").prop("checked",true);

      $('.cuota-1').hide();
      $('.cuota-2').hide();
      $('.cuota-3').hide();
      $('.cuota-4').show();
      $('.cuota-5').show();
      $('.cuota-6').show();
      $('.cuota-7').hide();
      $('.cuota-8').hide();
      $('.cuota-9').hide();
      $('.cuota-10').hide();
      $('.cuota-11').hide();
      $('.cuota-12').hide();
      $('.cuota-13').hide();
      $('.cuota-14').hide();
      $('.cuota-15').hide();

      break;

      case '4': //Trimestral

      //Valor por defecto
      $(".cuota-8").prop("checked",true);

      $('.cuota-1').hide();
      $('.cuota-2').hide();
      $('.cuota-3').hide();
      $('.cuota-4').hide();
      $('.cuota-5').hide();
      $('.cuota-6').hide();
      $('.cuota-7').show();
      $('.cuota-8').show();
      $('.cuota-9').show();
      $('.cuota-10').hide();
      $('.cuota-11').hide();
      $('.cuota-12').hide();
      $('.cuota-13').hide();
      $('.cuota-14').hide();
      $('.cuota-15').hide();

      break;

      case '2': //Semestral

      //Valor por defecto
      $(".cuota-11").prop("checked",true);


      $('.cuota-1').hide();
      $('.cuota-2').hide();
      $('.cuota-3').hide();
      $('.cuota-4').hide();
      $('.cuota-5').hide();
      $('.cuota-6').hide();
      $('.cuota-7').hide();
      $('.cuota-8').hide();
      $('.cuota-9').hide();
      $('.cuota-10').show();
      $('.cuota-11').show();
      $('.cuota-12').show();
      $('.cuota-13').hide();
      $('.cuota-14').hide();
      $('.cuota-15').hide();

      break;

      case '1': //Anual

      //Valor por defecto
      $(".cuota-14").prop("checked",true);

      $('.cuota-1').hide();
      $('.cuota-2').hide();
      $('.cuota-3').hide();
      $('.cuota-4').hide();
      $('.cuota-5').hide();
      $('.cuota-6').hide();
      $('.cuota-7').hide();
      $('.cuota-8').hide();
      $('.cuota-9').hide();
      $('.cuota-10').hide();
      $('.cuota-11').hide();
      $('.cuota-12').hide();
      $('.cuota-13').show();
      $('.cuota-14').show();
      $('.cuota-15').show();

      break;
    }
  });

});
