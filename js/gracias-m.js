function $_GET(param) {
  var vars = {};
  window.location.href.replace( location.hash, '' ).replace(
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
    function( m, key, value ) { // callback
      vars[key] = value !== undefined ? value : '';
    }
  );
  if ( param ) {
    return vars[param] ? vars[param] : null;
  }
  return vars;
}

function Array(param) {
  var vars = {};
  window.location.href.replace( location.hash, '' ).replace(
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
    function( m, key, value ) { // callback
      vars[key] = value !== undefined ? value : '';
    }
  );
  if ( param ) {
    return vars[param] ? vars[param] : null;
  }
  return vars;
}


jQuery(function($) {
  var cd1 = $_GET("cid1");
  $('.form-actions').show();
  if (cd1 == null){
    $('.form-actions').hide();
  }

  $('.heading--tape--dark').hide();
  var cd1 = Array("cid1");
  $('.form-actions').show();
  if (cd1 == null){
    $('.form-actions').hide();
  }
})
