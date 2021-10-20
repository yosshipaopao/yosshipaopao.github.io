$(function(){
    $("#set_val").click(function(){
        $("#input").val("B");
        return false;
    });
    $("#set_attr").click(function(){
        $("#textbox").attr("value", "B");
        return false;
    });
});
