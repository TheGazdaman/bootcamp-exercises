<?php

class Address {
  public $name = null;
  public $street = null;
  public $house_nr = null;
  public $city = null;
  public $country = null;
  public $postal_code = null;

  static protected $local_country = null;

  public function setLocalCountry ($country_name) 
  {
    return $local_country-> $country_name;
  }

  public function isLocal() 
  {
    if ($country === $local_country) {
      return true;
    }

    else return false;
  }

}

$czechia = new Address();
$czechia->country = 'czechia';
Address::setLocalCountry('czechia');

/* $czechia = new Address();
$czechia->country = 'czechia';

var_dump($czechia->isLocal()); */ // true

/* $germany = new Address();
$germany->country = 'germany';

var_dump($germany->isLocal());

$state = new Address;
Address::setLocalCountry('czechia');
 */


