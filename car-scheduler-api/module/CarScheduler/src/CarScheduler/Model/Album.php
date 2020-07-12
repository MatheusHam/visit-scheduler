<?php

namespace CarScheduler\Model;

 class Album
 {
     public $id;
     public $name;
     public $specs;
     public $price;

     public function exchangeArray($data)
     {
         $this->id     = (!empty($data['id'])) ? $data['id'] : null;
         $this->name = (!empty($data['artist'])) ? $data['name'] : null;
         $this->specs  = (!empty($data['title'])) ? $data['specs'] : null;
         $this->price  = (!empty($data['title'])) ? $data['specs'] : null;
     }
 }

?>