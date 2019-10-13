<?php
// 1.
$party = [
  'bilbo' => 'Bilbo Baggins',
  'frodo' => 'Frodo Baggins',
  'ring' => 'The One Ring'
];

// 2.
$party['gandalf'] = 'Gandalf the Grey';

// 3.

unset($party['bilbo']);

// 4. 

$party['sam'] = 'Samwise Gamgee';

// 5. 

unset($party['gandalf']);

// 9. 

$party = leave_hobbiton($party);

$party = go_to_bree($party);

$party = go_to_weathertop($party);

$party = meet_arwen($party);

go_to_rivendell($party); // passing value by reference - no need to write $party = ...

$party = go_to_moria($party);

$party = go_to_falls_of_rauros($party);

$parties = break_fellowship($party);

var_dump($parties);