<?php // Buble sort
 
    function createRandomArray($length){
        $data = [];
        for($i = 0; $i < $length; $i++){
            $data[] = rand(1, 99);
        }
        return $data;
    }
 
    function echoArray($array){
        echo '<pre>' . implode('; ', $array) . '</pre>';    
    }
 
    // generate random array with length 5
    $data = createRandomArray(5);
 
    //echoArray($data);
 
    
    //here comes your sorting code
    for($j = 0; $j < count($data)- 1; $j++) { // count je místo lenght - je to prakticky to samé, PHP lenght nemá.

    
      for($i = 0; $i < count($data)- 1; $i++){ // na konci je ta jednička proto, že již s tím posledním to nechceme srovnávat.
      if ($data[$i] > $data[$i + 1]) {
        $tmp = $data[$i];
        $data[$i] = $data [$i+1];
        $data[$i + 1] = $tmp;  
      }
  }
}
    
    
 
    echoArray($data);
?>