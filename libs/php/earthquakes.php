<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);

$url = "http://api.geonames.org/earthquakesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&username=khushi&style=full";

$ch = curl_init();

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

curl_setopt($ch, CURLOPT_URL, $url);


$result = curl_exec($ch);
curl_close($ch);

$decode = json_decode($result, true);
echo json_encode($decode);