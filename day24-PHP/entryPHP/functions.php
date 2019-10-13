<?php

/* function asses_number($a) 
{
  return $a > 10;
}

$number = 6;

$result = asses_number($number); // result is false


// pasing by reference - changes the value of the variable & - before variable - important

function is_number_smaller(&$b)
{
  $b++;

  return $b < 10;
}

$number = 6;

$result = is_number_smaller($number); // false

// passing by reference

function is_odd($number, &$is_big = false) {

  $is_big = $number > 100;

// unfinished code
} */


// function headling
function headline($text, $level = 1) 
{
  return "<h{$level}>{$text}</h{$level}>";
}

echo headline("Main headline");

echo headline("Secondary headline", 2);

var_dump([3,4,5]);

