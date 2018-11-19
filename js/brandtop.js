$(function () {
    var brandtitleid = location.search.split('?')[1].slice(-1);

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
   
})