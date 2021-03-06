// URL Vars
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

jQuery(function($) {

    // ************** Origenes ****************

    var url = window.location.pathname;
    var cat_source = "ut01";
    var get_source = getUrlVars()["origen"];
    var get_campaign = getUrlVars()["pk_campaign"];
    var get_utm_campaign = getUrlVars()["utm_campaign"];
    var get_kwd = getUrlVars()["pk_kwd"];
    var get_utm_medium = getUrlVars()["utm_medium"];
    var get_utm_source = getUrlVars()["utm_source"];
    var get_content = getUrlVars()["pk_content"];
    var get_utm_content = getUrlVars()["utm_content"];
    var get_utm_term = getUrlVars()["utm_term"];
    var get_suborigen = getUrlVars()["caso"];

    var source_input = $( "[name='submitted[civicrm_1_contact_1_contact_source]']");
    var source_input2 = $( "[name='submitted[civicrm_1_contact_1_cg17_custom_50]']");
    var suborigen_input = $( "[name='submitted[civicrm_1_contact_1_cg17_custom_110]']");

    // origen
    if( get_source != '' && get_source ){ // origen
        source_input.val(get_source);

        // contrib_source if exists
        if( $("[name='submitted[civicrm_1_contribution_1_cg21_custom_104]']") ){
          var contrib_source_input = $( "[name='submitted[civicrm_1_contribution_1_cg21_custom_104]']");
          contrib_source_input.val(get_source);
        }
    }
    /*else if(url.indexOf("/cat") > -1){ // AmnistiaCAT
        source_input.val(cat_source);
    }*/
    else if( get_campaign != '' && get_campaign ){ //pk_campaign
        source_input.val(get_campaign);
    }
    else if( get_utm_campaign != '' && get_utm_campaign ){ // utm_campaign
        source_input.val(get_utm_campaign);
        source_input2.val(get_utm_campaign);
    }
    // pk-kwd
    var source_input = $( "[name='submitted[civicrm_1_contact_1_cg17_custom_55]']");
    if( get_kwd != '' && get_kwd ){
        source_input.val(get_kwd);
    }
    // utm-medium
    var source_input = $( "[name='submitted[civicrm_1_contact_1_cg17_custom_51]']");
    if( get_utm_medium != '' && get_utm_medium ){
        source_input.val(get_utm_medium);
    }
    // utm-source
    var source_input = $( "[name='submitted[civicrm_1_contact_1_cg17_custom_52]']");
    if( get_utm_source != '' && get_utm_source ){
        source_input.val(get_utm_source);
    }
    // pk-content y utm-content
    var source_input = $( "[name='submitted[civicrm_1_contact_1_cg17_custom_53]']");
    if( get_content != '' && get_content ){
        source_input.val(get_content);
    }
    else if( get_utm_content != '' && get_utm_content ){
        source_input.val(get_utm_content);
    }
    // utm-term
    var source_input = $( "[name='submitted[civicrm_1_contact_1_cg17_custom_54]']");
    if( get_utm_term != '' && get_utm_term ){
        source_input.val(get_utm_term);
    }

    //subcanal
    if( get_suborigen != '' && get_suborigen ){ //suborigen
        suborigen_input.val(get_suborigen);
    }

    /*********** Página de confirmación ***********/

    // Añadir parametro a URL para tracking a PREVIEW
  /*  var url = window.location.href;
    var get_params = "";
    // conservar los parámetros GET menos el de preview
    if(url.includes("?")){
      get_params = window.location.href.split("?")[1];
      if(get_params.includes("preview")){
        get_params = get_params.replace(/[&]?preview=1[&]?/g, "");
      }
    }
    var form = $('.webform-client-form');
    if( !form.hasClass('preview') ){
        form.submit( function() {
          form.attr("action",  window.location.pathname + '?preview=1' + (get_params != "" ? ('&' + get_params) : '') );
        });
    }
    else {
      form.submit( function() {
        form.attr("action",  window.location.pathname + (get_params != "" ? ('?' + get_params) : '') );
      });
    }

    // Añadir títulos a la página de preview
    if( $(".webform-client-form").first().hasClass("preview") ){
        // título confirma tus datos
        if(url.indexOf("/cat") > -1){
          $(".box-form-es").prepend("<h4 style='margin-top: 10px; margin-bottom: 20px; margin-left: 20px;'>¿Ens ajudes a confirmar que les teves dades són correctes?</h4>");
          $(".content-colaborar").prepend("<h2 style='margin-top: 15px; margin-bottom: 15px;'>Dades personals</h2>");
          $(".content-cuenta").prepend("<h2 style='margin-top: 15px; margin-bottom: 15px;'>Mètode de pagament</h2>");
        }else {
          $(".box-form-es").prepend("<h4 style='margin-top: 10px; margin-bottom: 20px; margin-left: 20px;'>¿Nos ayudas a confirmar que tus datos son correctos?</h4>");
          $(".content-colaborar").prepend("<h2 style='margin-top: 15px; margin-bottom: 15px;'>Datos personales</h2>");
          $(".content-cuenta").prepend("<h2 style='margin-top: 15px; margin-bottom: 15px;'>Forma de pago</h2>");
        }

        $(".preview .element-invisible").each( function() {
                $(this).addClass('element-visible');
                $(this).toggleClass('element-invisible');
                $(this).append(': ');
        });

        $(".box-es-right").remove();
        $(".box-form-es").css("width", "100%");

    }*/

    // Scrolling the active block of fields

    /*if( $('.webform-client-form').hasClass('webform-conditional-processed') ){

        $(".content-colaborar").hover( function(){
            $(".caja-content").removeClass('active');
            $(this).addClass('active');

        });

        $(".content-colaborar").keyup( function(){
            $(".caja-content").removeClass('active');
            $(this).addClass('active');

        });

        $(".content-datos").hover( function(){
            $(".caja-content").removeClass('active');
            $(this).addClass('active');

        });

        $(".content-datos").keyup( function(){
            $(".caja-content").removeClass('active');
            $(this).addClass('active');

        });

        $(".content-direccion").hover( function(){
            $(".caja-content").removeClass('active');
            $(this).addClass('active');

        });

        $(".content-direccion").keyup( function(){
            $(".caja-content").removeClass('active');
            $(this).addClass('active');
        });

        $(".content-cuenta").hover( function(){
            $(".caja-content").removeClass('active');
            $(this).addClass('active');

        });

        $(".content-cuenta").keyup( function(){
            $(".caja-content").removeClass('active');
            $(this).addClass('active');

        });

    }
    else {
        $(".caja-content").removeClass('active');
    }

    // Cut option values in Profesion

    // first time
    $(".profesion option:selected").text(
      function(i,t){
          return t.length > ($(".profesion").width()/11) ? t.substr(0,25) + "..." : t;
      }
    );
    // When it changes
    $( ".profesion" ).change(function() {
      $(".profesion option:selected").text(
        function(i,t){
            return t.length > ($(".profesion").width()/11) ? t.substr(0,25) + "..." : t;
        }
      );
    });*/

    // Sort the countries
    $( document ).ready(function() {
      var options = $('.pais option');
      var selected = $('.pais option:selected').val();
      var arr = options.map(function(_, o) { return { t: $(o).text(), v: o.value }; }).get();
      arr.sort(function(o1, o2) { return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0; });
      options.each(function(i, o) {
        o.value = arr[i].v;
        $(o).text(arr[i].t);
      });
      $(".pais").val(selected);
    });

    // Province label
    //$('.provincia option[value=""]').text("-Provincia-");

    // Etiquetas de fecha de nacimiento
  /*  if(url.indexOf("/cat") > -1){ // AmnistiaCAT
      $('.day option[value=""]').text("Dia");
      $('.month option[value=""]').text("Mes");
      $('.year option[value=""]').text("Any");
    }*/

    // Make the IBAN fields to automatically move the cursor through when any field is fullfilled.

    $(".country").keyup( function(){
      if($(".country").val().length >= 2){
          $(".entity").focus();
      }
    });

    $(".entity").keyup( function(){
      if($(".entity").val().length >= 4){
          $(".office").focus();
      }
    });

    $(".office").keyup( function(){
      if($(".office").val().length >= 4){
          $(".check").focus();
      }
    });

    $(".check").keyup( function(){
      if($(".check").val().length >= 2){
          $(".account").focus();
      }
    });

    // Mark errors in select boxes

    $(".error").not(".messages").each( function(){
      if ($(this).is("select")){
          $(this).parent().addClass("form-error");
          $(this).parent().css("border", "#f00 2px solid");
      }
      else {
          $(this).css("border", "#f00 2px solid");
      }
    });

    // Cuenta entera en rojo
    if($('.account').hasClass('error') || $('.dc').hasClass('error') ){
            $('.entity').css("border", "#f00 2px solid");
            $('.office').css("border", "#f00 2px solid");
            $('.dc').css("border", "#f00 2px solid");
            $('.account').not(".first").css("border", "#f00 2px solid");
    }

  /*  $('a.popup').colorbox({iframe:true, width:"50%", height:"50%"});
    $('a.popup_little').colorbox({iframe:true, width:"50%", height:"20%", "scrolling":false});

    // popups colorbox
    function refresh_popups(){
        var y = $('.cboxIframe html').height();
        $('a.popup_little').resize({ width:"50%", height:y });
    }*/

    // 0 del DNI
    $('.number-dni').first().focusout(function(){
        var dni = String($(this).val());
        if(dni.substring(0,1)=='0'){
            $(this).val(dni.substring(1));
        }
    });

    // Redes sociales

/*    function share(title, summary, url, image) {
        //var sharer="https://www.facebook.com/sharer/sharer.php?u=example.org";
        window.open(
            'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(url)
            + '&t=' + encodeURIComponent(title),
            'accionafacebook',
            'width=800,height=600,scrollbars=yes,menubar=yes,resizable=yes,location=yes'
        );
    }
    $(".ai-accion-firma-compartir__facebook").each(function() {
        var n = $(this),
            i = n.data("ai-share-url") || urlActualFB,
            a = n.data("ai-share-title") || tituloActual,
            s = n.data("ai-share-summary-html") || resumen,
            l = n.data("ai-share-image") || imagen;
        n.click(function() {
            return share(a, s, i, l), !1
        });
    });

    function tw(e, t, v) {
        window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(e) + "&url=" + encodeURIComponent(t) + "&via=" + encodeURIComponent(v), "accionatwitter", "width=800,height=600,scrollbars=yes,menubar=yes,resizable=yes,location=yes")
    }
    $(".ai-accion-firma-compartir__twitter").each(function() {
        var n = $(this),
            r = n.data("ai-share-url") || urlActualTW,
            o = n.data("ai-share-summary-html") || tituloActual,
            v = n.data("ai-share-via") || compartirViaTW;
            n.click(function() {
                return tw(o, r, v), !1
            });
    });

    // Si no existe box-es-right, entonces box-form-es mide 100% de ancho
    if( $(".box-es-right").length == 0 ){
      $(".box-form-es").css("width", "100%");
    }*/

    /* Formato type number para los campos numéricos*/
    $('.otra_cantidad').attr('type', 'number');
    $('.telefono').attr('type', 'number');
    $('.country').attr('type', 'number');
    $('.entity').attr('type', 'number');
    $('.office').attr('type', 'number');
    $('.dc').attr('type', 'number');
    $('.ncuenta').attr('type', 'number');
    $('.cp').attr('type', 'number');

    /* OTRA CANTIDAD */

    // Show or hide/erase "other quantity" field depending on which checkbox is checked
    $(".cuota").hide();
    $("#payamount-edit-submitted-listadocantidades").click(function(){
        $(".otra_cuota").val('');
        $(".otra_cantidad").val('');
    });
    $(".otra_cuota").blur(function(){
        $(".cuota").val(0);
    });

    //Marcar € en caja Otra cantidad
    $(".otra_cantidad").blur(function(){
    if ($('.otra_cantidad').val() != '') {
      $(".cuota").val(0);
      $('.otra_cuota').val($('.otra_cantidad').val());
    }});
    // Otra cantidad copiada en cantidad oculta
    //var cantidad = $("[name='submitted[caja_colaborar][fieldset_fila_1_0][civicrm_1_contact_1_cg15_custom_101]']");
    //var cantidad = $("#edit-submitted-caja-colaborar-fieldset-fila-1-0-civicrm-1-contact-1-cg15-custom-101h"); /* local */
    /*$(".otra_cuota").keyup(function(){
      var otrac = $(".otra_cuota").val();
      //console.log(otrac);
      cantidad.val(otrac);
    });
    $(".otra_cuota").focusout(function(){
      var otrac = $(".otra_cuota").val();
      //console.log(otrac);
      cantidad.val(otrac);
    });*/

})
