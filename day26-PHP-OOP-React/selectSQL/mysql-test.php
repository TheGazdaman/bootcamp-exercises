<?php

require_once 'DB/DB.php';
require_once 'DB/DB_functions.php';

require_once 'Country.php';
require_once 'Region.php';

// connect to a database
connect('localhost', 'world', 'root', 'rootroot');


// prepare a query string
$query = 'SELECT
    * FROM `country`
    WHERE `Population` > ?
    ';

// run the query
$results = select($query, [20000000], 'Country');

$populations = array_map(function($country) {
  return $country->getFormattedPopulation();
}, $results);

//var_dump($populations);


// select CZE

$query = "SELECT
    * FROM `country`
    WHERE `Code` = ?
    LIMIT 1
    ";

$czech_rep = select($query, ['CZE'], 'Country');

//var_dump($czech_rep);

/* $region = new Region;
$region->name = 'Central Africa';
$region->insert();

echo 'A new region inserted with id'. $region->id . '<br>'; */

// update the Region's slug
$query = "SELECT *
      FROM `region`
      WHERE `name` = ?
      ";

$central_africa = select_one($query, ['Central Africa'], 'Region');


$central_africa->slug = 'central-africa';
$central_africa->update();
