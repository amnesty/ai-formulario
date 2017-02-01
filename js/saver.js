/* Saves fields from the forms in the DB in order to do future actions */

jQuery(function($) {

  $(".email").focusout( function(){
    $.ajax({
      url: "/civicrm/sites/all/themes/ai-theme-civicrm/incomplete-saver/incomplete.php",
      type: 'POST',
      data: 'email='+$(this).val(),
      success: function(data) {
        alert(data);
      },
      error: function(e) {
        alert("Error: " + e.message);
      }
    })
  });

});
