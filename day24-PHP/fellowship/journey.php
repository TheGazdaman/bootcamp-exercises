<?php

$party = [
  'bilbo' => 'Bilbo Baggins',
  'frodo' => 'Frodo Baggins',
  'ring' => 'The One Ring'
];

$party['gandalf'] = 'Gandalf the Grey';

unset($party['bilbo']);

$party['sam'] = 'Samwise Gamgee';

unset($party['gandalf']);

$party = leave_hobbiton($party);

$party = go_to_bree($party);


header('Content-type: application/json');
echo json_encode($party);