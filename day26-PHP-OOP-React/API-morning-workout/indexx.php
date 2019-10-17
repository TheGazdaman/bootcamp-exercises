
<?php


include 'data.php';

require_once 'celebrity.php';


$celebrities = [];

foreach ($data as $value) 
{
  $person = new Celebrity;  // creating new object of a class celebrity
  $person->fromArray($value);    // creating new method
  $celebrities[] = $person;  // pushing new item into the array of celebrities declared as empty in this folder. Array_push could be used here too.
}


header('Content-type: application/json');
echo json_encode($celebrities); 
