//项目地址
var ctx = 'http://localhost:8080/nj-front-web';

$(function () {
	//加载导航
	$("#headNav").append(headHtml.import.body.innerHTML);

})
//打开提示框
function showModal(msg){
	$('.modal-body').html(msg);
	$('#myModal').modal({
		show:true,
		backdrop:true
	});
}

//关闭提示框
function hideModal(url){
	$('#myModal').modal('hide');
	if(url != null){
		window.location.href = ctx + url;
	}
	$('#myModal').attr("redirect","0");
}