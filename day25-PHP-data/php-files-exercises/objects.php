<?php

require_once 'User.php';

$steve = new User;

$steve ->id= 1;
$steve->username = 'steve';
$steve->name = 'Stephen';

$steve->dumpMe();



$michal = new User;

$michal ->id= 2;
$michal->username = 'mike';
$michal->name = 'Michal';

$michal->dumpMe();

