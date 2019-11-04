<?php

$movies = [
  "The Shawshank redemption",
  "The Godfather",
  "The Godfather II",
  "Dark Knight",
  "12 angry men",
  "Schindler's list",
  "Pulp fiction",
  "Lord of the Rings: Return of the King",
  "The good, the bad and the ugly",
  "Fight club"
];

sort($movies);

var_dump($_GET);

// send JSON header
//header('Content-type: application/json');

// this is being sent second

//echo json_encode($movies); 