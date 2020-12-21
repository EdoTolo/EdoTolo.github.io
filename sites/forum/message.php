<!DOCTYPE HTML>
<html>
	<head>
		<title>Edo Tolo</title>
		<meta name="description" content="forum"/>
		<meta name="keywords" content="forum, Edo Tolo"/>
		<meta name="author" content="Edo Tolo, Eduardo Tolentino"/>
		<meta name="copyright" content="Edo Tolo is a under GNU General Public License."/>
		<meta name="robots" content="index, follow"/>
		<meta name="theme-color" content="#004789"/>
		<link href="Photos/titleicon.ico" rel="icon"/>
		<link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
		<link rel="stylesheet" href="CSS/css.css"/>
		<script type="text/javascript" src="JS/js.js"></script>
	</head>
	
	<body class="messages">
	
		<?php
			$name = isset($_POST['name']) ? $_POST['name'] : '';
			$message = isset($_POST['message']) ? $_POST['message'] : '';
			
			$old = fopen("message.html", "r+t");
			$old_messages = fread($old, 2000);
			
			$write = fopen("message.html", "w+");
			$string = "<b>" .$name. "</b> <br>" .$message. "<br> \n" .$old_messages;
			fwrite($write, $string);
			fclose($write);
			fclose($old);
			
			$read = fopen("message.html", "r+t");
			echo fread ($read, 2000);
			fclose($read);
		?>
		
	</body>
</html>