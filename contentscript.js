$(function(){
	var button = '<div style="height:22px;width:42px;position:absolute;left:0px;top:300px;"><button id="buildMyLink" >sss</button></div>';
	$('body').prepend(button);
});

$('#buildMyLink').live('click',function(){
	buildMyLink();
});

function buildMyLink(){
	$('#normal_user_container .dzh_text1').each(function(i){
		//console.log($(this));return false;
		var str_onclik = $(this).attr('onclick');
		//console.log(i,str_onclik);
		if(str_onclik != undefined){
			var uhash = str_onclik.substr(86, 32);
			//console.log(i, uhash);
			sayHi(uhash);
		}
	});
}

function sayHi(uhash){
	var str_data = 'textfield=hi,你好！';
	str_data += '&list=';
	str_data += '&xitong_zidingyi_wenhouyu=1';
	str_data += '&xitong_zidingyi_wenhouyu=0';
	str_data += '&pre_url=';
	str_data += '&sendtype=20';
	str_data += '&hellotype=hello';
	str_data += '&pro_id=0';
	str_data += '&new_profile=3';
	str_data += '&to_hash='+uhash;
	str_data += '&fxly=pmtq-ss-210';
	str_data += '&tj_wz=none';
	str_data += '&need_fxtyp_tanchu=0';
	str_data += '&self_pay=0';
	str_data += '&cai_xin=0';
	str_data += '&zhuanti=0';
	str_data += '&liwu_nofree=0';
	str_data += '&liwu_nofree_id=88';
	$.ajax({
		type:'post',
		url:'http://www.jiayuan.com/msg/dosend.php?type=hello&randomfrom=4',
		cache:false,
		dataType:'text',
		data:str_data,
		success:function(data){
			var status = data.match('发送成功');
			if(status != null){
				//成功
				console.log('成功:'+uhash);
			}else{
				//失败
				console.log('失败:'+uhash);
			}
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			//失败
			console.log('ajax error:'+uhash);
		}
	});
}
