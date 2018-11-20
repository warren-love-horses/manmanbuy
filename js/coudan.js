$(function(){
    $('.dropdown-toggle').dropdown();
    var shopid=0;
    var areaid=0;
    $.ajax({
        type:'get',
        url:'http://193.112.55.79:9090/api/getgsshop',
        dataType:'json',
        success:function(res){
            var obj ={list:res.result} ;
            var html = template('coudanShopTemp',obj);
            $('#shopMess').html(html);               
        }
    })
    $.ajax({
        type:'get',
        url:'http://193.112.55.79:9090/api/getgsshoparea',
        dataType:'json',
        success:function(res){
            var obj ={list:res.result} ;
            var html = template('coudanAreaTemp',obj);
            $('#areaMess').html(html);    
        }
    })
    $('#areaMess').on('click','li',function(){
        areaid = $(this).attr('areaId');
        $(this).addClass('active').siblings().removeClass('active');
        getproduct();
    })
    $('#shopMess').on('click','li',function(){
        shopid = $(this).attr('shopId');
        $(this).addClass('active').siblings().removeClass('active');
        getproduct();
    })
    getproduct();
    function getproduct(){
        $.ajax({
            type:'get',
            url:'http://193.112.55.79:9090/api/getgsproduct',
            data: {
                shopid:shopid,
                areaid:areaid,
            },
            dataType:'json',
            success:function(res){  
                var obj ={list:res.result} ;
                var html = template('coudanTemp',obj);
                $('.coudan-product ul').html(html);
            }
        })
    }

    $('#backTop').on('click',function(){
        $("body,html").stop().animate({
            "scrollTop": 0
        }, 500);
    })
   
})

          