<?php

/* $years_to_serve = 0;

do {

  $years_to_serve++;

  echo "Prisoner has served {$years_to_serve}.<br>";
} while ($years_to_serve < 10); 

$time_to_serve = 5;

for ($time_to_serve = 5; $time_to_serve > 0; $time_to_serve--){
  echo "Prisoner has {$time_to_serve} more years to serve. <br>";
} */

$years_to_serve = 10;

for($years_to_serve = 10; $years_to_serve > 0; $years_to_serve--){
  echo "Prisoner has {$years_to_serve} more years to serve. <br>";
 
  if ($years_to_serve > 5) { 
    continue;
  } 
    echo "Going to parole hearing. <br>" ;
  
  if ($years_to_serve === 2) {
    echo "Paroled.";
    break;
  }
}

