  /* JS especifico para la ponderación de las cantidades de las cuotas en función de la periodicidad*/

jQuery(function($) {
$(".frecuencia").change( function() {
  //alert('test');
    switch($('input[type="button"] .selectButton-input, .value-selected').attr('id')){
      case '12': //Mensual
        //Value
        jQuery(function($) {
          var num_nodos = $(".payamount-slide").toArray().length;
          num_nodos--;
          $(".payamount-slide").each(function(){

                if (num_nodos == 3){
                  $(this).find(".payamount-input").attr('id', 9);
                  $(this).find(".payamount-input").attr('name', 9);
                  $(this).find(".payamount-input").val('9 €');
                }else if (num_nodos == 2){
                  $(this).find(".payamount-input").attr('id', 12);
                  $(this).find(".payamount-input").attr('name', 12);
                  $(this).find(".payamount-input").val('12 €');
                }else if (num_nodos == 1){
                  $(this).find(".payamount-input").attr('id', 25);
                  $(this).find(".payamount-input").attr('name', 25);
                  $(this).find(".payamount-input").val('25 €');
                }

                num_nodos--;
          });
        });

        break;

      case '4': //Trimestral
        //Value
        jQuery(function($) {
          var num_nodos = $(".payamount-slide").toArray().length;
          num_nodos--;
          $(".payamount-slide").each(function(){

                if (num_nodos == 3){
                  $(this).find(".payamount-input").attr('id', 20);
                  $(this).find(".payamount-input").attr('name', 20);
                  $(this).find(".payamount-input").val('20 €');
                }else if (num_nodos == 2){
                  $(this).find(".payamount-input").attr('id', 36);
                  $(this).find(".payamount-input").attr('name', 36);
                  $(this).find(".payamount-input").val('36 €');
                }else if (num_nodos == 1){
                  $(this).find(".payamount-input").attr('id', 50);
                  $(this).find(".payamount-input").attr('name', 50);
                  $(this).find(".payamount-input").val('50 €');
                }

                num_nodos--;
          });
        });

        break;

      case '1': //Anual
        //Value
        jQuery(function($) {
          var num_nodos = $(".payamount-slide").toArray().length;
          num_nodos--;
          $(".payamount-slide").each(function(){

                if (num_nodos == 3){
                  $(this).find(".payamount-input").attr('id', 70);
                  $(this).find(".payamount-input").attr('name', 70);
                  $(this).find(".payamount-input").val('70 €');
                }else if (num_nodos == 2){
                  $(this).find(".payamount-input").attr('id', 100);
                  $(this).find(".payamount-input").attr('name', 100);
                  $(this).find(".payamount-input").val('100 €');
                }else if (num_nodos == 1){
                  $(this).find(".payamount-input").attr('id', 120);
                  $(this).find(".payamount-input").attr('name', 120);
                  $(this).find(".payamount-input").val('120 €');
                }

                num_nodos--;
          });
        });
        break;
    }
});
});
