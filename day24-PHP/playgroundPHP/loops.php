<?php

$days_to_christmas = 76;

while ($days_to_christmas > 0) {

  $days_to_christmas--;

  echo "There are still {$days_to_christmas} days to Christmas. <br>";

}

do {
  $days_to_christmas--;

  echo "There are still {$days_to_christmas} days to Christmas. <br>";

}

while ($days_to_christmas > 0);

// do-while functions run at least once.

for ($days_to_christmas = 76; $days_to_christmas > 0; $days_to_christmas--) {

  if ($days_to_christmas == 70) {
    continue;
  }
  echo "There are still {$days_to_christmas} days to Christmas. <br>";

  if ($days_to_christmas == 60) {
    break;
  }
}