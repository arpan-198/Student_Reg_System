<?php

function connect()
{
    $db_user="root";
    $db_host="localhost";
    // $db_passw=;
    
     $conn=new mysqli($db_host,$db_user);
     if($conn->connect_error)
     {
         die("Connection Error".$conn->connect_error);
     }
     echo nl2br ("Connection Successfull \n");
    return $conn;
}


if(isset($_REQUEST['submit'])){

    $con=connect();
    $db_que="CREATE DATABASE IF NOT EXISTS USER_INFO;";
    $result=$con->query($db_que);


    $con->select_db("USER_INFO");
  
    $db_que="SELECT * FROM User;";
    $result=$con->query($db_que);

    if($con->error)
    {
        $db_que="CREATE TABLE User (Uname VARCHAR(12) PRIMARY KEY,pass VARCHAR(20) NOT NULL,img VARCHAR(100) NOT NULL)";
        $result=$con->query($db_que);
        if($con->error)
        {
            echo nl2br ($con->error);
        }

    }

    $user=$_REQUEST["t1"];
    $pass_word=$_REQUEST["password"];
    $img=$_FILES["file_image"];


    $f=explode(".",$img["name"]);
    $fname=$f[0];
    $fext=$f[1];
    if(strlen($fname)>10)
    {
        $fname=substr($fname,0,10);
    }
    $fname=$fname."(".rand(1,1000).")";
    


    $filename=$fname.".".$fext;
    echo nl2br ($filename."\n");
    $filetempname=$img["tmp_name"];

    $desti="upload/".$filename;
    move_uploaded_file($filetempname,$desti);



    $db_que="INSERT INTO User VALUES('$user','$pass_word','$desti');";
    $result=$con->query($db_que);


    if(!$con->error)
    {
        
        echo nl2br ("Submitted");
    }
    else
    {
        echo nl2br ("User name already exists");
    }
}
else{
    echo nl2br ("Submission cancel");
}


?>