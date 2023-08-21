var page = 1;
var flagNoData = false;
var allpage = 5;
function showAjax(currentIndex){
	$.ajax({
		type:"get",
		url:"data/list.json",
		async:true,
		datatype:'json',
		success: (data) => {
			showContent(data);
			if (currentIndex >= allpage){
				flagNoData = true;
				$(".loadmore").remove();
			}
			page += 1;
			if(page==allpage){
				loadover();
			}
			
		}
	});
}

 function loadover(){
    var overtext="更多门店陆续开放中，敬请期待！";
    $(".loadmore").remove();
    if($(".loadover").length>0){
        $(".loadover span").eq(0).html(overtext);
    }else{
        var txt='<div class="loadover" style="text-align: center;padding: 15px 0;color: #c5c5c5;"><span>'+overtext+'</span></div>'
        $("body").append(txt);
    }
}

function scrollFn(){
	var pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
	var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
	var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	if (flagNoData) {
		return;
	} else if (pageHeight - viewportHeight - scrollHeight < 10) {
		if($(".loadmore").length==0){
            var txt='<div class="loadmore" style="text-align: center;padding: 15px 0;"><span class="loading"></span>加载中..</div>'
            $("body").append(txt);
        }
		showAjax(page);
	}
}
showAjax(page);
$(window).bind("scroll", scrollFn);

function showContent(res) {
	var arrLen = res.data.length;
    var result = '';
    if(arrLen > 0){
        for(var i=0; i<arrLen; i++){    
        	result +=`<li class="list">
        				<a href="index.html" class="list_a">
        					<div class="listimg">
        						<img src=${res.data[i].src} />
        					</div>
        					<div class="listRight">
        						<div class="listUp">
            						<div class="areaName">${res.data[i].name}</div>
            						<div class="areaTime">营业时间：<span>${res.data[i].time}</span></div>
            						<div class="address">${res.data[i].area}</div>
        						</div>
        					</div>
        				</a>
        			 </li>`;									                        			                        			
        }
    }
	$("#ullist").append(result);
}

function openGps(){
	$(".GpsList").css('display','block');
	$("body,html").addClass('hidden');
}

function closeGps(){
	$(".GpsList").css('display','none');
	$("body,html").removeClass('hidden');
}

function getCity(res){
	$(res).parents('.GpsList').css('display','none');
	$(res).addClass('select').siblings().removeClass('select');
	$("#city").val($(res).text());
	closeGps();
}

function citySearch(res){
	var city_val = $(res).prev().val();
	if (city_val == "") {
		Elastic("ElasticClass","请输入城市!",1500);
	} else{
		$(res).parents('.GpsList').css('display','none');
		$("#city").val(city_val);
		closeGps();
	}
}

