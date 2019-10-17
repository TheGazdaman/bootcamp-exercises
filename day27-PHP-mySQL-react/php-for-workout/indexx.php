<?php

include 'data.php';

require_once 'celebrity.php';

$celebrities = [];

foreach ($data as $value) 
{
  $person = new Celebrity;
  $person->fromArray($value);
  $celebrities[] = $person;
}

header('Content-type: application/json');
echo json_encode($celebrities); 
