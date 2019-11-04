<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    
  .ruler{
    display:flex;
  }
  .cm, .mm {
      border-left: 1px solid #555;
      height: 0.4rem;
      width: 0;
  }
  
  .mm.longer{
      height: 0.8rem;
  }
  .cm {
      height: 1.4rem;
  }
  .cm > span,
  .mm > span {
      display: block; 
      margin-top:2rem;
      margin-left: -.25rem;
    }
  </style>
</head>

<body>  

<?php 

    //$size = $_GET['size'];
    //$interval = $_GET['interval'];
?>

<div class='ruler'>

    <?php for($i = 0; $i <= 30; $i++) : ?> 
      <div>
          <?php if($i === 0 || $i === 10 || $i === 20 || $i === 30) : ?>
            <div style="margin: 0 100px"></div> 
          <?php endif; ?>
      </div>
          
      <div>
          <?php if ($i+2) : ?>
          <div style="margin: 0 10px" class='mm'></div>
          <?php endif; ?>
          <?php if($i === 5) : ?>
          <div style="margin: 0 10px" class='mm longer'></div>
          <?php endif; ?>
      </div>
    <?php endfor ;?>
</div>
     
<!-- 
    <div style="margin: 0 10px" class='cm'><span>0</span></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm longer'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
    <div style="margin: 0 10px" class='mm'></div>
 
    <div style="margin: 0 10px" class='cm'><span>1</span></div>
    
 
    <div style="margin: 0 10px" class='cm'><span>3</span></div> -->
</div>

</body>
</html>