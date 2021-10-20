$(function(){
    $("#btn-submit").click(function(){
        $("#textbox").val("B");
        return false;
    });
    $("#set_attr").click(function(){
        $("#textbox").attr("value", "B");
        return false;
    });
});
