<?php
	ini_set("error_reporting","E_ALL & ~E_NOTICE"); //屏蔽错误：变量未定义
	header("Content-Type: text/html; charset=UTF-8");
	require_once "email.class.php";
	//******************** 配置信息 ********************************
	$smtpserver = "smtp.163.com";//SMTP服务器
	$smtpserverport =25;//SMTP服务器端口
	$smtpusermail = "18434365960@163.com";//SMTP服务器的用户邮箱
	/*$smtpemailto = $_POST['toemail'];//发送给谁*/
	$smtpemailto ="Mr_Li_admin@163.com";
	$smtpuser = "18434365960";//SMTP服务器的用户帐号
	$smtppass = "lfq184717";//SMTP服务器的用户密码
	/*$mailtitle = $_POST['title'];//邮件主题*/
	$mailtitle = "面试邀请";
	foreach($_POST as $key => $value){
		if($key=="company"){
			$key="面试公司";
			/*$value="=?UTF-8?B?".base64_encode($value)."?=";*/
		}
		if($key=="address"){
			$key="面试地点";
			/*$value="=?UTF-8?B?".base64_encode($value)."?=";*/
		}
		if($key=="time"){
			$key="面试时间";
			/*$value="=?UTF-8?B?".base64_encode($value)."?=";*/
		}
		if($key=="phone"){
			$key="联系方式";
			/*$value="=?UTF-8?B?".base64_encode($value)."?=";*/
		}
		if($key=="require"){
			$key="面试要求";
			/*$value="=?UTF-8?B?".base64_encode($value)."?=";*/
		}
		if($key=="position_1"){
			$key="面试职位";
			$value="前端工程师";
		}
		if($key=="position_2"){
			$key="面试职位";
			$value="数据库工程师";
		}
		if($key=="position_3"){
			$key="面试职位";
			$value="后台工程师";
		}
		$comtent.=$key." : ".$value."\r\n";
	}
	$mailcontent = $comtent;//邮件内容
	$mailtype = "TXT";//邮件格式（HTML/TXT）,TXT为文本邮件
	//************************ 配置信息 ****************************
	$smtp = new smtp($smtpserver,$smtpserverport,true,$smtpuser,$smtppass);//这里面的一个true是表示使用身份验证,否则不使用身份验证.
	$smtp->debug = false;//是否显示发送的调试信息
	$state = $smtp->sendmail($smtpemailto, $smtpusermail, $mailtitle, $mailcontent, $mailtype);

	echo "<div style='width:300px; margin:36px auto;'>";
	if($state==""){
		echo "对不起，邮件发送失败！请检查邮箱填写是否有误。";
		echo "<a href='../home/index.html'>点此返回</a>";
		exit();
	}
	echo "恭喜！邮件发送成功！！";
	echo "<a href='../home/index.html'>点此返回</a>";
	echo "</div>";

?>