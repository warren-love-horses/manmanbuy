$(function(){
   
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getbaicaijiatitle",
        dataType: "json",
        dataType:"jsonp",
        success: function (res) {
            var obj = {
                'list':res.result
            }
            var html = template('baicainav',obj)
            $('.baicainav ul').html(html);
            var allLi = $('.baicainav ul').find('li');
            var totalWidth =0;
            allLi[0].classList.add('active');
            allLi.each(function(index,value){
                totalWidth += $(value).innerWidth();

            })
            $('.baicainav ul').width((totalWidth/16)+'rem');
            // var scroll = document.querySelector('.baicainav > ul');
            var myScroll = new IScroll('.header-nav',{
                scrollX: true, scrollY: false
            });
            // var myscroll = new IScroll('.baicainav > ul',{
            //     scrollX: true, scrollY: false
            // })
            // titleId = $('.titleId').attr('titleId');
            // console.log(titleId)

        }
    });

$('.baicainav ul').on('click','li',function () {
    var lis = $('.baicainav ul').find('li');
  for(var i=0;i<lis.length;i++){
      lis[i].classList.remove('active');
  }
//   $(this).classList.add('active');

    var titleId = $(this).attr('titleId');
   renderBai(titleId);

})
renderBai(0)
function renderBai(titleId){
    // console.log(titleId);
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getbaicaijiaproduct",
        data: {'titleid':titleId},
        dataType: "json",
        success: function (res) {
            // console.log(res.result);
            var obj={
                'list':res.result
            }
            var html = template('baiContent',obj)
            $('.baicai_content').html(html);
            var ems = $('.bar i em');
            for(var i=0;i<ems.length;i++){
                var width = ems.eq(i).width()
                if(width==1 ||width==2){
                    ems.eq(i).css('display','none');
                }
            }
            
        }
    });
} 
var content = $('.baicai_content').find('.content');
$('.top').on('click',function(){
    $("body,html").stop().animate({
        "scrollTop": 0
    }, 500);
})
$('#backTop').on('click',function(){
    $("body,html").stop().animate({
        "scrollTop": 0
    }, 500);
})

    
})