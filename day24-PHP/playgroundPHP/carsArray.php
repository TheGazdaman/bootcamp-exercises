<?php

$cars_i_want = [];

$cars_i_want[] = 'Aston Martin';
$cars_i_want[] = 'Bugatti';
$cars_i_want[] = 'Ferrari';
$cars_i_want[] = 'Lamborghini';
$cars_i_want[] = 'Maserati';
$cars_i_want[] = 'Mercedes';
$cars_i_want[] = 'Porsche';
$cars_i_want[] = 'Skoda';

var_dump($cars_i_want);

echo 'For myself I would buy '. $cars_i_want[1].'<br>';
echo 'For my spouse I would buy '. $cars_i_want[3].'<br>';
echo 'Instead of Maserati I would buy '. ($cars_i_want[4] = 'Smart') . ' for my mother in law.<br>';
echo 'Each of my kids will get a '. $cars_i_want[4]. '<br>';


echo '<ul>';

foreach ($cars_i_want as $car_name){
  echo "<li>{$car_name}</li>";     
}

echo '</ul>';

$car_prices = [
  'Skoda Octavia' => 270000,
  'Volkswagen Golf' => 170000,
  'BMW X6' => 380000,
  'Porsche 911' => 1150000
];

echo 'You can have Porsche for just ' . $car_prices['Porsche 911'] . ' CZK.<br>';

foreach ($car_prices as $car => $price){
echo 'You can have a '. $car . ' for just '. $price . ' CZK. <br>';
}