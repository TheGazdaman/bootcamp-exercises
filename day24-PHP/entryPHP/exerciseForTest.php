<?php
 
$fruit_colors = [
  'Apple' => 'green',
  'Pear' => 'yellow',
  'Orange' => 'orange'
];

$fruit_colors['Melone'] = 'green';  // přidal jsem novou položku do array.

$fruit_colors['Apple'] = 'red'; // this is how to add item to the array with a value.

$fruit_colors['Lychee'] = 'red';

$fruit_colors['Mandarine'] = ''; // this is how to add item to the array with no value so far.

$fruit_colors['Mandarine'] = 'orange';

var_dump($fruit_colors);

foreach($fruit_colors as $name => $color){
  var_dump($color);
}

$fruit = [
  'Apple', 'Tomato', 'Banana',
];

$fruit[3] = "Orange";

$fruit[4] = "Blue";

var_dump($fruit);

foreach($fruit_colors as $name => $color){
  echo 'The color of ' . $name . ' is ' . $color . '<br>';  
}

sort($fruit_colors);

sort($fruit); 

var_dump($fruit);