<?php

require_once 'DB/DB.php';     // always - they are just relative paths, can be placed anywhere
require_once 'DB/DB_functions.php';

require 'list.php';

connect('localhost', 'games', 'root', 'rootroot');


// Get data from URL ($_GET)
// need to ask first –> is it there?

$orderway = 'ASC';
if (isset($_GET['way']) && $_GET ['way'] == 'desc') {
  $orderway = 'DESC';
}

// toto je stejné jen delší:
/* if (isset($_GET['way'])) {            

    switch ($_GET['way']) {
        default:
        case 'asc':
            $orderway = 'ASC';
            break;
        case 'desc':
            $orderway = 'DESC';
            break;
          }
        } else {
          $orderway = 'ASC';
        }

  $orderby = $_GET['orderway'];     */

  // prepare query string

  $orderby = isset($_GET['ordeby']) && strtolower($_GET ['orderby']) == 'rating' ? 'rating' : 'name';

  $query = "SELECT *
        FROM `games` 
        WHERE 1;
        ";
  
  $games = select($query, [], 'Game');   // 'Game' telling when something is created it should be object class 'Game'

  header('Content-type: application/json');
  
  echo json_encode($games);


  // run the query

  $query = "SELECT *
          FROM `games`
          ORDER BY `names` ASC
          ";

  

