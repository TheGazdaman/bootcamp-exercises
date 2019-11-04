<?php

$country_names = [
  'US' => 'USA',
  'HU' => 'Hungary',
  'CZ' => 'Czechia',
  'AR' => 'Argentina',
  'DE' => 'Germany',
  'DK' => 'Denmark',
  'IN' => 'India'
];

$calling_codes = [
    'AR' => '+54',
    'CZ' => '+420',
    'DE' => '+49',
    'HU' => '+36',
    'US' => '+1'
];


$call = [];

asort($country_names);

foreach($country_names as $value => $code) {
  $calling = $calling_codes[$value];

  $sentence = 
  [
    'name' => $code,
    'calling' => $calling
  ];

  $call[] = $sentence;
}
?>

<?php
foreach($call as $message) {
  
}

header('Content-type: application/json'); 

echo json_encode($call);
