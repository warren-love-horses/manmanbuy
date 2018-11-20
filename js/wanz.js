$(function () {
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getinlanddiscount',
        // data: {
        //     data
        // },
        dataType: 'json',
        success: function (res) {
            
          console.log(res.result);
         //先渲染4个数据
         var arr = res.result;
         //  var temp;
         // 先渲染6个数据 后面的数据依次渲染
         var list = arr.splice(0,6);
        //  console.log(list);
        //  console.log(arr);
         var html = template("zkproduct",{list:list});
        //  console.log(html);
 
         $('.zk-product').html(html);
        //  var temp;
        var tmp = [];
        var j =(arr.length)/2;
         for(var i =0;i<=j;i++){
            var temp = arr.splice(0,2);
            // console.log(temp);
            // console.log(temp);
            tmp[i] = temp;
            // console.log(tmp);
 
        }
        var html =[];
        for(var i = 0;i<tmp.length;i++){
            // console.log(tmp[i]);
            html[i] = template("zkproduct",{list:tmp[i]});
            
            // $('.zk-product').html(html);
        }
        // console.log(html);
        var index = 0;
        //当滑动到底部时候
        // console.log(html[index]);
        // $('.zk-product').html(html[index]);
        var flag = true;
        $(window).scroll(function(){
            if(flag){
                var scrollT = $(this).scrollTop();//鼠标滑动的距离
                var clientH = $(this).height();//屏幕的高度 即可视区域高度
                var total = $(document).height();//页面的总高度
                console.log((scrollT+clientH)+"|"+total)
                if((scrollT+clientH)==total){
                    // console.log(111);
                    
                    // console.log(index);
                    //当滑动距离和屏幕高度相加等于页面总高度 说明滑动到底部
                    setTimeout(function(){
                        console.log(html[index]);
                        
                        $('.zk-product').append(html[index]);
                        $('.zk-product')[0].style.transition = "all 0.4s linear";
                        index++;
                        // console.log($(""))
                        
                        if(index==html.length-1){
                            // console.log(index+"|"+html.length);
                            // console.log(111);
                           flag = false;
                        }
                       
                    },400);
                 
                   
                }
            }
           
        })
        
        // console.log(temp);
    }
    })



    $('.title').on("click",".houtui",function(){
        location.href = "index.html";
    })
    $('#backTop').on('click',function(){
        $("body,html").stop().animate({
            "scrollTop": 0
        }, 500);
    })
})