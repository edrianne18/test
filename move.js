$(document).ready(function(){
    $(document).keydown(function(e){
        switch(e.which){
            case 37:
                $('#A').css('left',
                    $('#A')[0].offsetLeft-10);
                break;
            case 38:
                $('#A').css('up',
                    $('#A')[0].offsetUp+10);
                break;
            case 39:
                $('#A').css('right',
                    $('#A')[0].offsetRight-10);
                break;
            case 40:
                $('#A').css('down',
                    $('#A')[0].offsetDown-10);
                break;
        }
    });
});