<?php

	$fields = array_keys($_POST);
	$files = array_keys($_FILES);

	foreach ($fields as $key => $value) {
		$defaults[$value] = $_POST[$value];
	}
	foreach ($files as $key => $value) {
		$defaults[$value] = "@" . $_FILES[$value]["tmp_name"];
	}

	$h = curl_init();
	curl_setopt($h, CURLOPT_URL, "http://stg.api.bazaarvoice.com/data/uploadphoto.json");
	curl_setopt($h, CURLOPT_POST, true);
	curl_setopt($h, CURLOPT_POSTFIELDS, $defaults);
	curl_setopt($h, CURLOPT_HEADER, false);
	curl_setopt($h, CURLOPT_RETURNTRANSFER, 1);

	$result = curl_exec($h);
	echo $result;

	curl_close($h);

?>