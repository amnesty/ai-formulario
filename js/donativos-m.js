// URL Vars
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

jQuery(function($) {
  // url
  var url = window.location.pathname;

  // Origenes
  var cat_source = "ut01";
  var get_source = getUrlVars()["origen"];
  var get_campaign = getUrlVars()["pk_campaign"];
  var get_kw = getUrlVars()["pk_kwd"];
  var get_suborigen = getUrlVars()["caso"];
  var contrib_source_input = $( "[name='submitted[civicrm_1_contribution_1_cg21_custom_104]']");
  var contrib_kw_input = $( "[name='submitted[civicrm_1_contribution_1_cg21_custom_103]']");
  var contrib_suborigen_input = $( "[name='submitted[civicrm_1_contribution_1_cg21_custom_109]']");

  // origen
  if( get_source != '' && get_source ){ // origen
    contrib_source_input.val(get_source);
  }
  else if(url.indexOf("/cat") > -1){ // AmnistiaCAT
    contrib_source_input.val(cat_source);
  }
  else if( get_campaign != '' && get_campaign ){ //pk_campaign
    contrib_source_input.val(get_campaign);
  }
  /*else {
  contrib_source_input.val('web');
}*/
// pk_kwd
if( get_kw != '' && get_kw ){
  contrib_kw_input.val(get_kw);
}
else if( get_suborigen != '' && get_suborigen ){ //suborigen
  contrib_suborigen_input.val(get_suborigen);
}

/* OTRA CANTIDAD */

// Show or hide/erase "other quantity" field depending on which checkbox is checked
$(".cuota").hide();
$(".otra-cantidad").blur(function() {
  $(".cuota").val($(".otra-cantidad").val());
});


// CIF: borrar nombre y cambiar placeholder
if($(".tipo_documento option:selected").val()=='cif'){
  $(".nombre").attr("placeholder", "Nombre de la entidad *");
  $(".content-datos").addClass("cif");
}
$(".tipo_documento").change( function() {
  if($(".tipo_documento option:selected").val()=='cif'){
    $(".nombre").val('');
    $(".primer-apellido").val('');
    $(".segundo-apellido").val('');
    $(".nombre").attr("placeholder", "Nombre de la entidad *");
    $(".content-datos").addClass("cif");
  }
  else {
    $(".nombre").val('');
    $(".nombre").attr("placeholder", "Nombre *");
    $(".content-datos").removeClass("cif");
  }
});

})
