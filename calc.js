$(document).ready(function() {
    $('.calc_button').click(function() {
      var current = ("$da_display").val();
      $("$da_display").val(current + $(this).text());
    });
});