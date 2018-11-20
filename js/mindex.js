function loadingShow() {
  $("#loading").show();
}
function loadingHide() {
  $("#loading").hide();
}
$.ajax({
    url: "http://193.112.55.79:9090/api/getmoneyctrl",
    beforeSend: function () {
        loadingShow();
    },
    success: function (res) {
        if (res) {
            loadingHide();
        }
        //  通过forEach遍历数组，然后遍历数组里的每一项的productComCount并进行数据截取，在原来数组中定义一个新的属性，并把截取后的数据赋值给它
        res.result.forEach(function (ele, index, arr) {
            ele.productComCountNum = parseInt(ele.productComCount.substr(1)) || 0;
        });
        // console.log(res);
        //通过模板引擎进行数据遍历，并以字符串的方式返回数据 如strHtml
        fn(res);
        var pageN = Math.floor(res.totalCount / res.pagesize);
        var html = "";
        for (var i = 0; i < pageN; i++) {
            html +=
                '<option value="' +
                (i + 1) +
                '">' +
                (i + 1) +
                "/" +
                pageN +
                "</option>";
        }
        $(".pageNumber").html(html);

        $(".pageNumber").on("change", function () {
            var pageid = $(this).val();

            $.ajax({
                url: "http://193.112.55.79:9090/api/getmoneyctrl",
                data: { pageid: pageid },
                beforeSend: function () {
                    loadingShow();
                },
                success: function (res) {
                    if (res) {
                        loadingHide();
                    }
                    fn(res);
                },
                dataType: "json"
            });

        });

        var pageid = 1;

        $(".nextPage").tap(function () {
            pageid = $(".pageNumber")
                .prop("select", true)
                .val();
            if (pageid >= pageN) {
                return;
            }
            pageid++;
            $(".pageNumber").val(pageid);
            $.ajax({
                url: "http://193.112.55.79:9090/api/getmoneyctrl",
                data: { pageid: pageid },
                beforeSend: function () {
                    loadingShow();
                },
                success: function (res) {
                    if (res) {
                        loadingHide();
                    }
                    fn(res);
                },
                dataType: "json"
            });

        });

        $(".previousPage").tap(function () {
            pageid = $(".pageNumber")
                .prop("select", true)
                .val();
            if (pageid == 1) {
                return false;
            }
            pageid--;
            $(".pageNumber").val(pageid);
            $.ajax({
                url: "http://193.112.55.79:9090/api/getmoneyctrl",
                data: { pageid: pageid },
                beforeSend: function () {
                    loadingShow();
                },
                success: function (res) {
                    if (res) {
                        loadingHide();
                    }
                    fn(res);
                },
                dataType: "json"
            });
        });
    },
    dataType: "json"
});


function fn(res) {
  // console.log(res)
  res.result.forEach(function(ele, index, arr) {
    ele.productComCountNum = parseInt(ele.productComCount.substr(1)) || 0;
  });
  var strHtml = template("particulars", res);
  //然后进行数据渲染
  $(".content ul").html(strHtml);
}

// 详情列表页渲染页面部分结束
