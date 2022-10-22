<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);

$url = "http://api.geonames.org/countrySubdivisionJSON?formatted=true&lat=47.03&lng=10.2&username=khushi&style=full";

$ch = curl_init();

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

curl_setopt($ch, CURLOPT_URL, $url);

$result = curl_exec($ch);

curl_close($ch);

$decode = json_decode($result, true);
echo json_encode($decode);