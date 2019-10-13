<?php

$my_name = ['Michal'];

$height = ['1.8 m', '6.2 ft.'];

var_dump($my_name);
var_dump($height);

function headline($text) 
{
  echo "<h1>{$text}</h1>";
}

headline('My website');

//
$inches = 12;

function inches_to_centimeters($inches)
{
  echo $cm = $inches * 2.54;
}

inches_to_centimeters($inches);

//
/* $celsius = 100;

function celsius_to_farenheit($celsius)
{
  echo $f = (9/5) * $celsius + 32;
}

celsius_to_farenheit($celsius);
 */
// 

