<?php

$fruit_colors = [
  'Apple' => 'Red',
  'Pear' => 'Green',
  'Orange' => 'Orange'
];

$fruit = [
  'Apple', // automatically assigned index 0
  'Pear',  // automatically assigned index 1
  'Orange' // automatically assigned index 2
];

/* $fruit_colorss = array (
  'Apple' => 'Red',
  'Pear' => 'Green',
  'Orange' => 'Orange'
); */

//Adding specific item to the array
$fruit['green_one'] = 'Pear';

//Adding specific item to the array with numeric index
$fruit[0] = "Apple";
$fruit[3] = "Orange";

array_push($fruit_colors, 'Lychee');

var_dump($fruit_colors);
var_dump($fruit); 
/* var_dump($fruit_colorss); */

foreach($fruit_colors as $name) {
  var_dump($name);
}

foreach($fruit_colors as $fruit => $color) {
  echo 'The color of ' . $fruit . ' is ' . $color .'<br>';
}

sort($fruit_colors);

var_dump($fruit_colors);

/* sort($fruit);

var_dump($fruit); */