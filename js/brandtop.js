$(function () {
    var urlData = location.search.split('?')[1].split('&');
    var brandtitleid =urlData[0].split('=')[1];
    var brandtitle = urlData[1].slice(11);
    brandtitle = decodeURI(brandtitle).slice(0,-4);
    $('.list-title').html(brandtitle+"哪个牌子好,十大品牌排行榜");
    $('.sellTop-title').html(brandtitle+"销量排行榜");
    $('.com-title').html(brandtitle+"最有用评论");
    $.ajax({
        type: 'post',
        url: 'http://193.112.55.79:9090/api/getbrand',
        data: {
            brandtitleid: brandtitleid,
        },
        dataType: 'jsonp',
        success: function (res) {
            var obj = {
                list: res.result
            };
            console.log(obj.list);
            var html = template('brandTemp', obj);
            $('.topItem ul').html(html);
        }
    })
    var pagesize = 4;
    var productId;
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getbrandproductlist',
        data: {
            brandtitleid: brandtitleid,
            pageSize: pagesize,
        },
        dataType: 'json',
        success: function (res) {
            var obj = {
                list: res.result
            };
            productId = res.result[0].productId;
            getcom();
            var html = template('sellTopTemp',obj);
            $('.sellTopItem ul').html(html);
            
        }
    })
    function getcom(){
        $.ajax({
            type:'get',
            url:'http://193.112.55.79:9090/api/getproductcom',
            data:{
                productid:productId,
            } ,
            dataType:'json',
            success:function(res){
                var obj = {
                    list: res.result
                };
                var html = template('comTemp',obj);
                $('.comItem ul').html(html);    
            }
        })
    }
    $('#backTop').on('click',function(){
        $("body,html").stop().animate({
            "scrollTop": 0
        }, 500);
    })
   
})