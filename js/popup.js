// ********* Pop-ups antes de cerrar y por inactividad ************

jQuery(function($) {

  // Pop-up al abandonar

  $(document).ready(function () {
    $(window).on('beforeunload', function(evt){
      var message = '¿Seguro que quieres abandonar esta página? Si has encontrado algún problema al rellenar el formulario, llámanos al 913 101 277.';
      var e = (evt || window.event);
      e.returnValue = message;
      //e.stopPropagation();
      return message;
    });
    $(document).on("submit", "form", function(evt){
        $(window).off('beforeunload');
    });
  });

  // Pop-up pasado X tiempo

  var remindTimer;
  function callPopUp(){
      popup = alert('Hola, hace mucho rato que no blablabla');
      //setTimeout(waitPopUp, 8000);
  }
  function restartRemindTimer() {
      clearTimeout(remindTimer);
      remindTimer = setTimeout(callPopUp, 10000);
  }
  //$(document).on('mousemove keypress', restartRemindTimer);

});
