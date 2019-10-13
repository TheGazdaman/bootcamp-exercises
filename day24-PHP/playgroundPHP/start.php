<?php

$first_name = 'Bruce';
$surname = 'Wayne';

echo 'First name: ' . $first_name . '<br>' . 'Surname: '. $surname;

$year_of_birth = 1939;
$height = 186;

echo '<br>Year of birth: ' . $year_of_birth . '<br>' . 'Height: '. $height;

$SERVER_SOFTWARE = 'Apache';

echo '<br>This server is running on ' . $SERVER_SOFTWARE . '.';

$MY_OS = 'MAC OS';

echo '<br>My operating system is ' . $MY_OS . '.';

function greet ($whom) 
{
  return 'Hello ' . $whom . '!';
};

echo '<br>'. greet('Prague');


function truncateString(&$string, $size) 
{
  return mb_substr($string, 0, $size);
}
$sentence = 'Quick brown fox jumps over the lazy dog.';

echo '<br>'. truncateString($sentence, 10);