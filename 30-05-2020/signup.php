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
    $user=addslashes(trim($_REQUEST["t1"]));
    $pass_word=md5(trim($_REQUEST["password"]));
    

    if(! is_uploaded_file($_FILES['file_image']['tmp_name']))
    {
        echo 'Possible file attack';
        exit;

    }

    if($_FILES["file_image"]['error']>0)
    {
        switch($_FILES["file_image"]['error'])
        {
            case 1:
                echo 'File  exceeded upload_Max_filesize';
                break;
            case 2:
                echo 'File  exceeded Max_file_size';
                break;
            case 3:
                echo 'File only partially uploaded';
                break;
            case 4:
                echo 'No file uploaded';
                break;
            case 6:
                echo 'No temp directory specified';
                break;
            case 7:
                echo 'Upload failed: Cannot write to disk';

        }
        exit;
    }
    if($_FILES["file_image"]['type']!='image/jpeg')
    {
        echo 'invalid image type';
        exit;
    }

    $filenaam=$_FILES["file_image"]['name'];
    $f=explode(".",$filenaam);
    $fname=$f[0];
    $ex=count($f)-1;
    $fext=$f[$ex];


    if ($fext !== 'png' && $fext !== 'jpg') {
        throw new Exception("{$filenaam}: Invalid image content.");
    }
    else if (!$img = @imagecreatefromstring(file_get_contents($_FILES["file_image"]['tmp_name']))) {
        throw new Exception("{$filenaam}: Invalid image content.");
    }


    if(strlen($fname)>10)
    {
        $fname=substr($fname,0,10);
    }
    $fname=$fname."(".rand(1,1000).")";

    $filename=$fname.".".$fext;
    echo nl2br ($filename."\n");

    $desti="upload/".$filename;

    $cont=strip_tags(file_get_contents($_FILES["file_image"]['tmp_name']));
    file_put_contents($_FILES["file_image"]['tmp_name'],$cont);

    


    $db_que="CREATE DATABASE IF NOT EXISTS USER_INFO;";
    $result=$con->query($db_que);


    $con->select_db("USER_INFO");
  
    $db_que="SELECT * FROM User;";
    $result=$con->query($db_que);

    if($con->error)
    {
        $db_que="CREATE TABLE User (Uname VARCHAR(12) PRIMARY KEY,pass VARCHAR(150) NOT NULL,img VARCHAR(100) NOT NULL)";
        $result=$con->query($db_que);
        if($con->error)
        {
            echo nl2br ($con->error);
        }

    }

    $db_que="INSERT INTO User VALUES('$user','$pass_word','$desti');";
    $result=$con->query($db_que);


    if(!$con->error)
    {
        if(! move_uploaded_file($_FILES['file_image']['tmp_name'],$desti))
        {
            echo 'problem to upload file to destination folder';
            exit;
        }
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