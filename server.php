<?php
$path = $_GET['path'];
$file = '/path/to/video/files/' . $path;
header('Content-Type: video/mp4');
readfile($file);
?>
