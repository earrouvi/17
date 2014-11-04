<?php
	//Connect to the Database
	$con = mysql_connect('mysql51-43.perso', 'lafanfralezob', 'AFQA1cdx', '') or die ('MySQL Error when trying to connect to database');
	mysql_select_db('lafanfralezob', $con) or die('MySQL Error on database name');
	
	//Run our query
	$result = mysql_query('SELECT * FROM 17newsPost', $con) or die('MySQL Error on request');
	
	//Prepare our output
	$newsPosts = array();
	while($newsPost = mysql_fetch_array($result, MYSQL_ASSOC)) {
		$newsPosts[] = array($newsPost);
	}
	
	$output = json_encode(array('posts' => $newsPosts));
	
	//Output the output.
	echo $output;
?>