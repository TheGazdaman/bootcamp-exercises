<?php

$time_served = 0;
while ($time_served < 10) {
  $time_served++;
  echo "Prisoner has served " . $time_served . "years.<br>";
}


do  {
  $time_served++;
  echo "Prisoner has served " . $time_served . "years.<br>";
}
while ($time_served < 10);

$time_to_serve = 5;

for ($time_to_serve = 5; $time_to_serve > 0; $time_to_serve--) {
  echo "Prisoner has " . $time_to_serve . "more years to serve.<br>";
}

// 

$time_to_home = 10;

for ($time_to_home = 10; $time_to_home > 0; $time_to_home--) {
    echo "The prisoner has ". $time_to_home . " more years to serve.<br>";
    if ($time_to_home > 5)  {
      continue;
    }
    echo "Going to parole hearing...<br>";

    if ($time_to_home == 2)  {
    echo "Paroled!";
    break;
  }
}
