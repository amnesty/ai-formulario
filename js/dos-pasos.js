// ************* Formulario en dos pasos ************

jQuery(function($) {

  if($(".content-colaborar").hasClass("primer-paso")){
    $(".webform-next").addClass("webform-next-dos-pasos");
  }

  if($(".content-direccion").hasClass("segundo-paso")){
    $(".webform-next").addClass("webform-next-dos-pasos-2");
    $(".webform-previous").addClass("webform-previous-dos-pasos-2");
  }

});
