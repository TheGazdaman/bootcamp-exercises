<?php

// tuto class vytváříme pokud jí chceme dát nějaké metody při pracování s databází

class Games {
  public $id = null;
  public $names = null;
  public $image_url = null;
  public $description = null;
  public $rating = null;
  public $released_at = null;

  public function getGamesAplhabeticaly()
  {
    return names_format($this->names);
  }


}