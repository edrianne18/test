$(document).ready(function(){
    var sel = document.createElement("select");
    var opt = document.createElement("option");
    $(opt).html("+");
    $(opt).val("plus");
    $(sel).append(opt);
    $("#ops").append(sel);
})