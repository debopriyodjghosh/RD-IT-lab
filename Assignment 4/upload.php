<?php

//foreach($_FILES["fn"] as $k=>$v) print "$k : $v <br>";

$file=$_FILES["fn"]["name"];
$dir="upload/";
$path=$dir.$file;

echo "$path <br>";

if (!$_FILES["fn"]["error"])
   {
    if ($_FILES["fn"]["size"]<5000) 
      {
       if (move_uploaded_file($_FILES["fn"]["tmp_name"], $path))
         print "file uploaded successfully";
       else print "file could not be uploaded";
     }
   else print "Sorry, file is too large ";
 }
else print "there is some error ";


?>
