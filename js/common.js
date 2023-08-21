//模态窗方法
function Elastic(e,msg,duration){
	duration=isNaN(duration)?3000:duration;  
	var m = document.createElement('div');  
	var cs=m.className += e;
	m.innerHTML = msg;  
	m.classList.add(cs); 
	document.body.appendChild(m);  
	setTimeout(function() {  
		var d = 0.5;  
		m.style.webkitTransition = '-webkit-transform ' + d + 's ease, opacity ' + d + 's ease';  
		m.style.opacity = '0';  
		setTimeout(function() { 
			document.body.removeChild(m) 
		}, d * 1000);
	}, duration);											
}

//透明遮罩层
function loading(show, bgColor, Color) {
	if(show){
		$(`<div id="loadingTips" style="background-color: ${bgColor};position: fixed;top: 0;z-index: 9999;bottom: 0; width: 100%; height:100%;"></div>`).appendTo("body");
	    $(`<div id="alert" style="top: 50%;left: 50%;position: absolute;">
		    <div class="loading-bottom layout" style="background: transparent;">
			    <span class="center">
				    <div class="wraps">
					    <div class="spinner">
						    <div class="spinner-container container1">
							    <div class="circle1" style="background-color: ${Color}"></div>
							    <div class="circle2" style="background-color: ${Color}"></div>
							    <div class="circle3" style="background-color: ${Color}"></div>
							    <div class="circle4" style="background-color: ${Color}"></div>
						    </div>
						    <div class="spinner-container container2">
							    <div class="circle1" style="background-color: ${Color}"></div>
							    <div class="circle2" style="background-color: ${Color}"></div>
							    <div class="circle3" style="background-color: ${Color}"></div>
							    <div class="circle4" style="background-color: ${Color}"></div>
						    </div>
						    <div class="spinner-container container3">
							    <div class="circle1" style="background-color: ${Color}"></div>
							    <div class="circle2" style="background-color: ${Color}"></div>
							    <div class="circle3" style="background-color: ${Color}"></div>
							    <div class="circle4" style="background-color: ${Color}"></div>
						    </div>
					    </div>
				    </div>
			    </span>
		    </div>
		</div>`).appendTo("#loadingTips");
	}else{
		$('#loadingTips').remove();
	}
};

function customer(){
	$('#openDialog').removeClass('hide');
}
function cancels(){
	$('#openDialog').addClass('hide');
}
function sures(){
	cancelClick()
}