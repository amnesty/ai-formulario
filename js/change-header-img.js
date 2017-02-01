// Foto de cabecera dinámica

jQuery(function($) {

  var header = ($("[name='submitted[foto]']").val() || cabecera );
  //alert(header);
  if(header && header != ""){
    $(".responsive--bg").css("background-image","url("+header+"?anchor=topcentre)");
  }

});
