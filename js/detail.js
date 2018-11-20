var searchStr = location.search;


var obj={};
var itemArr = searchStr.substr(1).split("&");
for(var i=0;i<itemArr.length;i++){
  var item = itemArr[i].split("=");
  obj[item[0]] = item[1];
}

var id = obj.id;

$.get('http://193.112.55.79:9090/api/getmoneyctrlproduct',{'productid':id},function(res){
    console.log(res);
    var strHtml = template('shoppingDetail', {
        data:res.result  
    })
    //然后进行数据渲染
    $('#aspnetForm').html(strHtml)
},'json')
