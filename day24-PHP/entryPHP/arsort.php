<?php
$fruits = [
  'd' => 'lemon', 
  'a' => 'orange', 
  'b' => 'banana', 
  'c' => 'apple'
];

$colors = [
  'a' => 'orange', 
  'd' => 'yellow', 
  'c' => 'green', 
  'b' => 'yellow'
];


$fruit_colors = [];

arsort($fruits);

foreach ($fruits as $id => $value) {
   
  $barva = $colors[$id];

  $ovoce_info =
  [
    'name' => $value,
    'barva' => $barva
  ];
  $fruit_colors[] = $ovoce_info;
}




header('Content-type: application/json'); 

echo json_encode($fruit_colors);