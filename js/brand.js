$(function(){
    var lis = $('.header-nav .nav-tabs').find('li')
    var tabLength = 0
    lis.each(function(index,value){
        // width():只能获取内容的宽度
        // innerWidth():获取内容+padding的宽度
        // outerWidth():获取内容+padding+border的宽度
        // outerWidth(true):获取内容+padding+border+margin的宽度
        tabLength += $(value).outerWidth(true);
    })
    $('.header-nav .nav-tabs').width(tabLength);
   
   
   var myScroll = new IScroll('.header-nav',{
       scrollX: true, scrollY: false
   });
   $.ajax({
       type:'post',
       url:'http://193.112.55.79:9090/api/getbrandtitle',
       dataType:'jsonp',
       success:function(res){
            var obj ={list:res.result} ;
            var html = template('brandTemp',obj);
            $('.brandItem').html(html);
       }
   })
   /*绑定移动端的tap事件*/
   var menuBox = document.querySelector('.header-nav ul');
   console.log(menuBox);
   mobile.tap(menuBox,function(event){
    var li = event.target.parentNode;
    for(var i=0;i<lis.length;i++){
         if(lis[i].classList.contains('active')){
             lis[i].classList.remove('active');
             break;
         }
     }
     li.classList.add('active');
 })
   
})
 