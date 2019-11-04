<?php

function headline($text, $level = 1)  // level = 1 - default value.
{
  return "<h{$level}>{$text}</h{$level}>";
}

echo headline("Main headline");

echo headline("Secondary headline", 2);

var_dump([3,4,5]);