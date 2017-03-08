<?php
//connect to DB
$con = mysqli_connect("localhost", "root", "Zebra99!", "jsshoutbox");
if(mysqli_connect_errno()){
    echo 'Failed to connect: '.mysqli_connect_error();
}

//don't need to include the closing tag if entire page is a php file
?>