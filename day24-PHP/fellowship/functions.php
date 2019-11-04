<?php

function leave_hobbiton($party)
{
  $party = array_merge($party, [
    'merry' => 'Meriadoc Brandybuck',
    'pippin' => 'Peregrin Took'
]);

  return $party;
}

function go_to_bree($party)
{
  $party['strider'] = 'Strider';

  return $party; 
}