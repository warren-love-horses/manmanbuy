$(function () {
    //获取商品ID
    var productId , categoryid;
    var str = location.search.split("?")[1];
    var arr = str.split("&");
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        productId = arr[i].split("=")[1];
        newArr.push(arr[i].split("=")[1]);
    }
    productId = newArr[0];
    categoryid = newArr[1];

    //发送请求。渲染面包屑
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getcategorybyid",
        data: {
            categoryid: categoryid
        },
        dataType: "json",
        success: function (res) {
            console.log(res);
            var crumbsHTML = '<li>\
                                <a href="productItem.html?categoryid=' + categoryid + '">' + res.result[0].category; + '</a>\
                            </li>\
                            <li>></li>';
            $(".crumbs ul").append(crumbsHTML);
            // 渲染产品详情
            // 发送ajax请求，获取数据
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getproduct",
        data: {
            productid: productId
        },
        dataType: "json",
        success: function (res) {
            var proName = res.result[0].productName.split(" ")[0];
            console.log(res);
            
            var proImg = res.result[0].productImg;
            $(".proImg").html(proImg);
            var bjShop = res.result[0].bjShop;
            $(".pro_inner").html(bjShop);
            var crumbsHtml = '<li>\
                                <a href="#">' + proName + '</a>\
                            </li>\
                            <li>></li>';
            $(".crumbs ul").append(crumbsHtml);
        }
    });
        }
    });
    //发送ajax请求获取评论数据
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getproductcom",
        data: {
            productid: productId
        },
        dataType: "json",
        success: function (res) {
            var proCommentHTML = template("proCommentTmp", res);
            $(".pro_comment").append(proCommentHTML);

        }
    });
})