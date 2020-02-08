$(document).ready(function(){
    var sel = document.createElement("select");

    var opt = document.createElement("option");
    $(opt).html("+");
    $(opt).val("plus");
    $(sel).append(opt);

    var opt = document.createElement("option");
    $(opt).html("-");
    $(opt).val("minus");
    $(sel).append(opt);

    var opt = document.createElement("option");
    $(opt).html("X");
    $(opt).val("multiply");
    $(sel).append(opt);

    var opt = document.createElement("option");
    $(opt).html("÷");
    $(opt).val("divide");
    $(sel).append(opt);

    var opt = document.createElement("option");
    $(opt).html("√");
    $(opt).val("squareroot");
    $(sel).append(opt);

    $("#ops").append(sel);
})