$(function(){
    var brandtitleid = location.search.split('?')[1].slice(-1);
    // console.log(brandtitleid);
    $.ajax({
        type:'post',
        url:'http://193.112.55.79:9090/api/getbrand',
        data:{
            brandtitleid:brandtitleid,
        } ,
        dataType:'jsonp',
        success:function(res){
            var obj ={list:res.result} ;
            var html = template('brandTemp',obj);
            $('.topItem ul').html(html);         
        }
    })
})