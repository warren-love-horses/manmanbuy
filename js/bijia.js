$(function(){
   
    $.ajax({
        type:'get',
        url:'http://193.112.55.79:9090/api/getcategorytitle',
        dataType:'json',
        success:function(res){
            console.log(res.result);
            var obj ={list:res.result} ;
            var html = template('childMenuTemp',obj);
            $('.bijia-menu').html(html);        
            // getChidMenu(res.result.length);
        }
    })
    // function getChidMenu(){
    //     for(var i=0;i<length;i++){
    //         $('#collapse'+i).collapse('hide');
    //     }
    // }
    var arr = [];
    $('.bijia-menu').on('click',".childmenu-title",function(){
        var titleId = $(this).attr('id');
        if(arr.indexOf(titleId)!=-1){
            return;
        }else{
            arr[arr.length]=titleId;
            $.ajax({
                type:'get',
                url:'http://193.112.55.79:9090/api/getcategory',
                data: {
                    titleid:titleId,
                },
                dataType:'json',
                success:function(res){
                    console.log(res.result);
                    var obj ={list:res.result} ;
                    var html = template('menuItemTemp',obj);
                    $('#'+titleId).parent().parent().next().children().children().children().html(html);  
    
                }
            })
        }
       
    })
    $('#backTop').on('click',function(){
        $("body,html").stop().animate({
            "scrollTop": 0
        }, 500);
    })
})