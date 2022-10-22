<?php

ini_set('display_errors', 'On');
error_reporting(E_ALL);

$url = "http://api.geonames.org/hierarchyJSON?formatted=true&geonameId=2657896&username=khushi&style=full";

$ch = curl_init();

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

curl_setopt($ch, CURLOPT_URL, $url);

$result = curl_exec($ch);

curl_close($ch);

$decode = json_decode($result, true);
echo json_encode($decode);
