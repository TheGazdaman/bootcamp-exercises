<?php

var_dump(__FILE__);

var_dump(__DIR__);

var_dump(
  pathinfo(__FILE__)
);

var_dump(
  pathinfo(__FILE__, PATHINFO_EXTENSION)
);

switch (pathinfo(__FILE__, PATHINFO_EXTENSION)) {
    case 'php':
      echo 'Treating this as a PHP file!';
      break;
    case 'jpg':
      echo 'Treating this as a JPG file';
      break;
  };

  var_dump( 
    scandir(__DIR__)
  );

  mkdir('2020'); // creates new folder
  rmdir('2020'); // removes a folder

  $file_handle = fopen('photos.txt', 'r');

  while(false !== ($line = fgets($file_handle))) {
    var_dump($line);
  }

  fclose($file_handle);

  $file_handle = fopen('2019/info.txt', 'w');

  fwrite($file_handle, "Photos from our\r\n2019\r\nvacation"."\r\n");

  fclose($file_handle);

  $data = [
    'Bruce',
    'Wayne',
    'Billionaire',
    1939,
    'Once a upon a time
    there was a boy.
    His parents were murdered.
    So he became Batman.'
  ];

  $fh = fopen('data.csv', 'r');  // csv - coma separating values

  while(false !== ($line = fgetcsv($fh))) {
    var_dump($line);
  };

  fclose($fh);

  var_dump(
    file('photos.txt')
  );

  var_dump(
    file_get_contents('photos.txt')
  );

  file_put_contents(
    'data.json',
    json_encode($data)
  );

  var_dump(
    json_decode(file_get_contents('data.json'))
  );

  unlink('data.json');