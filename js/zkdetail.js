// $(function(){
//     var id = location.search.split("=");
//     // var id = id;
//     id= id[id.length-1];
//     $.ajax({
//         type: 'get',
//         url: 'http://193.112.55.79:9090/api/getdiscountproduct',
//         data: {
//             productid:id,
//         },
//         dataType: 'json',
//         success: function (res) {   
//         //    console.log(res.result);
//            var list = res.result[id];
//         //    console.log(list);
//            var html = template("coudan",{list:list});
//            console.log(html);
//            $('.coudanpin').html(html);

//            var html2 = template("pinglun",{list:list});
//            console.log(html2);
//         //    $('.pinglunqu').html(html2);
//         }
//     })
// })


$(function () {
    var id = location.search.split("=");
    // var id = id;
    id= id[id.length-1];
    console.log(id);
    // $.ajax({
    //     type: 'get',
    //     url: 'http://193.112.55.79:9090/api/getmoneyctrl',
    //     data: {
    //         productid:id,
    //     },
    //     dataType: 'json',
    //     success: function (res) { 
    //         var list;  
    //       for(var i =0;i<res.result.length;i++){
    //           console.log(id+"|"+res.result[i].productId);
    //           if(id==res.result[i].productId){
    //             //   temp 
    //             console.log(res.result[i]);
    //             list = res.result[i];
    //           }
    //       }
    //     //    var list = res.result[id];
    //        console.log(list);
    //        var html = template("coudan",{list:list});
    //        console.log(html);
    //        $('.coudanpin').html(html);

    //        var html2 = template("pinglun",{list:list});
    //        console.log(html2);
    //        $('.pinglunqu').html(html2);
    //     }
    // })

    $(".goTop").on("click",function(){
        console.log(111);
        var st = $(window).scrollTop();
        // $(window).scrollTop(0);
        $('body,html').animate({scrollTop:0},500);
        // body.style.transition ="scroll 0.4s linear";

    })

    $(".title").on('click','.houtui',function(){
        location.href='inlanddiscount.html';
    })




    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getdiscountproduct',
        data: {
            productid:id,
        },
        dataType: 'json',
        success: function (res) { 
            console.log(res);
            var list;  
          for(var i =0;i<res.result.length;i++){
              console.log(id+"|"+res.result[i].productId);
              if(id==res.result[i].productId){
                //   temp 
                console.log(res.result[i]);
                list = res.result[i];
              }
          }
        //    var list = res.result[id];
           console.log(list);
           var html = template("coudan",{list:list});
           console.log(html);
           $('.coudanpin').html(html);

           var html2 = template("pinglun",{list:list});
           console.log(html2);
           $('.pinglunqu').html(html2);
           $('#newcomment').hide();
        }
    })
    $('#backTop').on('click',function(){
        $("body,html").stop().animate({
            "scrollTop": 0
        }, 500);
    })
})