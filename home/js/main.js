$(document).ready(function(){
	W=$(window).width();
	H=$(window).height();
	
	$(".welcome").css({
		"height":(H-71)*0.9+"px",
		"margin-top":(H-71)*0.1+"px",
	});

	$(".infoLeft").css({
		"height":$(".infoRight").height()+"px"
	});
	/*优秀作品展示下拉菜单*/
	$(".dropdown-toggle").click(function(){
		$(this).parent().toggleClass("open");
	});
	$(window).scroll(function(){
		var h=$(window).scrollTop();
		if(h>=600 && h<(2*H-200)){
			$(".dropdown-toggle").parent().addClass("open");
			$(".dropdown-toggle").attr("aria-expanded","ture");
		}else{
			$(".dropdown-toggle").parent().removeClass("open");
			$(".dropdown-toggle").attr("aria-expanded","false");
		}
		
	});
	/*优秀作品展示下拉切换*/
	setInterval(function(){
		Action();
	},10);
	function Action(){
		if($(".pro-1").hasClass("active")){
			$("#dropdown-menu>li").removeClass("Active");
			$("#dropdown-menu>li").eq(0).addClass("Active");
		};
		if($(".pro-2").hasClass("active")){
			$("#dropdown-menu>li").removeClass();
			$("#dropdown-menu>li").eq(1).addClass("Active");
		};
		if($(".pro-3").hasClass("active")){
			$("#dropdown-menu>li").removeClass();
			$("#dropdown-menu>li").eq(2).addClass("Active");
		};
		if($(".pro-4").hasClass("active")){
			$("#dropdown-menu>li").removeClass();
			$("#dropdown-menu>li").eq(3).addClass("Active");
		};
	}
	
	$("#dropdown-menu>li").click(function(){
		$("#dropdown-menu>li").removeClass("Active");
		$(this).addClass("Active");
		$(".dropdown-toggle").parent().addClass("open");
		$(".dropdown-toggle").attr("aria-expanded","ture");
		index=$(this).index();
		if(index==0){
			$(".carousel-inner > div").removeClass("active");
			$(".pro-1").eq(0).addClass("active");
		}
		if(index==1){
			$(".carousel-inner > div").removeClass("active");
			$(".pro-2").eq(0).addClass("active");
		}
		if(index==2){
			$(".carousel-inner > div").removeClass("active");
			$(".pro-3").eq(0).addClass("active");
		}
		if(index==3){
			$(".carousel-inner > div").removeClass("active");
			$(".pro-4").eq(0).addClass("active");
		}

	})
	
	/*个人简历和welcome图片切换*/
	function changeImg(){
		$(".welcome-img>img").ready(function(){
			var h1=$(".welcome").height();
			$(".line").css({"width":"0px"})
			$(".welcome-img>img").css({
				"top":h1*0.3+"px"
			});
			$(".welcome-img>img").hide();
			$(".welcome-img>img").eq(0).show();
			$(".welcome-img>img").css({
				"opacity":"1"
			});
			var obj_1=setTimeout(function(){
				$(".welcome-img>img").eq(0).fadeOut(500);
				setTimeout(function(){
					$(".welcome-img>img").eq(1).fadeIn(1000);
				},450);
				$(".line").animate({
					width:"93%"
				},1000);
			},1000);
			var h2=$(".welcome-img>img").offset().top;
			$(".line").css({
				"top":(h2+25)+"px"
			});		
		});
	}
	changeImg();
	/*个人简历和welcome图片切换*/



	/*知识技能动态效果*/
	$("#html,#html5,#css,#css3,#javascript,#jquery,#bootstrap,#mysql,#php").circleChart({
		backgroundColor:"#000",
		color:"#FFF",
		startAngle:-175,
		widthRatio:0.1,
		size:295,
		textSize:25,
		value:1,
		textCenter:false,
	});
	
	$(window).scroll(function(){
		var topH=$(window).scrollTop();
		var H1=$("#html").offset().top-300;
		var H2=$("#css3").offset().top-300;
		var H3=$("#bootstrap").offset().top-300;
		if(topH>H1){
			$("#bounceInLeft").addClass("bounceInLeft");
			$("#shake").addClass("shake");
			$("#bounceInRight").addClass("bounceInRight");
			$("#html").circleChart({
				value:90,
				text:"90%熟练度",
			}); 
			$("#html5").circleChart({
				value:80,
				text:"80%熟练度",
			});
			$("#css").circleChart({
				value:90,
				text:"90%熟练度",
			});
		}
		if(topH>H2){
			$("#rollInLeft").addClass("rollInLeft");
			$("#flipInX").addClass("flipInX");
			$("#rollInRight").addClass("rollInRight");
			$("#css3").circleChart({
				value:80,
				text:"80%熟练度",
			});
			$("#javascript").circleChart({
				backgroundColor:"#000",
				value:75,
				text:"75%熟练度",
			});
			$("#jquery").circleChart({
				value:75,
				text:"75%熟练度",
			});
		}
		if(topH>H3){
			$("#bounce_1").addClass("bounce");
			$("#bounceInUp").addClass("bounceInUp");
			$("#bounce_2").addClass("bounce");
			$("#bootstrap").circleChart({
				value:75,
				text:"75%熟练度",
			});
			$("#mysql").circleChart({
				value:20,
				text:"20%熟练度",
			});
			$("#php").circleChart({
				value:20,
				text:"20%熟练度",
			}); 
			}
	});
	/*知识技能动态效果*/

	
	/*简历要求详细信息*/
	function GetInfo(){
		/*alert(1)*/
		value_1=document.getElementById("company").value;
		value_2=document.getElementById("address").value;
		value_3=document.getElementById("time").value;
		value_4=document.getElementById("phone").value;
		value_5=document.getElementById("require").value;
		value_6="";
		value_7="";
		value_8="";
		if(document.getElementById("position_1").value=="on"){
			value_6="前端工程师";
		}
		if(document.getElementById("position_2").value=="on"){
			value_7="数据库工程师";
		}
		if(document.getElementById("position_3").value=="on"){
			value_8="后台工程师";
		}
		$(".modal-body>p").eq(0).html("面试公司："+value_1);
		$(".modal-body>p").eq(1).html("面试地点："+value_2);
		$(".modal-body>p").eq(2).html("面试时间："+value_3);
		$(".modal-body>p").eq(3).html("联系方式："+value_4);
		$(".modal-body>p").eq(4).html("面试要求："+value_5);
		$(".modal-body>p").eq(5).html("面试职位："+value_6+","+value_7+","+value_8);
	}
	function SetInfo(){
		document.getElementById("submit").click();
	}
	/*简历要求详细信息*/
	
});