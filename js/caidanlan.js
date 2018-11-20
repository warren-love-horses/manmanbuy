$(function () {
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getindexmenu',

        dataType: 'json',
        success: function (res) {
            var list2 = res.result.splice(0, 8);
            var list = list2.concat(res.result);
            var html2 = template('fenlei', {
                list: list2
            });
            $(".shangpinye").html(html2);
            var flag = true;
            $('.shangpinye').on("click", "#7", function () {
                if (flag) {
                    var html = template('fenlei', {
                        list: list
                    });
                    $(".shangpinye").html(html);
                    flag = false;
                } else {
                    var html2 = template('fenlei', {
                        list: list2
                    });
                    $(".shangpinye").html(html2);
                    flag = true;
                }

            })
        }
    })




    //折扣
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getmoneyctrl',
        dataType: 'json',
        success: function (res) {
          console.log(res);
          var winW = $(window).width();
          $(window).on('resize',function(){
              console.log(111);
              var winW = $(window).width();
          })
          //把productComCount拿出来
          var res = res.result;
          for(var key in res){
            //   console.log(res[key]);
              var pinglun = res[key].productComCount;
              var pinglun = pinglun.substr(1,1);
              console.log(pinglun);
              res[key].pinglun = pinglun;
              
          }
          console.log(res);
         var html = template("zhekou",{list:res,winW:winW});
          $('.zk-shangpin').html(html);
        }
    })

    //返回顶部
    $(".goTop").on("click",function(){
        console.log(111);
        var st = $(window).scrollTop();
        // $(window).scrollTop(0);
        $('body,html').animate({scrollTop:0},500);
        // body.style.transition ="scroll 0.4s linear";

    })
    $('#backTop').on('click',function(){
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