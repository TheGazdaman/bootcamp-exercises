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

foreach($country_names as $value => $country) {
  
  $calling = $calling_codes[$value];

  $sentence = 
  [
    'name' => $country,
    'calling' => $calling
  ];

  $call[] = $sentence;
}

foreach($call as $country => $code) {
  $saying = [
    "Calling code to {$country['name']} is {$calling['calling']}",
  ];
}
?>


 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document</title>
 </head>
 <body>
 <tbody>
          <?php foreach ($call as $country => $code):?>
          <tr>
            <td><?= "The calling code of {$country['name']} is {$code['calling']}" ?></td>
            
          </tr>
          <?php endforeach; ?>

        </tbody>
 </body>
 </html>