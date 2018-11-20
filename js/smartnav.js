$(function(){
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getsitenav",
        dataType: "json",
        success: function (res) {
            var obj = {
                'list':res.result
            }
           var html = template('smartnav',obj)
           $(".main_content").html(html);
        }
    });
})